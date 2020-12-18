json.extract! slap, :id, :name, :description

json.audio url_for(slap.audio_file) 

if slap.image_file
  json.image url_for(slap.image_file)
end

json.uploader slap.uploader

if slap.album
  json.album slap.album
end