<template>
  <div>
    <Top></Top>
    <Middle></Middle>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './pages/top/top'
import Middle from './pages/middle/middle'
import Bottom from './pages/bottom/bottom'

export default {
  name: 'app',
  components: {Top, Middle, Bottom}
}
</script>

<style>
</style>
