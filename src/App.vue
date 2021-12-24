<template>
  <div id="app">
    <Header />

    <main class="main-content">
      <b-container>
        <router-view />
      </b-container>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content {
  margin-top: 50px;
}
</style>
