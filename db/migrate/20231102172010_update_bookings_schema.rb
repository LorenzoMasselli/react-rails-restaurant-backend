class UpdateBookingsSchema < ActiveRecord::Migration[7.0]
  def change
    change_column :bookings, :date, :text
    change_column :bookings, :time, :text
    add_column :bookings, :instructions, :text
  end
end
