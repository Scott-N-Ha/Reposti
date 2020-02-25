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
require 'test_helper'

class CaptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
