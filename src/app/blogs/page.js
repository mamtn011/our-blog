import Banner from "@/components/shared/Banner";
import Blogs from "@/components/blogs/Blogs";
import { getBlogs } from "@/lib/blog";

const BlogPage = async () => {
  const blogsData = await getBlogs();

  return (
    <div>
      <Banner pageName="Blogs" />
      {/* all blogs container  */}
      <div className="max-w-7xl mx-auto">
        <Blogs blogs={blogsData} />
      </div>
    </div>
  );
};

export default BlogPage;
