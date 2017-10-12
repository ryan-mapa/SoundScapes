class UsersController < ApplicationController
  def show
    @user = params[:user_id]
  end

  def index
    #create search function
  end
end
