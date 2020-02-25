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
require 'test_helper'

class UserPostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
