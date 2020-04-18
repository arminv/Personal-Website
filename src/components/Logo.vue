<template>
  <div>
    <img :src="src" class="logo-img" />
    <p class="logo-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["src", "name"]
};
</script>

<style scoped>
.logo-img {
  max-height: 80px;
  margin: 0px;
}
.logo-name {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
