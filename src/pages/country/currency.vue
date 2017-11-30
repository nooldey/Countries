<template>
  <div class="currency">
     
      <div class="flexil title">
          <span>(货币名)Name</span>
          <span>(货币)Currency</span>
          <span>(符号)Symbol</span>
          <span>(数字代码)Code</span>
          <span>(国家)Countries</span>
      </div>
      <ul class="scroll">
          <li v-for="(item,i) of list" :key="i" class="flexil">
              <p>{{ item.name }}</p>
              <p>{{ item.currency }}</p>
              <p>{{ item.symbol }}</p>
              <p>{{ item.code }}</p>
              <p>
                  <span v-for="c of item.countries" :key="c">
                      {{ c }}
                    </span>
              </p>
          </li>
      </ul>
       <div class="btns">
          <button class="ui-button" @click="save">Save</button>
      </div>
      <p>
          Data from: https://justforex.com/cn/education/currencies
      </p>
  </div>
</template>

<script>
    const Currency = require('./currency.json');
    const newCurrency = require('./currency_new.json');
    export default {
        data () {
            return {
                currency: [...Currency],
                list: [...newCurrency],
                res: []
            }
        },
        mounted () {
            this.conbine()
        },
        methods: {
            conbine() {

            },
            save() {

            }
        }
    }
</script>
<style lang="scss" scoped>
.title {
    margin-bottom: 10px;
    font-weight: 600;
    background: #f8f8f8;
}
.flexil {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    >span,>p {
        flex: 1;
        text-align: center;
    }
    >p {
        span {
            display: block;
        }
    }
}
.scroll {
    height: calc(100% - 130px);
    overflow-y: auto;
}
</style>
