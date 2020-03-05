# == Schema Information
#
# Table name: post_types
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PostType < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :posts
end
