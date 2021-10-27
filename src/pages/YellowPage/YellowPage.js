export default {
  props: ['Pid'],
  data() {
    return {
      time: 3000,
      currentTimerTime: 3,
      activeColor: false,
      flashing: false,
      timeFlashing: 3
    }
  },
  methods: {
    changeToColor() {
      setTimeout(() => { this.$router.push({path: '/' + (!this.Pid ? localStorage.lPid : this.Pid)}) }, this.time)
    },
    flashingYellow() {
      setInterval(() => {
            this.activeColor = !this.activeColor
      }, 500);
    },
    timerYellow() {
      const intervalId = setInterval(() => {
        this.currentTimerTime -= 1
        if (this.currentTimerTime <= this.timeFlashing && !this.flashing) {
          this.flashing = true
          this.flashingYellow()
        }
        if (this.currentTimerTime == 0) {
          clearInterval(intervalId)
        }
      }, 1000);
    }
  },
  mounted: function() {
    this.changeToColor()
    this.timerYellow()
  },
  computed: {
    timerTime(){ 
      return this.currentTimerTime
    }
  }
    
}