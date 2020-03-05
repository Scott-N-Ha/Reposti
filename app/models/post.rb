# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  post_type_id :integer
#  title        :string
#  body         :string
#  author_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Post < ApplicationRecord
  validates :post_type_id, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post_type

  has_many :likes

  has_many :likers,
    through: :likes,
    source: :liker
  
  has_many_attached :photos

  has_one_attached :video
end
