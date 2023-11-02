class RemoveInstructionFromBookings < ActiveRecord::Migration[7.0]
  def change
    remove_column :bookings, :instruction
  end
end
