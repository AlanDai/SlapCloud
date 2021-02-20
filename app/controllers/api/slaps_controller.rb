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

  def update
    @slap = Slap.find(params[:id])
    if @slap
      if @slap.update(slap_params)
        @comments = slaps.comments
        @likes = @slap.likes
        render :show
      else
        render json: @slap.errors.full_messages, status: 422
      end
    else
      render json: { message: "Slap not found", status: 400 }
    end
  end

  def destroy
    @slap = Slap.find(params[:id])
    if @slap
      @comments = @slap.comments
      @comments.each do |comment|
        if !comment.destroy
          render json: comment.errors.full_messages, status, 422
        end
      end
      @comments = []

      @likes = @slap.likes
      @likes.each do |like|
        if like.destroy
          render json: like.errors.full_messages, status: 422
        end
      end
      @likes = []

      @slap.destroy
      render :show
    else
      render json: { message: "Slap not found", status: 400 }
    end
  end

  private

  def slap_params
    params.require(:slap).permit(:audio_file, :image_file, :name, :description, :uploader_id, :album_id, :album_order)
  end

end
