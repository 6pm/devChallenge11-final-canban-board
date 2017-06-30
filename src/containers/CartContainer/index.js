import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as containerActions from './actions'

const presets = [
	{
		title: 'item 111',
		price: '20',
		id: 1111
	},
	{
		title: 'item 222',
		price: '33',
		id: 2222
	},
	{
		title: 'item 333',
		price: '50',
		id: 3333
	}
]


class CartContainer extends React.PureComponent {

	addToCart = (item) => (e) => {
		const { actions: { addItem } } = this.props
		
		addItem(item)
	}

	removeFromCart = (id) => (e) => {
		const { actions: { removeItem } } = this.props
		
		removeItem(id)
	}

	removeFromCartAsync = (id) => (e) => {
		const { actions: { removeItemAsync } } = this.props
		
		removeItemAsync(id)
	}

	render() {
		const { actions: { clearAllItems }, title, items } = this.props
		
		return (
			<div className="row">
				<h2>{title}</h2>

				{presets.map(item => (
					<div key={item.id}>
						<span>{item.title}</span>
						<br />
						<span>{item.price}</span>
						<br />
						<button onClick={this.addToCart(item)}>Add to cart</button>

					</div>
				))}

				<hr/>

				<div>
					<h2>Purchased</h2>
					<a href="#" onClick={clearAllItems}>clear all</a>
					{items.map((item, index) => (
						<div key={index}>
							<span>{item.title} - {item.price}</span>
							<button onClick={this.removeFromCart(item.id)}>remove</button>
							<button onClick={this.removeFromCartAsync(item.id)}>async remove</button>
						</div>
					))}
				</div>
			</div> 
		)
	}
}

const mapStateToProps = (state) => ({
	items: state.cart.items,
	title: state.cart.title
})

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators({ ...containerActions }, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CartContainer)
