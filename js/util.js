function callAjax(nameArg, dataArg, callbackSuccess, callbackError) {
	if (nameArg == null) {
		return false;
	}
	dataArg = dataArg ? dataArg : {};
	callbackError = callbackError ? callbackError : function() {};
	callbackSuccess = callbackSuccess ? callbackSuccess : function() {};
	$.ajax({
		url: 'http://rickonono3.top:13809/' + nameArg,
		contentType: 'application/json',
		dataType: 'json',
		type: 'post',
		data: JSON.stringify(dataArg),
		success: (data) => {
			callbackSuccess(data);
		},
		error: () => {
			callbackError();
		}
	});
}

function setCookie(name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
} 

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
} 

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
} 





// -----------------------------
if (getCookie("username") === null) {
	window.location.href = "login.html";
}
