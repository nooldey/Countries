<template>
  <div class="currency">
    <div class="flexil title">
        <span>(货币名)Name</span>
        <span>(货币)Currency</span>
        <span>(符号)Symbol</span>
        <span>(数字代码)Decimal</span>
        <span>(国家)Countries</span>
    </div>
    <ul class="scroll">
        <li v-for="(item,i) of list" :key="i" class="flexil">
            <p>
                <!-- {{ item.name }} -->
                <input type="text" v-model="item.name">
            </p>
            <p>
                <!-- {{ item.currency }} -->
                <input type="text" v-model="item.currency">
            </p>
            <p>
                <!-- <span>{{ item.symbol }}</span> -->
                <input type="text" v-model="item.symbol">
            </p>
            <p>
                <!-- {{ item.decimal }} -->
                <input type="text" v-model="item.decimal">
            </p>
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
    // const Currency = require('./currency.json');
    const newCurrency = require('./currency_new.json');
    export default {
        data () {
            return {
                // currency: [...Currency],
                list: [...newCurrency],
                // res: []
            }
        },
        mounted () {
            this.conbine()
        },
        methods: {
            conbine() {
                // this.res = this.list.map(item => {
                //     let cou = this.currency.find(co => co.currency == item.currency)
                //     let li = {
                //         ...item
                //     }
                //     if (cou && (cou.symbol.trim() != item.symbol)) {
                //         li.diff = cou.symbol
                //     }
                //     return li
                // })
            },
            save() {
                console.log(JSON.stringify(this.res))
            }
        }
    }
</script>
<style lang="scss" scoped>
.scroll {
    height: calc(100% - 130px);
    overflow-y: auto;
}

</style>
