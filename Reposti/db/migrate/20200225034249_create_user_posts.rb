class CreateUserPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_posts do |t|
      t.integer :author_id
      t.integer :post_id

      t.timestamps
    end

    add_index :user_posts, :author_id
    add_index :user_posts, :post_id
  end
end
