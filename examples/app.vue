<template>
    <div>
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.to">{{link.name}}</router-link>
            </li>
        </ul>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            links: [
                {
                    to: '/home',
                    name: '主页' 
                },
                {
                    to: '/card',
                    name: '卡片' 
                }
            ]
        }
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
ul {
    list-style: none;
}
ul li {
    display: inline-block;
    width: 100px;
}
</style>
<style>
.router-link-active {
    color: red;
}
</style>

