export const login = (user) =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });

export const signup = (user) =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });

export const logout = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE",
  });

export const checkEmail = (email) =>
  $.ajax({
    url: "/api/user/email",
    method: "POST",
    data: { email: email },
  });
