import Swal from 'sweetalert2';
import { defineStore } from "pinia";


function UpdateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))

}

export const useCartStore = defineStore('cart',{

    state:()=>{
        return {
            cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        }
    },
    getters:{
        count(state){
            return state.cart.length
          },
          allItems(state){ 
            return state.cart
        },
        TotalAmount(state){
            return state.cart.reduce((total,p) => {
            return total + p.price * p.quantity
        },0)
        }

    },
    actions:{
        addToCartAction(product) {
            const item = this.cart.find(p => p.id == product.id)
            if (!item) {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            }else{
                item.quantity++
            }
            UpdateLocalStorage(this.cart)
            Swal.fire({
                title: "product added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 850,
                toast: true,
                position: 'top',
            });
        },

        plusAction(id){
            const item = this.cart.find(p => p.id == id);
            if(item){
                item.quantity++
            }
            UpdateLocalStorage(this.cart)
        },

        minusAction(id){
               const item = this.cart.find(p => p.id == id);
            if(item){
                if(item.quantity>1){
                    item.quantity--
                }
            }
            UpdateLocalStorage(this.cart)
        },
        deleteAction(id){
            this.cart = this.cart.filter( p => p.id != id);
            UpdateLocalStorage(this.cart)
        },
        clearAction(){
            this.cart = []
        }

    }

})