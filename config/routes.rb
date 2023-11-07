Rails.application.routes.draw do
  devise_for :users, 
    path: '', 
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }


  get 'private/test'
  # APi routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      resources :bookings
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # scope '/admin' do
  #   get '/', to: 'admin/users#index'
  # end
end
