<template>
  <!-- Jumbotron -->
  <div class="row mx-5 my-5">
    <div class="col parent">
        <div class="card child mb-4"  v-for="country in countries" :key="country.name.common" style="max-width:16rem ; border: none;">
        <img :src="country.flags.svg" class="card-img-top" :alt="country.name.common" style="height:150px">
        <div class="card-body">
          <h5 class="card-title">{{country.name.common}}</h5>
          <p class="mb-0">Population : {{country.population}}</p>
          <p class="mb-0">Capital : {{country.hasOwnProperty('capital') ? country.capital[0] : 'None'}}</p>
          <p class="mb-0">Region : {{country.region}}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<script>
  export default {
    name : "HomeView",
    computed : {
      countries(){
        return this.$store.getters.getCountries
      }
    },
    created(){
      this.$store.dispatch('fetchCountries')
    }
  }
</script>

<style>
  
  .parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.child {
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
}
@media screen and (max-width: 600px) {
    .child {
      flex: 1 0 100%;

    }
    .parent {
  justify-content: center;
}
  }
</style>
