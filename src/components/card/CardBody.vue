<template>
  <div>
    <h3>Description</h3>
    <textarea
      class="form-control"
      cols="30"
      rows="3"
      placeholder="Add a more detailed description..."
      :readonly="!toggleDesc"
      @click="$emit('onToggleDesc')"
      @blur="$emit('onBlurDesc', $event.target.value)"
      :value="description"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "EditCardHeader",
  props: ["description", "toggleDesc"]
};
</script>

<style scoped></style>
