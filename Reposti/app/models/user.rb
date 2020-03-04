# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  slug            :string
#
class User < ApplicationRecord
  extend FriendlyId
  friendly_id :username, use: :slugged

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(user_params)
    user = User.find_by(username: user_params[:username])
    user&.is_password?(user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom::urlsafe_base64)
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  has_one_attached :profile_image
  
  has_many :posts,
  foreign_key: :author_id
  
  has_many :leaders_link,
    foreign_key: :follower_id,
    class_name: :Follow
  
  has_many :followers_link, 
    foreign_key: :leader_id,
    class_name: :Follow

  has_many :leaders,
    through: :leaders_link,
    source: :leader
    
  has_many :followers,
    through: :followers_link,
    source: :follower

  has_many :followed_posts,
    through: :leaders,
    source: :posts

  has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :liked_posts_authors,
    through: :liked_posts,
    source: :author
end
