<template>
    <div>
        I am Page by {{ name }}
        {{ $me }}
        {{ $route.name }}
    </div>
</template>

<script>
    export default {
        computed: {
            name() {
                return this.$store.state.siteAuthor
            }
        }    
    }
</script>
