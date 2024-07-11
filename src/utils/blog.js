export const filterBlog = (blogs, pageNumber, pageSize, category) => {
  const filteredBlogs = blogs
    .filter((blog) => !category || blog.category === category)
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return filteredBlogs;
};
