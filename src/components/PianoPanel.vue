<template>
  <div class="container">
    <div class="piano">
      <div
        @click="playQuote(k.midiCode)"
        class="piano-key"
        :style="{
          left: k.left + 'px',
          width: k.isBlack ? blackWidth + 'px' : whiteWidth + 'px',
        }"
        :class="{ isBlack: k.isBlack, active: quoteCode == k.midiCode }"
        v-for="(k, index) in quoteArray"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
// import { Vex } from "vexflow";
import keyboardJS from "keyboardjs";
import { PITCH, VOICE } from "@/utils/midiCode";
//61键钢琴
const keyCodeMap = [
  ["1", "2", "3", "4", "5", "6", "7"], //1234567  -----C2
  ["8", "9", "0", "q", "w", "e", "r"], //890qwer  -----C3
  ["t", "y", "u", "i", "o", "p", "a"], //tyuiopa  -----C4
  ["s", "d", "f", "g", "h", "j", "k"], //sdfghjk -----C5
  ["l", "z", "x", "c", "v", "b", "n"], //lzxcvbn -----C6
  ["m"], //m -----C7
];
export default {
  name: "PianoPanel",
  components: {},
  data() {
    const instrumentCode =
      parseInt(localStorage.getItem("instrumentCode")) || 1;
    const width = document.documentElement.clientWidth || document.body.width;
    const whiteWidth = width / 52;
    const blackWidth = whiteWidth / 1.5;
    return {
      quoteTipShow: true,
      showKeyboardMap: true,
      whiteWidth,
      blackWidth,
      quoteCode: -1,
      quoteInterval: 0.1,
      pianoKeyNumber: 88,
      instrumentCode,
      quoteArray: [],
    };
  },

  mounted() {
    this.midiInstrumentLoad(this.instrumentCode);
    this.bindKeyDown();
    this.initQuote();
    keyboardJS.bind("a + b", (e) => {
      console.log("a and b is pressed" + e);
    });
  },
  methods: {
    initQuote() {
      const result = [];
      const LEFT = [0, 2 / 3, 1, 5 / 3, 2, 3, 11 / 3, 4, 14 / 3, 5, 17 / 3, 6];
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 12; j++) {
          const isBlack = j == 1 || j == 3 || j == 6 || j == 8 || j == 10;
          let left = this.whiteWidth * (LEFT[j] + i * 7);
          result.push({
            isBlack,
            pitchName: PITCH[j],
            voiceName: VOICE[j],
            midiCode: 12 * (i + 3) + j,
            left: left,
          });
        }
      }
      result.splice(result.length - 11, 11);

      console.log(result);
      this.quoteArray = result;
    },
    midiInstrumentLoad(code) {
      MIDI.loadPlugin({
        soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",
        instrument: code,
        onsuccess: () => {
          console.log("Tabla loaded as instrument " + code);
          MIDI.programChange(0, code); // Load xylophone into Channel 0
        },
      });
    },
    bindKeyDown() {
      document.body.onkeydown = (e) => {
        console.log(e.key);
        e.preventDefault();
        for (let i = 0; i < keyCodeMap.length; i++) {
          for (let j = 0; j < keyCodeMap[i].length; j++) {
            if (keyCodeMap[i][j] == e.key) {
              let quote;
              if (i == keyCodeMap.length - 1) {
                quote = 96; //C7
              } else {
                if (j == 0) {
                  quote = (i + 3) * 12 + 0; //C
                } else if (j == 1) {
                  quote = (i + 3) * 12 + 2; //D
                } else if (j == 2) {
                  quote = (i + 3) * 12 + 4; //E
                } else if (j == 3) {
                  quote = (i + 3) * 12 + 5; //F
                } else if (j == 4) {
                  quote = (i + 3) * 12 + 7; //G
                } else if (j == 5) {
                  quote = (i + 3) * 12 + 9; //A
                } else if (j == 6) {
                  quote = (i + 3) * 12 + 11; //B
                }
              }
              this.playQuote(quote);
            }
          }
        }
      };
    },
    playQuote(quote) {
      this.quoteCode = quote;
      // MIDI.programChange(0, this.activeInstrumentCode); // Load xylophone into Channel 0
      MIDI.noteOn(0, quote, 127);
      MIDI.noteOff(0, quote, this.quoteInterval);

      let timer = setTimeout(() => {
        this.quoteCode = 0;
        clearTimeout(timer);
      }, this.quoteInterval * 1000);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 0;
}
.piano {
  position: relative;
  .piano-key {
    position: absolute;
    cursor: pointer;
    height: 180px;
    width: 26px;
    // background: rgba(255, 255, 255, 0.3);
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.8);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: none;
    box-sizing: border-box;
    box-shadow: /*inset  3px 0  10px  #c9c6c6,*/ inset 3px -5px 0 #00000023;
    text-align: center;
    display: table-cell;
    vertical-align: bottom;
    &:active,
    &.active {
      box-shadow: inset 3px -2px 0 #00000036;
      background: linear-gradient(
        45deg,
        rgba(8, 107, 239, 0.5),
        rgba(255, 255, 255, 0.7)
      );
    }
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-right: 1px solid;
      border-color: rgba(0, 0, 0, 0.8);
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    &.isBlack {
      z-index: 999;
      cursor: pointer;
      height: 120px;
      width: 17px;
      background-color: #000;
      border-bottom-left-radius: 5.5px;
      border-bottom-right-radius: 5.5px;
      box-shadow: inset 5px -7px 0 #2c2c2c;
      position: absolute;
      top: 0;
      left: 18px;
      z-index: 999;
      &:hover {
        background: linear-gradient(45deg, #4c4c4c, #444444);
      }
      &:active,
      &.active {
        box-shadow: inset 3px -5px 0 #2c2c2c;
        background: linear-gradient(45deg, #4c4c4c, #666);
      }
    }
  }
}
</style>
