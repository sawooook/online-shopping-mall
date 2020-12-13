class Product < ApplicationRecord
  has_many :product_options
  belongs_to :user

  enum status: {
      selling: 0,
      delete: 10,
  }

end