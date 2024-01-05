# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin-rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Booking.destroy_all 
User.destroy_all
value = [true, false]
instruction = ["Birthday party", "Dinner party", "Wedding for me and my husband", "kids bday dinner"]
times = ["12:30", "13:00", "13:30", "14:00", "14:30","15:00", "15:30", "16:00", "16:30", "17:00", "19:00", "19:30", "20:00", "20:30"]
dates = ["2024-01-01", "2024-02-02", "2024-03-03", "2024-03-04", "2023-11-11", "2023-11-12", "2023-11-13", "2023-11-14", "2023-11-15", "2023-11-16", "2023-11-17", "2023-11-18", "2024-01-05", "2024-01-06", "2024-01-07", "2024-01-08", "2024-01-09", "2024-01-10", "2024-01-11", "2024-01-12", "2024-01-13", "2024-01-14", "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-18", "2024-01-19", "2024-01-20", "2024-01-21", "2024-01-22", "2024-01-23", "2024-01-24", "2024-01-25", "2024-01-26", "2024-01-27", "2024-01-28", "2024-01-29", "2024-01-30", "2024-01-31", "2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15", "2024-02-16", "2024-02-17", "2024-02-18", "2024-02-19", "2024-02-20", "2024-02-21", "2024-02-22", "2024-02-23", "2024-02-24", "2024-02-25", "2024-02-26", "2024-02-27", "2024-02-28"]

300.times do 
    Booking.create(
        name: Faker::Name.name,
        quantity: rand(1..6),
        phone: Faker::PhoneNumber.cell_phone_in_e164,
        email: Faker::Internet.email,
        date: dates.sample,
        time: times.sample,
        confirmed: value.sample,
        note: instruction.sample
    )

end

1.times do 
    User.create(
        email: "user1@test.com",
        password: "password",
        admin: true
    )
end
1.times do 
    User.create(
        email: "user2@test.com",
        password: "password",
        admin: false
    )
end
1.times do 
    User.create(
        email: "user3@test.com",
        password: "password",
        admin: true
    )
end