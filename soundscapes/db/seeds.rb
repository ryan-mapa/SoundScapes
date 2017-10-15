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


soundscapes = Soundscape.create([
  {
    name: "Ryan's evening stroll",
    user_id: user1_id
  },
  {
    name: "Adam's greasy swim",
    user_id: user2_id
  }
  ])

soundscape1_id = Soundscape.where(name: "Ryan's evening stroll")
soundscape2_id = Soundscape.where(name: "Adam's greasy swim")

soundspots = Soundspot.create([
  {
    latitude: 37.784370,
    longitude: -122.417621,
    user_id: user1_id,
    soundscape_id: soundscape1_id
  },
  {
    latitude: 37.788683,
    longitude: -122.424879,
    user_id: user1_id,
    soundscape_id: soundscape1_id
  },
  {
    latitude: 37.791602,
    longitude: -122.436187,
    user_id: user1_id,
    soundscape_id: soundscape1_id
  },
  {
    latitude: 37.793884,
    longitude: -122.450463,
    user_id: user1_id,
    soundscape_id: soundscape1_id
  },
  {
    latitude: 37.755228,
    longitude: -122.365411,
    user_id: user2_id,
    soundscape_id: soundscape2_id
  },
  {
    latitude: 37.732004,
    longitude: -122.306064,
    user_id: user2_id,
    soundscape_id: soundscape2_id
  },
  {
    latitude: 37.678491,
    longitude: -122.229273,
    user_id: user2_id,
    soundscape_id: soundscape2_id
  },
  {
    latitude: 37.639464,
    longitude: -122.166455,
    user_id: user2_id,
    soundscape_id: soundscape2_id
  },
  {
    latitude: 37.602750,
    longitude: -122.107900,
    user_id: user2_id,
    soundscape_id: soundscape2_id
  }
  ])
