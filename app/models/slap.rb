class Slap < ApplicationRecord
  validates :name, :uploader_id, presence: true
  validates :name, uniqueness: { scope: :uploader_id }
  validates :album_id, uniqueness: { scope: :album_order, allow_nil: true } 

  has_one_attached :audio_file
  has_one_attached :image_file

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  belongs_to :album,
    optional: true,
    primary_key: :id,
    foreign_key: :album_id

  has_many :comments,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :slap_id,
    class_name: :Comment

  has_many :likes,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :slap_id,
    class_name: :Like

end
