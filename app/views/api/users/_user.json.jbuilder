json.extract! user, :id, :username
json.profile_image_url user.profile_image.attached? ? url_for(user.profile_image) : ''