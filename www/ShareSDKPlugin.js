
var ShareSDK = {
	share: function(){
		cordova.exec(function(result) {
	        alert('分享成功');
	    }, function(error) {
	        alert('分享失败,error='+error);
	        console.debug(error)
	    }, "ShareSDK", "share", ['测试分享标题','你们好啊这里是测试分享','http://cdn.qiyestore.com/openapi/upload/2015/12/25/EYZZ17L785.png','http://www.qiyestore.com']);

	}
};

module.exports = ShareSDK;

