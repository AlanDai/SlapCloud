class Follow < ApplicationRecord
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: :User

  belongs_to :followed,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User
end