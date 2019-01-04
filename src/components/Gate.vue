<template>
  <div>
    <h2 class="text-md-center">{{ gate.id }}</h2>
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
    'stages',
  ],
  computed: {
    items() {
      return this.$props.stages.reduce((carry, stage, index) => {
        if (this.$props.gate.stage === index) {
          carry.push(this.$props.gate.id);
        } else {
          carry.push('&nbsp;');
        }
        return carry;
      }, []);
    }
  }
}
</script>
