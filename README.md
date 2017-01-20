
# 安装
```sh
ionic platform add ios
ionic platform add android

ionic plugin add https://github.com/raistlinzx/cordova-plugin-sharesdk.git \
	--variable SHARESDK_IOS_APPKEY=<ShareSDK iOS App Key> \
    --variable SHARESDK_ANDROID_APPKEY=<ShareSDK Android App Key> \
	--variable QQAPPID=<QQ App Id> \
	--variable QQAPPKEY=<QQ App Key> \
	--variable WECHATAPPID=<WeChat App Id> \
	--variable WECHATAPPSECRET=<WeChat App Secret> \
	--variable QQURLSCHEME=<QQ Url Scheme For iOS Only> \
	--variable WBAPPKEY=<SinaWeibo App Key> \
	--variable WBAPPSECRET=<SinaWeibo App Secret> \
	--variable WBREDIRECTURL=<SinaWeibo Redirect Url>
```

|参数|说明|
|---|---|
|SHARESDK_IOS_APPKEY|ShareSDK注册(IOS)|
|SHARESDK_ANDROID_APPKEY|ShareSDK注册(ANDROID)|
|QQAPPID|QQ开放平台注册|
|QQAPPKEY|QQ开放平台注册|
|QQURLSCHEME|QQ回调Scheme。例如:`QQ41DF25B4`|
|WECHATAPPID|微信开放平台注册|
|WECHATAPPSECRET|微信开放平台注册|
|WBAPPKEY|新浪微博|
|WBAPPSECRET|新浪微博|
|WBREDIRECTURL|新浪微博回调地址。必须与注册时一致|

## 卸载重新安装

```sh
ionic plugin remove com.ryanzx.cordova.plugin.sharesdk
```


# JS调用

```js
function test() {
	cordova.exec(function(result) {
		alert('分享成功');
    }, function(error) {
		alert('分享失败');
		console.debug(error)
    }, "ShareSDK", "share", ['测试分享标题','你们好啊这里是测试分享','http://cdn.qiyestore.com/openapi/upload/2015/12/25/EYZZ17L785.png','http://www.qiyestore.com']);
}
```

|参数|说明|
|---|---|
|参数1|标题|
|参数2|文字内容|
|参数3|图片URL|
|参数4|分享查看URL|
