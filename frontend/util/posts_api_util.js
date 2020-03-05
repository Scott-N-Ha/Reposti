export const destroyPost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'DELETE'
  })
);

export const createPost = post => (
  $.ajax({
    url: `/api/posts/`,
    method: 'POST',
    data: { post },
    contentType: false,
    processData: false
  })
);

export const updatePost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
);