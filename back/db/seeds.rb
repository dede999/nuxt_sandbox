# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Application.delete_all

50.times do
    a = Application.create!(name: Faker::App.name, author: Faker::App.author, 
        version: Faker::App.semantic_version(minor: 0..10))
    p "#{a.name} #{a.version} has been created by #{a.author}"
end