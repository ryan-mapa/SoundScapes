@soundscapes.each do |soundscape|
  json.set! soundscape.id do
    json.partial! 'api/soundscapes/soundscape', soundscape: soundscape
  end
end
