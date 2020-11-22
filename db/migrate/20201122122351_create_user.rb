class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.integer :status
      t.string :name
      t.string :nickname
      t.timestamps
    end
  end
end
