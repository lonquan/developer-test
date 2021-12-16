<template>
  <div id="app">
    <table-list />
    <timer />
  </div>
</template>

<script>
import TableList from "./components/TableList.vue";
import Timer from "./components/Timer.vue";

export default {
  name: "App",
  components: {
    TableList,
    Timer,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 5vw;
  width: 90vw;
  height: 86vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
}
</style>
