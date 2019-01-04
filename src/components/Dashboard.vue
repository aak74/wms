<template>
  <div>
    <backlog class="clearfix" :items="backlog"/>
    <v-layout>
      <v-flex sm1>
        <stages />
      </v-flex>
      <v-flex v-for="gate in gates" >
        <gate :items="items"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Stages from './Stages'
import Gate from './Gate'
import Backlog from './Backlog'

export default {
  name: 'Dashboard',
  components: {
    Stages,
    Gate,
    Backlog,
  },
  computed: {
    gates() {
      return [1, 2, 3, 4, 5];
    },

    backlog() {
      return [12, 45, 67];
    },

    items() {
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
            stage: 'waiting'
          }
        },
        {
          name: '3',
          task: {
            number: 123,
            stage: 'loading'
          }
        },
      ];
    }
  }
}
</script>

<style>
.v-card,
.stage,
.backlog-item {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.backlog {
  position: relative;
}

.backlog-item {
  float: left;
  width: 40px;
  /* height: 40px;
  line-height: 40px; */
  background-color: #424242;
  border-color: #424242;  
}

.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
</style>
