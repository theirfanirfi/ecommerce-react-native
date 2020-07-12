import { Container } from "unstated"
import AsyncStorage from '@react-native-community/async-storage';
import { Toast } from '../components/Toast'


class CartContainer extends Container {
    state = {
        cart: {},
        order: {},
    };

    addToCart = async (item) => {
        const { cart } = this.state
        const alreadyExist = Boolean(cart[item.id]);
        if (alreadyExist) {
            return Toast("This item is already exist", 1)
        }
        cart[item.id] = { ...item, quantity: 1 }

        await this.setState({ cart })
        console.log(...item);
        return Toast("Item has been added", 0)
    }

    increaseCount = async (id) => {
        const { cart } = this.state
        const isExist = Boolean(cart[id]);
        if (isExist) {
            cart[id].quantity += 1;
            return this.setState({ cart })
        }
    }

    decreaseCount = async (id) => {
        const { cart } = this.state
        const isExist = Boolean(cart[id]);
        if (isExist) {
            cart[id].quantity -= 1;
            return this.setState({ cart })
        }
    }
    removeFromCart = async (id) => {
        const { cart } = this.state
        delete cart[id];
        await this.setState({ cart })
        return Toast("Item has been removed", 0)
    }

    cartTotalAmount = () => {
        const { cart } = this.state;
        let total = 0;
        Object.values(cart).forEach((item) => {
            total += item.quantity * item._regular_price;
        })
        return total
    }

    getCart = () => {
        return Object.values(this.state.cart);
    }

}

export { CartContainer }