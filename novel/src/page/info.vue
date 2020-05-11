<template>
    <div>
        <Navigator>
        </Navigator>
        <div style="width:800px;margin:0 auto">
            <NovelDetail>
            </NovelDetail>
            <div>
              <NovelOption>
              </NovelOption>
              <div class="panel panel-default" style="border-top:none;border-radius:unset;">
                <div class="panel-body">
                  <router-view>
                  </router-view>
                </div>
              </div>
            </div>
        </div>
        <Footer>
        </Footer>
    </div>
</template>

<script>
  import Navigator from '../components/Navigator'
  import Footer from '../components/Footer'
  import NovelDetail from '../components/NovelDetail'
  import NovelOption from '../components/NovelOption'
  export default {
    name:"info",
    components:{Navigator,Footer,NovelDetail,NovelOption}
  }
</script>
