(this.webpackJsonpbillcui_v3=this.webpackJsonpbillcui_v3||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(7),l=i.n(s),a=(i(13),i(3)),r=(i(14),i(2)),o=(i(15),i(16),i(0));var d=function(e){var t=e.children,i=e.className;return Object(o.jsx)("div",{className:"px-1 pt-1 ".concat(i),children:Object(o.jsxs)("p",{className:"text-2xl text-console-white",children:[" ",t]})})};i(18);var j=function(e){var t=e.setUserInput,i=e.userInput,n=e.handlePressedEnter,c=e.currDir;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"text-pink-500 text-2xl pl-1 pt-1 bg-transparent inline",children:["/"+c,"> "]}),Object(o.jsx)("input",{className:"text-console-white text-2xl pt-1 bg-transparent inline outline-none w-10/12 text-pink-500 ",autoFocus:!0,type:"text",onChange:function(e){var i=e.target;t(i.value)},onKeyDown:function(e){"Enter"===e.key&&n()},value:i})]})},m=i(8);var x=function(){return Object(o.jsx)("div",{className:"font-console",children:Object(o.jsx)(d,{children:"WIP"})})},u={name:"MathSocLibrary",display:Object(o.jsx)(x,{})},b=function e(t,i,n,c){Object(m.a)(this,e),this.name=void 0,this.parent=void 0,this.subdirectories=void 0,this.files=void 0,this.name=t,this.parent=i,this.subdirectories=n,this.files=c};var h=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),i=t[0],c=t[1],s=[Object(o.jsx)(d,{children:Object(o.jsx)("div",{className:"text-red-400",children:"\ud83d\udcbb Welcome to \u2728Bill Cui\u2019s Website\u2728 LTS (GNU/Linux 4.19.104-microsoft-standard x86_64) \ud83d\udcbb"})}),Object(o.jsxs)(d,{className:"mx-4 mt-5",children:[Object(o.jsx)("div",{className:"text-yellow-400 inline",children:"* Documentation:"}),"  Bill\u2019s Resume"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-yellow-400 inline",children:"* Management:"}),"     https://github.com/billcui57"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-yellow-400 inline",children:"* Support:"}),"        https://linkedin.com/in/billcui57"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-yellow-400 inline",children:"* Contact:"}),"        billcui2001@hotmail.com"]}),Object(o.jsxs)(d,{className:"mx-4 mt-5",children:["System information as of ",Object(o.jsx)("div",{className:"text-green-400 inline",children:(new Date).toString()})]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-yellow-400 inline",children:"Education Status: "})," University of Waterloo Computer Science 2B"]}),Object(o.jsx)(d,{className:"mt-5",children:"This message is shown once a visit."}),Object(o.jsxs)(d,{children:["Type ",Object(o.jsx)("div",{className:"text-green-400 inline",children:"help"})," for list of navigation commands"]})],l=[Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-green-400 inline",children:"* ls:"})," list navigation directory"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-green-400 inline",children:"* cd:"})," change navigation directory"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-green-400 inline",children:"* cat:"})," view a file in navigation directory"]}),Object(o.jsxs)(d,{className:"mx-4",children:[Object(o.jsx)("div",{className:"text-green-400 inline",children:"* clear:"})," clear terminal screen"]})],m=Object(n.useState)(s),x=Object(a.a)(m,2),h=x[0],v=x[1],O=Object(n.useState)((function(){return function(){var e=new b(""),t=new b("projects",e,void 0,[u]),i=new b("hackathons",e),n=new b("internships",e);return e.subdirectories=[t,i,n],e}()})),f=Object(a.a)(O,2),p=f[0],N=f[1];return Object(n.useEffect)((function(){var e=document.getElementById("bottom");null===e||void 0===e||e.scrollIntoView({behavior:"smooth"})})),console.log(p.files),Object(o.jsxs)("div",{className:"animate-profile-fade-in",children:[h,Object(o.jsx)(j,{setUserInput:c,handlePressedEnter:function(){var e;if(e=[].concat(Object(r.a)(h),[Object(o.jsxs)(d,{children:[Object(o.jsxs)("div",{className:"text-pink-500 inline",children:["/"+p.name,">"]})," ",i]})]),c(""),0!==(null===i||void 0===i?void 0:i.length)&&(null===i||void 0===i?void 0:i.trim()))if("help"==i)e=[].concat(Object(r.a)(e),[l]);else if("clear"===i)e=[];else if("ls"===i){var t,n;e=[].concat(Object(r.a)(e),[null===(t=p.subdirectories)||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(d,{className:"mr-4 inline-block ",children:Object(o.jsx)("div",{className:"text-green-400",children:"/"+e.name})})})),null===(n=p.files)||void 0===n?void 0:n.map((function(e){return Object(o.jsx)(d,{className:"mr-4 inline-block ",children:Object(o.jsx)("div",{className:"text-green-400",children:e.name})})}))])}else if(i.split(" ")&&"cd"==i.split(" ")[0]){var s=i.split(" ")[1];if(".."===s){var a=p.parent;a?N(a):e=[].concat(Object(r.a)(e),[Object(o.jsx)(d,{children:Object(o.jsx)("div",{className:"text-red-400 inline",children:"Root directory does not have a parent directory"})})])}else{var j,m=null===(j=p.subdirectories)||void 0===j?void 0:j.find((function(e){return e.name===s||"/"+e.name===s}));m?N(m):e=[].concat(Object(r.a)(e),[Object(o.jsx)(d,{children:Object(o.jsxs)("div",{className:"text-red-400 inline",children:["Directory name does not exist, type ",Object(o.jsx)("div",{className:"text-green-400 inline",children:"ls"})," for list of directories"]})})])}}else if(i.split(" ")&&"cat"==i.split(" ")[0]){var x,u=i.split(" ")[1],b=null===(x=p.files)||void 0===x?void 0:x.find((function(e){return e.name===u}));e=[].concat(Object(r.a)(e),b?[b.display]:[Object(o.jsx)(d,{children:Object(o.jsxs)("div",{className:"text-red-400 inline",children:["File name does not exist, type ",Object(o.jsx)("div",{className:"text-green-400 inline",children:"ls"})," for list of files"]})})])}else e=[].concat(Object(r.a)(e),[Object(o.jsx)(d,{children:Object(o.jsxs)("div",{className:"text-red-400 inline",children:["Invalid command, type ",Object(o.jsx)("div",{className:"text-green-400 inline",children:"help"})," for list of navigation commands"]})})]);else;e=[].concat(Object(r.a)(e),[Object(o.jsx)("div",{id:"bottom",children:" "})]),v(e)},userInput:i,currDir:p.name})]})},v=i.p+"static/media/me.c00d2cb6.jpg";var O=function(){var e=Object(n.useState)(Object(o.jsx)("div",{className:"animate-profile-fade-in",children:Object(o.jsx)("img",{src:v,className:"w-1/3 rounded-full mx-auto mt-10"})})),t=Object(a.a)(e,2),i=t[0],c=t[1],s=function(){c((function(){return Object(o.jsxs)("div",{className:"animate-profile-fade-out ",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:v,className:"w-1/3 rounded-full mx-auto mt-10"}),Object(o.jsx)("h1",{className:" text-console-white text-center text-4xl mt-4",children:"Hi, I'm Bill Cui."})]}),Object(o.jsx)("div",{className:"flex justify-center mt-5",children:Object(o.jsx)("input",{type:"button",className:" bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out",value:"Begin"})})]})})),setTimeout((function(){c(Object(o.jsx)(h,{}))}),950)};return Object(n.useEffect)((function(){setTimeout((function(){c(Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:v,className:"w-1/3 rounded-full mx-auto mt-10"}),Object(o.jsx)("h1",{className:" text-console-white text-center text-4xl mt-4 animate-profile-fade-in",children:"Hi, I'm Bill Cui."})]}),Object(o.jsx)("div",{className:"flex justify-center mt-5 animate-profile-fade-in",children:Object(o.jsx)("input",{type:"button",className:"animate-pulse bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out",value:"Begin",onClick:function(){return s()}})})]}))}),500)}),[]),Object(o.jsx)("div",{className:"font-console",children:i||void 0})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;i(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.5eea919e.chunk.js.map