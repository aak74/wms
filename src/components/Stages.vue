<template>
  <v-data-iterator
    :items="items"
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
  computed: {
    items() {
      return [
        'picking',
        'waiting',
        'loading',
      ];
    }
  }
}
</script>
