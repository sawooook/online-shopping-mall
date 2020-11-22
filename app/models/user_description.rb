class UserDescription < ApplicationRecord
  belongs_to :user

  enum grade: {
      level_1: 1,
      level_2: 2,
      level_3: 3,
      level_4: 4
  }

  enum gender: {
      boy: 1,
      girl: 2,
      no_gender: 3
  }
end
