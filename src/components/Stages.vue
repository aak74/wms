<template>
  <v-data-iterator
    :items="stages"
    hide-actions
  >
    <div
      class="stage"
      slot="item"
      slot-scope="props"
    >
      {{ props.item }}
    </div>
  </v-data-iterator>    
</template>

<script>
export default {
  name: 'Stages',
  props: [
    'stages'
  ],
}
</script>
