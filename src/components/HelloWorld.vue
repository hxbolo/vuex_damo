<template>
  <div id="goods" class="goods-box">
    <ul class="goods-body">
      <li v-for="(list, index) in goods.goodsData" :key="list.id">
        <div class="goods-main">
          <img :src="list.image" />
        </div>
        <div class="goods-info">
          <h3 class="goods-title">{{ list.title }}</h3>
          <p class="goods-price">¥ {{ list.price }}</p>
          <div class="goods-compute">
            <!--在dom中使用方法为：$store.commit()加上store.js中的属性的名称，示例如下-->
            <span class="goods-reduce" @click="goodsReduce(index)">-</span>
            <input readonly v-model="list.num" />
            <span class="goods-add" @click="$store.commit('addGoods', index)"
              >+</span
            >
          </div>
        </div>
      </li>
    </ul>
    <div class="goods-footer">
      <div class="goods-total">
        合计：¥ {{ goods.totalPrice }}
        <!--
                    如果你想要直接使用一些数据，但是在computed中没有给出来怎么办？
                    可以写成这样
                    {{ $store.state.goods.totalPrice }}
                    或者直接获取gettles里面的数据
                    {{ $store.gettles.totalPrice }}
                -->
      </div>
      <button
        class="goods-check"
        :class="{ activeChecke: goods.totalNum <= 0 }"
      >
        去结账({{ goods.totalNum }})
      </button>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  name: "Goods",
  computed: {
    goods() {
      console.log(11, this.$store.state.goods);

      return this.$store.state.goods;
    }
  }
};
</script>
<style>
ul {
  list-style: none;
}
.goods-main {
  float: left;
  margin-right: 20px;
}
img {
  width: 100px;
  height: 100px;
}
.goods-info {
  margin-left: 50px;
}
</style>
