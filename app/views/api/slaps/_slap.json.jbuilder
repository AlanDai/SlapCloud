# json.set! :id do
json.extract! slap, :id, :name, :description, :created_at

json.audio url_for(slap.audio_file) 

if slap.image_file.attached?
  json.image url_for(slap.image_file)
end

json.uploader slap.uploader

if slap.uploader.profile_image.attached?
  json.profile_image url_for(slap.uploader.profile_image)
end

if slap.album
  json.album slap.album
end