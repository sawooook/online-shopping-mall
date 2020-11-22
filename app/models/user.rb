class User < ApplicationRecord
  has_many :user_descriptions

  enum status: {
      customer: 0,
      seller: 10,
      unregister: 20
  }
end
