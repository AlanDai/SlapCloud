json.extract! @comment, :id, :commenter_id, :slap_id, :body, :created_at, :updated_at
json.email @comment.commenter.email