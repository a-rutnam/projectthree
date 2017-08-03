json.extract! news_story, :id, :name, :created_at, :updated_at
json.url news_story_url(news_story, format: :json)
