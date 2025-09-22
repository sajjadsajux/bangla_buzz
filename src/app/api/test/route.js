import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("test"); // or your database name
    const collections = await db.listCollections().toArray();

    return new Response(JSON.stringify({ ok: true, collections }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500 });
  }
}
