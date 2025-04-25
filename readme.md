## 简介

这是基于[TIANAI-CAPTCHA](https://gitee.com/tianai/tianai-captcha-web-sdk)验证码前端SDK修改版，修改版将HTML请求发送功能从SDK核心模块中剥离，转由业务项目自主实现网络通信层。

### 使用方法

以Vue2为例,首先下载[压缩包](https://github.com/1789951582/tianai-captcha-web-sdk/releases/tag/build)，然后解压到项目的public文件夹。

在你需要用到验证码的组件引入

```js
import TAC from "../../public/tac/js/tac.min.js"
import "../../public/tac/css/tac.css"
```

初始化

```js
captchaInit(){
	const config={
		bindEl: this.$refs.captchaBox,//绑定div
		validCaptcha:this.sendAnswer,//验证触发的回调(鼠标拖动后松开)
		btnRefreshFun:this.btnRefreshFun,//刷新触发的回调
		btnCloseFun:this.btnCloseFun//点击关闭触发的回调(可选)
	}
	let style = {
		bgUrl:null,//背景Url(可选)
		logoUrl: null,//logoUrl(可选)
		// 滑动边框样式
		moveTrackMaskBgColor: "#f7b645",//(可选)
		moveTrackMaskBorderColor: "#ef9c0d"//(可选)
	}
	this.captcha=new TAC(config,style)
}
```

具体使用方法参考[demo](https://github.com/1789951582/tianai_captcha_demo)的[vue](https://github.com/1789951582/tianai_captcha_demo/blob/main/Vue_demo/src/components/LoginDiv.vue)文件
