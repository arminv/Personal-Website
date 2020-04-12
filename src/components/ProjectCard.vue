<template lang="html">
  <div class="card">
    <vs-card actionable>
      <div slot="header">
        <h3>
          {{ title }}
        </h3>
      </div>
      <div slot="media">
        <img src="../assets/logo.png" />
      </div>
      <div>
        <span>
          {{ description }}
        </span>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          <vs-chip color="primary">
            <vs-avatar icon="link" color="#389CFF" />
            See Live
          </vs-chip>
        </vs-row>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["title", "description"],
  methods: {}
};
</script>

<style scoped>
.card {
  margin: 15%;
}
</style>
