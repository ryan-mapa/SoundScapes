# == Schema Information
#
# Table name: soundscapes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Soundscape < ApplicationRecord

  belongs_to :user
  has_many :soundspots
  has_many :favorites

end
