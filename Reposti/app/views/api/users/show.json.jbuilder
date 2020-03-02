json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.posts @user.posts.map(&:id)
    json.leaders @user.leaders.map(&:id)
    json.followers @user.followers.map(&:id)
  end
end 
json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
json.followers do
  @user.followers.each do |follower|
    json.set! follower.id do
      json.partial! 'api/users/user', user: follower
    end
  end
end
json.leaders do 
  @user.leaders.each do |leader|
    json.set! leader.id do 
      json.partial! 'api/users/user', user: leader
    end
  end
end