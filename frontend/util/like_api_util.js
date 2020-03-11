export const createLike = like => (
  $.ajax({
    url: `api/likes/`,
    method: 'POST',
    data: { like }
  })
);

export const deleteLike = like => (
  $.ajax({
    url: `api/likes/${like.id}`,
    method: 'DELETE'
  })
);

export const fetchAllLikesForUser = user => (
  $.ajax({
    url: `api/likes/${user.id}`
  })
);