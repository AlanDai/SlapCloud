class Like < ApplicationRecord
  validates :liker_id, :slap_id, presence: true
  validates :liker_id, uniqueness: { scope: :slap_id }

  belongs_to :liker,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :liked_slap,
    primary_key: :id,
    foreign_key: :slap_id,
    class_name: :Slap
end