require 'test_helper'

class Api::SoundspotsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_soundspots_create_url
    assert_response :success
  end

  test "should get show" do
    get api_soundspots_show_url
    assert_response :success
  end

end
