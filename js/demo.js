var app = new Vue({
    el: "#app",
    data: {
        newPerson: {
            name: "",
            age: 0,
            sex: "Male"
        },
        people: [
            {
                name: "Hellxz",
                age: 25,
                sex: "Male"
            },
            {
                name: "Jack",
                age: 23,
                sex: "Male"
            },
            {
                name: "Jane",
                age: 22,
                sex: "Female"
            },
            {
                name: "Martin",
                age: 25,
                sex: "Male"
            }
        ]
    },
    methods: {
        addPerson: function () {
            console.log("添加方法正常");
            this.people.push(this.newPerson);
            this.newPerson = {
                name: "",
                age: 0,
                sex: "Male"
            }
        },
        delPerson: function (index) {
            console.log("删除方法正常,被删除的下标是：" + index);
            this.people.splice(index, 1);
        }
    }
});