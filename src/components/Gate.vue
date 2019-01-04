<template>
  <v-data-iterator
    :items="items"
    hide-actions
    class="gate"
  >
    {{ items }}
    <v-card
      slot="item"
      slot-scope="props"
    >
      <p class="text-md-center">{{ props.item.name }}</p>
     
    </v-card>
  </v-data-iterator>    
</template>

<script>
export default {
  name: 'Gate',
  props: [
    'items'
  ],
  computed: {
    items2() {
      return [
        {
          name: '1',
          task: {
            number: 123,
            stage: 'picking'
          }
        },
        {
          name: '2',
          task: {
            number: 123,
            stage: 'picking'
          }
        }
      ];
    }
  }
}
</script>
