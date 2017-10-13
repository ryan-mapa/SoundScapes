# == Schema Information
#
# Table name: favorites
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  soundscape_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user_id, :soundscape_id, null: false

  belongs_to :user
  belongs_to :soundscape

end
