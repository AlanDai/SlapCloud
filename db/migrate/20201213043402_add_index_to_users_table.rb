class AddIndexToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_index :slaps, :uploader_id
    add_index :slaps, :album_id
  end
end
