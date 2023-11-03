# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Booking.destroy_all 
times = ["12:30", "13:00", "13:30", "18:30", "19:00", "19:30"]
dates = ["2024/01/01", "2024/02/02", "2024/03/03", "2024/03/04"]

20.times do 
    Booking.create(
        name: Faker::Name.name,
        quantity: rand(1..6),
        phone: Faker::PhoneNumber.cell_phone_in_e164,
        email: Faker::Internet.email,
        date: dates.sample,
        time: times.sample,
        confirmed: false,
        note: "We have an instruction"
    )

end