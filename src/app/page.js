import BlogCard from "@/components/BlogCard";
import Categories from "@/components/Categories";

export default function Home() {
  const blogs = [
    {
      id: "1", // must be string
      title: "Top 5 Street Foods in Dhaka",
      category: "Food",
      excerpt: "Discover the tastiest street food spots in Dhaka you must try...",
    },
    {
      id: "2",
      title: "Best Tourist Spots in Sylhet",
      category: "Travel",
      excerpt: "Sylhet is full of breathtaking tea gardens and waterfalls...",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Blogs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} category={blog.category} excerpt={blog.excerpt} />
        ))}
      </div>
      <div>
        <Categories />
      </div>
    </section>
  );
}
