# == Schema Information
#
# Table name: soundspots
#
#  id             :integer          not null, primary key
#  longitude      :float
#  latitude       :float
#  music          :string
#  user_id        :integer
#  image_url      :string
#  description    :text
#  name           :string
#  soundscape_id  :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  track_position :integer
#

class Soundspot < ApplicationRecord

  belongs_to :user
  belongs_to :soundscape
  
end
