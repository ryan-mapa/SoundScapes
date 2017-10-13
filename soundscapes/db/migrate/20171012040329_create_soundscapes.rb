class CreateSoundscapes < ActiveRecord::Migration[5.1]
  def change
    create_table :soundscapes do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
