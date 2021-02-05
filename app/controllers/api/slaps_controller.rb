class Api::SlapsController < ApplicationController
  
  def index
    @slaps = Slap.all
    render :index
  end

  def show
    @slap = Slap.find(params[:id])
    render :show
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
