json.extract! user, :id, :username, :email
json.profile_image_url user.profile_image.attached? ? url_for(user.profile_image) : ''
json.posts user.posts.map(&:id)
json.likes user.likes.map(&:id)