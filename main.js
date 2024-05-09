const app = Vue.createApp({
  data() {
    return {
      cart:0,
      productName: 'Sakura Coffee beans',
      tasteNotes: ['cherry', 'almond', 'chocolate'],
      price: 19.00,
      image: './assets/images/De-Mello-coffee-sakura-227g.webp',
      onSale: true,
      variants: [
        { id: 1, size:'226gr', quantity: 18},
        { id: 2, size:'500gr', quantity: 9},
      ], 
      selectedVariant: 0,
    }
  },
  computed: {
    finalPrice() {
      if (this.onSale) {
        const discount = this.price * 0.2
        return this.price - discount
      }
      return this.price
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  }
})