<template>
    <div class="ui-scrollbar wrapper">
        <!-- "code": "af",
        "name": "Afghanistan",
        "nativeName": "",
        "currency": [],
        "currencyIco": [] -->
        <button @click="save">Save</button>
        <li v-for="(item,i) of countries" :key="i">
            <span>Name</span> <input type="text" v-model="item.name">
            <span>nativeName</span> <input type="text" v-model="item.nativeName">
            <span>Code</span> <input type="text" v-model="item.code" />
            <span>currency</span> <input type="text" v-model="item.currency">
            <span>currencyIco</span> <input type="text" v-model="item.currencyIco">
        </li>
    </div>
</template>

<script>
const Countries = require('./countries.json');
const Currency = require('./currency.json');
const Native = require('./natives.json');
const icos = require('./currencyIco.json');
export default {
  data () {
      return {
          countries: [...Countries],
          currency: [...Currency],
          native: [...Native]
      }
  },
  mounted() {
      this.addCurrency();
      this.addNative();
      this.addIco();
  },
  methods: {
      addCurrency() {
          this.countries.forEach(item => {
            this.currency.some(cou => {
                if (cou.country.toLowerCase() == item.name.toLowerCase()) {
                    item.currency = cou.currency_code;
                    return true;
                }
            })
        })
      },
      addNative() {
          this.countries.forEach(item => {
            this.native.some(co => {
                if (co.country.trim().toLowerCase() == item.name.toLowerCase()) {
                    item.nativeName = co.native.trim();
                    return true;
                }
            })
        })
      },
      addIco() {
          this.countries.forEach(item => {
              icos.some(ico => {
                  if (ico.currency === item.currency) {
                      item.currencyIco = ico.ico;
                      return true;
                  }
              })
          })
      },
      save() {
          this.countries.forEach(item => {
              item.code = item.code.toUpperCase();
            //   item.name = item.name.toUpperCase();
          })
          console.log('countries')
          console.log(JSON.stringify(this.countries))
      }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100%;
    overflow-y: auto;
}
li {
    margin: 10px auto;
}
</style>

