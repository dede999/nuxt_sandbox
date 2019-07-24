require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get chuck" do
    get message_chuck_url
    assert_response :success
  end

end
