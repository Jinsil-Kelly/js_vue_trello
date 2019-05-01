<template>
  <Modal class="modal-card">
    <div slot="header">
      <CardHeader
        @onBlurTitle="onBlurTitle"
        @onToggleTitle="toggleTitle = true"
        :title="card.title"
        :toggleTitle="toggleTitle"
        v-on:close="onClose"
      />
    </div>
    <div slot="body">
      <CardBody
        :toggleDesc="toggleDesc"
        @onBlurDesc="onBlurDesc"
        @onToggleDesc="toggleDesc = true"
        :description="card.description"
      />
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from "vuex";
const { mapActions } = createNamespacedHelpers("card");
import Modal from "@/components/Modal.vue";
import CardHeader from "@/components/card/CardHeader.vue";
import CardBody from "@/components/card/CardBody.vue";

export default {
  components: { Modal, CardHeader, CardBody },
  data() {
    return {
      toggleTitle: false,
      toggleDesc: false,
      inputTitle: "",
      textDesc: ""
    };
  },
  computed: {
    ...mapGetters("board", ["board"]),
    ...mapGetters("card", ["card"])
  },
  created() {
    this.fetch();
    // this.FETCH_CARD({ id: this.$route.params.cId });
  },
  methods: {
    ...mapActions(["FETCH_CARD", "UPDATE_CARD"]),
    fetch() {
      this.FETCH_CARD({ id: this.$route.params.cId });
    },
    onClose() {
      this.$router.push(`/b/${this.board.id}`);
    },
    onBlurTitle(title) {
      this.toggleTitle = false;
      this.inputTitle = title.trim();
      if (!this.inputTitle) return;
      this.UPDATE_CARD({
        id: this.card.id,
        title: this.inputTitle,
        bId: this.$route.params.bId
      }).then(() => this.fetch());
    },
    onBlurDesc(desc) {
      this.toggleDesc = false;
      this.textDesc = desc.trim();
      if (!this.textDesc) return;
      this.UPDATE_CARD({
        id: this.card.id,
        description: this.textDesc,
        bId: this.$route.params.bId
      }).then(() => this.fetch());
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
