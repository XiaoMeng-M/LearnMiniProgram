// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 监听properties/data 数据发生的改变  没有old 只有new
  observers: {
    counter: function(newValue){

    }
  },
  // 组件中的生命周期函数
  // 1.监听组件在页面中的生命周期
  pageLifetimes: {
    show(){
      console.log("监听组件在页面上展示出来以后");
    },
    hide(){
      console.log("监听组件在页面上隐藏起来以后");
    }
  },
  // 2.监听组件的生命周期
  lifetimes: {
    created(){
      console.log("组件被创建出来");
      
    },
    attached(){
      console.log("组件被添加到实例");
      
    },
    detached(){
      console.log("组件被移除");
      
    }
  }
})
