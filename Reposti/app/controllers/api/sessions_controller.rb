class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    
    if @user
      login(@user)
      render 'api/users/show'
    else
      flash[:errors] = "Invalid Username or Password."
      render json: ['Invalid Username or Password.'], status: 401
    end
  end

  def destroy
    @user = current_user
    if logged_in?
      logout!
      render 'api/users/show'
    else
      render json: ['No one signed in'], status: 404
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end