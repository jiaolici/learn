<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid" style="width:800px;text-align:center">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">首页</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">我的收藏</a></li>
          <li><a href="#">动态</a></li>
          <li><a href="#">排行榜</a></li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索">
            <span class="input-group-btn"><button type="button" class="btn btn-default">Go!</button></span>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/icon.jpg" alt="" class="img-circle" style="width: 25px;height: 25px;">
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">我的资料</a></li>
              <li><a href="#">消息</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">退出登录</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
