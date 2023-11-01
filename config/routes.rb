Rails.application.routes.draw do
  # APi routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      resources :bookings
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
