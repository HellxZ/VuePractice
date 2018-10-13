var app1 =  new Vue({
    el:".app-1",
    data:{
        message:"hellxz"
    }
});
var app2 = new Vue({
    el:".app-2",
    data:{
        html:"<h2 style:'color=red;'>输出Html</h2>"
    }
});

var compute = new Vue({
    el:".compute",
    data:{
        args:"testcompute"
    },
    computed:{  //通过计算的数值会被缓存，只有被计算的常量改变才会更新,只有计算量大，需要改变得很多的时候，为了节约系统性能，使用computed
        reverseArgs:function(){
            return this.args.split('').reverse().join('');
        },
        time:function(){
            return Date.now();
        }
    },
    methods:{ //通过方法返回的数值不会缓存，每次都会重新计算一次,如果定义了多个method其中之一被调用的情况下，所有的方法都会被调用一次，常用methods而不是computed
        methodTime:function(){
            return Date.now();
        }
    }
});

var created = new Vue({
    el:".created",
    data:{
        html:"<h3>初始化完成调用</h3>"
    },
    created: function(){
        
    }
});