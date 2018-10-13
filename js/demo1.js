new Vue({
    el:"#vue-app",
    data:{
        health:100,
        ended:false
    },
    methods:{
        knock:function(){
            console.log("knocking……");
            this.health = this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        reset:function(){
            console.log("reseting……")
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{

    }
});