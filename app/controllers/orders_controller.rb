class OrdersController < ApplicationController
  def index
		uri = URI.parse('https://www.realhubapp.com/api/v2/orders.json')
		https = Net::HTTP.new(uri.host, uri.port)
		https.use_ssl = true
		request = Net::HTTP::Get.new(uri.path)
		request['x-api-token'] = ENV['REALHUB_API_KEY']
		response = https.request(request)
		@orders = response.body
  end
end
