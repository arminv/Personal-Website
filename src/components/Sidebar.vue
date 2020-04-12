<template lang="html">
  <div id="parentx">
    <vs-button
      @click="(active = !active), (notExpand = false)"
      color="success"
      type="filled"
      >Open Sidebar Reduce-expand</vs-button
    >
    <vs-button
      @click="(active = !active), (notExpand = true)"
      color="success"
      type="filled"
      >Open Sidebar Reduce-only</vs-button
    >
    <vs-sidebar
      :reduce="reduce"
      :reduce-not-hover-expand="notExpand"
      parent="body"
      default-index="1"
      color="success"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar
          size="70px"
          src="https://avatars0.githubusercontent.com/u/13618953?s=460&u=b83a795f9244a0eb253c2bd20e3d8063640498fb&v=4"
        />
      </div>

      <vs-sidebar-item index="1" icon="menu" @click="reduce = !reduce">
        Toggle Sidebar
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="6" icon="account_box">
        <router-link to="/">Home</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="6" icon="account_box">
        <router-link to="/Projects">Projects</router-link>
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <p>Footer</p>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    notExpand: false,
    reduce: true
  })
};
</script>

<style lang="css">
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
