class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:author)

    if @posts
      render :index
    else
      flash.now[:errors] = ['No posts found']
      render json: ['No posts found'], status: :not_found
    end
  end

  def show
    @post = Post.includes(:author).find_by(id: params[:id])

    if @post
      render :show
    else
      flash.now[:errors] = ['No post with that id']
      render json: ['No post with that id'], status: :not_found
    end
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def update
    if post_id
      @post = Post.find_by(id: [post_id])
      
    else

    end
  end

  private
  def post_params
    params.require(:post).permit(:post_type_id, :title, :body, :author_id)
  end

  def post_id
    params[:id]
  end
end
