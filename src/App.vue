<template>
  <div v-if="$route.path == '/'">
    <Main />
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>

<script>
import Main from './router/routes/Main.vue'
import NotFound from './router/routes/NotFound.vue'

import './assets/js/scripts';

export default {
  name: 'App',
  components: {
    Main,
    NotFound,
  }
}
</script>

<style>

</style>
