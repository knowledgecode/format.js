/*
 format.js v1.0.1 (c) 2013 knowledgecode | MIT licensed
*/
(function(){var e=function(f){for(var e=/(^|[^%])(%%)*(%[\-0]?[1-9]\d*|%)[doxs]/g,j=/(?:%)(-|0|)(\d*)([doxs])/,k=0,g=1,m={d:10,o:8,x:16},b="",h,c,a,l,d;null!==(h=e.exec(f));){b+=f.substring(k,h.index);k=e.lastIndex;c=j.exec(h[0]);a="s"===c[3]?arguments[g]:arguments[g].toString(m[c[3]]);l=parseInt(c[2],10)-a.length;d=[];0<l&&(d[l]="");switch(c[1]){case "-":a+=d.join(" ");break;case "0":a=0>arguments[g]?"-"+d.join("0")+a.substring(1):d.join("0")+a;break;default:a=d.join(" ")+a}b+=h[0].replace(c[0],
a);g++}b+=f.substring(k);return b.replace(/%%/g,"%")};"object"===typeof lego&&lego.define?lego.define("format",[],function(f,n,j){j.exports=e}):"object"===typeof module&&module.exports?module.exports=e:window.format=e})();
