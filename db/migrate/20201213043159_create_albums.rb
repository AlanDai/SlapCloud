class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :albums, :name
    add_index :albums, :uploader_id
  end
end
