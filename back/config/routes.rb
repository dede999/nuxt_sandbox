Rails.application.routes.draw do
  get '/chuck_fact', to: 'message#chuck'
  resources :applications
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
