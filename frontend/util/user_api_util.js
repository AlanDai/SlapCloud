export const fetchUser = (userId) => 
  $.ajax({
    url: `/api/users/${userId}`,
    action: "GET"
  })

export const updateUserImage = (userId, updatedFields) =>
  $.ajax({
    url: `/api/users/${userId}`,
    action: "PATCH",
    data: updatedFields,
    contentType: false,
    processData: false,
  })

  export const updateUserInfo = (userId, updatedFields) =>
  $.ajax({
    url: `/api/users/${userId}`,
    action: "PATCH",
    data: updatedFields,
  })