class Api::UsersController < Api::ApplicationController
  skip_before_action :verify_authenticity_token


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

    if params[:email].present?
      if User.find_by_email params[:email]
        # 동일한 이메일이 존재할 경우
        render json: ResponseWrapper.wrap(nil), status: :conflict
      else
        # 이메일이 존재하지 않을 경우
        render json: ResponseWrapper.wrap(nil), status: :ok
      end
    else
      if User.find_by_nickname params[:username]
        # 동일한 이메일이 존재할 경우
        render json: ResponseWrapper.wrap(nil), status: :not_acceptable
      else
        # 이메일이 존재하지 않을 경우
        render json: ResponseWrapper.wrap(nil), status: :accepted
      end
    end
  end

  private

  def user_params
    params.permit(:email, :password, :name, :nickname)
  end
end