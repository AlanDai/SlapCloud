json.users do
  json.array! @users do |user|
    json.id user.id

    if user.username
      json.username user.username
    else
      json.username user.email
    end

    if user.location
      json.location user.location
    end

    if user.profile_image.attached?
      json.profile_image url_for(user.profile_image)
    end
  end
end

json.slaps do
  @slaps.each do |slap|
    json.set! slap.id do
      json.extract! slap, :id, :name, :description, :created_at

      json.audio url_for(slap.audio_file) 

      if slap.image_file.attached?
        json.image url_for(slap.image_file)
      end

      json.uploader slap.uploader

      if slap.album
        json.album slap.album
      end
    end
  end
end