export default {
    computed: {
        isRed() {
            return (this.$route.name == 'Red')
        },
        isYellow() {
            return (this.$route.name == 'Yellow')
        },
        isGreen() {
            return (this.$route.name == 'Green')
        }
    }
}