Rails.application.routes.draw do
  resources :news_stories
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "news_stories#index"


  get '/exercise' => 'news_stories#werk'
end
