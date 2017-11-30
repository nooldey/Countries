<template>
    <div class="layout">
        <!-- 当前只做支持二级菜单，可自行拓展 -->
        <nav>
            <template v-for="(item,i) in routes">
                <router-link :key="i" :to="'/' + item.path" v-if="!item.children || !item.children.length">
                    {{ item.name }}
                </router-link>
                <template v-else v-for="(child,j) in item.children">
                    <router-link :key="item.path+j" :to="'/' + item.path + '/' + child.path">
                        {{ child.name }}
                    </router-link>
                </template>
            </template>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routes: this.$router.options.routes[0].children
        }
    }
}
</script>

<style lang="scss" scoped>
    nav {
        margin-bottom: 35px;
        border-bottom: 1px solid #ccc;
        a {
            display: inline-block;
            margin-right: 8px;
            font-size: 18px;
        }
    }
</style>
