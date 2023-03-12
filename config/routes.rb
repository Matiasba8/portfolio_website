Rails.application.routes.draw do
  root 'home#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'change_modal_data', to: 'home#change_modal_data'
end
