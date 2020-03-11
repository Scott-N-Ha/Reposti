json.extract! user, :id, :username, :email
json.profile_image_url user.profile_image.attached? ? url_for(user.profile_image) : ''
json.posts user.posts.map(&:id)
json.likes user.likes.map(&:id)
json.followers user.followers_link.map(&:id)
json.leaders user.leaders_link.map(&:id)