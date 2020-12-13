class AddProductCategory < ActiveRecord::Migration[6.0]
  def change
    add_column "products", "category1", :integer
    add_column "products", "category2", :integer
  end
end
