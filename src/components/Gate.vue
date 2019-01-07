<template>
  <div>
    <h3 class="text-md-center">{{ gate.id }}</h3>
    <v-data-iterator
      :items="items"
      hide-actions
      class="gate"
    >
      <v-card
        slot="item"
        slot-scope="props"
      >
        <p class="text-md-center" v-html="props.item"></p>
      </v-card>
    </v-data-iterator>    
  </div>
</template>

<script>
export default {
  name: 'Gate',
  props: [
    'gate',
    'stagesCount',
  ],
  computed: {
    items() {
      const items = [];
      for (let index = 0; index < this.stagesCount; index++) {
        if (this.gate.stage === index && this.gate.task) {
          items.push(this.gate.task.id);
        } else {
          items.push('&nbsp;');
        }
      }
      return items;
    }
  }
}
</script>
