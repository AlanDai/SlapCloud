class Api::AlbumsController < ApplicationController
  def index
  end

  def show
  end

  def create
    @album = Album.create!(album_params)
    render json: @album.id
  end

  private

  def album_params
    params.require(:album).permit(:name, :uploader_id)
  end
end
