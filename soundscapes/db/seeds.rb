# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {
    name: 'Ryan Danger Mapa'
  },
  {
    name: 'Adam Kovic'
  }
  ])

user1_id = User.where(name: 'Ryan Danger Mapa').id
user2_id = User.where(name: 'Adam Kovic').id


soundspots = Soundspot.create([
  {
    latitude: 37.784370,
    longitude: -122.417621,
    user_id: user1_id
  },
  {
    latitude: 37.788683,
    longitude: -122.424879,
    user_id: user1_id
  },
  {
    latitude: 37.791602,
    longitude: -122.436187,
    user_id: user1_id
  },
  {
    latitude: 37.793884,
    longitude: -122.450463,
    user_id: user1_id
  },

  ])

soundscapes = Soundscape.create([
  {
    name: "Ryan's evening stroll",
    user_id: user1_id
  }
  ])

  soundscape1_id = Soundscape.where(name: "Ryan's evening stroll")
