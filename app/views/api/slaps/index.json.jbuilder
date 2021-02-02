# json.array! @slaps do |slap|
@slaps.each do |slap|
  json.set! slap.id do
    json.partial! "api/slaps/slap", slap: slap
  end
end