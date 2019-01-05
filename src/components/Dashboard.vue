<template>
  <div>
    <backlog class="clearfix" :items="backlog"/>
    <v-layout>
      <v-flex sm1>
        <h2>Gates</h2>
        <stages :stages="stages" />
      </v-flex>
      <v-flex v-for="gate in gates" >
        <gate :gate="gate" :stages="stages" />
      </v-flex>
    </v-layout>
    <v-btn v-on:click="next">Next</v-btn>
  </div>
</template>

<script>
import Stages from './Stages';
import Gate from './Gate';
import Backlog from './Backlog';

import BacklogModel from '../model/Backlog';
// import GateModel from '../model/Gate';
import MatrixModel from '../model/Matrix';
import StageModel from '../model/Stage';

// import UpdateStages from '../service/UpdateStages';

// const gateModel = new GateModel;

export default {
  name: 'Dashboard',
  components: {
    Stages,
    Gate,
    Backlog,
  },

  data() {
    return {
      gates: [],
    };
  },

  watch: {
    gates: {
      handler: 'getGates',
      immediate: true,
    },
  },

  computed: {
    backlog() {
      const model = new BacklogModel;
      return model.getList();
    },

    items() {
      const model = new MatrixModel;
      return model.getList();
    },

    stages() {
      const model = new StageModel;
      return model.getList();
    },

    controller() {
      return this.$root.$options.controller;
    }
  },

  methods: {
    next() {
      console.log('next');
      this.controller.updateStage();
      this.getGates();
    },
    getGates() {
      // console.log('getGates', this);
      console.log('getGates', this.controller);
      
      // this.gates = gateModel.getList();
      this.gates = this.controller.gateModel.gates;
    },
  },
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
