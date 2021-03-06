Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resources :follows, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy]
  end

  # get 'api/users/:username/likes', :to => 'api/users#liked_show'
  get 'api/likes/:user_id/', :to => 'api/likes#user_show'
end