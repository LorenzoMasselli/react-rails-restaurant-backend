require "test_helper"

class BookingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @booking = bookings(:one)
  end

  test "should get index" do
    get bookings_url, as: :json
    assert_response :success
  end

  test "should display bookings ordered by date" do
    get bookings_url, as: :json
    assert_equal Booking.order(:date), assigns(:bookings)
  end

  test "should create booking" do
    assert_difference("Booking.count") do
      post bookings_url, params: { booking: { confirmed: @booking.confirmed, date: @booking.date, email: @booking.email, name: @booking.name, phone: @booking.phone, quantity: @booking.quantity, time: @booking.time } }, as: :json
    end

    assert_response :created
  end

  test "should show booking" do
    get booking_url(@booking), as: :json
    assert_response :success
  end

  test "should update booking" do
    patch booking_url(@booking), params: { booking: { confirmed: @booking.confirmed, date: @booking.date, email: @booking.email, name: @booking.name, phone: @booking.phone, quantity: @booking.quantity, time: @booking.time } }, as: :json
    assert_response :success
  end

  test "should destroy booking" do
    assert_difference("Booking.count", -1) do
      delete booking_url(@booking), as: :json
    end

    assert_response :no_content
  end
end
