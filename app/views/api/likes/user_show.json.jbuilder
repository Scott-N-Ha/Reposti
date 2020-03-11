json.likes do
  @likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end

json.users do
  @likes.map(&:post_author).each do |author|
    json.set! author.id do
      json.partial! 'api/users/user', user: author
    end
  end
end

json.posts do
  @likes.map(&:post).each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end