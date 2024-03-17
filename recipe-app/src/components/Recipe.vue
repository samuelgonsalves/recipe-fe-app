<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else>
      <div v-for="item in responseData" :key="item.id">
         <h1>{{ item.title }}</h1>
         <h5>{{ item.description }}</h5>
         <div class="container">
              <img :src="item.imageUrl"/>
              <h4>Ingredients</h4>
              <ul v-for="ingredient in item.ingredients" :key="ingredient.id">
                <li>{{ ingredient.name }}</li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
        isLoading: true,
        responseData: null
      };
    },
    mounted() {
      // Make an Axios GET request when the component is mounted
      axios.get('http://localhost:8080/recipes')
        .then(response => {
          // Once the request is successful, update the data properties
          this.responseData = response.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
}

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
img {
    width: 400px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
}
</style>