import {Dom,http} from "../common/common";
class CaptchaConfig {
    constructor(args) {
        if (!args.bindEl) {
            throw new Error("[TAC] 必须配置 [bindEl]用于将验证码绑定到该元素上");
        }
		//绑定元素
        this.bindEl = args.bindEl;
        this.domBindEl = Dom(args.bindEl);
		//设置验证回调
		this.validCaptcha=args.validCaptcha;
		//刷新按钮回调
		this.btnRefreshFun=args.btnRefreshFun;
		//关闭按钮回调
		this.btnCloseFun=args.btnCloseFun
    }
}

function wrapConfig(config) {
    if (config instanceof CaptchaConfig) {
        return config;
    }
    return new CaptchaConfig(config);
}

function wrapStyle(style) {
    if (!style) {
        style = {}
    }

    if (!style.btnUrl) {
        // 设置默认图片
        style.btnUrl = "data:image/png;base64,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";
    }
    if (!style.moveTrackMaskBgColor && !style.moveTrackMaskBorderColor) {
        style.moveTrackMaskBgColor = "#89d2ff";
        style.moveTrackMaskBorderColor = "#0298f8";

    }
    return style;
}

const captchaRequestChains = {}


export {CaptchaConfig, wrapConfig, wrapStyle}
