# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  follower_id :integer
#  followee_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true
  validate :followed

  belongs_to :follower,
    class_name: :User

  belongs_to :followee,
    class_name: :User

  def followed
    follow = Follow.find_by(follower_id: self.follower_id, followee_id: self.followee_id)
    if follow
      errors[:follower_id] << "Cannot follow more than once"
    end
  end
end
