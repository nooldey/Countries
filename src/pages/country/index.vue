<template>
    <div>
        <div class="btns">
            <button class="ui-button" @click="save">Save</button>
            <button class="ui-button"  @click="showout">Countries</button>
        </div>
        <div class="flexil title">
            <span>No.</span>
            <span>Name</span>
            <span>Native Name</span>
            <span>Code</span>
            <span>Currency Iso</span>
            <span>Symbol</span>
        </div>
        <ul class="scroll">
            <li v-for="(item,i) of countries" :key="i" class="flexil">
                <p>{{ i }}</p>
                <p><input type="text" v-model="item.name"></p>
                <p>
                    <span><del>{{ item.nnative }}</del></span>
                    <input type="text" v-model="item.native">
                </p>
                <p><input type="text" v-model="item.code" /></p>
                <p>
                    <span><del>{{ item.ncurrency }}</del></span>
                    <input type="text" v-model="item.currency">
                </p>
                <p>
                    <span><del>{{ item.nsymbol }}</del></span>
                    <input type="text" v-model="item.symbol">
                </p>
            </li>
        </ul>
        
    </div>
</template>

<script>
const Countries = require('./countries.json');
const CurrencyData = require('$dat/currency_wiki.json');
const apples = require('$dat/apple_countries.json');
export default {
    data() {
        return {
            countries: [...Countries],
            currency: [...CurrencyData],
        }
    },
    beforeMount () {
        this.conbineC()
    },
    methods: {
        conbineC() {
            this.countries.forEach(item => {
                let cur = this.currency.find(cu => cu.countries.includes(item.name))
                if (cur) {
                    if (cur.iso && cur.iso !== item.currency) {
                        item.ncurrency = cur.iso;
                    }
                    if (cur.symbol && cur.symbol !== item.symbol) {
                        item.nsymbol = cur.symbol;
                    }
                }
                let co = apples.find(c => c.name == item.name);
                if (co && item.native != co.native) {
                    item.nnative = co.native
                }
            })
        },
        save() {
            this.countries.forEach(item => {
                item.code = item.code.toUpperCase();
                item.ncurrency = null;
                item.nsymbol = null;
                //   item.name = item.name.toUpperCase();
            })
            console.log('countries')
            console.log(JSON.stringify(this.countries))
        },
        showout() {
            let co = this.countries.map(item => item.name)
            console.log(JSON.stringify(co.sort()))
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
.flexil {
    >span,>p {
        &:nth-of-type(1) {
            flex: none;
            width: 45px;
        }
    }
}
</style>
