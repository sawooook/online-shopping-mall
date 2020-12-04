class Api::UsersController < Api::ApplicationController

  def new
  end

  def index
    render json: User.all.as_json
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: ResponseWrapper.wrap(user.as_json(only: [:id, :email, :nickname])), status: :ok
    else
      render json: ResponseWrapper.wrap(nil, user.errors.details), status: :bad_request
    end
  end

  def sign_up_check
    puts "=================="
    puts params[:email]
  end

  private

  def user_params
    params.permit(:email, :password, :name, :nickname)
  end
end