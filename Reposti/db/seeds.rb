# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User Table
User.destroy_all

u1 = User.create(username: 'scott', email: 'test@gmail.com', password: 'password')
u2 = User.create(username: 'jesus', email: 'jchrist@heaven.com', password: 'JesusChrist')
u3 = User.create(username: 'lucifer', email: 'slucifer@hell.com', password: 'SatanNumberOne')

# PostType Table
PostType.destroy_all

text = PostType.create(name: 'text')
photo = PostType.create(name: 'photo')
quote = PostType.create(name: 'quote')
link = PostType.create(name: 'link')
chat = PostType.create(name: 'chat')
audio = PostType.create(name: 'audio')
video = PostType.create(name: 'video')

# Post Table
Post.destroy_all

post_text = Post.create(post_type_id: text.id, title: 'Test Text Post', body: 'This is the body of the test text post.', reblogged: false)
post_chat = Post.create(post_type_id: chat.id, title: 'Test Chat Post', body: '#Person 1: Hi\n#Person 2: Hello\n#Person 1: Goodbye.', reblogged: false)
post_link = Post.create(post_type_id: link.id, body: 'https://github.com/appacademy/cohort-resources/', reblogged: false)
reblogged_post_text = Post.create(post_type_id: text.id, title: 'Test Text Post', body: 'This is the body of the test text post.', reblogged: true, reblogged_id: post_text.id)
reblogged_post_text2 = Post.create(post_type_id: text.id, title: 'Test Text Post', body: 'This is the body of the test text post.', reblogged: true, reblogged_id: reblogged_post_text.id)

# UserPost Table
UserPost.destroy_all

UserPost.create(author_id: u1.id, post_id: post_text.id)
UserPost.create(author_id: u1.id, post_id: post_chat.id)
UserPost.create(author_id: u1.id, post_id: post_link.id)
UserPost.create(author_id: u2.id, post_id: reblogged_post_text.id)

# Like Table
Like.destroy_all

Like.create(liker_id: u2.id, post_id: post_text.id)
Like.create(liker_id: u2.id, post_id: post_chat.id)
Like.create(liker_id: u2.id, post_id: post_link.id)

# Follow Table
Follow.destroy_all

Follow.create(follower_id: u3.id, followee_id: u1.id)
Follow.create(follower_id: u3.id, followee_id: u2.id)
Follow.create(follower_id: u2.id, followee_id: u1.id)

# Caption Table
c1 = Caption.create(user_id: u2.id, post_id: reblogged_post_text.id, caption: 'This is so cool.')
c2 = Caption.create(user_id: u3.id, post_id: reblogged_post_text2.id, caption: 'I am Satan lord of darkness.')