class Orders extends React.Component {
  constructor(props) {
  	super()
  	this.state = {
  		orders: JSON.parse(props.orders)
  	}
  }

  renderOrder(order, i) {
  	debugger
  	return (
  		<h3>
  			This is order { order.id }
  		</h3>
  	)
  } 

  render() {
    return (
    	<div className="wrapper">
    		{ this.state.orders.map((order, i) => this.renderOrder(order, i)) }
    	</div>
    )
  }
}