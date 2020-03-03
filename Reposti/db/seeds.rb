# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u = User.create(username: 'test', email: 'test@email.com', password: 'password')
u1 = User.create(username: 'test1', email: 'test1@email.com', password: 'password')
u2 = User.create(username: 'test2', email: 'test2@email.com', password: 'password')
u3 = User.create(username: 'test3', email: 'test3@email.com', password: 'password')


PostType.destroy_all

text = PostType.create(name: 'text')
photo = PostType.create(name: 'photo')
quote = PostType.create(name: 'quote')
link = PostType.create(name: 'link')
chat = PostType.create(name: 'chat')
audio = PostType.create(name: 'audio')
video = PostType.create(name: 'video')

Post.destroy_all

p1 = Post.create(post_type_id: text.id, title: 'Test Text Post', body: 'The body of a the test text post', author_id: u.id)
p2 = Post.create(post_type_id: quote.id, title: 'Quote Test Post', body: 'The body of a test quote post', author_id: u.id)
p3 = Post.create(post_type_id: link.id, title: 'Test Link Post', body: 'https://github.com/aa-ScottHa/', author_id: u1.id)

Follow.destroy_all

fuu1 = Follow.create(leader_id: u.id, follower_id: u1.id)
fuu2 = Follow.create(leader_id: u.id, follower_id: u2.id)
fuu3 = Follow.create(leader_id: u.id, follower_id: u3.id)
fu1u = Follow.create(leader_id: u1.id, follower_id: u.id)

Like.destroy_all

lp1u = Like.create(post_id: p1.id, liker_id: u.id)
lp2u = Like.create(post_id: p2.id, liker_id: u.id)
lp3u = Like.create(post_id: p3.id, liker_id: u.id)