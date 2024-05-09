app.component('Product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product">
      <h2 class="product-title">{{productName}}</h2>
      <div class="product-price">
        <p>
          Price: {{'$'+finalPrice }}
          <span v-if="onSale">On Sale!</span>
        </p>
      </div>
      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock && inStock < 10">Almost Sold Out!</p>
      <p v-else>Out of Stock</p>
      <p>Shipping: {{ premium ? 'Free' : '$2.99' }}</p>
      <img class="product-image" v-bind:src="image" alt="Product Image">
      <div>
        <p v-if="variants">Size:</p>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)">
          <p>{{variant.size}}</p>
        </div>
      </div>
      <p>Taste Notes:</p>
      <ul>
        <li v-for="notes in tasteNotes" :key="notes">{{notes}}</li>
      </ul>
      <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>

      <product-form @review-submitted="addReview"></product-form>
    </div>`,
    data() {
      return {
        productName: 'Sakura Coffee beans',
        tasteNotes: ['cherry', 'almond', 'chocolate'],
        image: './assets/images/De-Mello-coffee-sakura-227g.webp',
        onSale: true,
        variants: [
          { id: 1, size:'226gr', price: 19.00,quantity: 18},
          { id: 2, size:'500gr', price: 25.00,quantity: 9},
        ], 
        selectedVariant: 0,
        reviews: []
      }
    },
    computed: {
      finalPrice() {
        if (this.onSale) {
          const discount = this.variants[this.selectedVariant].price * 0.2
          return this.variants[this.selectedVariant].price - discount
        }
        return this.variants[this.selectedVariant].price
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
        this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
    }
});
