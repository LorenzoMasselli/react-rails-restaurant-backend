class RenameInstructionsToInstruction < ActiveRecord::Migration[7.0]
  def change
    rename_column :bookings, :instructions, :instruction
  end
end
