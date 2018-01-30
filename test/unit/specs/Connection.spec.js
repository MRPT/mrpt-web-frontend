import Vue from 'vue'
import Connection from '@/components/Connection'

describe('Connection.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Connection)
    const vm = new Constructor().$mount()
  })
})
