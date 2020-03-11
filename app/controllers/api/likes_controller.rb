class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      flash.now[:errors] = @like.errors.full_messages
      render json: @like.errors.full_messages, status: 418
    end
  end

  def user_show
    @likes = Like.includes(:post, :post_author).where(liker_id: params[:user_id])

    if @likes
      render :user_show
    else
      render json: @likes.errors.full_messages, status: :not_found
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    
    if @like
      @like.destroy
      render :show
    else
      render json: ['Cannot find like'], status: :not_found
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id, :liker_id)
  end
end
