Rails.application.routes.draw do
  resources :orders do
  	collection do
  		get 'update_item_status'
  	end
  end
  
  root 'orders#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
