import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();
    const { title, content, category } = body;

    if (!title || !content || !category) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const result = await db.collection("blogs").insertOne({
      title,
      content,
      category,
      author: { id: session.user.id, name: session.user.name, email: session.user.email },
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Blog created", id: result.insertedId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
