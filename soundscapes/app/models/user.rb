# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  provider   :string
#  uid        :string
#  email      :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

  class User < ApplicationRecord
  	def self.find_or_create_from_auth_hash(auth)
  		where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
  			user.provider = auth.provider
  			user.uid = auth.uid
  			user.name = auth.info.first_name
  			user.email = auth.info.email
  			user.save!
  		end
  	end
  end


end
