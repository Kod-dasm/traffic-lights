export default {
  props: ['Pid'],
  data() {
    return {
      time: 3,
      currentTimerTime: 3,
      activeColor: false,
      timeFlashing: 3,
      yellowTimeout: ''
    }
  },
  methods: {
    changeToColor(time) {
      this.yellowTimeout = setTimeout(() => {
        if (this.$route.name == 'Yellow') {
          this.$router.push({path: '/' + (!this.Pid ? localStorage.lPid : this.Pid)})
        } 
      }, time * 1000)
    },
    flashingYellow() {
      setInterval(() => {
            this.activeColor = !this.activeColor
      }, 500);
    },
    timerYellow() {
      let flashing = false
      const intervalId = setInterval(() => {
        if (this.$route.name == 'Yellow') {
          this.currentTimerTime -= 1
          localStorage.curTTY = this.currentTimerTime
          if (this.currentTimerTime <= this.timeFlashing && !flashing) {
            this.flashing = true
            this.flashingYellow()
          }
          if (this.currentTimerTime == 0) {
            localStorage.curTTY = this.time
            clearInterval(intervalId)
          }
        }
      }, 1000);
    }
  },
  mounted: function() {
    localStorage.curTTR = 10
    localStorage.curTTG = 15
    if (this.currentTimerTime > localStorage.curTTY) {
      this.currentTimerTime = localStorage.curTTY 
      this.changeToColor(localStorage.curTTY)
    }
    else {
      this.changeToColor(this.time)
    }
    this.timerYellow()
  },
  computed: {
    timerTime(){ 
      return this.currentTimerTime
    }
  },
  beforeDestroy() {
    if (this.yellowTimeout) {
      clearTimeout(this.yellowTimeout);
    }
  }
    
}