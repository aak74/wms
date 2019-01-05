<template>
  <div>
    <h2>Backlog</h2>
    <v-data-iterator
      :items="items"
      hide-actions
      class="backlog"
    >
      <div
        class="backlog-item text-md-center"
        slot="item"
        slot-scope="props"
      >
        {{ props.item }}
      </div>
    </v-data-iterator>    
  </div>
</template>

<script>
export default {
  name: 'Stages',
  props: [
    'items'
  ],
}
</script>
