<template>
    <div id="novel-pic" class="carousel slide" data-ride="carousel" data-interval="2000">
            <!-- 轮播指标 -->
            <ol class="carousel-indicators">
                <li data-target="#novel-pic" data-slide-to="0" class="active"></li>
                <li data-target="#novel-pic" data-slide-to="1"></li>
                <li data-target="#novel-pic" data-slide-to="2"></li>
            </ol>
            <!-- 轮播项 -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="../assets/first_slide.svg" alt="">
                    <div class="carousel-caption">
                        <h3>First slide label</h3>
                        <p>第一张图片</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/second_slide.svg" alt="">
                    <div class="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>第二张图片</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/third_slide.svg" alt="">
                    <div class="carousel-caption">
                        <h3>third slide label</h3>
                        <p>第三张图片</p>
                    </div>
                </div>
            </div>
            <!-- 轮播控制 -->
            <a class="left carousel-control" href="#novel-pic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#novel-pic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>
</template>