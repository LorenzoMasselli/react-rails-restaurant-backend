class PrivateController < ApplicationController
  before_action :authenticate_user!
  def test
    render json: {
      message: "You are seeing this because you have successfully logged in." 
    }
  end
end
