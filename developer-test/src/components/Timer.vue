<template>
  <div class="container">
    <div class="timer">
      <h1>计时:{{ time }}</h1>
      <div>
        <el-button type="primary" @click="hanldeStart" :disabled="statusType == 1">
          {{ statusType == 2 ? "继续" : "开始" }}
        </el-button>
        <el-button type="primary" @click="hanldePause" :disabled="statusType != 1">暂停</el-button>
        <el-button type="primary" @click="hanldeReset" :disabled="statusType == 1">重置</el-button>
      </div>
    </div>
    <h3>计时列表 (共{{ countList.length }}次)</h3>
    <el-table :data="countList" style="width: 100%; border-radius: 10px">
      <el-table-column prop="time" label="计时时间">
        <template slot="default" slot-scope="scope">
          {{ formatTime(scope.row.time) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import moment from "moment";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Timer",
  data() {
    return {
      statusType: 0, //0默认 1开始 2暂停
    };
  },
  computed: mapState({
    count: (state) => state.count,
    countDownTime: (state) => state.countDownTime,
    countList: (state) => state.countList,
    time: function () {
      return this.formatTime(this.countDownTime);
    },
  }),

  mounted() {},
  methods: {
    ...mapMutations(["setHour", "setMinute", "setSecond"]),
    ...mapActions(["startTiming", "pauseTiming", "continueTiming", "resetTiming"]),
    hanldeStart() {
      this.statusType = 1;
      this.startTiming();
    },
    hanldePause() {
      this.statusType = 2;
      this.pauseTiming();
    },
    hanldeReset() {
      this.statusType = 0;
      this.resetTiming();
    },
    formatTime(time) {
      const COUNT_DOWN_TIME = time;
      let h = 0;
      let m = 0;
      let s = 0;
      h = parseInt(COUNT_DOWN_TIME / 3600);
      m = parseInt((COUNT_DOWN_TIME % 3600) / 60);
      s = parseInt(((COUNT_DOWN_TIME % 3600) % 60) % 60);
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      return h.toString() + ":" + m.toString() + ":" + s.toString();
    },
  },
};
</script>
<style scoped>
.container {
  width: 30vw;
  height: 60vh;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 10px 50px rgb(181 108 108);
}
.countList {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
