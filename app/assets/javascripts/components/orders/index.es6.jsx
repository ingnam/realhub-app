class Orders extends React.Component {
  constructor(props) {
    super()
  	this.state = {
  		orders: props.orders
  	}
  }

  updateItemStatus(data) {
    let orders = this.state.orders
    $.each(orders, function(i, order) {
      if (order.order_id == data.order_id) {
        $.each(order.items, function(j, item) {
          if (data.item_id == item.id) {
            item.status = data.status
          }
        })
      }
    })
    this.setState({orders})
    toastr.success('Status updated successfully')
  }

  handleChangeStatus(item_id, status) {
    var _this = this
    $.ajax({
      url: '/orders/update_item_status',
      type: 'GET',
      data: {
        item_id: item_id,
        status: status
      },
      success: function(data) {
        _this.updateItemStatus(data)
      }
    })
  }

  render() {
    return (
    	<div className="order-details">
        <div className="order-title">
          <h3>Orders</h3>
        </div>
        { this.state.orders.map((order, i) => 
            <OrderItem
              key={i}
              order={order}
              handleChangeStatus={this.handleChangeStatus.bind(this)}
            />
          ) 
        }
      </div>
    )
  }
}