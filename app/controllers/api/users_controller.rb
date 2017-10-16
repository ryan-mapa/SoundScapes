class Api::UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:user_id])
  end

  def index
    #index users spotify friends that are in our app
    #create search function
  end

  def search
    @users = User.search(user_params)
  end

  def user_params
    params.require(:user).permit(:query)
  end
end
