<template>
  <div v-if="loading">I am loading....</div>
  <div v-else>
    <div>{{ bId }}</div>

    <router-link :to="`/b/${bId}/c/1`">Card1</router-link>
    <router-link :to="`/b/${bId}/c/2`">Card2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { bId: 0, loading: true };
  },
  created() {
    return (this.bId = this.$route.params.bId);
  }
};
</script>
