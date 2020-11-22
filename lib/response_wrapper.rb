class ResponseWrapper
  CODE_SUCCESS = 100
  MESSAGE_SUCCESS = "OK"

  def self.wrap(data = {}, errors = {})
    if data
      { data: data, errors: errors }
    else
      { errors: errors }
    end
  end
end
