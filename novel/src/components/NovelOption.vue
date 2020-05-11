<template>
  <ul id="OptionTab" class="nav nav-tabs" role="tablist">
    <li role="presentation" v-bind:class="{'active':comment}"><router-link to="/info/comment" @click.native="OpSwitch">评论</router-link></li>
    <li role="presentation" v-bind:class="{'active':chapter}"><router-link to="/info/chapter" @click.native="OpSwitch">章节</router-link></li>
    <li role="presentation" v-bind:class="{'active':source}"><router-link to="/info/source" @click.native="OpSwitch">换源</router-link></li>
  </ul>
</template>

<script>
  export default {
    data() {
      return { comment: true, chapter: false, source: false };
    },
    created() {
      //第一次访问网页子路由为chapter或source时切换选项卡
      if (this.$route.name == 'chapter') {
        this.comment = false;
        this.chapter = true;
      }
      else if (this.$route.name == 'source') {
        this.comment = false;
        this.source = true;
      }
    },
    methods: {
      OpSwitch: function (event) {
        $("#OptionTab").find(".active").removeClass("active");
        event.currentTarget.parentElement.classList.add("active");//不能使用addClass，因为这是一个js元素对象，而不是一个jQuery元素对象
      }
    }
  }
</script>
