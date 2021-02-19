Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    post '/user/email', to: 'users#checkEmail'
    resource :session, only: [:create, :destroy]
    
    resources :albums, only: [:index, :create]
    resources :slaps, only: [:index, :show, :create]
    get '/slaps/user/:userId', to: 'slaps#userIndex'

    resources :comments, only: [:create, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    get '/likes/slap/:slapId', to: 'likes#slapLikes'
  end

  root "static_pages#root"
end
