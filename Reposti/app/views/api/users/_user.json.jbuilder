json.extract! user, :id, :username
json.profileImgUrl user.profile_image.attached? ? url_for(user.profile_image) : ''