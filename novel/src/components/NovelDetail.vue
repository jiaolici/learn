<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div style="float:left;width:25%">
                <img src="../assets/cover.jpg" alt="" />
            </div>
            <div style="float:right;width:75%">
                <h2 style="margin-top:10px">
                    诡秘之主
                </h2>
                <p>
                    爱潜水的乌贼 著
                </p>
                <div>
                    <span class="label label-default">奇幻</span>
                    <span class="label label-default">武侠</span>
                    <span class="label label-default">异大陆</span>
                </div>
                <h4 style="margin-top:20px;overflow-wrap:break-word">
                    心潮澎湃，无限幻想，迎风挥击千层浪，少年不败热血！
                </h4>
                <div>
                  <!--<span style="margin-right:10px"><h3 style="display:inline">363.49</h3>万字</span>
  <span style="margin-right:10px"><h3 style="display:inline">1.99</h3>万周推荐</span>-->
                  <h3 style="display:inline;margin-right:10px">363.49<small>万字</small></h3>
                  <h3 style="display:inline;margin-right:10px">200<small>章</small></h3>
                </div>
                
                <div style="margin-top:10px">
                    <button type="button" class="btn btn-primary">开始阅读</button>
                    <button type="button" class="btn btn-default">加入书架</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import NovelOption from './NovelOption'
  export default {
    name: 'NovelDetail',
    components: {NovelOption}
  }
</script>
