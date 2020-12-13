class JsonWebToken

  def self.encode(user)
    token = JWT.encode({user_id: user.id, exp: 1.days.from_now.to_i}, ENV["SECRET_KEY_BASE"])
    token
  end

  def self.decode(token)
    begin
      token = JWT.decode(token, ENV["SECRET_KEY_BASE"])[0]
      HashWithIndifferentAccess.new(token)
    rescue JWT::ExpiredSignature => e
      return
    end
  end
end