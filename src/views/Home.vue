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

    <div class="piano">
      <ul class="octave first" :style="octaveSingleStyle">
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: 21 == quoteCode }"
            @click="clickKey(0, 21)"
          ></div>
          <p class="black-key" :style="blackStyle" @click="clickKey(0, 22)"></p>
          <span
            @click="clickKey(0, 21)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >A</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">/</span>
        </li>
      </ul>

      <ul class="octave second" :style="octaveSingleStyle">
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: 23 == quoteCode }"
            @click="clickKey(0, 23)"
          ></div>
          <span
            @click="clickKey(0, 23)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >B</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">*</span>
        </li>
      </ul>

      <!--七个八度 -->
      <ul v-for="i in 7" :key="i" class="octave" :style="octaveStyle">
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 0 == quoteCode }"
            @click="clickKey(i + 1, 0)"
          ></div>
          <p
            class="black-key"
            :style="blackStyle"
            @click="clickKey(i + 1, 1)"
          ></p>
          <span
            @click="clickKey(i + 1, 0)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >C{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][0]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 2 == quoteCode }"
            @click="clickKey(i + 1, 2)"
          ></div>
          <p
            class="black-key"
            :style="blackStyle"
            @click="clickKey(i + 1, 3)"
          ></p>
          <span
            @click="clickKey(i + 1, 2)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >D{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][1]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 4 == quoteCode }"
            @click="clickKey(i + 1, 4)"
          ></div>
          <span
            @click="clickKey(i + 1, 4)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >E{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][2]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 5 == quoteCode }"
            @click="clickKey(i + 1, 5)"
          ></div>
          <p
            class="black-key"
            :style="blackStyle"
            @click="clickKey(i + 1, 6)"
          ></p>
          <span
            @click="clickKey(i + 1, 5)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >F{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][3]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 7 == quoteCode }"
            @click="clickKey(i + 1, 7)"
          ></div>
          <p
            class="black-key"
            :style="blackStyle"
            @click="clickKey(i + 1, 8)"
          ></p>
          <span
            @click="clickKey(i + 1, 7)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >G{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][4]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 9 == quoteCode }"
            @click="clickKey(i + 1, 9)"
          ></div>
          <p
            class="black-key"
            :style="blackStyle"
            @click="clickKey(i + 1, 10)"
          ></p>
          <span
            @click="clickKey(i + 1, 9)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >A{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][5]
          }}</span>
        </li>
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: (i + 1) * 12 + 11 == quoteCode }"
            @click="clickKey(i + 1, 11)"
          ></div>
          <span
            @click="clickKey(i + 1, 11)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >B{{ i }}</span
          >
          <span :class="{ hide: !showKeyboardMap }" class="keyboard-p">{{
            keyboardMap[i - 1][6]
          }}</span>
        </li>
      </ul>
      <!-- 最后一个单C -->
      <ul class="octave last" :style="octaveSingleStyle">
        <li class="key-group">
          <div
            class="white-key"
            :style="whiteStyle"
            :class="{ white_active: 108 == quoteCode }"
            @click="clickKey(8, 1)"
          ></div>
          <span
            @click="clickKey(8, 1)"
            :class="{ hide: !quoteTipShow }"
            class="quote-p"
            >C8</span
          >
        </li>

        <span :class="{ hide: !showKeyboardMap }" class="keyboard-p"
          ><img src="@/assets/images/enter.png"
        /></span>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
// import { Vex } from "vexflow";
import { midi128Instrument } from "@/utils/midiCode";
export default {
  name: "Home",
  components: {},
  data() {
    const instrumentCode =
      parseInt(localStorage.getItem("instrumentCode")) || 1;
    const instrumentLabel =
      localStorage.getItem("instrumentLabel") || "acoustic_grand_piano";
    const width = document.documentElement.clientWidth || document.body.width;
    return {
      quoteTipShow: true,
      showKeyboardMap: true,
      whiteWidth: width / 52,
      quoteCode: 0,
      quoteInterval: 0.1,
      keyboardMap: [
        ["①", "②", "③", "④", "⑤", "⑥", "⑦"],
        ["a", "s", "d", "f", "g", "h", "j"],
        ["z", "x", "c", "v", "b", "n", "m"],
        ["1", "2", "3", "4", "5", "6", "7"],
        ["8", "9", "0", "-", "=", "←", "|"],
        ["q", "w", "e", "r", "t", "y", "u"],
        ["i", "o", "p", "[", "]", "k", "l"],
      ],
      midi128Instrument,
      flatInstrument: {},
      instrumentCode,
      instrumentLabel,
    };
  },

  mounted() {
    this.initInstrumentOptions();
    this.midiInstrumentLoad(this.instrumentCode);
    this.bindKeyDown();
  },
  methods: {
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
    handleChange(code) {
      // const label = this.flatInstrument[code];
      // localStorage.setItem("instrumentLabel", label);
      localStorage.setItem("instrumentCode", code);
      location.reload();
    },
    midiInstrumentLoad(code) {
      MIDI.loadPlugin({
        soundfontUrl: "https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",
        instrument: code,
        // callback: function () {
        //   console.log("Tabla loaded as instrument " + iLabel);
        //   MIDI.noteOn(0, 100, 127, 0); // plays note once loaded
        // },
        onsuccess: () => {
          console.log("Tabla loaded as instrument " + code);
          MIDI.programChange(0, code); // Load xylophone into Channel 0

          // MIDI.programChange(0, this.instrumentCode); // Load xylophone into Channel 0
          // MIDI.noteOn(0, 60, 127); // Play middle C on Channel 0
          // MIDI.noteOff(0, 60, 0.5); // Release the middle C after 0.5 seconds
        },
      });
    },
    bindKeyDown() {
      const keyCodeMap = [
        [111, 106], // 小键盘:/*  -----A0
        [97, 98, 99, 100, 101, 102, 103], //小键盘1234567 -----C1
        [65, 83, 68, 70, 71, 72, 74], //asdfghj -----C2
        [90, 88, 67, 86, 66, 78, 77], //zxcvbnm -----C3
        [49, 50, 51, 52, 53, 54, 55], //1234567  -----C4
        [56, 57, 48, 189, 187, 8, 220], //890-=Backspace\  -----C5
        [81, 87, 69, 82, 84, 89, 85], //qwertyu  -----C6
        [73, 79, 80, 219, 221, 75, 76], //iop[]kl -----C7
        [13], //Enter -----C8
      ];
      document.body.onkeydown = (e) => {
        for (let i = 0; i < keyCodeMap.length; i++) {
          for (let j = 0; j < keyCodeMap[i].length; j++) {
            if (keyCodeMap[i][j] == e.keyCode) {
              let quote;
              if (i == 0) {
                if (j == 0) {
                  quote = 21; //A
                } else if (j == 1) {
                  quote = 23; //B
                }
              } else if (i > 0 && i < 8) {
                if (j == 0) {
                  quote = (i + 1) * 12 + 0; //C
                } else if (j == 1) {
                  quote = (i + 1) * 12 + 2; //D
                } else if (j == 2) {
                  quote = (i + 1) * 12 + 4; //E
                } else if (j == 3) {
                  quote = (i + 1) * 12 + 5; //F
                } else if (j == 4) {
                  quote = (i + 1) * 12 + 7; //G
                } else if (j == 5) {
                  quote = (i + 1) * 12 + 9; //A
                } else if (j == 6) {
                  quote = (i + 1) * 12 + 11; //B
                }
              } else {
                quote = 108; //C
              }
              this.playQuote(quote);
            }
          }
        }
      };
    },
    clickKey(scale, quoteIndex) {
      const quote = scale * 12 + quoteIndex; //转换成midi音符代码
      console.log(quote);
      this.playQuote(quote);
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
    // play(instrument) {
    //   MIDI.programChange(0, instrument); // Load xylophone into Channel 0
    //   // MIDI.noteOn(0, 60, 127); // Play middle C on Channel 0
    //   MIDI.chordOn(0, [60, 64, 67], 127);
    //   MIDI.chordOff(0, [60, 64, 67], 0.5);
    // },
  },
  computed: {
    whiteStyle: function () {
      return {
        width: this.whiteWidth + "px",
      };
    },
    blackStyle: function () {
      const width = this.whiteWidth / 1.5;
      return {
        width: width + "px",
        left: width + 1 + "px",
      };
    },
    //包含1个白键
    octaveSingleStyle: function () {
      return {
        width: this.whiteWidth + "px",
      };
    },
    //中间部分正常的八度-7个白键
    octaveStyle: function () {
      return {
        width: this.whiteWidth * 7 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 0;
}
/*-------钢琴部分--------*/
div.piano {
  width: 100%;
  height: 360px;
}
ul.octave {
  float: left;
  padding: 0;
  width: 182px;
  height: 360px;
  &.first,
  &.second {
    width: 52px;
    li.key-group {
      display: flex;
    }
  }
  &.last {
    width: 28px;
  }
}
li.key-group {
  float: left;
  list-style-type: none;
  position: relative;
}

li.key-group .keyboard-p {
  display: inline-block;
  margin: auto;
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translate(-50%, 0);
  color: #244ec5;
  opacity: 1;
  transition: all 0.2s;
  user-select: none;
  &.hide {
    opacity: 0;
  }
}

li.key-group .quote-p {
  display: inline-block;
  margin: auto;
  position: absolute;
  left: 50%;
  bottom: 6px;
  transform: translate(-50%, 0);
  color: #244ec5;
  opacity: 1;
  transition: all 0.2s;
  font-size: 10px;
  user-select: none;
  cursor: pointer;
  &.hide {
    opacity: 0;
  }
}
li.key-group > .white-key {
  cursor: pointer;
  height: 180px;
  width: 26px;
  // background: rgba(255, 255, 255, 0.3);
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-right: none; //**test */
  box-sizing: border-box;
  box-shadow: /*inset  3px 0  10px  #c9c6c6,*/ inset 3px -5px 0 #00000023;
  text-align: center;
  display: table-cell;
  vertical-align: bottom;
}
li.key-group:not(:last-child) > .white-key {
  // border-right: none;
}
/* 当白键按下时的样式 */
li.key-group > .white-key:active {
  box-shadow: inset 3px -2px 0 #00000036;
  background: linear-gradient(
    45deg,
    rgba(8, 107, 239, 0.5),
    rgba(255, 255, 255, 0.7)
  );
}

.white_active {
  box-shadow: inset 3px -2px 0 #00000036;
  background: linear-gradient(
    45deg,
    rgba(8, 107, 239, 0.5),
    rgba(255, 255, 255, 0.4)
  );
}

li.key-group > .black-key {
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
}
li.key-group > .black-key:hover {
  background: linear-gradient(45deg, #4c4c4c, #444444);
}
/* 当黑键按下时的样式 */
li.key-group > .black-key:active {
  box-shadow: inset 3px -5px 0 #2c2c2c;
  background: linear-gradient(45deg, #4c4c4c, #666);
}

.black_active {
  box-shadow: inset 3px -5px 0 #2c2c2c;
}

ul.octave:last-child li.key-group:last-child > .white-key {
  border-right: 1px solid;
  border-color: rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
