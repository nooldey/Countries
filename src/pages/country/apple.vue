<template>
    <div class="apple_country">
        <div class="flexil title">
            <span>Name</span>
            <span>Native Name</span>
            <span>Code</span>
            <span>Currency Iso</span>
            <span>Symbol</span>
        </div>
        <ul class="scroll">
            <li v-for="(item,i) of countries" :key="i" class="flexil">
                <p> <input type="text" v-model="item.name"> </p>
                <p> <input type="text" v-model="item.native"> </p>
                <p> <input type="text" v-model="item.code"> </p>
                <p> <input type="text" v-model="item.currency"> </p>
                <p> <input type="text" v-model="item.symbol"> </p>
            </li>
        </ul>
        <div class="btns">
            <button class="ui-button" @click="save">Save</button>
        </div>
    </div>
</template>

<script>
const apples = require('$dat/apple_countries.json');
const currency = require('$dat/currency.json');
export default {
  data () {
      return {
          countries: [...apples]
      }
  },
  beforeMount () {
      this.combine()
  },
  methods: {
      combine() {
          this.countries.forEach(item => {
              let cur = this.currency.find(c => c.countries.includes(item.name))
              if (cur) {
                  if (cur.iso && cur.iso !== item.currency) {
                      item.currency = cur.iso
                  }
                  if (cur.symbol && cur.symbol !== item.symbol) {
                      item.symbol = cur.symbol
                  }
              }
          })
      },
      save() {
          console.log(JSON.stringify(this.countries))
      }
  }
}
</script>

<style lang="scss" scoped>
.scroll {
    height: calc(100% - 110px);
    overflow-y: auto;
    li {
        margin: 10px auto;
        text-align: center;
    }
}
</style>