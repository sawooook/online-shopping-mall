class CreateUserDescription < ActiveRecord::Migration[6.0]
  def change
    create_table :user_descriptions do |t|
      t.string :address
      t.integer :gender
      t.integer :phone
      t.string :grade
      t.timestamps
      t.references :user, {null: false, foreign_key: true}
    end
  end
end
