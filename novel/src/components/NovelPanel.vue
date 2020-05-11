<template>
  <div>
    <h3 style="margin-bottom:5px;">
      <span class="label label-default">
        类型
      </span>
    </h3>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <Novel>
          </Novel>
          <Novel>
          </Novel>
          <Novel>
          </Novel>
          <Novel>
          </Novel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Novel from './Novel'
  export default{
    name:"NovelPanel",
    components:{Novel},
  }
</script>
