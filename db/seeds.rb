# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(email: "test@naver.com", password: "123", name: "test_name", nickname: "test_nickname")
seller = User.create!(email: "seller@naver.com", password: "123", status: 20, name: "seller", nickname: "seller")
product1 = Product.create!(name: "청바지", status: Product.statuses["selling"], user_id: seller.id)
product1_option1 = ProductOption.create!(color: "red", size: "95", price: 25000, product: product1)
product1_option2 = ProductOption.create!(color: "red", size: "100", price: 25000, product: product1)
product1_option3 = ProductOption.create!(color: "red", size: "105", price: 25000, product: product1)
product1_option4 = ProductOption.create!(color: "black", size: "95", price: 25000, product: product1)
product1_option5 = ProductOption.create!(color: "black", size: "100", price: 25000, product: product1)
product1_option6 = ProductOption.create!(color: "black", size: "105", price: 25000, product: product1)

product2 = Product.create!(name: "셔츠", status: Product.statuses["selling"], user_id: seller.id)
product2_option1 = ProductOption.create!(color: "yellow", size: "95", price: 35000, product: product2)
product2_option2 = ProductOption.create!(color: "yellow", size: "100", price: 35000, product: product2)
product2_option3 = ProductOption.create!(color: "yellow", size: "105", price: 35000, product: product2)
product2_option4 = ProductOption.create!(color: "gray", size: "95", price: 35000, product: product2)
product2_option5 = ProductOption.create!(color: "gray", size: "100", price: 35000, product: product2)
product2_option6 = ProductOption.create!(color: "gray", size: "105", price: 35000, product: product2)