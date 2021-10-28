import { HelloWorldComponent } from '@/components'

export default {
  components: {
      HelloWorldComponent
    },
  data() {
    return {
      time: 10,
      currentTimerTime: 10,
      activeColor: false,
      timeFlashing: 3,
      redTimeout: ''
    }
  },
  methods: {
    changeToYellow(time) {
      this.redTimeout = setTimeout(() => {
        if (this.$route.name == 'Red') {
          this.$router.push({name: 'Yellow', path: '/yellow', params: { Pid: 'green'}}) 
        } 
      }, time * 1000)
    },
    flashingRed() {
      setInterval(() => {
            this.activeColor = !this.activeColor
      }, 500);
    },
    timerRed() {
      let flashing = false
      const intervalId = setInterval(() => {
        if (this.$route.name == 'Red') {
          this.currentTimerTime -= 1
          localStorage.curTTR = this.currentTimerTime
          if (this.currentTimerTime <= this.timeFlashing && !flashing) {
            this.flashing = true
            this.flashingRed()
          }
          if (this.currentTimerTime == 0) {
            localStorage.curTTR = this.time
            clearInterval(intervalId)
          }
        }
      }, 1000);
    }
  },
  mounted: function() {
    localStorage.curTTY = 3
    localStorage.curTTG = 15
    localStorage.lPid = 'green'
    if (this.currentTimerTime > localStorage.curTTR) {
      this.currentTimerTime = localStorage.curTTR 
      this.changeToYellow(localStorage.curTTR)
    }
    else {
      this.changeToYellow(this.time)
    }
    this.timerRed()
  },
  computed: {
    timerTime(){ 
      return this.currentTimerTime
    }
  },
  beforeDestroy() {
    if (this.redTimeout) {
      clearTimeout(this.redTimeout);
    }
  }
    
}