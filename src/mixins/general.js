var generalMixins = {
    data() {
        return {
            config: 'From mixins',
            isTyping: false
        }
    },
    watch: {
        config(oldVal, newVal) {
            console.log(oldVal, newVal);
            this.isTyping = true;
            setTimeout(() => {
                this.isTyping = false;
            }, 1000);
        }
    }
}
export default generalMixins