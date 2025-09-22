import clientPromise from "./mongodb";
import bcrypt from "bcryptjs";

export async function createUser({ name, email, password }) {
  try {
    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");
    const users = db.collection("users");

    // Check if user exists
    const existing = await users.findOne({ email });
    if (existing) throw new Error("User already exists");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({ name, email, password: hashedPassword });

    return { message: "User created successfully" };
  } catch (err) {
    console.error("CreateUser error:", err);
    throw err;
  }
}
