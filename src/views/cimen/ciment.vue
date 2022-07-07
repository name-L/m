<template>
    <div>
        <li>
            <h4>{{data.name}}</h4>
            <span>{{data.address}}</span>
        </li>
    </div>
</template>
<script>
export default {
    props: ['data']
};
</script>
<style lang="scss" scoped>
div {
    position: relative;
    background-color: #fff;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
li {
    h4 {
        color: #191a1b;
        font-size: 15px;
        font-weight: 500;
    }
    span{
        color: #797d82;
        font-size: 12px;
        margin-top: 5px;
        display: block;
        max-width: 80%;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
