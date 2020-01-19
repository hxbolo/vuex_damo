/* eslint-disable */
// import Vue from "vue";
// import Vuex from "vuex";
// import state from "./state";
// import mutation from "./mutation";
// import getters from "./getters";
// import action from "./action";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state,
//   mutation,
//   getters,
//   action
// });


import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    // 存放数据， data
    goods:{
      totalPrice:0,
      totalNum:0,
      goodsData:[
        {
          id:"1",
          title:'榴莲',
          image:require('../assets/timg.jpg'),
          price:10.00,
          num:0
        },
        {
          id:"2",
          title:'菠萝',
          image:require('../assets/timg (1).jpg'),
          price:5.00,
          num:0
        }
      ]
    }
  },
  getters:{
    //  类似 computed
    totalNum(state){
      let aTotalNum=0
      state.goods.goodsData.forEach((value,index)=>{
        console.log(value,index);

        aTotalNum+=value.num
      })
      return aTotalNum
    },
    totalPrice(state){
      let aTotalPrice = 0;
      state.goods.goodsData.forEach( (value,index) => {
          aTotalPrice += value.num * value.price
      })
      return aTotalPrice.toFixed(2);
    }

  },
  mutations:{
    // 类似methods 同步操作
    reselt(state,msg){
      state.goods.totalPrice= this.getters.totalPrice;
      state.goods.totalNum = this.getters.totalNum;
    },
     reduceGoods(state,index){
       console.log('2220',state,index);

        //第一个参数为默认参数，即上面的state,后面的参数为页面操作传过来的参数

        if(state.goods.goodsData[index].num==0)return
        state.goods.goodsData[index].num-=1;
        let msg = '我执行了一次'
        this.commit('reselt',msg);
    },
    addGoods(state,index){
        state.goods.goodsData[index].num+=1;
        let msg = '我执行了一次'
        this.commit('reselt',msg);
        /**
            想要重新渲染store中的方法，一律使用commit 方法
            你可以这样写 commit('reselt',{
                state: state
            })
            也可以这样写 commit({
                type: 'reselt',
                state: state
            })
            主要看你自己的风格
        **/
      }

  },
  actions:{
    // 类似methods 异步操作

  }

})
