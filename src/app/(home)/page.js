import Blogs from "@/components/blogs/Blogs";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto py-16">
        <h3 className="text-2xl border-b-2 py-2 mx-4 mb-4">Popular Blogs</h3>
        <Blogs />
      </div>
    </div>
  );
}
