class Album < ApplicationRecord
  validates :name, :uploader_id, presence: true

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :slaps,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Slap
    
end
