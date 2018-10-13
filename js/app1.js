var app1 = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        greater: function (args) {
            return "Good " + args + "!";
        }
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "当前时间" + new Date()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        tomatos: [
            { text: "语文" },
            { text: "数学" }
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "前Hellxz 丨 zxlleH后"
    },
    methods: {
        reverseFunc: function () {
            this.message = this.message.split("").reverse().join("");
        }
    }
});

var app6 = new Vue({
    el:"#app-6",
    data:{
        message:"Hello Vue"
    }
});
// 定义组件
Vue.component("todo-item",{
    template:"<li>这里有一个待办项</li>"
});
var app7 = new Vue({
    el:"#app-7"
});

Vue.component("todo-item2",{
    props:['todo'],
    template:"<li>{{todo.text}}</li>"
});
var app7_1 = new Vue({
    el:"#app-7-1",
    data:{
        cars:[
            {id:"1", text:"别克"},
            {id:"2", text:"奥迪"},
            {id:"3", text:"奔驰"}
        ]
    }
});

//响应式开发会有类似java中的引用的传递
var obj = {
    foo:'bar'
}

Object.freeze(obj); //冻结对象，不允许改变对象

var app8 = new Vue({
    el:"#app-8",
    data:obj
});

var canvas = new Vue({ //定位鼠标的坐标点
    el:"#canvas",
    data:{
        x:0,
        y:0
    },
    methods:{
        inputXY:function(event){
            // console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});

//测试实例属性和方法
var data = {a:1}
var vm = new Vue({
    el:"#constant",
    data:data
});
console.log(vm.$data === data);
console.log(vm.$el === document.getElementById("constant"));
vm.$watch('a',function(newVal,oldVal){
    console.log("old:%s,new:%s",newVal,oldVal);
});
//Vue实例的生命周期钩子
var created =new Vue({
    data:{
        a:1
    },
    created:function(){ //相当于java的postConstruct
        console.log("创建方法钩子执行了，a="+this.a)
    }
});