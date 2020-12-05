class MyRedis
  def self.set(key, value)
    redis_connect.set(key, value)
  end

  def self.get(key)
    redis_connect.get key
  end

  def self.delete(key)
    redis_connect.del key
  end

  def self.redis_connect
    url = "redis://localhost:6379/0"
    redis ||= Redis.new(url: url)
    redis
  end
end