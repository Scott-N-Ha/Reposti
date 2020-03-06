export const destroyPost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'DELETE'
  })
);

export const createPost = post => {
  return $.ajax({
    url: `/api/posts/`,
    method: 'POST',
    data: { post }
  });
};

export const updatePost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
);

export const createMediaPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false,
  });
};