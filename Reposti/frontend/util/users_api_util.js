export const fetchSingleUser = username => (
  $.ajax({
    url: `api/users/${username}`
  })
);