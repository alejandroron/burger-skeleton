<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}

window.onbeforeunload = function() {
  return ''; // return default message
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  background-color: #2d4739;
  margin: 0;
  padding: 0;
}
</style>
