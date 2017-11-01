keys = Rails.application.secrets

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, '2d9b5153c47946eea1f7af099022b036', '59bb6f06609348cb841ce36a728f7594',
  scope: '
    user-read-private
    user-read-email
    user-follow-read
    user-library-read
    playlist-read-private
    user-read-playback-state
    user-read-private
    user-read-currently-playing
    playlist-read-private
    user-modify-playback-state
    '
end

# flash[:ommiauth_spotify_force_approval?]
# replaced values:
# keys.spotify['client_id']
# keys.spotify['client_secret']


# :facebook, '175674496323311', 'b3501e76c5531afbe8ef266aca8974cf'
