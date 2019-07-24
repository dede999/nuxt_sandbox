class MessageController < ApplicationController
  def chuck
    render json: {
      fact: Faker::ChuckNorris.fact
    }
  end
end
