<template>
  <div>Card Id is {{ cId }}</div>
</template>

<script>
export default {
  data() {
    return {
      cId: 0
    };
  },
  watch: {
    $route() {
      this.cId = this.$route.params.cId;
    }
  },
  created() {
    return (this.cId = this.$route.params.cId);
  }
};
</script>

<style scoped></style>
