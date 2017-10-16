class CreateSoundspots < ActiveRecord::Migration[5.1]
  def change
    create_table :soundspots do |t|
      t.float :longitude
      t.float :latitude
      t.string :music
      t.integer :user_id
      t.string :image_url
      t.text :description
      t.string :name
      t.integer :soundscape_id

      t.timestamps
    end
  end
end
