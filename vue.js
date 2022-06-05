Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        
    },
    computed: {
        image(){
            return this.images[this.selectVariant].image
        }
    }
}).mount('#app')