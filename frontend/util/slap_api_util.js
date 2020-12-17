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