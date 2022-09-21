<template>
  <HeaderMain />
  <div class="bg-grey">
    <router-view/>
  </div>
  
</template>

<script>
  import HeaderMain from './components/HeaderMain.vue';
  export default {
    components : {
    HeaderMain,
    }
  }
</script>
