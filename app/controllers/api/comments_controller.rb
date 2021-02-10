class Api::CommentsController < ApplicationController
  
  def create
    @comment = Comment.create!(comment_params)
    render :show
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render :show
    else
      render json: { message: 'Comment not found', status: 400 }
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment
      @comment.update(comment_params)
      render :show
    else
      render json: { message: 'Comment not found', status: 400 }
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      render json: { message: 'Comment not found', status: 400 }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :slap_id)
  end

end
