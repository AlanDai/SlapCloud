class Comment < ApplicationRecord
  validates :body, :commenter_id, :slap_id, presence: true
  validates :body, length: 1..200

  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :slap,
    primary_key: :id,
    foreign_key: :slap_id,
    class_name: :Slap
end