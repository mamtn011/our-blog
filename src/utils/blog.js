export const filterBlogByCategory = (blogs, category) => {
  const filteredBlogs = blogs.filter(
    (blog) => !category || blog.category === category
  );
  return filteredBlogs;
};
export const filterBlogByPageSize = (blogs, pageNumber, pageSize) => {
  const filteredBlogs = blogs.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
  return filteredBlogs;
};
