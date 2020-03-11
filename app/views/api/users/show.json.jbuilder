json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.followers @user.followers_link.map(&:id)
    json.leaders @user.leaders_link.map(&:id)
  end
end 

json.follows do
  (@user.followers_link + @user.leaders_link).uniq.each do |link|
    json.set! link.id do
      json.partial! 'api/follows/follow', follow: link
    end
  end
end

json.likes do
  (@user.likes).each do |like|
    json.set! like.id do 
      json.partial! 'api/likes/like', like: like
    end
  end
end

json.posts do
  (@user.posts + @user.followed_posts + @user.liked_posts).uniq.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.other_users do
  (@user.followers + @user.leaders + @user.liked_posts_authors).uniq.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end