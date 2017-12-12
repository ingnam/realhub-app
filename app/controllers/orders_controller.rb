class OrdersController < ApplicationController
  include ApiSupport

  def index
		query = {
			include_order_agency: true,
			include_order_campaign: true,
			include_order_items: true,
			include_order_item_status: true,
			include_order_item_artwork: true
		}
		response = HTTParty.get('https://www.realhubapp.com/api/v2/orders.json', query: query, headers: api_header)
		@orders = []
		response.each do |order|
			@orders << bulild_order_data(order)
		end
		@orders
  end

  def update_item_status
  	query = {
  		status: params[:status],
  		include_order_item_status: true
  	}
  	response = HTTParty.put("https://www.realhubapp.com/api/v2/order_items/#{params[:item_id]}", query: query, headers: api_header)
  	if response.code == 200
	  	render json: { order_id: response['order_id'], item_id: response['id'], status: response['status']['title'] }
	  end
  end

  
  private
  def bulild_order_data(order)
		items = order['items'].map{|item|
							{
								id: item['id'],
								title: item['title'],
								status: item['status']['title'],
								artwork: item.try(:[], 'artwork').try(:[], 'links').try(:[], 'download_url')
							}  

						}
		{
			order_id: order['id'],
			agency: order['agency']['title'],
			campaign_address: order['campaign']['address'],
			campaign_suburb: order['campaign']['suburb_name'],
			items: items
		}
  end
end
