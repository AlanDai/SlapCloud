Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    post '/user/email', to: 'users#checkEmail'
    resource :session, only: [:create, :destroy]
    
    resources :albums, only: [:index, :create, :create]
    resources :slaps, only: [:index, :show, :create]
    
    resources :comments, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end
