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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end