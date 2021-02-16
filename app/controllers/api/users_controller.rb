class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            @slaps = Slap.where(uploader: params[:id])
            render :show
        else
            render json: { message: "User not found", status: 400 }
        end
    end

    def update
        @user = User.find(params[:id])
        if @user
            @user.update!(user_params)
            @slaps = Slap.where(uploader: params[:id])
            render :show
        else
            render json: @user.errors.full_messages, status: 400
        end
    end

    def checkEmail
        emailExists = User.find_by(email: params[:email]) ? true : false
        render json: { emailExists: emailExists }
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :location, :profile_image, :cover_image)
    end
end
