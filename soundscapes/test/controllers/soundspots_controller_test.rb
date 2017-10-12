require 'test_helper'

class SoundspotsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get soundspots_create_url
    assert_response :success
  end

  test "should get show" do
    get soundspots_show_url
    assert_response :success
  end

end
