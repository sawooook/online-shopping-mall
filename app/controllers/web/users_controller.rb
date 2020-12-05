class Web::UsersController < Web::ApplicationController
  skip_before_action :verify_authenticity_token

  def new

  end

  def index
    render json: User.all.as_json
  end

  def login
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to web_mains_path
    else
      render json: ResponseWrapper.wrap(nil, user.errors.details), status: :bad_request
    end
  end

  private

  def user_params
    params.permit(:email, :password, :name, :nickname)
  end
end