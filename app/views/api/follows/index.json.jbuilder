json.follows do
  @follows.each do |follow|
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end

json.users do
  (@follows.map(&:leader)).each do |leader|
    json.set! leader.id do
      json.partial! 'api/users/user', user: leader
    end
  end
end