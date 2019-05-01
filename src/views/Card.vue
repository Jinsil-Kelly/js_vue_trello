<template>
  <Modal class="modal-card">
    <div slot="header">
      <EditCardHeader :title="card.title" />
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea
        class="form-control"
        cols="30"
        rows="3"
        placeholder="Add a more detailed description..."
        :readonly="!toggleDesc"
        @click="toggleDesc = true"
        @blur="onBlurDesc"
        v-model="card.description"
        ref="inputDesc"
      ></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapActions } = createNamespacedHelpers("card");
import Modal from "@/components/Modal.vue";
import EditCardHeader from "@/components/EditCardHeader.vue";

export default {
  components: { Modal, EditCardHeader },
  data() {
    return {
      toggleTitle: false,
      toggleDesc: false
    };
  },
  computed: {
    ...mapGetters("board", ["board"]),
    ...mapGetters("card", ["card"])
  },
  created() {
    // this.fetch()
    this.FETCH_CARD({ id: this.$route.params.cId });
  },
  methods: {
    ...mapActions(["FETCH_CARD", "UPDATE_CARD"]),
    // fetch(){
    //   this.FETCH_CARD({ id:this.$route.params.cId });
    // },
    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    },
    onBlurTitle() {
      this.toggleTitle = false;
      const title = this.$refs.inputTitle.value.trim();
      if (!title) return;
      this.UPDATE_CARD({
        id: this.card.id,
        title,
        bId: this.$route.params.bId
      }).then(() => this.FETCH_CARD({ id: this.$route.params.cId }));
    },
    onBlurDesc() {
      this.toggleDesc = false;
      const description = this.$refs.inputDesc.value.trim();
      this.UPDATE_CARD({
        id: this.card.id,
        description,
        bId: this.$route.params.bId
      });
    }
  }
};
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
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
