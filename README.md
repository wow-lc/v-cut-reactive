# v-cut-reactive
在图片上定义响应式热点区域，可以关联事件。  
支持窗口大小响应式变化交互热点区域
### 插件的安装
#### NPM 
```
npm i v-cut-reactive
```
#### 引入插件
```
import Vue from 'vue';
import VCutReactive from 'v-cut-reactive';
Vue.use(VCutReactive);
```

#### 基本用法  
```html
<template>
  <div class="home">
    <img
      class="img"
      alt="Vue logo"
      src="../assets/timg.jpg"
      v-cut-reactive:imgMap="areaOptions"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      areaOptions: [
        {
          coords: [778, 1422, 250, 1304],
          shape: "rect",
          target: "_parent",
          title: "安卓下载",
          href: "",
          events: {
            click: this.imgClick.bind(this, "安卓下载")
          }
        },
        {
          coords: [778, 1615, 253, 1493],
          shape: "rect",
          target: "_parent",
          title: "IOS下载",
          href: "http://www.baidu.com",
          events: {
            click: this.imgClick.bind(this, "IOS下载")
          }
        }
      ]
    };
  },
  methods: {
    imgClick(name) {
      alert("clicked: " + name);
    }
  }
};
</script>

<style lang="less" scoped>
.img {
  width: 100%;
}
</style>
```

#### API
`v-cut-reactive:mapKey="areaOptions"`  
##### mapKey ( String )
定义生成map标签的key值（唯一，同一页面不可重复）
##### areaOptions ( Array )
配置项
| 属性 | 说明 | 参数 |  
| :- | :- | :- |
| events | 为选择区域添加事件 | 详见上述示例 |
| ... | 可传入area标签的所有属性 | `coords （Array）`,`shape`, `target`,`title`,`href`...(coords 和 shape为必填项)|

#### 其他
areaOptions中coords的区域范围，可以通过[http://www.image-map.net/](http://www.image-map.net/)选择区域