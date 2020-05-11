<template>
  <div>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="写下你的评论..."/>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">发布</button>
      </span>
    </div>
    <div class="list-group">
      <div class="list-group-item">
        <div class="container-fluid" style="padding:0">
          <div class="row">
            <div class="col-md-3">
            <a>
              <img class="img-circle" src="../assets/icon.jpg" style="width:25px;float:left"/>
              <p style="float:left;height:25px;margin-left:5px">
              发表者
              </p>
            </a>
            </div>
            <div class="col-md-3 col-md-offset-6">
              <p style="float:right">
              2019/12/2 21:25
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            xxxxx
          </p>
        </div>
        <div class="row" style="text-align:center">
          <div class="btn-group btn-group-xs">
            <button type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> (0)
            </button>
            <button type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> 查看回复
            </button>
            <button type="button" class="btn btn-default" @click="ReplyInputShow(0)">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 回复
            </button>
          </div>
        </div>
        <div v-show="IsReplyInputShow[0]" class="input-group">
          <input type="text" class="form-control" placeholder="回复发布者..." />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">回复</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {'IsReplyInputShow':[false]}
    },
    methods: {
      ReplyInputShow: function (item_num) {
        //this.IsReplyInputShow[item_num] = !this.IsReplyInputShow[item_num];
        this.$set(this.IsReplyInputShow,item_num,!this.IsReplyInputShow[item_num]);
        //console.log(this.IsReplyInputShow[item_num]);
        
      }
    }
  }
</script>
