
# 安装
```sh
cordova platform add ios
cordova platform add android

cordova plugin add https://github.com/raistlinzx/cordova-plugin-sharesdk.git \
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
cordova plugin remove com.ryanzx.cordova.plugin.sharesdk
```


## 修改AndroidManifest.xml中对微信分享回调的配置

```sh
将android:name="com.test.shareApp001.wxapi.WXEntryActivity"中的包名com.test.shareApp001换成自己应用的包名
```


## 修改target SDK改到23以下，否则微信和微信朋友圈分享会存在权限读取失败的问题

```sh
1) AndroidManifest.xml中<uses-sdk android:minSdkVersion="16" android:targetSdkVersion="22" />，此处的targetSdkVersion只要小于23就行，同时Android SDK Manager中还得安装有对应的版本;
2) 修改priject.properties中的target=android-22为同样的target SDK;
```

## 将下面的配置添加到config.xml中，其中的value替换成对应的值

```sh
<preference name="SHARESDK_IOS_APPKEY" value="1234567890123" />
<preference name="SHARESDK_ANDROID_APPKEY" value="1234567890123"/>
<preference name="WECHATAPPID" value="wx1234567890123456"/>
<preference name="WECHATAPPSECRET" value="12345678901234567890123456789012"/>
<preference name="QQAPPID" value="1234567890"/>
<preference name="QQAPPKEY" value="1234567890123456"/>
<preference name="QQURLSCHEME" value="QQ12345678"/>
<preference name="WBAPPKEY" value="1234567890"/>
<preference name="WBAPPSECRET" value="12345678901234567890123456789012"/>
<preference name="WBREDIRECTURL" value="https://api.weibo.com/oauth2/default.html"/>
```

## ShareSDKPlugin.js中的分享的参数说明

```js
cordova.exec(function(result) {
        alert('分享成功');
    }, function(error) {
        alert('分享失败,error='+error);
        console.debug(error)
    }, "ShareSDK", "share", ['测试分享标题','你们好啊这里是测试分享','http://cdn.qiyestore.com/openapi/upload/2015/12/25/EYZZ17L785.png','http://www.qiyestore.com']);
```
|参数|说明|
|---|---|
|参数1|标题|
|参数2|文字内容(ANDROID)|
|参数3|图片URL|
|参数4|分享查看URL|

```sh	
其中，微博分享只能使用其他的添加链接的方式，在分享界面填写要分享的URL
```


## 微信和微信朋友圈的分享注意事宜

```sh	
微信在android平台有两种方式：一种是绕过审核分享，一种是不绕过审核分享。
绕过审核分享分享给微信好友时看到的只是图片文件，显示的是图片的信息，并不显示分享的标题、文字、也链接不到网址；分享到微信朋友圈的是文字和图片。
不绕过审核，分享到微信好友时可以显示标题、文字内容、图片、以及点击后链接的网址，在分享的下方会有一个应用的名称；
微信不绕过审核必须要满足下面五个条件：
	1) 测试打包成apk安装到手机进行测试；
	2) 打包的keystore跟微信开放平台上面的签名一致，即与MD5码一致
	3) 分享参数没有错误；
	4) 申请的应用在微信上审核通过；
	5) 包名跟开放平台上面的一致。
可通过设置ShareSDK.xml中的参数决定是都绕过审核。BypassApproval="false"为不绕过审核，BypassApproval="true"为绕过审核 
```


## 在html中调用分享接口的方法

```sh	
ShareSDKPlugin.share();
```
 

# 测试用的各平台的AppId和签名文件等参数下载地址

```sh	
http://pan.baidu.com/s/1pLbJd7X
```
