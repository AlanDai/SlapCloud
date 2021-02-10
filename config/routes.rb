Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resources :users, only: [:show]
    post '/user/email', to: 'users#checkEmail'
    resource :session, only: [:create, :destroy]
    
    resources :albums, only: [:index, :create]
    resources :slaps, only: [:index, :show, :create]
    
    resources :comments, only: [:create, :show, :update, :destroy]
  end

  root "static_pages#root"
end
