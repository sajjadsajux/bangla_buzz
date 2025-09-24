import BlogCard from "@/components/BlogCard";

export default async function CategoryPage({ params }) {
  const { category } = params;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs?category=${category}&page=1&limit=6`, { cache: "no-store" });

  const data = await res.json();
  const blogs = data.blogs || []; // ✅ extract the blogs array

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{category} Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs found for this category.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} id={blog._id} title={blog.title} category={blog.category} excerpt={blog.content.substring(0, 100) + "..."} />
          ))}
        </div>
      )}
    </section>
  );
}
