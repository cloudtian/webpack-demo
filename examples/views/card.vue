<template>
    <div>
        <p>卡片</p>

        <t-card header="内容区" :bodyStyle="bodyStyle">
            这是卡片组件
        </t-card>   
    </div>
    
</template>
<script>
export default {
    
    data () {
        return {
            bodyStyle: {
                borderRadius: '5px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                height: '50px',
                padding: '10px'
            }
        }
    }
}
</script>
