<template>
    <div>
        <ul class="scroll">
            <li v-for="(item,i) of countries" :key="i">
                <span>Name</span> <input type="text" v-model="item.name">
                <span>nativeName</span> <input type="text" v-model="item.nativeName">
                <span>Code</span> <input type="text" v-model="item.code" />
                <span>currency</span> <input type="text" v-model="item.currency">
                <span>currencyIco</span> <input type="text" v-model="item.currencyIco">
            </li>
        </ul>
        <div class="btns">
            <button class="ui-button" @click="save">Save</button>
        </div>
    </div>
</template>

<script>
const Countries = require('./countries.json');
const Currency = require('./currency.json');
export default {
    data() {
        return {
            countries: [...Countries],
            currency: [...Currency],
        }
    },
    mounted() {

    },
    methods: {
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
    height: calc(100% - 70px);
    overflow-y: auto;
    li {
        margin: 10px auto;
        text-align: center;
    }
}
</style>
