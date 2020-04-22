// components/my-params/my-params.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textColor: {
      type: String,
      value: 'orange'
    },
    titles: {
      type : Array,
      value: ['1','2','3']
    }
    
  },
  options:{
    "styleIsolation":'isolated'
  },
  

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTextClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      // 通知页面的点击事件
      this.triggerEvent("itemClick",{index,titles:this.properties.titles[index]},{})
    }
  }
})
