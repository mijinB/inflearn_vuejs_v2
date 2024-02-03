<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
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
