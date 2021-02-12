Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    post '/user/email', to: 'users#checkEmail'
    resources :users, only: [:show, :update]

    resource :session, only: [:create, :destroy]
    
    resources :albums, only: [:index, :create]
    resources :slaps, only: [:index, :show, :create]
    get '/slaps/user/:userId', to: 'slaps#userIndex'

    resources :comments, only: [:create, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  root "static_pages#root"
end
