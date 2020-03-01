json.posts do
  json.set! @post.id do
    json.partial! 'api/posts/post', post: @post
  end
end
json.users do
  json.set! @post.author.id do
    json.partial! 'api/users/user', user: @post.author
  end
end