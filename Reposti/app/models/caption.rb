# == Schema Information
#
# Table name: captions
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  post_id    :integer
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Caption < ApplicationRecord
  validates :user_id, :post_id, :caption, presence: true
  
  belongs_to :user
  belongs_to :post
end
