new Vue({
    el:"#vue-app",
    data:{
        changeColor:false,
        changeLength:false
    },
    methods:{

    },
    computed:{
        computeClass:function(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});