export const destroyPost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'DELETE'
  })
);