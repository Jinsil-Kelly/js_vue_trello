<template>
  <div class="modal-card-header">
    <div class="modal-card-header-title">
      <input
        class="form-control"
        :readonly="!toggleTitle"
        @click="toggleTitle = true"
        @blur="onBlurTitle"
        type="text"
        :value="title"
        ref="inputTitle"
      />
    </div>
    <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
  </div>
</template>

<script>
export default {
  name: "EditCardHeader",
  props: ["title"]
};
</script>

<style scoped></style>
