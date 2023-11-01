class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :date
      t.datetime :time
      t.integer :quantity
      t.string :name
      t.string :phone
      t.string :email
      t.boolean :confirmed

      t.timestamps
    end
  end
end
