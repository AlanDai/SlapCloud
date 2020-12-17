json.array! @slaps do |slap|
  json.partial! "api/slaps/slap", slap: slap
end