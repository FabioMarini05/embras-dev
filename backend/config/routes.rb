Rails.application.routes.draw do
  resources :users, only: [:index, :create, :destroy]
end
Rails.application.routes.draw do
  resources :users, only: [:index, :create, :destroy]
end
