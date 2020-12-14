class Slap < ApplicationRecord
  validates :name, :uploader_id, presence: true
  validates :name, uniqueness: { scope: :uploader_id }
  validates :album_id, uniqueness: { scope: :album_order }

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id

end
