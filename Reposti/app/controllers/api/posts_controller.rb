class Api::PostsController < ApplicationController
  # before_action :redirect_if_not_logged_in

  def index
    render json: ['No current user found'] unless logged_in?
    @posts = Post.joins(:post_type).joins(:author).includes(:reblogs).where('author_id = ?', current_user.id)
    render :index
  end

  def show
    
  end

  def create
    
  end
end
