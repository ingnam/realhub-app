module ApiSupport
  extend ActiveSupport::Concern

  def api_header
  	headers = {
			'x-api-token': ENV['REALHUB_API_KEY']
		}
  end
end