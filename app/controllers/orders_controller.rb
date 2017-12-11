class OrdersController < ApplicationController
  def index
		headers = {
			'x-api-token': ENV['REALHUB_API_KEY']
		}
		query = {
			include_order_agency: true,
			include_order_campaign: true,
			include_order_items: true,
			include_order_item_status: true,
			include_order_item_artwork: true
		}
		response = HTTParty.get('https://www.realhubapp.com/api/v2/orders.json', query: query, headers: headers)
		@orders = []
		response.each do |order|
			@orders << bulild_order_data(order)
		end
		@orders
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
			agency: order['agency']['title'],
			campaign_address: order['campaign']['address'],
			campaign_suburb: order['campaign']['suburb_name'],
			items: items
		}
  end
end
