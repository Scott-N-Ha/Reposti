json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
json.users do
  @posts.each do |post|
    json.set! post.author.id do
      json.partial! 'api/users/user', user: post.author
    end
  end
end