class Api::UsersDescriptionController < Api::ApplicationController
  def new
  end

  def create
    user = User.find_by_nickname(params[:nickname])
    if user.present?
      user_description = user.user_descriptions.new(user_description_params)
      if user_description.save
        render json: ResponseWrapper.wrap(user.as_json(include: :user_descriptions)), status: :ok
      else
        render json: ResponseWrapper.wrap(nil, user.errors.details), status: :bad_request
      end
    else
      render json: ResponseWrapper.wrap(nil,"no_user"), status: :not_found
    end
  end

  private
  def user_description_params
    params.permit(:nickname, :address, :phone)
  end
end