class AddPositionSoundspots < ActiveRecord::Migration[5.1]
  def change
    add_column :soundspots, :track_position, :integer
  end
end
