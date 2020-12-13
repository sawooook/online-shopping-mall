class Product < ApplicationRecord
  has_many :product_options
  belongs_to :user

  enum status: {
      selling: 0,
      delete: 10,
  }

  enum category1: {
      pants: 0,
      top: 10,
      outer: 20,
      one_piece: 30,
      skirt: 40
  }

  enum category2: {
      slacks: 0,
      row_pants: 1,
      training_pants: 2,
      blue_pants: 3,

      shirt: 50,
      t_shirt: 51,
      hood: 52
  }

end