class CreateSlaps < ActiveRecord::Migration[5.2]
  def change
    create_table :slaps do |t|
      t.string :name, null: false
      t.text :description
      
      t.integer :uploader_id, null: false

      t.integer :album_id
      t.integer :album_order

      t.timestamps
    end
    add_index :slaps, :name
    add_index :slaps, [:name, :uploader_id], unique: true
    add_index :slaps, [:album_id, :album_order], unique: true
  end
end
