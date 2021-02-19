class Api::SearchController < ApplicationController

  def searchByParams
    @users = User.where("lower(username) like ?", "%#{params[:searchParams].downcase}%")
    @slaps = Slap.where("lower(name) like ?", "%#{params[:searchParams].downcase}%")
    render :search
  end


end