json.extract! post, :id, :title, :body
json.post_type post.post_type.name
json.reblogs do |reblog|
  reblog
end
