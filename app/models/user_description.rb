class UserDescription < ApplicationRecord
  belongs_to :user

  after_create do |description|
    description.update(grade: UserDescription.grades[:level_1])
    description.user.update(status: User.statuses[:customer])
  end

  # 유저들의 물품구매 등급
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
