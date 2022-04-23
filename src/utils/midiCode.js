export const midi128Instrument = [
  {
    label: "Piano",
    label_cn: "钢琴",
    children: [
      { label: "acoustic_grand_piano", label_cn: "原音钢琴", code: 1 },
      { label: "bright_acoustic_piano", label_cn: "明亮的钢琴", code: 2 },
      { label: "electric_grand_piano", label_cn: "电钢琴", code: 3 },
      { label: "honkytonk_piano", label_cn: "酒吧钢琴", code: 4 },
      { label: "electric_piano_1", label_cn: "电钢琴1", code: 5 },
      { label: "electric_piano_2", label_cn: "电钢琴2", code: 6 },
      { label: "harpsichord", label_cn: "大键琴", code: 7 },
      { label: "clavinet", label_cn: "电翼琴", code: 8 },
    ],
  },
  {
    label: "Chromatic Percussion",
    label_cn: "固定音高敲击乐器",
    children: [
      { label: "celesta", label_cn: "钢片琴", code: 9 },
      { label: "glockenspiel", label_cn: "钟琴", code: 10 },
      { label: "music_box", label_cn: "音乐盒", code: 11 },
      { label: "vibraphone", label_cn: "颤音琴", code: 12 },
      { label: "marimba", label_cn: "马林巴琴", code: 13 },
      { label: "xylophone", label_cn: "木琴", code: 14 },
      { label: "tubular_bells", label_cn: "管钟", code: 15 },
      { label: "dulcimer", label_cn: "洋琴", code: 16 },
    ],
  },

  {
    label: "Organ",
    label_cn: "风琴",
    children: [
      { label: "drawbar_organ", label_cn: "音栓风琴", code: 17 },
      { label: "percussive_organ", label_cn: "敲击风琴", code: 18 },
      { label: "rock_organ", label_cn: "摇滚风琴", code: 19 },
      { label: "church_organ", label_cn: "教堂管风琴", code: 20 },
      { label: "reed_organ", label_cn: "簧风琴", code: 21 },
      { label: "accordion", label_cn: "手风琴", code: 22 },
      { label: "harmonica", label_cn: "口琴", code: 23 },
      { label: "tango_accordion", label_cn: "探戈手风琴", code: 24 },
    ],
  },
  {
    label: "Guitar",
    label_cn: "吉他",
    children: [
      {
        label: "acoustic_guitar_nylon",
        label_cn: "木吉他（尼龙弦）",
        code: 25,
      },
      { label: "acoustic_guitar_steel", label_cn: "木吉他（钢弦）", code: 26 },
      { label: "electric_guitar_jazz", label_cn: "电吉他（爵士）", code: 27 },
      { label: "electric_guitar_clean", label_cn: "电吉他（清音）", code: 28 },
      { label: "electric_guitar_muted", label_cn: "电吉他（闷音）", code: 29 },
      { label: "overdriven_guitar", label_cn: "电吉他（驱动音效）", code: 30 },
      { label: "distortion_guitar", label_cn: "电吉他（失真音效）", code: 31 },
      { label: "guitar_harmonics", label_cn: "吉他泛音", code: 32 },
    ],
  },

  {
    label: "Bass",
    label_cn: "贝斯",
    children: [
      { label: "acoustic_bass", label_cn: "贝斯", code: 33 },
      { label: "electric_bass_finger", label_cn: "电贝斯（指奏）", code: 34 },
      { label: "electric_bass_pick", label_cn: "电贝斯（拨奏）", code: 35 },
      { label: "fretless_bass", label_cn: "无品贝斯", code: 36 },
      { label: "slap_bass_1", label_cn: "捶鈎贝斯1", code: 37 },
      { label: "slap_bass_2", label_cn: "捶鈎贝斯2", code: 38 },
      { label: "synth_bass_1", label_cn: "合成贝斯1", code: 39 },
      { label: "synth_bass_2", label_cn: "合成贝斯2", code: 40 },
    ],
  },

  {
    label: "Strings",
    label_cn: "弦乐器",
    children: [
      { label: "violin", label_cn: "小提琴", code: 41 },
      { label: "viola", label_cn: "中提琴", code: 42 },
      { label: "cello", label_cn: "大提琴", code: 43 },
      { label: "contrabass", label_cn: "低音大提琴", code: 44 },
      { label: "tremolo_strings", label_cn: "颤弓弦乐", code: 45 },
      { label: "pizzicato_strings", label_cn: "弹拨弦乐", code: 46 },
      { label: "orchestral_harp", label_cn: "竖琴", code: 47 },
      { label: "timpani", label_cn: "定音鼓", code: 48 },
    ],
  },

  {
    label: "Ensemble",
    label_cn: "合奏",
    children: [
      { label: "string_ensemble_1", label_cn: "弦乐合奏1", code: 49 },
      { label: "string_ensemble_2", label_cn: "弦乐合奏2", code: 50 },
      { label: "synth_strings_1", label_cn: "合成弦乐1", code: 51 },
      { label: "synth_strings_2", label_cn: "合成弦乐2", code: 52 },
      { label: "choir_aahs", label_cn: "人声“啊”", code: 53 },
      { label: "voice_oohs", label_cn: "人声“喔”", code: 54 },
      { label: "synth_choir", label_cn: "合成人声", code: 55 },
      { label: "orchestra_hit", label_cn: "交响打击乐", code: 56 },
    ],
  },

  {
    label: "Brass",
    label_cn: "铜管乐器",
    children: [
      { label: "trumpet", label_cn: "小号", code: 57 },
      { label: "trombone", label_cn: "长号", code: 58 },
      { label: "tuba", label_cn: "大号（吐巴号、低音号）", code: 59 },
      { label: "muted_trumpet", label_cn: "闷音小号", code: 60 },
      { label: "french_horn", label_cn: "法国号（圆号）", code: 61 },
      { label: "brass_section", label_cn: "铜管乐", code: 62 },
      { label: "synth_brass_1", label_cn: "合成铜管1", code: 63 },
      { label: "synth_brass_2", label_cn: "合成铜管2", code: 64 },
    ],
  },

  {
    label: "Reed",
    label_cn: "簧乐器",
    children: [
      { label: "soprano_sax", label_cn: "高音萨克斯风", code: 65 },
      { label: "alto_sax", label_cn: "中音萨克斯风", code: 66 },
      { label: "tenor_sax", label_cn: "次中音萨克斯风", code: 67 },
      { label: "baritone_sax", label_cn: "上低音萨克斯风", code: 68 },
      { label: "oboe", label_cn: "双簧管", code: 69 },
      { label: "english_horn", label_cn: "英国管", code: 70 },
      { label: "bassoon", label_cn: "低音管（巴颂管）", code: 71 },
      { label: "clarinet", label_cn: "单簧管（黑管、竖笛）", code: 72 },
    ],
  },
  {
    label: "Pipe",
    label_cn: "吹管乐器",
    children: [
      { label: "piccolo", label_cn: "短笛", code: 73 },
      { label: "flute", label_cn: "长笛", code: 74 },
      { label: "recorder", label_cn: "竖笛", code: 75 },
      { label: "pan_flute", label_cn: "排笛", code: 76 },
      { label: "blown_bottle", label_cn: "瓶笛", code: 77 },
      { label: "shakuhachi", label_cn: "尺八", code: 78 },
      { label: "whistle", label_cn: "哨子", code: 79 },
      { label: "ocarina", label_cn: "陶笛", code: 80 },
    ],
  },

  {
    label: "Synth Lead",
    label_cn: "合成音主旋律",
    children: [
      { label: "lead_1_square", label_cn: "方波", code: 81 },
      { label: "lead_2_sawtooth", label_cn: "锯齿波", code: 82 },
      { label: "lead_3_calliope", label_cn: "汽笛风琴", code: 83 },
      { label: "lead_4_chiff", label_cn: "排笛合成吹管", code: 84 },
      { label: "lead_5_charang", label_cn: "合成电吉他", code: 85 },
      { label: "lead_6_voice", label_cn: "人声键盘", code: 86 },
      { label: "lead_7_fifths", label_cn: "五度音", code: 87 },
      { label: "lead_8_bass__lead", label_cn: "贝斯吉他合奏", code: 88 },
    ],
  },

  {
    label: "Synth Pad",
    label_cn: "合成音和弦衬底",
    children: [
      { label: "pad_1_new_age", label_cn: "新世纪", code: 89 },
      { label: "pad_2_warm", label_cn: "温暖", code: 90 },
      { label: "pad_3_polysynth", label_cn: "多重合音", code: 91 },
      { label: "pad_4_choir", label_cn: "人声合唱", code: 92 },
      { label: "pad_5_bowed", label_cn: "玻璃", code: 93 },
      { label: "pad_6_metallic", label_cn: "金属", code: 94 },
      { label: "pad_7_halo", label_cn: "光华", code: 95 },
      { label: "pad_8_sweep", label_cn: "扫掠", code: 96 },
    ],
  },

  {
    label: "Synth Effects",
    label_cn: "合成音效果",
    children: [
      { label: "fx_1_rain", label_cn: "雨", code: 97 },
      { label: "fx_2_soundtrack", label_cn: "电影音效", code: 98 },
      { label: "fx_3_crystal", label_cn: "水晶", code: 99 },
      { label: "fx_4_atmosphere", label_cn: "气氛", code: 100 },
      { label: "fx_5_brightness", label_cn: "明亮", code: 101 },
      { label: "fx_6_goblins", label_cn: "魅影", code: 102 },
      { label: "fx_7_echoes", label_cn: "回音", code: 103 },
      { label: "fx_8_scifi", label_cn: "科幻", code: 104 },
    ],
  },

  {
    label: "Ethnic",
    label_cn: "民族乐器",
    children: [
      { label: "sitar", label_cn: "西塔琴", code: 105 },
      { label: "banjo", label_cn: "五弦琴", code: 106 },
      { label: "shamisen", label_cn: "三味线", code: 107 },
      { label: "koto", label_cn: "十三弦琴", code: 108 },
      { label: "kalimba", label_cn: "卡林巴铁片琴", code: 109 },
      { label: "bagpipe", label_cn: "苏格兰风笛", code: 110 },
      { label: "fiddle", label_cn: "古提琴", code: 111 },
      { label: "shanai", label_cn: "兽笛", code: 112 },
    ],
  },

  {
    label: "Percussive",
    label_cn: "打击乐器",
    children: [
      { label: "tinkle_bell", label_cn: "叮当铃", code: 113 },
      { label: "agogo", label_cn: "阿哥哥鼓", code: 114 },
      { label: "steel_drums", label_cn: "钢鼓", code: 115 },
      { label: "woodblock", label_cn: "木鱼", code: 116 },
      { label: "taiko_drum", label_cn: "太鼓", code: 117 },
      { label: "melodic_tom", label_cn: "定音筒鼓", code: 118 },
      { label: "synth_drum", label_cn: "合成鼓", code: 119 },
      { label: "reverse_cymbal", label_cn: "逆转钹声", code: 120 },
    ],
  },

  {
    label: "Sound effects",
    label_cn: "特殊音效",
    children: [
      { label: "guitar_fret_noise", label_cn: "吉他滑弦杂音", code: 121 },
      { label: "breath_noise", label_cn: "呼吸杂音", code: 122 },
      { label: "seashore", label_cn: "海岸", code: 123 },
      { label: "bird_tweet", label_cn: "鸟鸣", code: 124 },
      { label: "telephone_ring", label_cn: "电话铃声", code: 125 },
      { label: "helicopter", label_cn: "直升机", code: 126 },
      { label: "applause", label_cn: "拍手", code: 127 },
      { label: "gunshot", label_cn: "枪声", code: 128 },
    ],
  },
];

export default {
  midi128Instrument,
};