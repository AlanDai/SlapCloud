class Api::LikesController < ApplicationController
  def create
    @like = Like.create(like_params)
    render json: @like
  end

  def slapLikes
    @likes = Slap.find(params[:slapId]).likes
    render :slap_likes
  end

  def destroy
    @like = Like.find(params[:id])
    if @like
      @like.destroy
      render json: @like
    else
      render json: { message: 'Like not found', status: 400 }
    end
  end

  private
  
  def like_params
    params.require(:like).permit(:liker_id, :slap_id)
  end

end
