import Vue from 'vue'

Vue.prototype.$pop_an_item = (array, item) => {
  return array.filter(function (element) {
    return element !== item
  })
};
