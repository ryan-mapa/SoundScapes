Rails.application.routes.draw do
  get 'users/show'

  get 'users/index'

  get 'soundscapes/create'

  get 'soundscapes/show'

  get 'soundscapes/destroy'

  get 'soundscapes/index'

  get 'soundspots/create'

  get 'soundspots/show'

  get 'favorites/create'

  get 'favorites/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do

  get 'users/show'

  get 'users/index'

  get 'soundscapes/create'

  get 'soundscapes/show'

  get 'soundscapes/destroy'

  get 'soundscapes/index'

  get 'soundspots/create'

  get 'soundspots/show'

  get 'favorites/create'

  get 'favorites/destroy'

    get 'login', to: redirect('/auth/spotify/callback'), as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'home', to: 'home#show'
    get 'me', to: 'me#show', as: 'me'

    root to: "home#show"

  end

end
