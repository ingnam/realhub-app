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
  			<a href="">Download Artwork</a>
  		)
  	} else {
  		return "No Artwork"
  	}
  }

  changeStatus() {
  	const statuses = ['Pending', 'Printed', 'Held', 'Processing', 'Processed', 'Packaged', 'Complete', 'Dispatched', 'Delivered', 'Declined']
    return (
  		<span tabIndex="0" className="onclick-menu">
  			<ul className="onclick-menu-content">
          { statuses.map((status, i) => 
            <li key={i}>
              {status}
            </li> ) 
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
        <td>{ this.artWork(item.artwork) } | { this.changeStatus() } | <span className={item.status}>{ item.status }</span></td>
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