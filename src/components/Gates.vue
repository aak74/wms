<template>
  <v-layout>
    <v-flex v-for="gate in gates" :key="gate.id">
      <gate :gate="gate" :stagesCount="stagesCount" />
    </v-flex>
  </v-layout>
</template>

<script>
import Gate from './Gate';

export default {
  name: 'Gates',
  props: [
    'gates',
    'stagesCount',
  ],
  components: {
    Gate,
  },
}
</script>
