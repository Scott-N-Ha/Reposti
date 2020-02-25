class CreateCaptions < ActiveRecord::Migration[5.2]
  def change
    create_table :captions do |t|
      t.integer :user_id
      t.integer :post_id
      t.string :caption

      t.timestamps
    end
  end
end
