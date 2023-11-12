# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_07_190530) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.text "date"
    t.text "time"
    t.bigint "quantity"
    t.text "name"
    t.text "phone"
    t.text "email"
    t.boolean "confirmed"
    t.timestamptz "created_at"
    t.timestamptz "updated_at"
    t.text "note"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.text "jti"
    t.timestamptz "exp"
    t.index ["jti"], name: "idx_17731_index_jwt_denylist_on_jti"
  end

  create_table "users", force: :cascade do |t|
    t.text "email", default: ""
    t.text "encrypted_password", default: ""
    t.text "reset_password_token"
    t.timestamptz "reset_password_sent_at"
    t.timestamptz "remember_created_at"
    t.timestamptz "created_at"
    t.timestamptz "updated_at"
    t.boolean "admin", default: false
    t.index ["email"], name: "idx_17721_index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "idx_17721_index_users_on_reset_password_token", unique: true
  end

end
