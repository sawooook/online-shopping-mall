class User < ApplicationRecord
  has_many :user_descriptions

  # 유저가 생성될시 register로 유저상태 변경
  after_create do
    self.update(status: User.statuses[:register])
  end

  enum status: {
      # 최초 회원가입시 유저 상태
      register: 0,
      # 추가 정보까지 입력시 유저 상태
      customer: 10,
      # 판매자로 등록시 상태
      seller: 20,
      # 회원탈퇴시 유저 상태
      unregister: 30
  }

end
