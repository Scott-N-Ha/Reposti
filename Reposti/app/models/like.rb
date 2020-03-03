# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  post_id    :integer
#  liker_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :post_id, :liker_id, presence: true
  validate :multi_like_check

  belongs_to :post

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  def multi_like_check
    like_check = Like.find_by(post_id: self.post_id, liker_id: self.liker_id)

    if like_check
      errors[:post_id] << "Cannot like the same post twice."
    end
  end
end
