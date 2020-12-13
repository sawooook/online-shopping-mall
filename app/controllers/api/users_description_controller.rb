class Api::UsersDescriptionController < Api::ApplicationController
  before_action :authenticate_user , only: :create
  def new
  end

  def create
    if @current_user
      user_description = @current_user.user_descriptions.new(user_description_params)
      if user_description.save
        render json: ResponseWrapper.wrap(@current_user.as_json(include: :user_descriptions).merge(token: "123")), status: :ok
      else
        render json: ResponseWrapper.wrap(nil, @current_user.errors.details), status: :bad_request
      end
    else
      render json: ResponseWrapper.wrap(nil,"no_user"), status: :not_found
    end
  end

  private

  def user_description_params
    params.permit(:address, :gender, :phone)
  end
end