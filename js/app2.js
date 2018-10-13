var input = new Vue({
    el: "#input",
    data:{
        name:"",
        age:""
    },
    methods:{
        inputName:function(){
            // console.log("正在输入姓名");
            this.name = this.$refs._name.value;
        },
        inputAge:function(age){
            // console.log("正在输入年龄");
            this.age = this.$refs._age.value;
        }
    }
});

var input2 = new Vue({
    el: "#input2",
    data:{
        name2:"",

    }
});