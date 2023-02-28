<template>
  <div class="index">
    <p id="title">
      <span>{{ text }}</span>
      <span :class="{ blinking: isBlinking }">|</span>
    </p>
    <div class="btn-enter">
      <el-button type="primary" size="large" :icon="Pointer" circle @click="toLink('./guide')" />
    </div>
    <div class="footer">
      <el-link href="http://morijiu.cn/" target="_blank">&copy;2023 by morijiu.cn</el-link>
      &nbsp;
      <el-link href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2023000877号</el-link>
    </div>
    <div class="bg-img1"></div>
    <div class="bg-img2"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Pointer } from '@element-plus/icons-vue'
// 引入JS
import { toLink } from '../utils/common.js'

// 打字机设置
const text = ref(''); // 定义响应式变量text
const index = ref(0); // 定义响应式变量index
const speed = 100;
const message = 'Mo_rijiu服务站，一键开启新世界>';
// const message = '1234567890rtrtrtrtrtrtrtr';
// 设置闪烁效果
const isBlinking = ref(false);
const blinkSpeed = 400;

onMounted(() => {
  typeWriter();
  blinking();
})

function typeWriter() {
  if (index.value < message.length) {
    text.value += message.charAt(index.value);
    index.value++;
    setTimeout(typeWriter, speed);
  }
}

function blinking() {
  // 添加定时器
  setInterval(() => {
    isBlinking.value = !isBlinking.value;
  }, blinkSpeed);
}

</script>

<style lang=scss>
.index {
  box-sizing: border-box;
  // 闪烁
  .blinking {
    visibility: hidden;
  }

  #title {
    line-height: 30px;
    width: 400px;
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 200px);
  }

  .btn-enter {
    width: 100px;
    position: absolute;
    top: calc(50% + 30px);
    left: calc(50% - 50px);
    text-align: center;
  }

  .bg-img1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
    height: 200px;
    background: url(../assets/images/xiangyun.png) ;
    background-size: cover;
  }
  .bg-img2 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 600px;
    height: 200px;
    background: url(../assets/images/xiangyun.png) ;
    background-size: cover;
  }
  .footer {
    text-align: center;
    color: #808080;
    position: absolute;
    width: 100%;
    bottom: 10px;
    .el-link {
      font-size: 14px;
    }
  }
}
</style>