json.posts do
  json.set! @post.id do
    json.partial! 'api/posts/post', post: @post
  end
end

json.likes do
  (@post.likes).each do |like|
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end

json.users do
  ([@post.author] + @post.likers).each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
