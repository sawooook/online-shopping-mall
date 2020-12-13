class CreateProduct < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :status
      t.timestamps
      t.references :user, {null: false, foreign_key: true}
    end
  end
end
