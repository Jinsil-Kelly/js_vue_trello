<template>
  <div class="modal-card-header">
    <div class="modal-card-header-title">
      <input
        class="form-control"
        :readonly="!toggleTitle"
        @click="$emit('onToggleTitle')"
        @blur="$emit('onBlurTitle', $event.target.value)"
        type="text"
        :value="title"
      />
    </div>
    <a class="modal-close-btn" href="" @click.prevent="$emit('close')"
      >&times;</a
    >
  </div>
</template>

<script>
export default {
  name: "EditCardHeader",
  props: ["title", "toggleTitle"]
};
</script>

<style>
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
