import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

// ✅ Get single blog
export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ Delete blog
export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const result = await db.collection("blogs").deleteOne({
      _id: new ObjectId(params.id),
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

// ✅ Update blog
export async function PATCH(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();
    const { title, content, category, image, tags } = body;

    if (!title || !content || !category) {
      return new Response(JSON.stringify({ error: "All required fields missing" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(params.id), "author.id": session.user.id },
      {
        $set: {
          title,
          content,
          category,
          image: image || "",
          tags: tags || [],
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Blog not found or not authorized" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
