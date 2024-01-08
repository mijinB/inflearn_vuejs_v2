<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i
                    class="checkBtn fa-solid fa-check"
                    v-bind:class="{ checkBtnCompleted: todoItem.completed }"
                    v-on:click="toggleComplete(todoItem, index)"
                ></i>
                <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            todoItems: [],
        };
    },
    methods: {
        removeTodo: function (todoItem, index) {
            localStorage.removeItem(todoItem); //localStorage에서는 지워지지만 화면에서는 지워지지 않음
            this.todoItems.splice(index, 1); //화면에서도 지우기 위해서 splice를 사용해 index 위치의 item을 1개 지움
        },
        toggleComplete: function (todoItem) {
            todoItem.completed = !todoItem.completed; //localStorage는 수정 안됨
            localStorage.removeItem(todoItem.item); //localStorage 수정이 따로 없어서 지우고 다시 저장
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    },
    created: function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    //로컬스토리지에 자동으로 저장되는 애들은 제외하고
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //JSON.parse: string으로 바꿔서 localStorage에 저장했던 걸 다시 object로 변환해서 가져오기
                }
            }
        }
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
