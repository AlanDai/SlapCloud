@likes.each do |like|
  json.set! like.liker_id do
    json.extract! like, :id, :liker_id, :created_at
  end
end