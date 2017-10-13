class Api::SoundscapesController < ApplicationController
  def create
    @soundscape = Soundscape.new
    @soundscape.user_id = current_user.id
    @soundscape.save
  end

  def show
    @soundscape = Soundscape.find_by_id(params[:soundscape_id])
  end

  def destroy
  end

  def index
    @soundscapes = Soundscape.all
  end
end
