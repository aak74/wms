<template>
  <div>
    <h2>Backlog</h2>
    <v-layout>
      <v-flex sm1>
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
      </v-flex>
      <v-flex sm11>
        <v-data-iterator
          :items="timeslots"
          hide-actions
          class="time-slots"
        >
          <div
            class="time-slot text-md-center"
            slot="item"
            slot-scope="props"
          >
            {{ props.item }}:00
          </div>
        </v-data-iterator>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  name: 'Backlog',
  props: [
    'items'
  ],
  computed: {
    timeslots() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  }
}
</script>
