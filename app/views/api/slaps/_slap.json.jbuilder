json.extract! slap, :id, :name, :description
json.audio url_for(slap.audio_file)
json.image url_for(slap.image_file)
json.uploader slap.uploader
json.album slap.album