<template>
  <div>
    <Navigator>
    </Navigator>
    <div style="width:800px;margin:0 auto">
      <Carousel>
      </Carousel>
      <div style="margin-top: 20px;">
        <NovelPanel>
        </NovelPanel>
        <NovelPanel>
        </NovelPanel>
        <NovelPanel>
        </NovelPanel>
        <NovelPanel>
        </NovelPanel>
      </div>
    </div>
    <Footer>
    </Footer>
  </div>
</template>

<script>
  import Navigator from '../components/Navigator'
  import Carousel from '../components/Carousel'
  import NovelPanel from '../components/NovelPanel'
  import Footer from '../components/Footer'
  export default {
    name: 'index',
    components: {Navigator,Carousel,NovelPanel,Footer},
  }
</script>
