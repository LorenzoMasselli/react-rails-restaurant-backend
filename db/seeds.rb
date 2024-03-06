# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin-rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Booking.destroy_all 
User.destroy_all
value = [true, false]
instruction = ["Birthday party", "Dinner party", "Wedding for me and my husband", "kids bday dinner"]
times = ["12:30", "13:00", "13:30", "14:00", "14:30","15:00", "15:30", "16:00", "16:30", "17:00", "19:00", "19:30", "20:00", "20:30"]
dates = ["2024-03-01", "2024-03-02", "2024-03-03", "2024-03-04", "2024-03-05", "2024-03-06", "2024-03-07", "2024-03-08", "2024-03-09", "2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13", "2024-03-14", "2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18", "2024-03-19", "2024-03-20", "2024-03-21", "2024-03-22", "2024-03-23", "2024-03-24", "2024-03-25", "2024-03-26", "2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31", "2024-04-01", "2024-04-02", "2024-04-03", "2024-04-04", "2024-04-05", "2024-04-06", "2024-04-07", "2024-04-08", "2024-04-09", "2024-04-10", "2024-04-11", "2024-04-12", "2024-04-13", "2024-04-14", "2024-04-15", "2024-04-16", "2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21", "2024-04-22", "2024-04-23", "2024-04-24", "2024-04-25", "2024-04-26", "2024-04-27", "2024-04-28", "2024-04-29", "2024-04-30"]
names = [
  "John Smith",
  "Emily Johnson",
  "Michael Davis",
  "Olivia Brown",
  "Daniel Wilson",
  "Sophia Taylor",
  "Christopher Miller",
  "Ava Martinez",
  "Matthew Anderson",
  "Emma Moore",
  "Ethan Jones",
  "Abigail White",
  "Andrew Taylor",
  "Chloe Davis",
  "William Jackson",
  "Grace Anderson",
  "Ryan Harris",
  "Madison Clark",
  "David Lee",
  "Lily Hall"
]

numbers = [
  "+2311234567",
  "+2322345678",
  "+2333456789",
  "+2344567890",
  "+2355678901",
  "+2366789012",
  "+2377890123",
  "+2388901234",
  "+2399012345",
  "+2310123456",
  "+442112345678",
  "+442223456789",
  "+442334567890",
  "+442445678901",
  "+442556789012",
  "+442667890123",
  "+442778901234",
  "+442889012345",
  "+442999012345",
  "+443010123456"
]

emails = [
  "john.doe@example.com",
  "jane_smith@gmail.com",
  "alexander.jones@hotmail.com",
  "emily_white@yahoo.com",
  "samuel_taylor@outlook.com",
  "olivia_brown@example.org",
  "william.wilson@gmail.com",
  "grace.miller@hotmail.com",
  "ethan_johnson@yahoo.com",
  "emma.williams@example.org",
  "liam_thomas@gmail.com",
  "ava_davis@outlook.com",
  "noah_anderson@example.com",
  "sophia_jackson@hotmail.com",
  "benjamin_martin@yahoo.com",
  "mia_miller@example.org",
  "jacob_smith@gmail.com",
  "olivia_taylor@outlook.com",
  "emma_jones@yahoo.com",
  "william_white@example.com"
]


1000.times do 
    Booking.create(
        name: names.sample,
        quantity: rand(1..9),
        phone: numbers.sample,
        email: emails.sample,
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