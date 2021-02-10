json.partial! "api/slaps/slap", slap: @slap

json.set! :comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :commenter_id, :slap_id, :body, :created_at, :updated_at
      json.email comment.commenter.email
    end
  end
end

json.set! :likes do
  @likes.each do |like|
    json.set! like.liker_id do 
      json.extract! like, :id
    end
  end
end