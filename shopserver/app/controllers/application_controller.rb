class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add routes
  
    # GET /
  
    get '/items' do
      items = Message.all.order(:createdata)
      items.to_json
    end
  
    # POST /items
  
    post '/items' do
      item = Message.create(params)
      item.to_json
    end
  
    # PATCH /items/:id
  
    patch '/items/:id' do
      item = Message.find(params[:id])
      item.update(params)
      item.to_json
    end
    
    # DELETE /items/:id
  
    delete '/items/:id' do
      item = Item.find(params[:id])
      item.destroy
      item.to_json
      "Item deleted successfully"
    end
  
  end