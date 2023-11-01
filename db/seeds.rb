# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Booking.destroy_all 
times = ["12:30", "13:00", "13:30", "18:30", "19:00", "19:30"]

20.times do 
    Booking.create(
        name: Faker::Name.name,
        quantity: rand(1..6),
        phone: Faker::PhoneNumber.cell_phone_in_e164,
        email: Faker::Internet.email,
        date: Faker::Date.between(from: '2024-01-01', to: '2024-12-31'),
        time: times.sample,
        confirmed: false
    )

end