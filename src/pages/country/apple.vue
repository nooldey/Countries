<template>
    <div class="apple_country">
        <div class="btns">
            <button class="ui-button" @click="save">Save</button>
        </div>
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
                <p>
                    <input type="text" v-model="item.code">
                </p>
                <p> <input type="text" v-model="item.currency"> </p>
                <p> <input type="text" v-model="item.symbol"> </p>
            </li>
        </ul>
    </div>
</template>

<script>
const apples = require('$dat/apple_countries.json');
const currency = require('$dat/currency_wiki.json');
// const allCountry = require('$dat/countries.json');
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
              let cur = currency.find(c => c.countries.some(name => name.toLowerCase() == item.name.toLowerCase()))
              if (cur) {
                  if (cur.iso && cur.iso !== item.currency) {
                      item.currency = cur.iso
                  }
                  if (cur.symbol && cur.symbol !== item.symbol) {
                      item.symbol = cur.symbol
                  }
              }
            //   let area = allCountry.find(c => c.name.toLowerCase() == item.name.toLowerCase())
            //   if (area) {
            //       if (area.code && area.code !== item.code) {
            //           item.oldcode = item.code;
            //           item.code = area.code;
            //       }
            //   }
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
    .red {
        color: red;
    }
}
</style>