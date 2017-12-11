class Orders extends React.Component {
  constructor(props) {
    super()
  	this.state = {
  		orders: props.orders
  	}
  }

  renderOrder(order, i) {
  	return (
  		<h3>
  			Name of agent is { order.agency }
  		</h3>
  	)
  }

  handleChangeStatus(status) {
    debugger
  }

  render() {
    return (
    	<div className="order-details">
        <div className="order-title">
          <h3>Orders</h3>
        </div>
        { this.state.orders.map((order, i) => <OrderItem key={i} order={order} handleChangeStatus={this.handleChangeStatus} />) }
      </div>
    )
  }
}