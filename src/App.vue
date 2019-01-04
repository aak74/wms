<template>
  <v-app dark>
    <h1>Visualization "How Warehouse works"</h1>
    <dashboard />
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>
