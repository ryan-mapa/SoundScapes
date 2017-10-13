class Api::SoundspotsController < ApplicationController
  def create
    @soundpot = Soundspot.new(soundspot_params)
    @soundpot.user_id = current_user.id
    @soundpot.soundscape_id = params[:soundscape_id]
  end

  def show
    @soundpot = Soundspot.find_by_id(params[:soundspot_id])
  end

  def soundspot_params
    params.require(:soundspot).permit(
      :name,
      :description,
      :music,
      :image_url,
      :longitude,
      :latitude
    )
  end
end
