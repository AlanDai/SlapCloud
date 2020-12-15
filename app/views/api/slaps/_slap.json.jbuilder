json.slap do
  json.extract! slap :id, :name, :description, :uploader_id
                   # :album_id, :album_order
  # json.imageUrl slap.picture
  json.audioUrl slap.audio
end