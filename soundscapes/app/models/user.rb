# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  provider      :string
#  uid           :string
#  email         :string
#  name          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  token         :string
#  refresh_token :string
#

class User < ApplicationRecord

  has_many :soundspots
  has_many :favorites

  def self.find_or_create_from_auth_hash(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.token = auth.credentials.token
      user.refresh_token = auth.credentials.refresh_token
      user.save!
    end
  end

end
