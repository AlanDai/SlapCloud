json.slap do
  json.extract! slap :id, :name, :description,
                   # :album_id, :album_order
  # json.imageUrl slap.picture
  json.audio slap.audio_file
  json.image slap.image_file
  json.uploader slap.uploader
  json.album slap.album
end