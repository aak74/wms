<template>
  <div>
    <h2>Done</h2>
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
        {{ props.item.id }}
        </div>
    </v-data-iterator>
  </div>
</template>

<script>
export default {
  name: 'Done',
  props: [
    'items'
  ],
}
</script>
