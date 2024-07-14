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

export const findBlogById = (blogs, id) => {
  const blog = blogs.find((blog) => blog.id === +id);
  return blog;
};

export const filterBlogBySearchParam = (blogs, searchParam) => {
  const filteredBlogs = blogs.filter((blog) => {
    const lowerCaseTitle = blog.title.toLowerCase();
    const lowerCaseAuthor = blog.author.toLowerCase();
    const lowerSearchParam = searchParam.toLowerCase();
    return (
      lowerCaseTitle.includes(lowerSearchParam) ||
      lowerCaseAuthor.includes(lowerSearchParam)
    );
  });
  return filteredBlogs;
};
