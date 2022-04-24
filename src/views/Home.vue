<template>
  <div class="home">
    <div id="output"></div>

    <a-select
      :default-value="1"
      v-model="instrumentCode"
      style="width: 300px"
      @change="handleChange"
    >
      <a-select-opt-group v-for="(i, key) in midi128Instrument" :key="key">
        <span slot="label">{{ i.label_cn }} {{ i.label }}</span>
        <a-select-option
          v-for="(j, _key) in i.children"
          :key="_key"
          :value="j.code"
        >
          {{ j.label_cn }} {{ j.label }}
        </a-select-option>
      </a-select-opt-group>
    </a-select>
    <PianoPanel />
  </div>
</template>

<script>
import { midi128Instrument } from "@/utils/midiCode";

import PianoPanel from "@/components/PianoPanel";
/* eslint-disable no-undef */
// import { Vex } from "vexflow";
export default {
  name: "Home",
  components: { PianoPanel },
  data() {
    const instrumentCode =
      parseInt(localStorage.getItem("instrumentCode")) || 1;
    return { midi128Instrument, flatInstrument: {}, instrumentCode };
  },

  mounted() {
    this.initInstrumentOptions();
  },
  methods: {
    handleChange(code) {
      localStorage.setItem("instrumentCode", code);
      location.reload(); //重新加载页面
    },
    initInstrumentOptions() {
      const flatInstrument = {};
      function filterInstrument(arr) {
        arr.forEach((i) => {
          if (i.children) {
            filterInstrument(i.children);
          }
          if (i.code) {
            flatInstrument[i.code] = i.label;
          }
        });
      }
      filterInstrument(this.midi128Instrument);
      this.flatInstrument = flatInstrument;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
