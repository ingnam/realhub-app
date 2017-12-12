class OrderItem extends React.Component {
  constructor(props) {
    super()
  	this.state = {
  		order: props.order
  	}
  }

  artWork (artwork) {
    if(artwork) {
  		return (
  			<a 
          href={artwork}
          target="_blank"
        >
          Download Artwork
        </a>
  		)
  	} else {
  		return "No Artwork"
  	}
  }

  handleChangeStatus(item_id, status) {
    this.props.handleChangeStatus(item_id, status)
  }

  changeStatus(item_id) {
  	const statuses = ['Pending', 'Printed', 'Held', 'Processing', 'Processed', 'Packaged', 'Complete', 'Dispatched', 'Delivered', 'Declined']
    return (
  		<span tabIndex="0" className="onclick-menu">
  			<ul className="onclick-menu-content">
          { statuses.map((status, i) => 
              <li 
                key={i} 
                onClick={ ()=> this.handleChangeStatus(item_id, status)}
              >
              {status}
              </li>
            )
          }
	    </ul>
  		</span>
  	)
  }

  renderOrderItem(item) {
  	return (
  		<tr>
        <td>{ item.title }</td>
        <td></td>
        <td>{ this.artWork(item.artwork) } | { this.changeStatus(item.id) } | <span className={item.status}>{ item.status }</span></td>
      </tr>
  	)
  }

  render() {
  	return (
  		<table className="order-item">
	       <thead>
	        <tr>
	          <th>{ this.state.order.agency } - { this.state.order.campaign_address }, { this.state.order.campaign_suburb }</th>
	          <th></th>
	          <th></th>
	        </tr>
	       </thead>
	       <tbody>
	        	{ this.state.order.items.map((item, i) => this.renderOrderItem(item)) }
	       </tbody>
      </table>
  	)
  }

}