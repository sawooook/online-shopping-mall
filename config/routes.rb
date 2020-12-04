Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :main

  namespace :api do
    resources :users
    resources :users_description
  end

  namespace :web do
    resources :users do
      collection do
        get 'login'
      end
      member do
        post 'sign_up_check'
      end
    end
  end
end
