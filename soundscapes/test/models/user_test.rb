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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
