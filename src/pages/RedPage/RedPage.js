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
      timeFlashing: 3
    }
  },
  methods: {
    changeToYellow(time) {
      setTimeout(() => { this.$router.push({name: 'Yellow', path: '/yellow', params: { Pid: 'green'}}) }, time * 1000)
    },
    flashingRed() {
      setInterval(() => {
            this.activeColor = !this.activeColor
      }, 500);
    },
    timerRed() {
      let flashing = false
      const intervalId = setInterval(() => {
        this.currentTimerTime -= 1
        localStorage.curTT = this.currentTimerTime
        if (this.currentTimerTime <= this.timeFlashing && !flashing) {
          this.flashing = true
          this.flashingRed()
        }
        if (this.currentTimerTime == 0) {
          localStorage.curTT = this.time
          clearInterval(intervalId)
        }
      }, 1000);
    }
  },
  mounted: function() {
    localStorage.lPid = 'green'
    if (this.currentTimerTime > localStorage.curTT) {
      this.currentTimerTime = localStorage.curTT 
      this.changeToYellow(localStorage.curTT)
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
  }
    
}