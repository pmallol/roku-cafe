const app = Vue.createApp({
  data() {
    return {
      productName: 'Sakura Coffee beans',
      tasteNotes: ['cherry', 'almond', 'chocolate'],
      price: 19.00,
      image: './assets/images/De-Mello-coffee-sakura-227g.webp',
      inventory: 58,
      onSale: true,
      variants: [
        { id: 1, size:'500gr'},
        { id: 2, size:'1kg'},
      ]
    }
  }
})