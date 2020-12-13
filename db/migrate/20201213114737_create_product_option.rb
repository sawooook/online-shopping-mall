class CreateProductOption < ActiveRecord::Migration[6.0]
  def change
    create_table :product_options do |t|
      t.string :color
      t.string :size
      t.integer :status
      t.integer :price
      t.timestamps
      t.references :product, {null: false, foreign_key: true}
    end
  end
end
