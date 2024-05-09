const app = Vue.createApp({
  data(){
    return {
      cart: [],
      premiumUser: true
    }
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    }
  }
})