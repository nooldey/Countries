<template>
    <div>
        <div class="flexil title">
            <span>Name</span>
            <span>nativeName</span>
            <span>Code</span>
            <span>currency</span>
            <span>currencyIco</span>
        </div>
        <ul class="scroll">
            <li v-for="(item,i) of countries" :key="i" class="flexil">
                <p><input type="text" v-model="item.name"></p>
                <p><input type="text" v-model="item.nativeName"></p>
                <p><input type="text" v-model="item.code" /></p>
                <p>
                    <span><del>{{ item.ncurrency }}</del></span>
                    <input type="text" v-model="item.currency">
                </p>
                <p>
                    <span><del>{{ item.ncurrencyIco }}</del></span>
                    <input type="text" v-model="item.currencyIco">
                </p>
            </li>
        </ul>
        <div class="btns">
            <button class="ui-button" @click="save">Save</button>
        </div>
    </div>
</template>

<script>
const Countries = require('./countries.json');
const CurrencyData = require('./currency_new.json');
export default {
    data() {
        return {
            countries: [...Countries],
            currency: [...CurrencyData],
        }
    },
    mounted() {
        this.conbineC()
    },
    methods: {
        conbineC() {
            this.countries.forEach(item => {
                let cur = this.currency.find(cu => cu.countries.includes(item.name))
                if (cur) {
                    if (cur.currency && cur.currency !== item.currency) {
                        item.ncurrency = cur.currency;
                    }
                    if (cur.symbol && cur.symbol !== item.currencyIco) {
                        item.ncurrencyIco = cur.symbol;
                    }
                }
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
.scroll {
    height: calc(100% - 110px);
    overflow-y: auto;
    li {
        margin: 10px auto;
        text-align: center;
    }
}
</style>
