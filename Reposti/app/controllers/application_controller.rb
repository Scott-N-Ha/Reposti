class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    current_user.try(:reset_session_token!)
  end

  def redirect_if_logged_in
    redirect_to root_url if logged_in?
  end
end