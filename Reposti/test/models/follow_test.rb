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
require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
