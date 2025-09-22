import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { id } = params;
    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const result = await db.collection("blogs").deleteOne({
      _id: new ObjectId(id), // ✅ Use ObjectId from mongodb
      "author.id": session.user.id,
    });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog not found or not authorized" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { id } = params;
    const body = await req.json();
    const { title, content, category } = body;

    if (!title || !content || !category) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(id), "author.id": session.user.id }, // ✅ Use ObjectId
      { $set: { title, content, category } }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog not found or not authorized" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
