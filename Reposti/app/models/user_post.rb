# == Schema Information
#
# Table name: user_posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserPost < ApplicationRecord
  validates :author_id, :post_id, presence: true
  
  belongs_to :user,
    foreign_key: :author_id

  belongs_to :post
end
