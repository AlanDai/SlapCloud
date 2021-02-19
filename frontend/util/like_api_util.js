export const createLike = (like) => (
  $.ajax({
    url: '/api/likes',
    method: "POST",
    data: { like },
  })
)

export const showSlapLikes = (slapId) => (
  $.ajax({
    url: `api/likes/slap/${slapId}`,
    method: "GET",
  })
)

export const deleteLike = (likeId) => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: "DELETE"
  })
)