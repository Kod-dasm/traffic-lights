export default {
    data() {
      return {
        time: 15000,
        currentTimerTime: 15,
        activeColor: false,
        flashing: false,
        timeFlashing: 3
      }
    },
    methods: {
      changeToYellow() {
        setTimeout(() => { this.$router.push({name: 'Yellow', path: '/yellow', params: { Pid: 'red'}}) }, this.time)
      },
      flashingGreen() {
        setInterval(() => {
              this.activeColor = !this.activeColor
        }, 500);
      },
      timerGreen() {
        const intervalId = setInterval(() => {
          this.currentTimerTime -= 1
          if (this.currentTimerTime <= this.timeFlashing && !this.flashing) {
            this.flashing = true
            this.flashingGreen()
          }
          if (this.currentTimerTime == 0) {
            clearInterval(intervalId)
          }
        }, 1000);
      }
    },
    mounted: function() {
      localStorage.lPid = 'red'
      this.changeToYellow()
      this.timerGreen()
    },
    computed: {
      timerTime(){ 
        return this.currentTimerTime
      }
    }
      
  }