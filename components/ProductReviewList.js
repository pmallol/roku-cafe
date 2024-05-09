app.component('ProductReviewList', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="review-list">
  
    <h3>Reviews:</h3>
    <ul>
      <li v-for="review in reviews">
        <p>{{ review.name }}</p>
        <p>Rating: {{ review.rating }}</p>
        <p>{{ review.review }}</p>
      </li>`
})