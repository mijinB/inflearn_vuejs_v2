<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
        <TodoList
            v-on:removeItem="removeOneItem"
            v-on:toggleItem="toggleOneItem"
        ></TodoList>
        <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
    </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
    },
    methods: {
        addOneItem(todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleOneItem(todoItem, index) {
            // todoItem.completed = !todoItem.completed;  컴포넌트간 관계를 명확하게 하기 위해 아래 줄로 수정 (props로 보냈던 걸 다시 받아와서 "수정"하는 것은 안티 패턴이다.)
            this.todoItems[index].completed = !this.todoItems[index].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems() {
            localStorage.clear();
            this.todoItems = []; //화면에서도 다 지워지게 하기 위해서 todoItems 리스트 초기화
        },
    },
};
</script>

<style>
body {
    background-color: #f6f6f6;
    text-align: center;
}

input {
    width: 200px;
    border-style: groove;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
