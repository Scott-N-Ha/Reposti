# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  leader_id   :integer
#  follower_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
  validates :leader_id, :follower_id, presence: true
  validate :multi_follow_check
  validate :self_follow_check

  belongs_to :leader,
    foreign_key: :leader_id,
    class_name: :User

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  def multi_follow_check
    follow_check = Follow.find_by(leader_id: self.leader_id, follower_id: self.follower_id)

    if follow_check
      errors[:leader_id] << "Cannot follow the same person twice."
    end
  end

  def self_follow_check
    if self.leader_id == self.follower_id
      errors[:leader_id] << "Cannot follow yourself."
    end
  end
end
