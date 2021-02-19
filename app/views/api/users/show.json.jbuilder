json.partial! "api/users/user", user: @user

if @slaps
  json.slaps do
    @slaps.each do |slap|
      json.set! slap.id do
        json.partial! "api/slaps/slap", slap: slap
      end
    end
  end
end