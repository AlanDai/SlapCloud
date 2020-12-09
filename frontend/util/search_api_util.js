

const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
})

export const fetchUserByEmail = email => (
  $.ajax({
    url: '',
    data: { user: { email: email } }
  })
)


export const fetchUserById = id => (

)