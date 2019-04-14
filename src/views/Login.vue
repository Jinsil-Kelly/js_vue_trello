<template>
  <div class="home">
    <Login msg="I am login Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  components: {
    Login
  }
};
</script>
