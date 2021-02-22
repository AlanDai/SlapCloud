export const fetchSlaps = () => (
  $.ajax({
    url: "/api/slaps",
    method: "GET",
  })
)

export const fetchSlap = slapId => (
  $.ajax({
    url: `/api/slaps/${slapId}`,
    method: "GET",
  })
)

export const updateSlapImage = (slapId, updatedFields) => (
  $.ajax({
    url: `/api/slaps/${slapId}`,
    method: "PATCH",
    data: updatedFields,
    contentType: false,
    processData: false,
  })
)

export const deleteSlap = slapId => (
  $.ajax({
    url: `/api/slaps/${slapId}`,
    method: "DELETE",
  })
)