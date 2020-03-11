class Api::UsersController < ApplicationController
  def show
    if user_username
      @user = User
                .includes(:posts, :likes_through_posts, :followers, :leaders, :leaders_link, :followers_link, :followed_posts, :likes, :liked_posts)
                .find_by(username: user_username)
                
      render :show
    else
      flash.now[:errors] = ['Cannot find this user']
      render json: ['Cannot find this user'], status: :not_found
    end
  end

  # def liked_show
  #   @user = User
  #             .includes(:posts, :followers, :leaders, :leaders_link, :followers_link, :followed_posts, :likes, :liked_posts)
  #             .where(username: params[:username])

  #   if @user
  #     render json: @user
  #   else
  #     render json: @user.errors.full_messages, status: 418
  #   end
  # end

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

  def update
    
    @user = User.find_by(username: user_username)

    if @user
      if @user.update(user_params)
        render :show
      else
        flash.now[:errors] = @user.errors.full_messages
        render json: @user.errors.full_messages, status: 418
      end
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: :not_found
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_image)
  end

  def user_username
    params[:id]
  end
end
