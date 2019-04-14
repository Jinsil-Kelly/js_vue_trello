<template>
  <div class="home">
    <NotFound msg="I am NotFound Page" />
  </div>
</template>

<script>
// @ is an alias to /src
import NotFound from "@/components/NotFound.vue";

export default {
  components: {
    NotFound
  }
};
</script>
