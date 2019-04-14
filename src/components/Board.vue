<template>
  <div>
    <div>{{ bId }}</div>
    <!--<hr/>-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  created() {
    this.bId = this.$route.params.bId;
  },
  data() {
    return {
      bId: 0
    };
  },
  props: {
    msg: String
  }
};
</script>

<style lang="scss"></style>
