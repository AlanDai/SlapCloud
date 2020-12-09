Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    get 'email', to: 'users#email'

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
