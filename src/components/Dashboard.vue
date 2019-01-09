<template>
  <div>
    <backlog class="clearfix" :items="backlog"/>
    <v-layout>
      <v-flex sm1>
      </v-flex>
      <v-flex sm11>
        <h2 class="text-md-center">Gates</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm1>
        <h2>Stages</h2>
        <stages :stages="stages" />
      </v-flex>
      <v-flex sm11>
        <gates :gates="gates" :stages-count="stages.length"/>
      </v-flex>
    </v-layout>
    <done />
    <v-btn v-on:click="next">Next</v-btn>
  </div>
</template>

<script>
import Stages from './Stages';
import Gates from './Gates';
import Backlog from './Backlog';
import Done from './Done';

export default {
  name: 'Dashboard',
  components: {
    Stages,
    Gates,
    Backlog,
    Done,
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
      return this.controller.getList('backlog');
    },

    stages() {
      return this.controller.getList('stage');
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
      // console.log('getGates', this.controller);
      this.gates = this.controller.getList('gate');
    },
  },

  created() {
    this.timer = setInterval(() => {
      this.getGates();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.timer);
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

.time-slots,
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

.time-slot {
  float: left;
  height: 120px;
  width: 56px;
  line-height: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
  /* border-right: 1px solid #424242; */
  border-left: 1px solid #999999;
}
</style>
