Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    get '/user/email', to: 'users#checkEmail'

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
