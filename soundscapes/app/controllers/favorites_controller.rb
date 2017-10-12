class FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new()
    @favorite.user_id = current_user.id
    @favorite.soundscape_id = params[:soundscape_id] #figger out later
    @favorite.save!
  end

  def destroy
  end

end
