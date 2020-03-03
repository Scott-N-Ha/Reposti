json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.posts @user.posts.map(&:id)
    json.followers @user.followers_link.map(&:id)
    json.leaders @user.leaders_link.map(&:id)
  end
end 
# json.leaders @user.leaders.map(&:id)
# json.followers @user.followers.map(&:id)

json.follows do
  (@user.followers_link + @user.leaders_link).each do |link|
    json.set! link.id do
      json.partial! 'api/follows/follow', follow: link
    end
  end
end

json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.follows_and_leads_users do
  (@user.followers + @user.leaders).each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end