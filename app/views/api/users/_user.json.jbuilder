json.extract! user, :id, :email, :username

if user.location
  json.location user.location
end

if user.profile_image
  json.profile_image url_for(user.profile_iamge)
end 

if user.cover_image
  json.cover_image url_form(user.cover_image)
end