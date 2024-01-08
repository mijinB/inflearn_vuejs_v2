<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
                {{ todoItem }}
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
      removeTodo: function(todoItem, index) {
        localStorage.removeItem(todoItem);    //localStorage에서는 지워지지만 화면에서는 지워지지 않음
        this.todoItems.splice(index, 1);      //화면에서도 지우기 위해서 splice를 사용해 index 위치의 item을 1개 지움
      },
    },
    created: function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    //로컬스토리지에 자동으로 저장되는 애들은 제외하고
                    this.todoItems.push(localStorage.key(i));
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
    /* color: black; */
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    /* color: #62acde; */
    color: black;
}
.textCompleted {
    text-decoration: line-through;
}
</style>
