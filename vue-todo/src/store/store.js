import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //로컬스토리지에 자동으로 저장되는 애들은 제외하고
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //JSON.parse: string으로 바꿔서 localStorage에 저장했던 걸 다시 object로 변환해서 가져오기
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
});