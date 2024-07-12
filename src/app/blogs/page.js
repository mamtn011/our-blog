import Banner from "@/components/shared/Banner";
import Blogs from "@/components/blogs/Blogs";

const BlogPage = () => {
  return (
    <div>
      <Banner pageName="Blogs" />
      {/* all blogs container  */}
      <div className="max-w-7xl mx-auto">
        <Blogs />
      </div>
    </div>
  );
};

export default BlogPage;
