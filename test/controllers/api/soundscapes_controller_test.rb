require 'test_helper'

class Api::SoundscapesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_soundscapes_create_url
    assert_response :success
  end

  test "should get show" do
    get api_soundscapes_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_soundscapes_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_soundscapes_index_url
    assert_response :success
  end

end
