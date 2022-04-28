<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.font.im/css2?family=Poppins:wght@300;600&display=swap");

#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif, "Poppins", sans-serif;
}
::selection {
  color: #000;
  background-color: #f8e219;
}

::-moz-selection {
  color: #000;
  background-color: #f8e219;
}

::-webkit-selection {
  color: #000;
  background-color: #f8e219;
}
</style>
