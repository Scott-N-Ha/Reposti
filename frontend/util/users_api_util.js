export const fetchSingleUser = username => (
  $.ajax({
    url: `api/users/${username}`,
  })
);

export const updateSingleUserWithImage = user => {
  return $.ajax({
    method: 'PATCH',
    user: `/api/users/${user.username}`,
    data: user,
    contentType: false,
    processData: false,
  })
};

export const updateSingleUser = user => {
  return $.ajax({
    method: 'PATCH',
    user: `/api/users/${user.username}`,
    data: { user },
  })
};