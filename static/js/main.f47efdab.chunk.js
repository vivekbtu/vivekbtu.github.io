(this.webpackJsonpupdatedportfolio=this.webpackJsonpupdatedportfolio||[]).push([[0],{44:function(e,t,s){},46:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},63:function(e,t,s){},65:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(16),r=s.n(i),n=(s(44),s(3)),l=s(1),d=c.a.createContext(),j=function(e){var t=e.children,s=c.a.useState("dark"),a=Object(n.a)(s,2),i=a[0],r=a[1];return Object(l.jsx)(d.Provider,{value:[{themename:i,toggeltheme:function(){r("light"===i?"dark":"light")}}],children:t})},o=(s(46),s(25)),b=s.n(o),h=s(23),m=s.n(h),u=s(27),x=s.n(u),O=s(26),p=s.n(O),v=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0],s=t.themename,a=t.toggeltheme,i=c.a.useState(!1),r=Object(n.a)(i,2),j=r[0],o=r[1],h=function(e){var t=document.getElementById(e);t&&t.scrollIntoView(),o(!j)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"nav-menu",children:Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{className:"nav-link home",href:"#home",onClick:function(){return h("#home")},children:"Home"})}),Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{className:"nav-link about",href:"#about",onClick:function(){return h("#about")},children:"About"})}),Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{className:"nav-link skills",href:"#skills",onClick:function(){return h("#skills")},children:"Skills"})}),Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{className:"nav-link projects",href:"#projects",onClick:function(){return h("#projects")},children:"Projects"})}),Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{className:"nav-link contact",href:"#contact",onClick:function(){return h("#contact")},children:"Contact"})}),Object(l.jsx)("li",{id:"resume-link-1",className:"nav__list-item",children:Object(l.jsx)("a",{id:"resume-button-1",className:"nav-link resume",href:"https://drive.google.com/file/d/1b9mWpCnavIn72uX06Ti2PPeGHXWO4nZx/view?usp=sharing",onClick:h,target:"_blank",rel:"noreferrer",children:"Resume"})})]}),Object(l.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",style:{backgroundColor:"inherit"},children:"dark"===s?Object(l.jsx)(m.a,{}):Object(l.jsx)(b.a,{})}),Object(l.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(l.jsx)(p.a,{}):Object(l.jsx)(x.a,{})})]})})})},g=(s(52),function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("header",{className:"header center "+t,children:[Object(l.jsx)("h3",{children:Object(l.jsx)("a",{href:"#home",className:"link",children:"Vivek Gupta"})}),Object(l.jsx)(v,{})]})})}),f=(s(53),s(54),s(28)),k=s.n(f),N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(k.a,{options:{strings:["A Full Stack Web Developer","A MERN Stack Developer"],autoStart:!0,loop:!0,deleteSpeed:50}})})},_=s(29),C=s.n(_),F=s(32),y=s.n(F),S=s(33),w=s.n(S),D=s(30),E=s.n(D),L=s(31),T=s.n(L),A=s(34),M=s.n(A),B=(s(56),s(20)),R=s.n(B),G=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{id:"about",className:"about section",children:Object(l.jsxs)("div",{className:"section","data-aos":"fade-right",children:[Object(l.jsxs)("h2",{className:"section__title",children:["About ",Object(l.jsx)("span",{className:"different",children:"Me"})]}),Object(l.jsxs)("div",{className:"introduction "+t,children:[Object(l.jsx)("div",{className:"introduction_logocontainer",children:Object(l.jsx)("img",{class:"home-img",src:"https://avatars.githubusercontent.com/u/101381281?v=4",alt:"Images"})}),Object(l.jsxs)("div",{id:"user-detail-intro",children:[Object(l.jsxs)("h4",{id:"user-detail-intro",children:["Passionate ",Object(l.jsx)("span",{children:"Full Stack Web Developer"})," with a focus on the MERN stack, knowledge of data structures and algorithms, and aspirational Frontend Web Developer who is curious about new opportunities in challenging environments."]}),Object(l.jsx)("h4",{children:"Some of my interests apart form Coding :"}),Object(l.jsxs)("h4",{className:"different",children:[Object(l.jsx)("span",{className:"icons",children:Object(l.jsx)(R.a,{})}),"Chess Enthusiast"," "]}),Object(l.jsxs)("h4",{className:"different",children:[Object(l.jsx)("span",{className:"icons",children:Object(l.jsx)(R.a,{})}),"Travelling"," "]})]})]})]})})})},I=(s(57),s(58),s(62),s(10)),V=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename,s=c.a.useState("light"===t?"#23283e":"#fcfcfc"),a=Object(n.a)(s,2),i=(a[0],a[1]);return c.a.useEffect((function(){i("dark"===t?"#fcfcfc":"#23283e")}),[t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"section mainsection",children:[Object(l.jsxs)("h2",{className:"section__title","data-aos":"fade-right",children:["My ",Object(l.jsx)("span",{className:"different",children:"Timeline \ud83d\udcab"})]}),Object(l.jsxs)("div",{className:"TimeLine","data-aos":"fade-right",children:[Object(l.jsx)("div",{className:"box",children:Object(l.jsx)("div",{id:"iconSize",children:Object(l.jsx)(I.a,{})})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"vertical-timeline-element-title","data-aos":"fade-right",children:"Student"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",children:"Masai School (Remote)"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",id:"Course",children:" April 2022 - Feb 2023 "})})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"vertical-timeline-element-title","data-aos":"fade-right",children:"Bachelor of Science, Mathematics Honors"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",children:"D B College, Jainagar"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",id:"Course",children:" 2015 - 2018 "})})]})}),Object(l.jsx)("div",{className:"box",children:Object(l.jsx)("div",{id:"iconSize",children:Object(l.jsx)(I.a,{})})}),Object(l.jsx)("div",{className:"box",children:Object(l.jsx)("div",{id:"iconSize",children:Object(l.jsx)(I.a,{})})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"vertical-timeline-element-title","data-aos":"fade-right",children:"Higher Secondary - Science"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",children:"H B J College, Khajauli, Bihar"})}),Object(l.jsx)("div",{children:Object(l.jsx)("h4",{className:"vertical-timeline-element-subtitle","data-aos":"fade-right",id:"Course",children:" March 2015 "})})]})})]})]})})},z=(s(63),s(9)),H=s(4),J=s(12),P=s(13),W=s(15),Z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"skills",className:"section main","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"section__title different",children:"Skills"}),Object(l.jsxs)("div",{className:"techsection",children:[Object(l.jsxs)("div",{class:"skills-card",children:[Object(l.jsx)(H.c,{class:"skills-card-img"}),Object(l.jsx)("h5",{className:"skills-card-name",children:"Javascript"})]}),Object(l.jsxs)("div",{class:"skills-card",children:[Object(l.jsx)(H.b,{class:"skills-card-img"}),Object(l.jsx)("h5",{className:"skills-card-name",children:"HTML"})]}),Object(l.jsxs)("div",{class:"skills-card",children:[Object(l.jsx)(J.a,{class:"skills-card-img"}),Object(l.jsx)("h5",{className:"skills-card-name",children:"CSS"})]}),Object(l.jsxs)("div",{class:"skills-card",children:[Object(l.jsx)(z.d,{class:"skills-card-img"}),Object(l.jsx)("h5",{className:"skills-card-name",children:"React"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(z.b,{}),Object(l.jsx)("h5",{children:"Nodejs"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(J.b,{}),Object(l.jsx)("h5",{children:"MongoDb"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(H.a,{}),Object(l.jsx)("h5",{children:"Express"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(H.d,{}),Object(l.jsx)("h5",{children:"Material Ui"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(W.a,{}),Object(l.jsx)("h5",{children:"Bootstrap"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(z.c,{}),Object(l.jsx)("h5",{children:"Tailwind CSS"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(H.f,{}),Object(l.jsx)("h5",{children:"Netlify"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(P.a,{}),Object(l.jsx)("h5",{children:"Github"})]})]})]})})},U=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"home",className:"aboutFix",children:[Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{"data-aos":"fade-right",children:["Hi, I am ",Object(l.jsx)("span",{id:"user-detail-name",children:"Vivek Gupta"})]}),Object(l.jsx)(N,{}),Object(l.jsxs)("div",{className:"about__contact center",children:[Object(l.jsx)("a",{href:"https://github.com/vivekbtu","aria-label":"github",target:"_blank",rel:"noreferrer",className:"link link--icon",children:Object(l.jsx)(C.a,{})}),Object(l.jsx)("a",{id:"contact-email",href:"mailto:bittubieber19@gmail.com",target:"_blank",rel:"noreferrer","aria-label":"github",className:"link link--icon",children:Object(l.jsx)(E.a,{id:"contact-email"})}),Object(l.jsx)("a",{id:"contact-phone",href:"tel:+917903461080",target:"_blank",rel:"noreferrer","aria-label":"github",className:"link link--icon",children:Object(l.jsx)(T.a,{id:"contact-phone"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/vivek-gupta-a89361233","aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(y.a,{})}),Object(l.jsx)("a",{id:"resume-button-2",download:!0,href:"https://github.com/vivekbtu/RESUME/files/11951159/Vivek_Gupta_Resume.pdf.pdf","aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(w.a,{id:"resume-link-2"})}),Object(l.jsx)("a",{href:"https://www.google.co.in/maps/place/Jainagar,+Bihar/@26.5876995,86.1169604,14z/data=!4m5!3m4!1s0x39ec25a0f275da8f:0x38215d9cc747d889!8m2!3d26.588412!4d86.1370182","aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(M.a,{})})]})]}),Object(l.jsx)(G,{}),Object(l.jsx)(V,{}),Object(l.jsx)("section",{id:"#skills",children:Object(l.jsx)(Z,{})})]})})},X=s(35),K=s.n(X),Y=(s(64),s(65),s(38)),q=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename,s=c.a.useState("light"===t?"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=FCFCFC&stroke=677F84&ring=2978B5&fire=677F84&currStreakNum=183C44&sideNums=183C44&currStreakLabel=405E65&sideLabels=405E65&dates=677F84":"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=23283E&stroke=90A0D9&ring=90A0D9&fire=CDCDFF&currStreakNum=CDCDFF&sideNums=CDCDFF&currStreakLabel=90A0D9&sideLabels=90A0D9&dates=CDCDFF"),a=Object(n.a)(s,2),i=a[0],r=a[1];c.a.useEffect((function(){r("dark"===t?"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=23283E&stroke=90A0D9&ring=90A0D9&fire=CDCDFF&currStreakNum=CDCDFF&sideNums=CDCDFF&currStreakLabel=90A0D9&sideLabels=90A0D9&dates=CDCDFF":"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=FCFCFC&stroke=677F84&ring=2978B5&fire=677F84&currStreakNum=183C44&sideNums=183C44&currStreakLabel=405E65&sideLabels=405E65&dates=677F84")}),[t]);var j=c.a.useState("light"===t?"https://github-readme-stats.vercel.app/api?username=vivekbtu&theme=default&hide_border=true&include_all_commits=false&count_private=true":"https://github-readme-stats.vercel.app/api?username=vivekbtu&theme=nord&hide_border=true&include_all_commits=false&count_private=true"),o=Object(n.a)(j,2),b=o[0],h=o[1];c.a.useEffect((function(){h("dark"===t?"https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=vivekbtu&theme=nord&hide_border=true&include_all_commits=false&count_private=true":"https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=vivekbtu&theme=default&hide_border=true&include_all_commits=false&count_private=true")}),[t]);var m=c.a.useState("light"===t?"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=FCFCFC&stroke=677F84&ring=2978B5&fire=677F84&currStreakNum=183C44&sideNums=183C44&currStreakLabel=405E65&sideLabels=405E65&dates=677F84":"https://github-readme-streak-stats.herokuapp.com?user=vivekbtu&theme=tokyonight&hide_border=true&border_radius=20&background=23283E&stroke=90A0D9&ring=90A0D9&fire=CDCDFF&currStreakNum=CDCDFF&sideNums=CDCDFF&currStreakLabel=90A0D9&sideLabels=90A0D9&dates=CDCDFF"),u=Object(n.a)(m,2),x=u[0],O=u[1];c.a.useEffect((function(){O("dark"===t?"https://github-readme-stats.vercel.app/api?username=vivekbtu&show_icons=true&theme=tokyonight&hide_border=true&border_radius=20&background=23283E&stroke=90A0D9&ring=90A0D9&fire=CDCDFF&currStreakNum=CDCDFF&sideNums=CDCDFF&currStreakLabel=90A0D9&sideLabels=90A0D9&dates=CDCDFF":"https://github-readme-stats.vercel.app/api?username=vivekbtu&show_icons=true&theme=tokyonight&hide_border=true&border_radius=20&background=FCFCFC&stroke=677F84&ring=2978B5&fire=677F84&currStreakNum=183C44&sideNums=183C44&currStreakLabel=405E65&sideLabels=405E65&dates=677F84")}),[t]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"section main",children:Object(l.jsxs)("div",{className:"section",style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("div",{style:{width:"30%",margin:"auto"},children:Object(l.jsx)("img",{id:"github-top-langs",align:"center",alt:"error",src:b,width:"100%",style:{boxShadow:"var(--shadow)",borderRadius:"20px"},height:"100%"})}),Object(l.jsx)("div",{style:{width:"30%",margin:"auto"},children:Object(l.jsx)("img",{id:"github-streak-stats",align:"center",src:i,alt:"vivekbtu",width:"100%",style:{boxShadow:"var(--shadow)",borderRadius:"20px"},height:"100%"})}),Object(l.jsx)("div",{style:{width:"30%",margin:"auto"},children:Object(l.jsx)("img",{id:"github-stats-card",align:"center",src:x,alt:"vivekbtu",width:"100%",style:{boxShadow:"var(--shadow)",borderRadius:"20px"},height:"100%"})})]})})})},Q=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"section "+t,"data-aos":"fade-right",children:[Object(l.jsxs)("h2",{className:"section__title different",children:["Days I ",Object(l.jsx)("span",{className:"different",children:" Code"})]}),Object(l.jsx)(Y.a,{class:"react-activity-calendar",username:"vivekbtu",blockSize:15,blockMargin:5,fontSize:14})]}),Object(l.jsx)("div",{className:"section "+t,"data-aos":"fade-right",children:Object(l.jsx)(q,{})})]})},$=(s(67),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"projects",className:"section",children:[Object(l.jsx)("h2",{className:"section__title different","data-aos":"fade-right",children:"Projects"}),Object(l.jsx)("div",{className:"project-card",children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"project_videocontainer",children:Object(l.jsx)("div",{"data-aos":"fade-right",children:Object(l.jsx)("img",{src:"https://user-images.githubusercontent.com/101381281/233326315-0c949bd9-8b23-480f-a828-91c9c160a37f.png",alt:"ZoomCar"})})}),Object(l.jsxs)("div",{className:"project_information","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"project-title",children:"ZoomCar Clone"}),Object(l.jsx)("p",{className:"project-description",children:"Zoomcar is a self-drive car rental platform that offers a wide range of car options at affordable rates, allowing users to rent the car of their choice for their travel needs."}),Object(l.jsxs)("div",{className:"project-tech-stack",children:[Object(l.jsx)(z.d,{}),Object(l.jsx)(H.b,{}),Object(l.jsx)(I.b,{}),Object(l.jsx)(H.g,{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"project-deployed-link",href:"https://vivek-zoomcar.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline onbt",children:"See this Live"})}),Object(l.jsx)("a",{className:"project-github-link",href:"https://github.com/vivekbtu/bitter-level-627",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"View Code"})})]})]})]})}),Object(l.jsx)("div",{className:"project-card",children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"project_videocontainer",children:Object(l.jsx)("div",{"data-aos":"fade-right",children:Object(l.jsx)("img",{src:"https://user-images.githubusercontent.com/101381281/204876988-7f3ce8d3-ac0a-469a-ac4b-c30838f461aa.png",alt:"Mail Chimp"})})}),Object(l.jsxs)("div",{className:"project_information","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"project-title",children:"Mail Chimp"}),Object(l.jsx)("p",{className:"project-description",children:"Clone of the popular email campaigning app Mail Chimp. Built on react for front end and nodeJS on backend. It's a team project completed executed in 5 days."}),Object(l.jsxs)("div",{className:"project-tech-stack",children:[Object(l.jsx)(z.d,{}),Object(l.jsx)(H.b,{}),Object(l.jsx)(I.b,{}),Object(l.jsx)(H.g,{}),Object(l.jsx)(H.a,{}),Object(l.jsx)(H.e,{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"project-deployed-link",href:"https://mailchimp-clone-deploy.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline onbt",children:"See this Live"})}),Object(l.jsx)("a",{className:"project-github-link",href:"https://github.com/vivekbtu/MailChimp-Clone",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"View Code"})})]})]})]})}),Object(l.jsx)("div",{className:"project-card",children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"project_videocontainer",children:Object(l.jsx)("div",{"data-aos":"fade-right",children:Object(l.jsx)("img",{src:"https://user-images.githubusercontent.com/101381281/204876207-391fa84c-2a1f-4a43-8402-bb35e38a94d9.png",alt:"Getharvest"})})}),Object(l.jsxs)("div",{className:"project_information","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"project-title",children:"Getharvest Clone"}),Object(l.jsx)("p",{className:"project-description",children:"Harvest or Getharvest is a web-based time tracking, Project Management, Invoicing, and cost-tracking tool. which is used by more than 70000+ companies."}),Object(l.jsxs)("div",{className:"project-tech-stack",children:[Object(l.jsx)(z.d,{}),Object(l.jsx)(H.b,{}),Object(l.jsx)(I.b,{}),Object(l.jsx)(H.g,{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"project-deployed-link",href:"https://glowing-jelly-1ca7fb.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline onbt",children:"See this Live"})}),Object(l.jsx)("a",{className:"project-github-link",href:"https://github.com/vivekbtu/premium-grade-140",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"View Code"})})]})]})]})}),Object(l.jsx)("div",{className:"project-card",children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"project_videocontainer",children:Object(l.jsx)("div",{"data-aos":"fade-right",children:Object(l.jsx)("img",{src:"https://user-images.githubusercontent.com/101381281/204876613-d0d2abe9-cae6-4a7f-be71-e4c0e3ea6b8f.png",alt:"TicTacToe"})})}),Object(l.jsxs)("div",{className:"project_information","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"project-title",children:"Classic TicTacToe"}),Object(l.jsx)("p",{className:"project-description",children:"Mini project of A classic TicTacToe game built using ReactJS. Features : Button for Resetting The Game, etc."}),Object(l.jsxs)("div",{class:"project-tech-stack",children:[Object(l.jsx)(z.d,{}),Object(l.jsx)(H.b,{}),Object(l.jsx)(J.a,{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"project-deployed-link",href:"https://csb-lniujk.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline onbt",children:"See this Live"})}),Object(l.jsx)("a",{className:"project-github-link",href:"https://github.com/vivekbtu/Tic-Tac-Toe",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"View Code"})})]})]})]})}),Object(l.jsx)("div",{className:"project-card",children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"project_videocontainer",children:Object(l.jsx)("div",{"data-aos":"fade-right",children:Object(l.jsx)("img",{src:"https://user-images.githubusercontent.com/88669777/192659802-d5994309-ad51-40a8-98de-5d292b7d844a.png",alt:"TicTacToe"})})}),Object(l.jsxs)("div",{className:"project_information","data-aos":"fade-right",children:[Object(l.jsx)("h2",{className:"project-title",children:"Asos.com Clone"}),Object(l.jsx)("p",{className:"project-description",children:"This is a clone of asos.com, which is an E-commerce website. we have a home page, product page, and sorting, filtering, and searching functionality with a Login Authentication System. I also added a cart,coupons, entering and saving details of cards and addresses of customers, and dispatching a product.This project was collaborated by team of five and completed in just five days."}),Object(l.jsxs)("div",{className:"project-tech-stack",children:[Object(l.jsx)(H.b,{}),Object(l.jsx)(J.a,{}),Object(l.jsx)(I.b,{})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"project-deployed-link",href:"https://steady-swan-edc8d5.netlify.app/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline onbt",children:"See this Live"})}),Object(l.jsx)("a",{className:"project-github-link",href:"https://github.com/arsalanshaikhh/asos.com-clone-Unit2",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"View Code"})})]})]})]})})]})})}),ee=(s(68),s(36)),te=function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"contact",className:"section",children:[Object(l.jsxs)("h2",{className:"section__title","data-aos":"fade-right",children:["Get in ",Object(l.jsx)("span",{className:"different",children:"Touch"})]}),Object(l.jsxs)("div",{className:"contactcontainer "+t,"data-aos":"fade-right",children:[Object(l.jsx)("a",{href:"https://www.linkedin.com/in/vivek-gupta-a89361233",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(z.a,{id:"contact-linkedin"})}),Object(l.jsx)("a",{href:"https://github.com/vivekbtu",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(P.a,{id:"contact-github"})}),Object(l.jsx)("a",{id:"contact-email",href:"mailto:bittubieber19@gmail.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(ee.a,{id:"contact-email"})}),Object(l.jsx)("a",{href:"https://instagram.com/vivek_btu",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(W.c,{id:"instagram"})}),Object(l.jsx)("a",{id:"contact-phone",href:"tel:+917903461080",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(W.b,{id:"contact-phone"})})]})]})})},se=(s(69),function(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"section "+t,children:Object(l.jsx)("a",{href:"https://github.com/vivekbtu",rel:"noreferrer",target:"_blank",children:Object(l.jsx)("h3",{className:"footer",children:"Made By Vivek Gupta"})})})})}),ae=s(37),ce=s.n(ae),ie=(s(70),function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),s?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top",children:Object(l.jsx)(ce.a,{fontSize:"large"})})}):null});function re(){var e=c.a.useContext(d),t=Object(n.a)(e,1)[0].themename;return c.a.useEffect((function(){K.a.init({duration:1500})}),[]),Object(l.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(l.jsx)("section",{style:{position:"sticky",top:"0px",zIndex:"1"},children:Object(l.jsx)(g,{})}),Object(l.jsxs)("main",{children:[Object(l.jsx)(U,{}),Object(l.jsx)(Q,{}),Object(l.jsx)("section",{id:"#projects",children:Object(l.jsx)($,{})}),Object(l.jsx)("section",{id:"#contact",children:Object(l.jsx)(te,{})})]}),Object(l.jsx)(se,{}),Object(l.jsx)(ie,{})]})}var ne=document.getElementById("root");r.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(j,{children:Object(l.jsx)(re,{})})}),ne)}},[[72,1,2]]]);
//# sourceMappingURL=main.f47efdab.chunk.js.map