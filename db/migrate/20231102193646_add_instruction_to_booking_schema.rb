class AddInstructionToBookingSchema < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :instruction, :string
  end
end
