# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  post_type_id :integer
#  title        :string
#  body         :string
#  reblogged    :boolean
#  reblogged_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Post < ApplicationRecord
  validates :post_type_id, presence: true
  validates :reblogged, inclusion: { in: [true, false] }

  belongs_to :post_type

  belongs_to :reblogged_post,
    foreign_key: :reblogged_id,
    class_name: :Post,
    optional: true

  has_one :user_post
  has_one :author,
    through: :user_post,
    source: :user
  has_many :reblogs,
    foreign_key: :reblogged_id,
    class_name: :Post
  has_many :likes
  has_many :captions
end
