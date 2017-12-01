<template>
  <div class="currency">
    <div class="flexil title">
        <span>NO.</span>
        <span>(货币名)Currency</span>
        <span>(货币)ISO</span>
        <span>(数字代码)Decimal</span>
        <span>(符号)Symbol</span>
        <span>(国家)Countries</span>
    </div>
    <ul class="scroll">
        <li v-for="(item,i) of list" :key="i" class="flexil">
            <p>{{ ++i }}</p>
            <p>
                <!-- {{ item.currency }} -->
                <input type="text" v-model="item.currency">
            </p>
            <p>
                <!-- {{ item.iso }} -->
                <input type="text" v-model="item.iso">
            </p>
            <p>
                <!-- {{ item.decimal }} -->
                <input type="text" v-model="item.decimal">
            </p>
            <p>
                <!-- <span>{{ item.symbol }}</span> -->
                <input type="text" v-model="item.symbol">
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
        <button class="ui-button" @click="showout">Countries</button>
    </div>
    <p>
        Data from: https://justforex.com/cn/education/currencies
    </p>
</div>
</template>

<script>
    const newCurrency = require('$dat/currency_wiki.json');
    const iso = require('$dat/iso.json');
    export default {
        data () {
            return {
                list: [...newCurrency],
                iso: []
            }
        },
        beforeMount () {
            iso.forEach(item => {
                if (!this.iso.some(is => is.code == item.code)) {
                    this.iso.push(item)
                }
            })
            this.compare()
        },
        methods: {
            compare() {
                this.iso.forEach(item => {
                    if (!this.list.some(li => li.decimal == item.code)) {
                        this.list.push({
                            iso: item.iso,
                            symbol: "",
                            decimal: item.code,
                            currency: item.currency,
                            countries: []
                        })
                    } else {
                        this.list.some(li => {
                            if (li.decimal == item.code) {
                                if (li.iso != item.iso) {
                                    li.iso = item.iso;
                                }
                                return true;
                            }
                        })
                    }
                })
            },
            save() {
                console.log(JSON.stringify(this.list))
            },
            showout() {
                let cou = [];
                this.list.forEach(item => {
                    cou = cou.concat(item.countries)
                })
                console.log(JSON.stringify(cou.sort()))
            }
        }
    }
</script>
<style lang="scss" scoped>
.flexil {
    >span,>p {
        &:nth-of-type(1) {
            flex: none;
            width: 45px;
        }
    }
}
.scroll {
    height: calc(100% - 130px);
    overflow-y: auto;
}

</style>
