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
    const { title, category, content, image, authorName, tags, status } = body;

    if (!title || !category || !content) {
      return new Response(JSON.stringify({ error: "Title, category and content are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const blog = {
      title,
      category,
      content,
      image: image || "", // ✅ save image
      author: {
        id: session.user.id,
        name: authorName || session.user.name,
        email: session.user.email,
      },
      tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      status: status || "Published",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("blogs").insertOne(blog);

    return new Response(JSON.stringify({ message: "Blog created successfully", blogId: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 6;
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("bangla_buzzDB");

    const blogs = await db.collection("blogs").find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray();

    const total = await db.collection("blogs").countDocuments();

    return new Response(JSON.stringify({ blogs, total, page, limit }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
