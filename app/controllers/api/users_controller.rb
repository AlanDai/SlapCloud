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

    def checkEmail
        emailExists = !!User.find_by(email: params[:email])
        render json: { emailExists: emailExists }
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
