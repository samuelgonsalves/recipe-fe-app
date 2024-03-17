<template>
    <div>
        <h1>Meal planner tool</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="mealCount">Number of meals</label>
                <input type="mumber" id="mealCount" v-model="formData.mealCount" required>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        mealCount: 0
      }
    };
  },
  methods: {
    submitForm() {
        const data = {
            mealDate: new Date().toISOString().slice(0, 10),
            recipeId: 1
        };
        axios.post("http://localhost:8080/schedule", data);
        
      // You can send the form data to a server, perform validation, etc.
    }
  }
};
</script>

<style scoped>
/* Add your form styling here */
</style>