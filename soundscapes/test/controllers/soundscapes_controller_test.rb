require 'test_helper'

class SoundscapesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get soundscapes_create_url
    assert_response :success
  end

  test "should get show" do
    get soundscapes_show_url
    assert_response :success
  end

  test "should get destroy" do
    get soundscapes_destroy_url
    assert_response :success
  end

  test "should get index" do
    get soundscapes_index_url
    assert_response :success
  end

end
