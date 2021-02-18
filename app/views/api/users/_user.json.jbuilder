
json.extract! user, :id, :email, :username

if user.location
  json.location user.location
end

if user.profile_image.attached?
  json.profile_image url_for(user.profile_image)
end 

if user.cover_image.attached?
  json.cover_image url_form(user.cover_image)
end