class SessionsController < ApplicationController

  def create
    @user = User.find_or_create_from_auth_hash(request.env["omniauth.auth"])
    if @user
      session[:user_id] = @user.id
      redirect_to :me
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  def redirect
    # render json: {message: "success"}
    redirect_to 'soundscapes://yo'
  end

end
