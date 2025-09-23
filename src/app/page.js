import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import BlogList from "@/components/BlogList";
import Newsletter from "@/components/Newsletter";
import TrendingTopics from "@/components/TrendingTopics";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <TrendingTopics />
      </section>

      <section>
        <BlogList />
      </section>

      <section>
        <Newsletter />
      </section>
    </main>
  );
}
