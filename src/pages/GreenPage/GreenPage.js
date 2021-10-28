export default {
    data() {
      return {
        time: 15,
        currentTimerTime: 15,
        activeColor: false,
        timeFlashing: 3,
        greenTimeout: ''
      }
    },
    methods: {
      changeToYellow(time) {
        this.greenTimeout = setTimeout(() => {
          if (this.$route.name == 'Green') {
            this.$router.push({name: 'Yellow', path: '/yellow', params: { Pid: 'red'}})
          } 
        }, time * 1000)
      },
      flashingGreen() {
        setInterval(() => {
              this.activeColor = !this.activeColor
        }, 500);
      },
      timerGreen() {
        let flashing = false
        const intervalId = setInterval(() => {
        if (this.$route.name == 'Green') {
          this.currentTimerTime -= 1
          localStorage.curTTG = this.currentTimerTime
          if (this.currentTimerTime <= this.timeFlashing && !flashing) {
            this.flashing = true
            this.flashingGreen()
          }
          if (this.currentTimerTime == 0) {
            localStorage.curTTG = this.time
            clearInterval(intervalId)
          }
        }
      }, 1000);
      }
    },
    mounted: function() {
      localStorage.curTTY = 3
      localStorage.curTTR = 10
      localStorage.lPid = 'red'
      if (this.currentTimerTime > localStorage.curTTG) {
        this.currentTimerTime = localStorage.curTTG 
        this.changeToYellow(localStorage.curTTG)
      }
      else {
        this.changeToYellow(this.time)
      }
      this.timerGreen()
    },
    computed: {
      timerTime(){ 
        return this.currentTimerTime
      }
    },
    beforeDestroy() {
      if (this.greenTimeout) {
        clearTimeout(this.greenTimeout);
      }
    }
  }