json.extract! post, :post_type_id, :id, :title, :body, :author_id, :created_at
json.photos post.photos.map { |photo| url_for(photo) }
json.video url_for(post.video) if post.video.attached?