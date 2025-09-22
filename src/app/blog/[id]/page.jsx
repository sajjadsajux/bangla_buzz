export default function BlogDetails({ params }) {
  const { id } = params; // ✅ Next.js App Router provides params here

  // Mock blog data
  const blogs = [
    {
      id: "1", // string not number
      title: "Top 5 Street Foods in Dhaka",
      category: "Food",
      content: "Dhaka is famous for its delicious street food...",
    },
    {
      id: "2",
      title: "Best Tourist Spots in Sylhet",
      category: "Travel",
      content: "Sylhet offers tea gardens, Jaflong, and Ratargul swamp forest...",
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1 className="text-center mt-10">Blog not found</h1>;
  }

  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <span className="text-sm text-blue-600 uppercase">{blog.category}</span>
      <p className="mt-6 text-gray-700 leading-7">{blog.content}</p>
    </article>
  );
}
