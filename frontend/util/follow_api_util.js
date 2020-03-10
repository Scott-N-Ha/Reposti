export const createFollow = follow => (
  $.ajax({
    url: `api/follows/`,
    method: 'POST',
    data: { follow }
  })
);

export const deleteFollow = follow => (
  $.ajax({
    url: `api/follows/${follow.id}`,
    method: 'DELETE'
  })
);

export const fetchFollows = user => (
  $.ajax({
    url: `api/follows/${user.id}`,
  })
);