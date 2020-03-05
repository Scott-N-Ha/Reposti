class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      flash.now[:errors] = @follow.errors.full_messages
      render json: @follow.errors.full_messages, status: 418
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    
    if @follow
      @follow.destroy
      render :show
    else
      render json: ['Cannot find follow'], status: :not_found
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:leader_id, :follower_id)
  end
end