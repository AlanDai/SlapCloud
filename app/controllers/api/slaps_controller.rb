class Api::SlapsController < ApplicationController
  
  def index
  end

  def show
  end

  def create
    @slap = Slap.create!(slap_params)
    render :show
  end

  private

  def slap_params
    params.require(:slap).permit(:audio_file, :image_file, :name, :description, :uploader_id, :album_id, :album_order)
  end

end
