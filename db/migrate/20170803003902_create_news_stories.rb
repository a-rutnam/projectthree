class CreateNewsStories < ActiveRecord::Migration[5.1]
  def change
    create_table :news_stories do |t|
      t.string :name

      t.timestamps
    end
  end
end
