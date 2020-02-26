class StaticPageController < ApplicationController
  before_action :redirect_if_not_logged_in
  def root
  end
end
