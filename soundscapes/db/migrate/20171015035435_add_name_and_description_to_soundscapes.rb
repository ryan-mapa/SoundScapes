class AddNameAndDescriptionToSoundscapes < ActiveRecord::Migration[5.1]
  def change
    add_column :soundscapes, :name, :string
    add_column :soundscapes, :description, :string
  end
end
