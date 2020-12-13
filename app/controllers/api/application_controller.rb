class Api::ApplicationController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :http_token

  def authenticate_user
    if http_token.present?
      puts "============current_user1"

      # http_token이 존재하면 decode를 함
      hash = JsonWebToken.decode http_token
      if hash.present?
        @current_user = User.find_by_id hash["user_id"]
        puts @current_user
      end
      return
    else
      # 존재하지 않을 경우 그냥 비로그인 상태
    end

    # 만약 react로 부터 토큰 값을 못받았으면 비로그인 상태로 체크
    #
    # 만약 토큰 값이 들어 있을경우에는 로그인 상태로 체크 그리고 로그인을 했다고 표시할것
    #
    # 그리고 여기서 토큰 decode를 해서 해당 토큰이 만료된건지 체크할것
    #
  end


  # 첫 로그인시 어떻게 할건데 ?
  # 만약 첫로그인시 에는 JsonWebToken.encode를 호출해야하는데
  # 그러면 모든 화면에서 상위 컨트롤러에서 체크를 하자
  # 예를 들어 token값이 있는지 없는지 없을 경우 에는 로그인이 안된 상태로 체크하자

  def http_token
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      puts request.headers['Authorization']
      puts request.headers['Authorization'].split(' ').last
      puts "=========================1 http_token"
      token
    else
      puts "=========================2 http_token"

      nil
    end
  end
end
