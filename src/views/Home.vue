<template>
  <div class="home">
    <Home msg="Welcome to Jinsil Home" />
    <router-link to="/b/1">Board1</router-link>
    <router-link to="/b/2">Board2</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>
