<template>
  <div v-if="loading">I am loading....</div>
  <div v-else>
    <Board msg="I am Board Page" />

    <router-link :to="`/b/${bId}/c/1`">Card1</router-link>
    <router-link :to="`/b/${bId}/c/2`">Card2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from "@/components/Board.vue";

export default {
  data() {
    return { bId: 0, loading: true };
  },
  components: {
    Board
  },
  created() {
    return (this.bId = this.$route.params.bId);
  }
};
</script>
