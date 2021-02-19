class Api::SlapsController < ApplicationController
  
  def index
    @slaps = Slap.all
    render :index
  end

  def userIndex
    @slaps = Slap.find_by(uploader_id: params[:userId])
    return :index
  end

  def show
    @slap = Slap.find(params[:id])
    if @slap
      @comments = @slap.comments
      @likes = @slap.likes
      render :show
    else
      render json: { message: "User not found", status: 400 }
    end
  end

  def create
    @slap = Slap.create!(slap_params)
    if @slap
      render :show
    else
      render json: @slap.errors.full_messages, status: 422
    end
  end

  private

  def slap_params
    params.require(:slap).permit(:audio_file, :image_file, :name, :description, :uploader_id, :album_id, :album_order)
  end

end
