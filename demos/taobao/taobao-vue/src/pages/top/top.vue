<template>
  <div id="top" >
    <div id="topcenter">
      <div class="topcenter-left">

      </div>
      <div class="topcenter-middle">

      </div>
      <div class="topcenter-right">

      </div>
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
$tc-left-width:250px;
$tc-middle-width:340px;
$tc-right-width:600px;

#top{
  height:$tc-height;
  width:100%;
  color:#3C3C3C;
  background:{
    color:#F5F5F5
  };
  #topcenter{
    width:$tc-width;
    margin:0 auto;
    height:100%;
    .topcenter-left{
      width:$tc-left-width;
      height:inherit;
    };
    .topcenter-middle{
      width:$tc-middle-width;
      height:inherit;
    };
    .topcenter-left{
      width:$tc-right-width;
      height:inherit;
    };
  }
}
</style>
