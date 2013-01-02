/*
 format.js v1.0.0 (c) 2013 knowledgecode | MIT licensed
*/
(function(){var e=function(h){for(var e=/(^|[^%])(%%)*(%[\-0]?[1-9]\d*|%)[doxs]/g,l=/(?:%)(-|0|)(\d*)([doxs])/,j=0,f=1,m={d:10,o:8,x:16},b="",g,c,a,k,d;null!==(g=e.exec(h));){b+=h.substring(j,g.index);j=e.lastIndex;c=l.exec(g[0]);a="s"===c[3]?arguments[f]:arguments[f].toString(m[c[3]]);k=parseInt(c[2],10)-a.length;d=[];0<k&&(d[k]="");switch(c[1]){case "-":a+=d.join(" ");break;case "0":a=0>arguments[f]?"-"+d.join("0")+a.substring(1):d.join("0")+a;break;default:a=d.join(" ")+a}b+=g[0].replace(c[0],
a);f++}b+=h.substring(j);return b.replace(/%%/g,"%")};"function"===typeof define&&"object"===typeof module&&module.exports?module.exports=e:window.format=e})();
