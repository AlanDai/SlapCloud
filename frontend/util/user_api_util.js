export const fetchUser = (userId) => 
  $.ajax({
    url: `/api/users/${userId}`,
    action: "GET"
  })

export const updateUser = (userId, user) =>
  $.ajax({
    url: `/api/users/${userId}`,
    action: "PATCH",
    data: { user }
  })