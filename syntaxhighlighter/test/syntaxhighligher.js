if(!window.SyntaxHighlighter)var SyntaxHighlighter=function(){var e={defaults:{"class-name":"","first-line":1,"pad-line-numbers":!0,highlight:null,"smart-tabs":!0,"tab-size":4,gutter:!0,toolbar:!0,collapse:!1,"auto-links":!0,light:!1,"wrap-lines":!0,"html-script":!1},config:{useScriptTags:!0,clipboardSwf:null,toolbarItemWidth:16,toolbarItemHeight:16,bloggerMode:!1,stripBrs:!1,tagName:"pre",strings:{expandSource:"show source",viewSource:"view source",copyToClipboard:"copy to clipboard",copyToClipboardConfirmation:"The code is in your clipboard now",print:"print",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:3em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:4em;"><div>version 2.1.364 (October 15 2009)</div><div><a href="http://alexgorbatchev.com" target="_blank" style="color:#0099FF;text-decoration:none;">http://alexgorbatchev.com</a></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#0099FF;text-decoration:none;">donate</a> to keep development active!</div></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2009 Alex Gorbatchev.</div></div></body></html>'},debug:!1},vars:{discoveredBrushes:null,spaceWidth:null,printFrame:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:/"([^\\"]|\\.)*"/g,multiLineSingleQuotedString:/'([^\\']|\\.)*'/g,xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,url:/&lt;\w+:\/\/[\w-.\/?%&=@:;]*&gt;|\w+:\/\/[\w-.\/?%&=@:;]*/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{create:function(t){var r=document.createElement("DIV"),i=e.toolbar.items;r.className="toolbar";for(var n in i){var s=i[n],a=new s(t),l=a.create();t.toolbarCommands[n]=a,null!=l&&("string"==typeof l&&(l=e.toolbar.createButton(l,t.id,n)),l.className+="item "+n,r.appendChild(l))}return r},createButton:function(t,r,i){var n=document.createElement("a"),s=n.style,a=e.config,l=a.toolbarItemWidth,o=a.toolbarItemHeight;return n.href="#"+i,n.title=t,n.highlighterId=r,n.commandName=i,n.innerHTML=t,0==isNaN(l)&&(s.width=l+"px"),0==isNaN(o)&&(s.height=o+"px"),n.onclick=function(t){try{e.toolbar.executeCommand(this,t||window.event,this.highlighterId,this.commandName)}catch(t){e.utils.alert(t.message)}return!1},n},executeCommand:function(t,r,i,n,s){var a,l=e.vars.highlighters[i];return null==l||null==(a=l.toolbarCommands[n])?null:a.execute(t,r,s)},items:{expandSource:function(t){this.create=function(){if(1==t.getParam("collapse"))return e.config.strings.expandSource},this.execute=function(e,r,i){var n=t.div;e.parentNode.removeChild(e),n.className=n.className.replace("collapsed","")}},viewSource:function(t){this.create=function(){return e.config.strings.viewSource},this.execute=function(r,i,n){var s=e.utils.fixInputString(t.originalCode).replace(/</g,"&lt;"),a=e.utils.popup("","_blank",750,400,"location=0, resizable=1, menubar=0, scrollbars=1");s=e.utils.unindent(s),a.document.write("<pre>"+s+"</pre>"),a.document.close()}},copyToClipboard:function(t){var r,i=t.id;this.create=function(){function t(e){var t="";for(var r in e)t+="<param name='"+r+"' value='"+e[r]+"'/>";return t}function n(e){var t="";for(var r in e)t+=" "+r+"='"+e[r]+"'";return t}var s=e.config;if(null==s.clipboardSwf)return null;var a,l={width:s.toolbarItemWidth,height:s.toolbarItemHeight,id:i+"_clipboard",type:"application/x-shockwave-flash",title:e.config.strings.copyToClipboard},o={allowScriptAccess:"always",wmode:"transparent",flashVars:"highlighterId="+i,menu:"false"},c=s.clipboardSwf;return a=/msie/i.test(navigator.userAgent)?"<object"+n({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"})+n(l)+">"+t(o)+t({movie:c})+"</object>":"<embed"+n(l)+n(o)+n({src:c})+"/>",r=document.createElement("div"),r.innerHTML=a,r},this.execute=function(r,i,n){var s=n.command;switch(s){case"get":var a=e.utils.unindent(e.utils.fixInputString(t.originalCode).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));if(!window.clipboardData)return e.utils.unindent(a);window.clipboardData.setData("text",a);case"ok":e.utils.alert(e.config.strings.copyToClipboardConfirmation);break;case"error":e.utils.alert(n.message)}}},printSource:function(t){this.create=function(){return e.config.strings.print},this.execute=function(r,i,n){function s(e,t){for(var r=t.getElementsByTagName("link"),i=0;i<r.length;i++)"stylesheet"==r[i].rel.toLowerCase()&&/shCore\.css$/.test(r[i].href)&&e.write('<link type="text/css" rel="stylesheet" href="'+r[i].href+'"></link>')}var a=document.createElement("IFRAME"),l=null;null!=e.vars.printFrame&&document.body.removeChild(e.vars.printFrame),e.vars.printFrame=a,a.style.cssText="position:absolute;width:0px;height:0px;left:-500px;top:-500px;",document.body.appendChild(a),l=a.contentWindow.document,s(l,window.document),l.write('<div class="'+t.div.className.replace("collapsed","")+' printing">'+t.div.innerHTML+"</div>"),l.close(),a.contentWindow.focus(),a.contentWindow.print()}},about:function(t){this.create=function(){},this.execute=function(t,r){var i=e.utils.popup("","_blank",500,250,"scrollbars=0"),n=i.document;n.write(e.config.strings.aboutDialog),n.close(),i.focus()}}}},utils:{indexOf:function(e,t,r){r=Math.max(r||0,0);for(var i=r;i<e.length;i++)if(e[i]==t)return i;return-1},guid:function(e){return e+Math.round(1e6*Math.random()).toString()},merge:function(e,t){var r,i={};for(r in e)i[r]=e[r];for(r in t)i[r]=t[r];return i},toBoolean:function(e){switch(e){case"true":return!0;case"false":return!1}return e},popup:function(e,t,r,i,n){var s=(screen.width-r)/2,a=(screen.height-i)/2;n+=", left="+s+", top="+a+", width="+r+", height="+i,n=n.replace(/^,/,"");var l=window.open(e,t,n);return l.focus(),l},addEvent:function(e,t,r){e.attachEvent?(e["e"+t+r]=r,e[t+r]=function(){e["e"+t+r](window.event)},e.attachEvent("on"+t,e[t+r])):e.addEventListener(t,r,!1)},alert:function(t){alert(e.config.strings.alert+t)},findBrush:function(t,r){var i=e.vars.discoveredBrushes,n=null;if(null==i){i={};for(var s in e.brushes){var a=e.brushes[s].aliases;if(null!=a){e.brushes[s].name=s.toLowerCase();for(var l=0;l<a.length;l++)i[a[l]]=s}}e.vars.discoveredBrushes=i}return n=e.brushes[i[t]],null==n&&0!=r&&e.utils.alert(e.config.strings.noBrush+t),n},eachLine:function(e,t){for(var r=e.split("\n"),i=0;i<r.length;i++)r[i]=t(r[i]);return r.join("\n")},trimFirstAndLastLines:function(e){return e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")},parseParams:function(e){for(var t,r={},i=new XRegExp("^\\[(?<values>(.*?))\\]$"),n=new XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");null!=(t=n.exec(e));){var s=t.value.replace(/^['"]|['"]$/g,"");if(null!=s&&i.test(s)){var a=i.exec(s);s=a.values.length>0?a.values.split(/\s*,\s*/):[]}r[t.name]=s}return r},decorate:function(t,r){return null==t||0==t.length||"\n"==t?t:(t=t.replace(/</g,"&lt;"),t=t.replace(/ {2,}/g,function(e){for(var t="",r=0;r<e.length-1;r++)t+="&nbsp;";return t+" "}),null!=r&&(t=e.utils.eachLine(t,function(e){if(0==e.length)return"";var t="";return e=e.replace(/^(&nbsp;| )+/,function(e){return t=e,""}),0==e.length?t:t+'<code class="'+r+'">'+e+"</code>"})),t)},padNumber:function(e,t){for(var r=e.toString();r.length<t;)r="0"+r;return r},measureSpace:function(){var t,r=document.createElement("div"),i=0,n=document.body,s=e.utils.guid("measureSpace"),a='<div class="',l="</div>",o="</span>";if(r.innerHTML=a+'syntaxhighlighter">'+a+'lines">'+a+'line">'+a+'content"><span class="block"><span id="'+s+'">&nbsp;'+o+o+l+l+l+l,n.appendChild(r),t=document.getElementById(s),/opera/i.test(navigator.userAgent)){var c=window.getComputedStyle(t,null);i=parseInt(c.getPropertyValue("width"))}else i=t.offsetWidth;return n.removeChild(r),i},processTabs:function(e,t){for(var r="",i=0;i<t;i++)r+=" ";return e.replace(/\t/g,r)},processSmartTabs:function(t,r){function i(e,t,r){return e.substr(0,t)+s.substr(0,r)+e.substr(t+1,e.length)}for(var n=(t.split("\n"),"\t"),s="",a=0;a<50;a++)s+="                    ";return t=e.utils.eachLine(t,function(e){if(e.indexOf(n)==-1)return e;for(var t=0;(t=e.indexOf(n))!=-1;){var s=r-t%r;e=i(e,t,s)}return e})},fixInputString:function(t){var r=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;return 1==e.config.bloggerMode&&(t=t.replace(r,"\n")),1==e.config.stripBrs&&(t=t.replace(r,"")),t},trim:function(e){return e.replace(/^\s+|\s+$/g,"")},unindent:function(t){for(var r=e.utils.fixInputString(t).split("\n"),i=(new Array,/^\s*/),n=1e3,s=0;s<r.length&&n>0;s++){var a=r[s];if(0!=e.utils.trim(a).length){var l=i.exec(a);if(null==l)return t;n=Math.min(l[0].length,n)}}if(n>0)for(var s=0;s<r.length;s++)r[s]=r[s].substr(n);return r.join("\n")},matchesSortCallback:function(e,t){return e.index<t.index?-1:e.index>t.index?1:e.length<t.length?-1:e.length>t.length?1:0},getMatches:function(t,r){function i(t,r){return[new e.Match(t[0],t.index,r.css)]}for(var n=null,s=[],a=r.func?r.func:i;null!=(n=r.regex.exec(t));)s=s.concat(a(n,r));return s},processUrls:function(t){var r="&lt;",i="&gt;";return t.replace(e.regexLib.url,function(e){var t="",n="";return 0==e.indexOf(r)&&(n=r,e=e.substring(r.length)),e.indexOf(i)==e.length-i.length&&(e=e.substring(0,e.length-i.length),t=i),n+'<a href="'+e+'">'+e+"</a>"+t})},getSyntaxHighlighterScriptTags:function(){for(var e=document.getElementsByTagName("script"),t=[],r=0;r<e.length;r++)"syntaxhighlighter"==e[r].type&&t.push(e[r]);return t},stripCData:function(t){var r="<![CDATA[",i="]]>",n=e.utils.trim(t),s=!1;return 0==n.indexOf(r)&&(n=n.substring(r.length),s=!0),n.indexOf(i)==n.length-i.length&&(n=n.substring(0,n.length-i.length),s=!0),s?n:t}},highlight:function(t,r){function i(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r]);return t}var n=r?[r]:i(document.getElementsByTagName(e.config.tagName)),s="innerHTML",a=null,l=e.config;if(l.useScriptTags&&(n=n.concat(e.utils.getSyntaxHighlighterScriptTags())),0!==n.length)for(var o=0;o<n.length;o++){var c,h,u,g=n[o],d=e.utils.parseParams(g.className);if(d=e.utils.merge(t,d),c=d.brush,null!=c){if("true"==d["html-script"]||1==e.defaults["html-script"])a=new e.HtmlScript(c),c="htmlscript";else{var p=e.utils.findBrush(c);if(!p)continue;c=p.name,a=new p}h=g[s],l.useScriptTags&&(h=e.utils.stripCData(h)),d["brush-name"]=c,a.highlight(h,d),u=a.div,e.config.debug&&(u=document.createElement("textarea"),u.value=a.div.innerHTML,u.style.width="70em",u.style.height="30em"),g.parentNode.replaceChild(u,g)}}},all:function(t){e.utils.addEvent(window,"load",function(){e.highlight(t)})}};return e.Match=function(e,t,r){this.value=e,this.index=t,this.length=e.length,this.css=r,this.brushName=null},e.Match.prototype.toString=function(){return this.value},e.HtmlScript=function(t){function r(e,t){for(var r=0;r<e.length;r++)e[r].index+=t}function i(t,i){for(var a,l=t.code,o=[],c=n.regexList,h=t.index+t.left.length,u=n.htmlScript,g=0;g<c.length;g++)a=e.utils.getMatches(l,c[g]),r(a,h),o=o.concat(a);null!=u.left&&null!=t.left&&(a=e.utils.getMatches(t.left,u.left),r(a,t.index),o=o.concat(a)),null!=u.right&&null!=t.right&&(a=e.utils.getMatches(t.right,u.right),r(a,t.index+t[0].lastIndexOf(t.right)),o=o.concat(a));for(var d=0;d<o.length;d++)o[d].brushName=s.name;return o}var n,s=e.utils.findBrush(t),a=new e.brushes.Xml;if(null!=s)return n=new s,this.xmlBrush=a,null==n.htmlScript?void e.utils.alert(e.config.strings.brushNotHtmlScript+t):void a.regexList.push({regex:n.htmlScript.code,func:i})},e.HtmlScript.prototype.highlight=function(e,t){this.xmlBrush.highlight(e,t),this.div=this.xmlBrush.div},e.Highlighter=function(){},e.Highlighter.prototype={getParam:function(t,r){var i=this.params[t];return e.utils.toBoolean(null==i?r:i)},create:function(e){return document.createElement(e)},findMatches:function(t,r){var i=[];if(null!=t)for(var n=0;n<t.length;n++)"object"==typeof t[n]&&(i=i.concat(e.utils.getMatches(r,t[n])));return i.sort(e.utils.matchesSortCallback)},removeNestedMatches:function(){for(var e=this.matches,t=0;t<e.length;t++)if(null!==e[t])for(var r=e[t],i=r.index+r.length,n=t+1;n<e.length&&null!==e[t];n++){var s=e[n];if(null!==s){if(s.index>i)break;s.index==r.index&&s.length>r.length?this.matches[t]=null:s.index>=r.index&&s.index<i&&(this.matches[n]=null)}}},createDisplayLines:function(t){var r=t.split(/\n/g),i=parseInt(this.getParam("first-line")),n=this.getParam("pad-line-numbers"),s=this.getParam("highlight",[]),a=this.getParam("gutter");t="",1==n?n=(i+r.length-1).toString().length:1==isNaN(n)&&(n=0);for(var l=0;l<r.length;l++){var o=r[l],c=/^(&nbsp;|\s)+/.exec(o),h="alt"+(l%2==0?1:2),u=e.utils.padNumber(i+l,n),g=e.utils.indexOf(s,(i+l).toString())!=-1,d=null;null!=c&&(d=c[0].toString(),o=o.substr(d.length)),o=e.utils.trim(o),0==o.length&&(o="&nbsp;"),g&&(h+=" highlighted"),t+='<div class="line '+h+'"><table><tr>'+(a?'<td class="number"><code>'+u+"</code></td>":"")+'<td class="content">'+(null!=d?'<code class="spaces">'+d.replace(" ","&nbsp;")+"</code>":"")+o+"</td></tr></table></div>"}return t},processMatches:function(t,r){function i(e){var t=e?e.brushName||l:l;return t?t+" ":""}for(var n=0,s="",a=e.utils.decorate,l=this.getParam("brush-name",""),o=0;o<r.length;o++){var c,h=r[o];null!==h&&0!==h.length&&(c=i(h),s+=a(t.substr(n,h.index-n),c+"plain")+a(h.value,c+h.css),n=h.index+h.length)}return s+=a(t.substr(n),i()+"plain")},highlight:function(t,r){function i(){l.children[0].className=l.children[0].className.replace(" show","")}var n,s,a=(e.config,e.vars);if(this.params={},this.div=null,this.lines=null,this.code=null,this.bar=null,this.toolbarCommands={},this.id=e.utils.guid("highlighter_"),a.highlighters[this.id]=this,null===t&&(t=""),this.params=e.utils.merge(e.defaults,r||{}),1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1),this.div=n=this.create("DIV"),this.lines=this.create("DIV"),this.lines.className="lines",className="syntaxhighlighter",n.id=this.id,this.getParam("collapse")&&(className+=" collapsed"),0==this.getParam("gutter")&&(className+=" nogutter"),0==this.getParam("wrap-lines")&&(this.lines.className+=" no-wrap"),className+=" "+this.getParam("class-name"),className+=" "+this.getParam("brush-name"),n.className=className,this.originalCode=t,this.code=e.utils.trimFirstAndLastLines(t).replace(/\r/g," "),s=this.getParam("tab-size"),this.code=1==this.getParam("smart-tabs")?e.utils.processSmartTabs(this.code,s):e.utils.processTabs(this.code,s),this.code=e.utils.unindent(this.code),this.getParam("toolbar")){this.bar=this.create("DIV"),this.bar.className="bar",this.bar.appendChild(e.toolbar.create(this)),n.appendChild(this.bar);var l=this.bar;n.onmouseover=function(){i(),l.children[0].className+=" show"},n.onmouseout=function(){i()}}n.appendChild(this.lines),this.matches=this.findMatches(this.regexList,this.code),this.removeNestedMatches(),t=this.processMatches(this.code,this.matches),t=this.createDisplayLines(e.utils.trim(t)),this.getParam("auto-links")&&(t=e.utils.processUrls(t)),this.lines.innerHTML=t},getKeywords:function(e){return e=e.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|"),"\\b(?:"+e+")\\b"},forHtmlScript:function(e){this.htmlScript={left:{regex:e.left,css:"script"},right:{regex:e.right,css:"script"},code:new XRegExp("(?<left>"+e.left.source+")(?<code>.*?)(?<right>"+e.right.source+")","sgi")}}},e}();window.XRegExp||!function(){var e={exec:RegExp.prototype.exec,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},t={part:/(?:[^\\([#\s.]+|\\(?!k<[\w$]+>|[pP]{[^}]+})[\S\s]?|\((?=\?(?!#|<[\w$]+>)))+|(\()(?:\?(?:(#)[^)]*\)|<([$\w]+)>))?|\\(?:k<([\w$]+)>|[pP]{([^}]+)})|(\[\^?)|([\S\s])/g,replaceVar:/(?:[^$]+|\$(?![1-9$&`']|{[$\w]+}))+|\$(?:([1-9]\d*|[$&`'])|{([$\w]+)})/g,extended:/^(?:\s+|#.*)+/,quantifier:/^(?:[?*+]|{\d+(?:,\d*)?})/,classLeft:/&&\[\^?/g,classRight:/]/g},r=function(e,t,r){for(var i=r||0;i<e.length;i++)if(e[i]===t)return i;return-1},i=void 0!==/()??/.exec("")[1],n={};XRegExp=function(i,s){if(i instanceof RegExp){if(void 0!==s)throw TypeError("can't supply flags when constructing one RegExp from another");return i.addFlags()}var a,l,o,c,h,s=s||"",u=s.indexOf("s")>-1,g=s.indexOf("x")>-1,d=!1,p=[],m=[],f=t.part;for(f.lastIndex=0;a=e.exec.call(f,i);)a[2]?t.quantifier.test(i.slice(f.lastIndex))||m.push("(?:)"):a[1]?(p.push(a[3]||null),a[3]&&(d=!0),m.push("(")):a[4]?(c=r(p,a[4]),m.push(c>-1?"\\"+(c+1)+(isNaN(i.charAt(f.lastIndex))?"":"(?:)"):a[0])):a[5]?m.push(n.unicode?n.unicode.get(a[5],"P"===a[0].charAt(1)):a[0]):a[6]?"]"===i.charAt(f.lastIndex)?(m.push("["===a[6]?"(?!)":"[\\S\\s]"),f.lastIndex++):(l=XRegExp.matchRecursive("&&"+i.slice(a.index),t.classLeft,t.classRight,"",{escapeChar:"\\"})[0],m.push(a[6]+l+"]"),f.lastIndex+=l.length+1):a[7]?u&&"."===a[7]?m.push("[\\S\\s]"):g&&t.extended.test(a[7])?(o=e.exec.call(t.extended,i.slice(f.lastIndex-1))[0].length,t.quantifier.test(i.slice(f.lastIndex-1+o))||m.push("(?:)"),f.lastIndex+=o-1):m.push(a[7]):m.push(a[0]);return h=RegExp(m.join(""),e.replace.call(s,/[sx]+/g,"")),h._x={source:i,captureNames:d?p:null},h},XRegExp.addPlugin=function(e,t){n[e]=t},RegExp.prototype.exec=function(t){var r,n,s,a=e.exec.call(this,t);if(a){if(i&&a.length>1&&(s=new RegExp("^"+this.source+"$(?!\\s)",this.getNativeFlags()),e.replace.call(a[0],s,function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(a[n]=void 0)})),this._x&&this._x.captureNames)for(n=1;n<a.length;n++)r=this._x.captureNames[n-1],r&&(a[r]=a[n]);this.global&&this.lastIndex>a.index+a[0].length&&this.lastIndex--}return a}}(),RegExp.prototype.getNativeFlags=function(){return(this.global?"g":"")+(this.ignoreCase?"i":"")+(this.multiline?"m":"")+(this.extended?"x":"")+(this.sticky?"y":"")},RegExp.prototype.addFlags=function(e){var t=new XRegExp(this.source,(e||"")+this.getNativeFlags());return this._x&&(t._x={source:this._x.source,captureNames:this._x.captureNames?this._x.captureNames.slice(0):null}),t},RegExp.prototype.call=function(e,t){return this.exec(t)},RegExp.prototype.apply=function(e,t){return this.exec(t[0])},XRegExp.cache=function(e,t){var r="/"+e+"/"+(t||"");return XRegExp.cache[r]||(XRegExp.cache[r]=new XRegExp(e,t))},XRegExp.escape=function(e){return e.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")},XRegExp.matchRecursive=function(e,t,r,i,n){var s,a,l,o,c,h,n=n||{},u=n.escapeChar,g=n.valueNames,i=i||"",d=i.indexOf("g")>-1,p=i.indexOf("i")>-1,m=i.indexOf("m")>-1,f=i.indexOf("y")>-1,i=i.replace(/y/g,""),t=t instanceof RegExp?t.global?t:t.addFlags("g"):new XRegExp(t,"g"+i),r=r instanceof RegExp?r.global?r:r.addFlags("g"):new XRegExp(r,"g"+i),x=[],b=0,v=0,w=0,y=0;if(u){if(u.length>1)throw SyntaxError("can't supply more than one escape character");if(m)throw TypeError("can't supply escape character when using the multiline flag");c=XRegExp.escape(u),h=new RegExp("^(?:"+c+"[\\S\\s]|(?:(?!"+t.source+"|"+r.source+")[^"+c+"])+)+",p?"i":"")}for(;;){if(t.lastIndex=r.lastIndex=w+(u?(h.exec(e.slice(w))||[""])[0].length:0),l=t.exec(e),o=r.exec(e),l&&o&&(l.index<=o.index?o=null:l=null),l||o)v=(l||o).index,w=(l?t:r).lastIndex;else if(!b)break;if(f&&!b&&v>y)break;if(l)b++||(s=v,a=w);else{if(!o||!b)throw t.lastIndex=r.lastIndex=0,Error("subject data contains unbalanced delimiters");if(!--b&&(g?(g[0]&&s>y&&x.push([g[0],e.slice(y,s),y,s]),g[1]&&x.push([g[1],e.slice(s,a),s,a]),g[2]&&x.push([g[2],e.slice(a,v),a,v]),g[3]&&x.push([g[3],e.slice(v,w),v,w])):x.push(e.slice(a,v)),y=w,!d))break}v===w&&w++}return d&&!f&&g&&g[0]&&e.length>y&&x.push([g[0],e.slice(y),y,e.length]),t.lastIndex=r.lastIndex=0,x},SyntaxHighlighter.brushes.CSS=function(){function e(e){return"\\b([a-z_]|)"+e.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b"}function t(e){return"\\b"+e.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b"}var r="ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index",i="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow",n="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:new RegExp(e(r),"gm"),css:"keyword"},{regex:new RegExp(t(i),"g"),css:"value"},{regex:new RegExp(this.getKeywords(n),"g"),css:"color1"}],this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})},SyntaxHighlighter.brushes.CSS.prototype=new SyntaxHighlighter.Highlighter,SyntaxHighlighter.brushes.CSS.aliases=["css"],SyntaxHighlighter.brushes.JScript=function(){var e="break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with";this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(e),"gm"),css:"keyword"}],this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags)},SyntaxHighlighter.brushes.JScript.prototype=new SyntaxHighlighter.Highlighter,SyntaxHighlighter.brushes.JScript.aliases=["js","jscript","javascript"],SyntaxHighlighter.brushes.Xml=function(){function e(e,t){var r=SyntaxHighlighter.Match,i=e[0],n=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(i),s=[];if(null!=e.attributes)for(var a,l=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");null!=(a=l.exec(i));)s.push(new r(a.name,e.index+a.index,"color1")),s.push(new r(a.value,e.index+a.index+a[0].indexOf(a.value),"string"));return null!=n&&s.push(new r(n.name,e.index+n[0].indexOf(n.name),"keyword")),s}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:e}]},SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter,SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html"],SyntaxHighlighter.all();