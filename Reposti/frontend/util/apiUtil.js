export const fetchAllPosts = () => {
  return $.ajax({
    url: 'api/posts'
  });
};