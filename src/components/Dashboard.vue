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
    <done :items="done"/>
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
      done: [],
      backlog: [],
      stages: this.$ctrl.getList('stage'),
    };
  },

  // watch: {
  //   gates: {
  //     handler: 'getGates',
  //     immediate: true,
  //   },
  //   done: {
  //     handler: 'getDone',
  //     immediate: true,
  //   },
  // },

  methods: {
    start() {
      // console.log('start');
      this.getGates();
      this.getDone();
      this.getBacklog();
      this.$ctrl.start();
    },

    getGates() {
      this.gates = this.$ctrl.getList('gate');
    },

    getDone() {
      this.done = this.$ctrl.getList('done');
    },

    getBacklog() {
      this.backlog = this.$ctrl.getList('backlog');
    },

  },

  created() {
    this.start();
  },

  destroyed() {
    // clearInterval(this.timer);
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
