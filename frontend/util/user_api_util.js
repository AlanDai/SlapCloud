export const fetchUser = (userId) => 
  $.ajax({
    url: `/api/users/${userId}`,
    method: "GET"
  })

export const updateUserImage = (userId, updatedFields) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "PATCH",
    data: updatedFields,
    contentType: false,
    processData: false,
  })

  export const updateUserInfo = (userId, updatedFields) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "PATCH",
    data: { user: updatedFields },
  })