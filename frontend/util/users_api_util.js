export const fetchSingleUser = username => (
  $.ajax({
    url: `api/users/${username}`,
  })
);

export const updateSingleUserWithImage = (user, data) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.username}`,
    data: data,
    contentType: false,
    processData: false,
  })
};

export const updateSingleUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.username}`,
    data: { user },
  })
};