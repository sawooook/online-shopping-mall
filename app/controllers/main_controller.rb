class MainController < ApplicationController

  def index
    @user = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :bad_request
    end
  end

  private
  def user_params
    params.permit(:name, :nickname)
  end
end
