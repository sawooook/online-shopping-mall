class Api::UsersController < Api::ApplicationController

  def new
  end

  def index
    render json: User.all.as_json
  end

  def create
    user = User.new(user_params)
    if user.save
      token = JsonWebToken.encode(user)
      render json: ResponseWrapper.wrap(user.as_json(only: [:id, :email, :nickname]).merge(token: token)), status: :ok
    else
      render json: ResponseWrapper.wrap(nil, user.errors.details), status: :bad_request
    end
  end

  def login
    user = User.find_by_email params[:email]
    if user.present?
      user_success_login = user.authenticate params[:password]
      if user_success_login.present?
        # 로그인 성공 했을 시
        #MyRedis.set("session:#{params[:email]}", Time.zone.now)
        token = JsonWebToken.encode(user)
        render json: ResponseWrapper.wrap(user.as_json.merge(token: token)), status: :ok
      else
        # 비밀번호가 일치하지 않았을 경우
        render json: ResponseWrapper.wrap(nil), status: :not_found
      end
    else
      # 존재하지 않는 이메일
      render json: ResponseWrapper.wrap(nil), status: :conflict
    end
  end

  def logout
  end

  # 회원가입 페이지에서 레일즈에게 이메일과 유저닉네임이 존재하는 체크할때 해당 메서드가 호출된다.
  def sign_up_check
    # 파라미터는 email과 username 두가지가 react로 부터 오며 email과 username으로 응답값이 분기된다.
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
        # 동일한 닉네임이 존재할 경우
        render json: ResponseWrapper.wrap(nil), status: :not_acceptable
      else
        # 닉네임이 존재하지 않을 경우
        render json: ResponseWrapper.wrap(nil), status: :accepted
      end
    end
  end

  private

  def user_params
    params.permit(:email, :password, :name, :nickname)
  end
end