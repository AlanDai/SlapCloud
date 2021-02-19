export const search = (params) => (
  $.ajax({
    url: `/api/search/${params}`,
    method: 'GET',
  })
)