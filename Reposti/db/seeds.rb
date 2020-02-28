# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: 'test', email: 'test@email.com', password: 'password')

PostType.destroy_all

text = PostType.create(name: 'text')
photo = PostType.create(name: 'photo')
quote = PostType.create(name: 'quote')
link = PostType.create(name: 'link')
chat = PostType.create(name: 'chat')
audio = PostType.create(name: 'audio')
video = PostType.create(name: 'video')

Post.destroy_all

p1 = Post.create(post_type_id: text.id, title: 'Test Text Post', body: 'The body of a the test text post', author_id: u1.id)