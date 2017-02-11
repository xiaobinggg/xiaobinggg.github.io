<template>
  <div id="top" >
    <div class="site-nav-bd">
      <ul class="site-nav-ul site-nav-bd-l">
        <li class="site-nav-li site-nav-menu">xiaobinggg0536</li>
        <li class="site-nav-li site-nav-menu">xiaobinggg0536</li>
        <li class="site-nav-li site-nav-menu">xiaobinggg0536</li>

      </ul>
      <ul class="site-nav-ul site-nav-bd-r">
        <li class="site-nav-li site-nav-menu">我的淘宝</li>
        <li class="site-nav-li site-nav-menu">购物车</li>
        <li class="site-nav-li site-nav-menu">收藏家</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>
<style lang="scss" scoped>
$tc-height:36px;
$tc-width:1190px;

#top{
  height:$tc-height;
  width:100%;
  color:#3C3C3C;
  background:{
    color:#F5F5F5
  };
  .site-nav-bd{
    width:$tc-width;
    margin:0 auto;
    height:100%;
    .site-nav-ul{
      list-style: none;
      display: block;
      height:inherit;
      padding: 0;
      margin: 0;
    };
    .site-nav-li{
      float:left;
      display: inline-block;
    }
    .site-nav-bd-l{
      float:left;
    };
    .site-nav-bd-r{
      float:right;
    };
  }
}
</style>
