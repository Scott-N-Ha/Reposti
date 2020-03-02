class Api::UsersController < ApplicationController
  def show
    if user_username
      @user = User.includes(:posts).find_by(username: user_username)
      render :show
    else
      flash.now[:errors] = ['Cannot find this user']
      render json: ['Cannot find this user'], status: :not_found
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def user_username
    params[:id]
  end
end
