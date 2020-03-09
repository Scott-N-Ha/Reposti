json.extract! user, :id, :username, :email
json.profile_image_url user.profile_image.attached? ? url_for(user.profile_image) : ''