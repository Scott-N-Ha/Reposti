# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, :post_id, presence: true
  validate :liked

  belongs_to :liker,
    class_name: :User

  belongs_to :post

  def liked
    lik = Like.find_by(liker_id: self.liker_id, post_id: self.post_id)
    if lik
      errors[:post_id] << "Cannot like more than once"
    end
  end
end
