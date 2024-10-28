!function(){var e,t,a=document.querySelector("#headerLogo"),i=document.createElement("a");i.href="/",e=document.createElement("h1"),t=document.createTextNode("Hyouk Seo"),a.appendChild(i),i.appendChild(e),e.appendChild(t)}(),function(){var o,l,c,m,r=[{name:"Insharior",href:"portfolio/insharior-ux-case-study-user-experience-design",title:"Insharior - UX Case study: Interior item sharing mobile application design",img:"insharior/thumb.png"},{name:"IGTracker",href:"portfolio/instagram-tracker-application-igtracker-design",title:"IGTracker - UX Case study: Instagram Tracking Application UI Design",img:"igtracker/thumb.png"},{name:"AWeather",href:"portfolio/weather-push-notification-alarm-application",title:"AWeather - UX Case study: Weather notification application",img:"weather/thumb.png"},{name:"UnivCam",href:"portfolio/album-image-sort-application-univcam",title:"UnivCam - UX Case study: Album sorting application UX/UI design",img:"univcam/thumb.png"},{name:"Neighbors",href:"portfolio/dream-drim-korea-apartment-application",title:"Neighbors - SNS application for neighborhood UI Design",img:"dream/cover.png"},{name:"Memoree",href:"portfolio/memory-record-application-ui-design",title:"Memoree - Minimal UX/UI design for iOS",img:"memoree/thumb.png"},{name:"Sprinter",href:"portfolio/todo-task-list-manage-application-sprinter",title:"Sprinter - ToDo list & task management application UX/UI design",img:"sprinter/thumb.png"},{name:"Suhyup",href:"portfolio/suhyup-mobile-banking-ui-ux-renewal",title:"Suhyup - Mobile Banking Application UX/UI Renewal",img:"suhyup/thumb.png"},{name:"Flat Icons",href:"portfolio/flaticon-vector-graphic-illustration-design",title:"Minimal vector flat icon design",img:"flaticon/house.jpg"}],s=[{name:"Sitemap",href:"articles/generate-sitemap-for-next-js",title:"Creating a sitemap generator for Next.js",img:"sitemap/thumb.png"},{name:"Vue",href:"articles/using-axios-with-vue-js",title:"Using Axios with Vue.js",img:"vue/thumb.png"},{name:"Sass",href:"articles/beginners-guide-to-sass-css",title:"Beginner’s guide to Sass",img:"sass/thumb.png"},{name:"Gulp",href:"articles/auto-css-vendor-browser-prefix-javascript-gulp",title:"Auto CSS prefix with Gulp",img:"gulp/thumb.png"},{name:"Favicon",href:"articles/set-favicon-with-javascript",title:"Set favicons with JavaScript",img:"favicon/favicon.png"},{name:"Scrollbar",href:"articles/customize-website-scrollbar-with-css-web-browser",title:"Customize website’s scrollbar with CSS",img:"scroll/cover.png"},{name:"CSS Variables",href:"articles/css-custom-properties-variables-usage",title:"Using variables(custom properties) in CSS3",img:"css/thumb.png"},{name:"Bodymovin",href:"articles/bodymovin-airbnb-lottie-after-effects",title:"How to use Bodymovin for After Effects by Airbnb",img:"bodymovin/cover.png"},{name:"Jekyll",href:"articles/free-github-blog-and-hosting-with-jekyll",title:"Free GitHub blog and Hosting with Jekyll",img:"jekyll/thumb.png"},{name:"Material",href:"articles/creative-pros-cons-google-material-design",title:"Cons and Pros of Material design by Google",img:"material/material.png"},{name:"Firebase",href:"articles/connecting-domain-with-google-firebase",title:"Using Firebase to host website for free!",img:"firebase/firebase_logo.jpg"},{name:"Musics",href:"articles/spemer-music",title:"Musics by Spemer",img:"music/cover.jpg"}],e=document.querySelector(".portfolio"),t=document.querySelector(".articles");function a(e,t,a){-1!=d.indexOf(e[a].href)&&((n=document.createElement("link")).setAttribute("rel","next"),n.setAttribute("href","/"+s[0].href+".html"),u.appendChild(n));for(var i=0;i<e.length;i++){var n,r=e[i].href;-1!=d.indexOf(e[a].href)?((o=document.createElement("a")).className="prevNext prevNextText",o.href="/",o.title="Home",l=document.createElement("b"),c=document.createTextNode("Home"),m=document.createElement("i")):-1!=d.indexOf(r)&&((o=document.createElement("a")).className="prevNext prevNextText",o.href="/"+e[i+1].href+".html",o.title=e[i+1].title,l=document.createElement("b"),c=document.createTextNode(e[i+1].name),(m=document.createElement("i")).className="fa fa-angle-double-right",(n=document.createElement("link")).setAttribute("rel","next"),n.setAttribute("href","/"+e[i+1].href+".html"),u.appendChild(n),o.setAttribute("onmouseover","nextRight()"),o.setAttribute("onmouseleave","nextRightDel()"))}t.appendChild(o),o.appendChild(l),l.appendChild(c),l.appendChild(m)}function i(e,t){-1!=d.indexOf(e[0].href)&&((i=document.createElement("link")).setAttribute("rel","prev"),i.setAttribute("href","/"+r[r.length-1].href+".html"),u.appendChild(i));for(var a=0;a<e.length;a++){var i,n=e[a].href;-1!=d.indexOf(e[0].href)?((o=document.createElement("a")).className="prevNext prevNextText",o.href="/",o.title="Home",l=document.createElement("b"),c=document.createTextNode("Home"),m=document.createElement("i")):-1!=d.indexOf(n)&&((o=document.createElement("a")).className="prevNext prevNextText",o.href="/"+e[a-1].href+".html",o.title=e[a-1].title,l=document.createElement("b"),c=document.createTextNode(e[a-1].name),(m=document.createElement("i")).className="fa fa-angle-double-left",(i=document.createElement("link")).setAttribute("rel","prev"),i.setAttribute("href","/"+e[a-1].href+".html"),u.appendChild(i),o.setAttribute("onmouseover","nextLeft()"),o.setAttribute("onmouseleave","nextLeftDel()"))}t.appendChild(o),o.appendChild(l),l.appendChild(m),l.appendChild(c)}var d=window.location.href,u=document.querySelector("head"),n=Number(r.length-1),p=Number(s.length-1);e?(a(r,e,n),i(r,e)):t&&(a(s,t,p),i(s,t));var h=document.querySelector(".siteMapNav");function f(e){e.forEach(function(e){var t,a=document.createElement("li"),i=document.createElement("a");i.href="/"+e.href+".html",i.title=e.title,t=document.createTextNode(e.name),h.appendChild(a),a.appendChild(i),i.appendChild(t),t=window.location.href,e=e.href,-1!=t.indexOf(e)&&(i.className="underline",i.setAttribute("style","font-weight: bold"))})}f(r),f(s);p=document.querySelector("#indexList"),t=document.querySelector("#articleList");function g(e,t){var a=document.createElement("div");a.className="artImgBoxEach grow",e.appendChild(a);for(var i=0;i<t.length;i++){var n=document.createElement("a"),r=document.createElement("figure"),o=document.createElement("img"),l=document.createElement("figcaption"),c=document.createElement("h3"),m=document.createTextNode(t[i].name);n.href="/"+t[i].href+".html",o.src="/img/works/"+t[i].img,o.alt=t[i].title,o.title=t[i].title,a.appendChild(n),n.appendChild(r),r.appendChild(o),r.appendChild(l),l.appendChild(c),c.appendChild(m)}}p?g(p,r):t&&g(t,s)}(),function(){var r=document.querySelector("#headerNav > nav > ul");[{title:"Portfolio",href:"/",hName:"/portfolio/",target:"_self"},{title:"Articles",href:"/articles.html",hName:"/articles",target:"_self"},{title:"About",href:"/about-spemer.html",hName:"about-spemer.html",target:"_self"},{title:"CV",href:"https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing",hName:"https://docs.google.com/document/d/19k4fNueOGIZrsyS3PaqAeYrAtQdCukjE4LN2vIprKqU/edit?usp=sharing",target:"_blank"}].forEach(function(e){var t=document.createElement("li");t.className="headerNavList";var a=document.createElement("a");t.title=e.title,a.href=e.href,a.setAttribute("target",e.target),a.className="headerNav";var i=document.createElement("b"),n=document.createTextNode(e.title);r.appendChild(t),t.appendChild(a),a.appendChild(i),i.appendChild(n);n=window.location.href,e=e.hName;-1!=n.indexOf(e)&&(t.className="headerNavList aboutHover")})}(),document.querySelector(".indexMain")&&(document.querySelector("#headerNav > nav > ul > li").className="headerNavList aboutHover"),document.querySelector("body").id="body",function(){var e,t,a,i,n=document.querySelector("#prevNext");n&&((i=document.createElement("a")).href="#top",i.title="Back to Top",i.className="prevNextTop",i.setAttribute("onmouseover","topUp()"),i.setAttribute("onmouseleave","topDn()"),e=document.createElement("b"),(t=document.createElement("i")).className="fa fa-angle-up",a=document.createTextNode("Top"),n.appendChild(i),i.appendChild(e),e.appendChild(t),e.appendChild(a))}(),function(){var e,t={GitHub:{href:"github.com/spemer",iconID:"ghIcon",iconClass:"github"},FaceBook:{href:"facebook.com/ghsspower",iconID:"fbIcon",iconClass:"facebook"},Instagram:{href:"instagram.com/spemer/",iconID:"inIcon",iconClass:"instagram"},LinkedIn:{href:"www.linkedin.com/in/hyouk-seo-0b6801122/",iconID:"liIcon",iconClass:"linkedin"},Dribbble:{href:"dribbble.com/spemer",iconID:"drIcon",iconClass:"dribbble"},Medium:{href:"medium.com/@spemer",iconID:"medIcon",iconClass:"medium"},Behance:{href:"behance.net/spemer",iconID:"beIcon",iconClass:"behance"}},a=document.querySelector("#snsIcon");for(e in t){var i=document.createElement("a");i.href="https://"+t[e].href,i.target="_blank",i.title=e+"(new tab)";var n=document.createElement("i");n.id=t[e].iconID,n.className="fa fa-"+t[e].iconClass,a.appendChild(i),i.appendChild(n)}}(),function(){var e,t,a,i=document.querySelector("#codeBySpemer"),n=document.createElement("i");n.className="fa fa-code",e=document.createTextNode(" with "),(t=document.createElement("i")).className="fa fa-heart",a=document.createTextNode(" by Hyouk Seo "),i.appendChild(n),i.appendChild(e),i.appendChild(t),i.appendChild(a)}(),function(){var e=document.querySelector("#hitCounter"),t=document.createTextNode(" "),a=document.createElement("img");a.className="counter",a.setAttribute("src","https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fspemer.com&count_bg=%23E7E9EE&title_bg=%23656C7A&icon=&icon_color=%23FFFFFF&title=hits&edge_flat=false"),e.appendChild(t),e.appendChild(a)}(),function(){var t,e,a;e=document.querySelector("body"),(t=document.createElement("div")).id="topBtnFixed",e.appendChild(t),(e=document.createElement("a")).href="#top",e.className="prevNextTop2",(a=document.createElement("i")).className="fa fa-chevron-circle-up topBtn",a.title="Back to Top",t.appendChild(e),e.appendChild(a),window.onscroll=function(){var e;e=320,document.body.scrollTop>e||document.documentElement.scrollTop>e?(t.style.opacity=1,a.setAttribute("style","visibility:visible")):(t.style.opacity=0,a.setAttribute("style","visibility:hidden"))}}(),function(){var t;document.querySelectorAll(".externalLink").forEach(function(e){e.setAttribute("target","_blank"),(t=document.createElement("i")).className="fa fa-external-link",e.appendChild(t)})}(),function(){for(var e,t,a,i=document.getElementsByClassName("hrline"),n=0;n<i.length;n++)for(t=document.createElement("center"),i[n].appendChild(t),e=0;e<3;e++)a=document.createElement("span"),t.appendChild(a)}(),document.querySelectorAll("i.fa").forEach(function(e){e.getAttribute("aria-hidden")||e.setAttribute("aria-hidden","true")});