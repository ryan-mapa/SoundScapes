Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD

  Rails.application.routes.draw do

    get 'login', to: redirect('/auth/spotify/callback'), as: 'login'
    get 'logout', to: 'sessions#destroy', as: 'logout'
    get 'auth/:provider/callback', to: 'sessions#create'
    get 'auth/failure', to: redirect('/')
    get 'home', to: 'home#show'
    get 'me', to: 'me#show', as: 'me'

    root to: "home#show"

  end

=======
>>>>>>> 1caa91d... Committing before pbxproj copy
end
