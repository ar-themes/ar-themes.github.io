/* <![CDATA[ */
function date_time(e){date=new Date;year=date.getFullYear();month=date.getMonth();months=new Array("يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر");d=date.getDate();day=date.getDay();days=new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت");h=date.getHours();if(h<10){h="0"+h}m=date.getMinutes();if(m<10){m="0"+m}s=date.getSeconds();if(s<10){s="0"+s}result=""+days[day]+" "+d+" "+months[month]+" "+year;document.getElementById(e).innerHTML=result;setTimeout('date_time("'+e+'");',"1000");return true}window.onload=date_time("date_time")
/* ]]> */


/* <![CDATA[ */
function showRecentComments(e){var t=e.feed.entry,n=parseInt(e.feed.openSearch$totalResults.$t,10),r="",i=tt_cm,s=cm_config_defaults;if(i<n){if(s.alert===true){alert(n-i+s.new_cm)}else if(s.alert===false){document.title="("+(n-i)+s.new_cm+") "+doc_title}else{s.alert(n-i,s.new_cm)}}r='<ul class="recent_comments small_posts">';for(var o=0;o<t.length;o++){for(var u=0;u<t[o].link.length;u++){if(t[o].link[u].rel=="alternate"){link=t[o].link[u].href;break}}var a=link.lastIndexOf("/")+1,f=link.lastIndexOf("."),l=link.split("-").join(" ").substring(a,f)+"&hellip;";author=t[o].author[0],name=author.name.$t,avatar=author.gd$image.src.replace(/\/s[0-9]+(\-c|\/)/,"/s"+s.t_w+"$1").replace(/http\:\/\/www.google.com\/url\?source\=imglanding(.*?)q\=/i,"").replace(/\.(jpg|jpeg|png|bmp|gif)(.*?)$/i,".$1"),profile=author.uri?author.uri.$t:"#nope",date=t[o].gd$extendedProperty[1].value,content="content"in t[o]?t[o].content.$t.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",nt=s.new_tab_link?' target="_blank"':"";content=content.length>s.summary?content.substring(0,s.summary)+"&hellip;":content;r+='<li class="clearfix">';r+='<a class="s_thumb hover-shadow" href="'+profile+'" title="'+name+'"'+nt+'><img alt="Loading..." style="width:'+s.t_w+"px;height:"+s.t_h+'px;" src="'+avatar+'"></a>';r+='<h5><a href="'+link+'" title="'+l+'"'+nt+">"+name+"</a> :</h5>";r+="<p>"+content+"</p>";r+="</li>"}r+="</ul>";document.getElementById(s.ct_id).innerHTML=r;_cookie.set("tt_cm",n,7e3);tt_cm=n}var cm_config_defaults={home_page:"/",max_result:7,t_w:80,t_h:80,summary:50,new_tab_link:false,ct_id:"comments-container",new_cm:" New Comment",interval:3e4,alert:false},_cookie={set:function(e,t,n){var r,i;if(n){r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);i="; expires="+r.toGMTString()}else{i=""}document.cookie=e+"="+t+i+"; path=/"},get:function(e){var t=e+"=",n=document.cookie.split(";"),r;for(var i=0;i<n.length;i++){r=n[i];while(r.charAt(0)==" "){r=r.substring(1,r.length)}if(r.indexOf(t)==0){return r.substring(t.length,r.length)}}return null},del:function(e){this.set(e,"",-1)}},tt_cm=_cookie.get("tt_cm")?_cookie.get("tt_cm"):0,doc_title=document.title;for(var i in cm_config_defaults){cm_config_defaults[i]=typeof cm_config[i]=="undefined"?cm_config_defaults[i]:cm_config[i]}(function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script"),n=cm_config_defaults;t.type="text/javascript";t.id="cm-feed-script";t.src=n.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+n.max_result+"&callback=showRecentComments";e.appendChild(t);setInterval(function(){var t=document.createElement("script");t.type="text/javascript";t.id="cm-feed-script";t.src=n.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+n.max_result+"&callback=showRecentComments";var r=document.getElementById("cm-feed-script");r.parentNode.removeChild(r);e.appendChild(t)},n.interval)})()
/* ]]> */


/* <![CDATA[ */
function showLucky(e){var t=e.feed;var n=t.entry||[];var r=t.entry[0];for(var i=0;i<r.link.length;++i){if(r.link[i].rel=="alternate"){window.location=r.link[i].href}}}function fetchLuck(e){script=document.createElement("script");script.src="/feeds/posts/summary?start-index="+e+"&max-results=1&alt=json-in-script&callback=showLucky";script.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(script)}function feelingLucky(e){var t=e.feed;var n=parseInt(t.openSearch$totalResults.$t,10);var r=Math.floor(Math.random()*n);r++;a=document.createElement("a");a.href="#random";a.title="Random Post";a.rel=r;a.onclick=function(){fetchLuck(this.rel)};a.innerHTML='<i class="fa fa-random"></i>';document.getElementById("randomx").appendChild(a)}
/* ]]> */
