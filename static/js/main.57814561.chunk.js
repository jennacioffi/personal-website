(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{106:function(e,t,i){},113:function(e,t){},119:function(e,t){},121:function(e,t){},132:function(e,t){},134:function(e,t){},159:function(e,t){},161:function(e,t){},162:function(e,t){},167:function(e,t){},169:function(e,t){},189:function(e,t){},205:function(e,t){},208:function(e,t){},212:function(e,t,i){"use strict";i.r(t);var n=i(4),o=i.n(n),a=i(98),r=i.n(a);i(106);const s={black:"#000000",expandedInfoBGColor:"#EFDDFF",white:"#FFFFFF",contactMeBGColor:"#3a60d1",contactMeSubmitBtnColorFailure:"#ce4355",contactMeSubmitBtnColorSuccess:"#4caf50",educationBGColor:"#4e73e8",experienceBGColor:"#4e73e8",interviewFQSBGColor:"#3a60d1",linkCardBGColor:"#FFFFFF",linkCardStitching:"#000000",lookingForBGColor:"#4e73e8",mainStitching:"#FFFFFF",pastWorkProjectsBGColor:"#4e73e8",profilePicGradient1:"#3a60d1",profilePicGradient2:"#c3cfff",skillsBGColor:"#4e73e8",submitBtnRegular:"#1E45B7",textAreaFieldEntry:"#ccc",volunteerExpBGColor:"#4e73e8",websiteBGGradient1:"#6087ff",websiteBGGradient2:"#6087ff",websiteBGGradient3:"#6087ff"};var l={websiteBackgroundContainer:{background:"linear-gradient(".concat(s.websiteBGGradient1,", ").concat(s.websiteBGGradient2,", ").concat(s.websiteBGGradient3,")"),display:"flex",flexDirection:"column",alignItems:"center",overflowX:"auto",width:"100%"},main:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignContent:"center",padding:"4%",minWidth:"600px",maxWidth:"1000px",width:"100%",overflowX:"scroll"},multiCards:{overflow:"auto",display:"flex",justifyContent:"space-between",alignContent:"space-between",minWidth:"50%"},leftCards:{flex:2},rightCards:{minWidth:"45%",width:"100%",display:"flex",flexDirection:"column",flex:1,justifyContent:"center",alignItems:"flex-start"}};const d="serif",c="serif",h="serif";var m={mainContainer:{display:"flex",justifyContent:"center",paddingBottom:"15px",paddingTop:"15px"},cardBackgroundContainer:{alignItems:"center",borderRadius:"8px",display:"flex",flexDirection:"column",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",position:"relative",width:"100%"},dashedBorder:{border:"2px dashed ".concat(s.mainStitching),borderRadius:"6px",height:"95%",margin:"15px",paddingHorizontal:"1%",width:"95%"},cardTitleContainer:{display:"flex",fontFamily:c,justifyContent:"center",margin:"1%"},cardTitle:{color:s.black,fontSize:"40px"},bulletPointItemsContainer:{fontFamily:d,marginBottom:"2%",marginLeft:"5%",marginRight:"5%"},bulletPointItem1:{color:s.black,fontSize:"22px"},bulletPointItem2:{color:s.black,fontSize:"18px",paddingLeft:"12px"},bulletPointItem3:{color:s.black,fontSize:"14px",paddingLeft:"12px"},expInfo:{color:s.black,fontSize:"18px",whiteSpace:"pre-line",padding:"2%"},arrowIcon:{paddingLeft:"2%",alignContent:"center"},infoBulletPoints:{color:s.black,fontSize:"16px"},infoExpanded:{backgroundColor:s.expandedInfoBGColor,borderRadius:"8px",paddingBottom:"1.5%",paddingRight:"2%",paddingLeft:"1%",marginTop:"1%"},briefSummary:{color:s.black,fontSize:"18px",paddingLeft:"8px",paddingTop:"2%"},briefSummaryBPItems:{color:s.black,fontSize:"18px",paddingLeft:"20px",paddingTop:"1%"}},p=i(34),u=i(33),g=i(0);function f(e){let{title:t,bulletPoints:i,color:o}=e;const a="".concat(o)||s.defaultColor,[r,l]=Object(n.useState)(null),d=i.map(((e,t)=>Object(g.jsxs)("div",{style:m.bulletPointItemsContainer,onClick:()=>(e=>{l(r===e?null:e)})(t),children:[Object(g.jsx)("div",{style:m.bulletPointItem1,children:Object(g.jsxs)("div",{children:[e.title,e.info&&Object(g.jsx)(p.a,{icon:u.a,style:m.arrowIcon})]})}),e.subtitle&&e.subtitle.startsWith("http")?Object(g.jsx)("div",{style:m.bulletPointItem2,children:Object(g.jsx)("a",{href:e.subtitle,target:"_blank",rel:"noopener noreferrer",children:e.subtitle})}):Object(g.jsx)("div",{style:m.bulletPointItem2,children:e.subtitle}),e.date&&Object(g.jsx)("div",{style:m.bulletPointItem3,children:e.date}),r===t&&e.info&&Object(g.jsxs)("div",{style:m.infoExpanded,children:[Object(g.jsx)("div",{style:m.briefSummary,children:e.info.briefSummary}),e.info.briefSummaryBP1&&Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:e.info.briefSummaryBP1}),e.info.briefSummaryBP2&&Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:e.info.briefSummaryBP2}),e.info.briefSummaryBP3&&Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:e.info.briefSummaryBP3}),e.info.briefSummaryBP4&&Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:e.info.briefSummaryBP4}),e.info.link&&e.info.link.startsWith("http")?Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:Object(g.jsx)("a",{href:e.info.link,target:"_blank",rel:"noopener noreferrer",children:e.info.link})}):Object(g.jsx)("div",{style:m.briefSummaryBPItems,children:e.info.link})]})]},t)));return Object(g.jsx)("div",{style:{...m.mainContainer},children:Object(g.jsx)("div",{style:{...m.cardBackgroundContainer,backgroundColor:a},children:Object(g.jsxs)("div",{style:m.dashedBorder,children:[Object(g.jsx)("div",{style:m.cardTitleContainer,children:Object(g.jsx)("div",{style:m.cardTitle,children:t})}),d]})})})}var b={mainContainer:{alignContent:"flex-start",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",margin:"1%",paddingTop:"20px",width:"100%"},cardHeader:{display:"flex",fontFamily:c,fontSize:"40px",justifyContent:"center",marginBottom:"20px",marginTop:"2.5%",color:s.white},input:{fontFamily:h,fontSize:"18px",marginBottom:"20px",marginLeft:"5%",marginRight:"5%"},inputField:{border:"1px solid ".concat(s.textAreaFieldEntry),borderRadius:"5px",boxSizing:"border-box",display:"flex",fontFamily:h,fontSize:"18px",marginTop:"5px",padding:"2%",width:"100%"},textareaField:{border:"1px solid ".concat(s.textAreaFieldEntry),borderRadius:"5px",boxSizing:"border-box",fontFamily:h,fontSize:"18px",marginTop:"5px",padding:"8px",resize:"none",width:"100%"},submitButton:{alignSelf:"center",border:"none",borderRadius:"5px",cursor:"pointer",fontFamily:c,fontSize:"18px",marginBottom:"20px",padding:"10px 20px",transition:"background-color 0.3s ease",textAlign:"center"},failSubmitButton:{alignSelf:"center",border:"none",borderRadius:"5px",cursor:"pointer",fontFamily:c,fontSize:"18px",marginBottom:"20px",padding:"10px 20px",transition:"background-color 0.3s ease",textAlign:"center"}},I=i(99),y=i.n(I);function C(e){let{color:t}=e;y.a.config();const i="".concat(t)||s.defaultColor,[o,a]=Object(n.useState)(!1),[r,l]=Object(n.useState)(!0),[d,c]=Object(n.useState)(!1),[h,m]=Object(n.useState)({name:"",email:"",message:""}),p=e=>{const{name:t,value:i}=e.target;"email"===t&&l(/\S+@\S+\.\S+/.test(i)),m((e=>({...e,[t]:i})))};Object(n.useEffect)((()=>{a(""!==h.name&&""!==h.email&&""!==h.message&&r)}),[h,r]);return Object(g.jsxs)("div",{style:{...b.mainContainer,backgroundColor:i},children:[Object(g.jsx)("div",{style:b.cardHeader,children:"Contact Me"}),Object(g.jsxs)("div",{style:b.input,children:[Object(g.jsx)("label",{htmlFor:"name",style:{color:s.white},children:"Your Name:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"text",id:"name",name:"name",value:h.name,onChange:p,style:b.inputField,maxLength:"100"})]}),Object(g.jsxs)("div",{style:b.input,children:[Object(g.jsx)("label",{htmlFor:"email",style:{color:s.white},children:"Your Email:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"email",id:"email",name:"email",value:h.email,onChange:p,style:b.inputField,maxLength:"100"})]}),Object(g.jsxs)("div",{style:b.input,children:[Object(g.jsx)("label",{htmlFor:"message",style:{color:s.white},children:"Your Message:"}),Object(g.jsx)("br",{}),Object(g.jsx)("textarea",{id:"message",name:"message",value:h.message,onChange:p,rows:"4",cols:"50",style:b.textareaField,maxLength:"250"})]}),d?Object(g.jsx)("div",{style:{...b.submitButton,backgroundColor:s.contactMeSubmitBtnColorSuccess,color:s.black},children:"Email Sent"}):o?Object(g.jsx)("button",{onClick:async()=>{try{const e=new FormData;e.append("name",h.name),e.append("email",h.email),e.append("message",h.message),e.append("access_key","e2137fb4-eeef-493e-b7d0-a3929c7981cf");const t=await fetch("https://api.web3forms.com/submit",{method:"POST",body:e}),i=await t.json();i.success?(console.log("Form submitted successfully:",i),m({name:"",email:"",message:""}),c(!0)):console.error("Error submitting form:",i)}catch(e){console.error("Error submitting form:",e)}},style:{...b.submitButton,backgroundColor:s.submitBtnRegular,color:s.white},children:"Submit"}):Object(g.jsx)("button",{style:{...b.failSubmitButton,backgroundColor:s.contactMeSubmitBtnColorFailure,color:s.white},children:"Something is Invalid or Empty"})]})}var E={mainContainer:{display:"flex",justifyContent:"center",margin:"1%",width:"100%"},cardBackgroundContainer:{alignItems:"center",borderRadius:"8px",display:"flex",flexDirection:"column",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",position:"relative",width:"100%"},dashedBorder:{border:"2px dashed #FFFFFF",borderRadius:"6px",height:"95%",margin:"2%",overflow:"auto",paddingHorizontal:"2%",position:"absolute",width:"95%"},cardTitleContainer:{display:"flex",fontFamily:c,justifyContent:"center",margin:"2.5%"},cardTitle:{color:s.white,fontSize:"40px"},bulletPointItemsContainer:{fontFamily:d,marginBottom:"20px",marginLeft:"5%",marginRight:"5%"},question:{color:s.white,fontSize:"18px"},infoExpanded:{backgroundColor:s.expandedInfoBGColor,borderRadius:"8px",paddingBottom:"1.5%",paddingRight:"2%",paddingLeft:"2%",paddingTop:"1%",marginTop:"2%",maxHeight:"200px",overflowY:"auto"},answer:{color:s.lighterBlue,fontSize:"18px",whiteSpace:"pre-line"},arrowIcon:{marginLeft:"5px"}};function x(e){let{title:t,bulletPoints:i,color:o}=e;const a="".concat(o)||s.defaultColor,[r,l]=Object(n.useState)(null),d=()=>{l(null)},c=i.map(((e,t)=>Object(g.jsxs)("div",{style:E.bulletPointItemsContainer,children:[Object(g.jsxs)("div",{style:E.question,onClick:()=>(e=>{l(r===e?null:e)})(t),children:[e.question,Object(g.jsx)(p.a,{icon:u.a,style:E.arrowIcon})]}),r===t&&e.answer&&Object(g.jsx)("div",{style:E.infoExpanded,children:Object(g.jsx)("div",{style:E.answer,onClick:d,children:e.answer})})]},t)));return Object(g.jsx)("div",{style:E.mainContainer,children:Object(g.jsx)("div",{style:{...E.cardBackgroundContainer,backgroundColor:a},children:Object(g.jsxs)("div",{style:E.dashedBorder,children:[Object(g.jsx)("div",{style:E.cardTitleContainer,children:Object(g.jsx)("div",{style:E.cardTitle,children:t})}),c]})})})}var A={mainContainer:{display:"flex",height:"100px",margin:"2%",marginBottom:"6%",width:"100%",position:"relative",right:"12%",overflow:"auto"},cardBackgroundContainer:{alignContent:"space-between",alignItems:"center",backgroundColor:s.linkCardBGColor,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100%",position:"relative",width:"100%"},dashedBorder:{alignItems:"center",border:"2px dashed ".concat(s.black),borderRadius:"6px",display:"flex",height:"89%",justifyContent:"flex-start",width:"97%"},icon:{height:"56px",padding:"1%",width:"56px"},link:{alignText:"center",color:s.black,fontFamily:c,fontSize:"22px",overflow:"auto",padding:"5%",textDecoration:"none",wordWrap:"break-word"}};function w(e){let{icon:t,link:i}=e;return Object(g.jsx)("div",{style:A.mainContainer,children:Object(g.jsx)("div",{style:A.cardBackgroundContainer,children:Object(g.jsxs)("div",{style:A.dashedBorder,children:[Object(g.jsx)("img",{src:t,alt:"Icon",style:A.icon})," ",i?Object(g.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:A.link,children:i}):Object(g.jsx)("div",{style:A.link,children:'Send me an email in the "Contact Me" Card! '})]})})})}var v={container:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",position:"relative",right:"6%"},circle:{width:"250px",height:"250px",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",border:"10px solid transparent",borderImage:"linear-gradient(to bottom, ".concat(s.profilePicGradient1,", ").concat(s.profilePicGradient2,")"),borderImageSlice:1},image:{width:"100%",height:"100%",objectFit:"cover"},text:{marginTop:"10px",fontFamily:c,color:s.text,fontSize:"36px",textAlign:"center"}},j=i.p+"static/media/jenna-image.1ca563f4.jpeg";var S=e=>{let{name:t}=e;return Object(g.jsxs)("div",{style:v.container,children:[Object(g.jsx)("div",{style:v.circle,children:Object(g.jsx)("img",{src:j,alt:t,style:v.image})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:v.text,children:"Hey!"}),Object(g.jsxs)("div",{style:v.text,children:["I'm ",t," "]})]})]})};var Q={mainContainer:{display:"flex",justifyContent:"center",paddingBottom:"15px",paddingTop:"15px"},cardBackgroundContainer:{alignItems:"center",borderRadius:"8px",display:"flex",flexDirection:"column",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",position:"relative",width:"100%"},dashedBorder:{border:"2px dashed ".concat(s.mainStitching),borderRadius:"6px",height:"95%",margin:"15px",overflow:"auto",paddingHorizontal:"1%",width:"95%"},cardTitleContainer:{display:"flex",fontFamily:c,justifyContent:"center",margin:"1%"},cardTitle:{color:s.black,fontSize:"40px"},bulletPointItemsContainer:{fontFamily:d,marginBottom:"2%",marginLeft:"5%",marginRight:"5%"},paragraph:{color:s.black,fontSize:"18px",paddingLeft:"12px",textAlign:"center"}};function R(e){let{title:t,bulletPoints:i,color:n}=e;const o="".concat(n)||s.defaultColor,a=.75*i.length,r=i.map(((e,t)=>Object(g.jsx)("div",{style:Q.bulletPointItemsContainer,children:Object(g.jsx)("div",{style:Q.paragraph,children:e.paragraph})},t)));return Object(g.jsx)("div",{style:{...Q.mainContainer,height:"".concat(a,"%")},children:Object(g.jsx)("div",{style:{...Q.cardBackgroundContainer,backgroundColor:o},children:Object(g.jsxs)("div",{style:Q.dashedBorder,children:[Object(g.jsx)("div",{style:Q.cardTitleContainer,children:Object(g.jsx)("div",{style:Q.cardTitle,children:t})}),r]})})})}var F=i.p+"static/media/github_logo.37185c9c.png",k=i.p+"static/media/email-logo.2aa2efaf.jpg";var U=function(){return Object(g.jsx)("div",{style:l.websiteBackgroundContainer,children:Object(g.jsxs)("div",{style:l.main,children:[Object(g.jsxs)("div",{style:l.multiCards,children:[Object(g.jsx)("div",{style:l.leftCards,children:Object(g.jsx)(S,{name:"Jenna"})}),Object(g.jsxs)("div",{style:l.rightCards,children:[Object(g.jsx)(w,{icon:k,link:""}),Object(g.jsx)(w,{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAOECAMAAADOkA8JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAD62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI4NjlDODg0MTkwMTFFMkJGREU5M0YwMTJENUIxMzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjdGRjhEMEU0MTkwMTFFMkJGREU5M0YwMTJENUIxMzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDY4MDExNzQwNzIwNjgx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",link:"https://www.linkedin.com/in/jenna-cioffi/"}),Object(g.jsx)(w,{icon:F,link:"https://github.com/jennacioffi"})]})]}),Object(g.jsx)(R,{title:"What I'm Looking For",bulletPoints:[{paragraph:"I am actively seeking an in-office role where I can immerse myself in the collaborative environment, focusing on web development projects. I am eager to contribute my skills and passion, I invite you to reach out via email through the Contact Me section below to explore potential opportunities"}],color:s.lookingForBGColor}),Object(g.jsx)(f,{title:"Experience",bulletPoints:[{title:"- Atomic Jolt, Logan UT",subtitle:"Software Developer",date:"August 2022 - Jan 2024",info:{briefSummary:"Contributed to the development and maintenance of mobile applications for iOS and Android platforms as a Software/App Developer. Engaged in all phases of the software development lifecycle, encompassing coding, testing, and debugging. Proficient in comprehensive testing procedures, including the creation of testing spreadsheets and contributing to Cypress tests. Emphasized meticulous documentation and project organization.",briefSummaryBP1:"- Initiated the creation of a comprehensive GitHub Wiki documentation, streamlining the onboarding process for new developers and providing a centralized resource for all team members to reference when working on projects under my ownership. This initiative significantly reduced the time required for new developers to acclimate and improved code consistency across projects",briefSummaryBP2:"- Assumed a leadership role in the development and management of the Know Your Lemons Breast Cancer Awareness app, serving as the primary point of contact for the client. Directed the creation and deployment of app builds to various app stores, ensuring timely releases. Facilitated bug-fixing efforts and spearheaded client meetings, contributing to the app's success and client satisfaction",briefSummaryBP3:"- Collaborated with MIT on the development of the Learner Credential Wallet app, pioneering solutions in the emerging field of digital credential management. Played a pivotal role in conceptualizing and implementing the app's functionalities, transforming the way users manage and showcase their educational achievements. This initiative represented a significant step forward in the digitization of academic credentials, positioning MIT at the forefront of innovation in education technology.",link:"https://www.atomicjolt.com/atomic-jolt-apps"}},{title:"- USU Teaching Assistant",subtitle:"CS 1440 - Methods in Computer Science",date:"August 2022 - Jan 2024",info:{briefSummary:"Served as a Teaching Assistant for a course focused on teaching students command line usage, git, and problem-solving techniques. Emphasized the importance of documentation throughout the software development process, from initial planning to post-testing analysis, fostering a culture of thoroughness and clarity in project execution.",briefSummaryBP1:"- Conducted regular office hours to provide additional support and assistance to students outside of class, fostering a conducive environment for learning and addressing individual queries and concerns effectively.",briefSummaryBP2:"- Delivered detailed feedback on student assignments, offering valuable insights to enhance their understanding and proficiency in the course material.",briefSummaryBP3:"- Collaborated with colleagues to develop and implement grading scripts, optimizing the grading process and enabling TAs and professors to allocate more time towards student assistance and mentoring."}}],color:s.experienceBGColor}),Object(g.jsx)(f,{title:"Skills",bulletPoints:[{title:"- Programming Languages:",subtitle:"Python, C++, JavaScript, Type Script, Java",date:""},{title:"- Design Tools:",subtitle:"Figma",date:""},{title:"- Frameworks/Libraries:",subtitle:"React Native, Node.js",date:""},{title:"- Database:",subtitle:"Familiar with SQL syntax",date:""},{title:"- Version Control/Command Line:",subtitle:"Proficient in Git, adept at command line usage",date:""},{title:"- Testing:",subtitle:"Cypress, manual testing, spreadsheet management",date:""},{title:"- Project Management:",subtitle:"Experience with Pivotal Tracker and GitHub project boards",date:""},{title:"- Mobile App Development:",subtitle:"iOS and Android (build creation, releases to app stores), App Development",date:""},{title:"- Soft Skills:",subtitle:"Open-minded, adaptable, values transparent communication. Emphasizes documentation, organization, and up-to-date information. Confidence and ability to lead, Clear Communication, Initiative, Leadership, Teamwork",date:""}],color:s.skillsBGColor}),Object(g.jsx)(f,{title:"Volunteer Experience",bulletPoints:[{title:"- Humane Society of Northern Nevada",subtitle:"Animal Shelter",date:"August 2013 - May 2017",info:{briefSummary:"Fulfilled volunteer hours at the Nevada Humane Society, providing specialized care and support to sick newborn kittens while collaborating with adoption counselors to facilitate successful adoptions.",briefSummaryBP1:"- Delivered specialized care to sick newborn kittens, administering medications and adhering to feeding schedules to promote their health and development.",briefSummaryBP2:"- Collaborated with veterinary professionals to ensure the well-being of kittens, implementing feeding schedules and administering medications as directed.",briefSummaryBP3:"- Worked closely with adoption counselors to facilitate successful adoptions, contributing to increased adoption rates and the placement of kittens into loving homes.",briefSummaryBP4:"- Demonstrated compassion and dedication in providing a nurturing environment for vulnerable animals, fostering positive community impact."}},{title:"- Various Homeless Aid Areas",subtitle:"Homeless Shelters & Soup Kitchens",date:"August 2013 - May 2017",info:{briefSummary:"Volunteered at local homeless shelters, assisting in donation drives aimed at collecting essentials for individuals and families in need, demonstrating dedication and compassion.",briefSummaryBP1:"- Provided hands-on assistance during donation drives, aiding in the setup, organization, and execution of events to ensure efficient operations and a positive experience for donors and recipients.",briefSummaryBP2:"- Demonstrated dedication and compassion by actively participating in donation initiatives and contributing personal donations to support individuals and families experiencing homelessness.",briefSummaryBP3:"- Engaged with donors and community members to promote awareness and participation in donation drives, fostering a spirit of generosity and community support for those in need."}}],color:s.volunteerExpBGColor}),Object(g.jsx)(f,{title:"Education",bulletPoints:[{title:"- Utah State University",subtitle:"Bachelors in Computer Science",date:"August 2017 - May 2023"}],color:s.educationBGColor}),Object(g.jsx)(f,{title:"Projects",bulletPoints:[{title:"- Know Your Lemons Breast Cancer App",subtitle:"https://www.knowyourlemons.org/app",date:"Related To: Atomic Jolt"},{title:"- MIT Learner Credential Wallet",subtitle:"https://lcw.app/",date:"Related To: Atomic Jolt"},{title:"- This Personal Website",subtitle:"https://github.com/jennacioffi/personal-website",date:"Related To: Personal Projects"}],color:s.pastWorkProjectsBGColor}),Object(g.jsxs)("div",{style:l.multiCards,children:[Object(g.jsx)(C,{color:s.contactMeBGColor}),Object(g.jsx)(x,{title:"Interview FAQs",bulletPoints:[{question:"1. Tell me about yourself and your background in software/web development",answer:"- About Myself:\n My hobbies include outdoorsy sports (mountain biking, snowboarding), engaging in art, reading, and spending quality time with friends and family.\n\n - My Background in CS:\n From a young age, I immersed myself in technology, starting with Apple products and gaming consoles like Nintendo 64 and Xbox. Despite being the odd one out in middle and high school for using a tablet instead of textbooks, my interest in technology persisted. In college, an academic advisor's suggestion led me to explore computer science, where I found inspiring professors who fueled my curiosity in coding. Most of my time was spent exploring the command line. Post-college, I transitioned into the field of app and web development, where I've discovered immense enjoyment in building projects of this nature."},{question:"2. What motivated you to pursue a career in software/web development?",answer:"- My motivation to pursue a career in software/web development stems from the realization that coding opens doors to endless possibilities. In today's digital age, where most users interact with the internet through various platforms like smartphones, tablets, and computers, web development offers the opportunity to reach the widest audience. Social media platforms exemplify this reach, enabling users to connect and share experiences globally. I am driven by the potential to make a positive impact through technology. My deep interest in psychology fuels my desire to leverage app and web development to create solutions that benefit individuals on a global scale."},{question:"3. Describe a time when you had to work under pressure to meet a tight deadline. How did you handle it?",answer:"- During my academic experience, I encountered several instances where I had to navigate tight deadlines, particularly with school assignments. Recognizing the importance of punctuality in the professional world, I made it a personal priority to stay ahead of my tasks and avoid the risk of falling behind.\n\nI remained proactive in managing my workload to prevent any last-minute rushes. In the academic setting, I maintained open communication with my professors.\n\nThis approach ensured that I fulfilled my commitments responsibly while maintaining a professional standard of work and communication."},{question:"4. How do you handle constructive criticism or feedback on your code?",answer:"- I approach constructive criticism and feedback on my code with an open mind and a growth-oriented mindset. Recognizing that I'm still evolving in this field, I genuinely value code reviews as opportunities for learning and improvement. I welcome kind and constructive criticism, as it provides invaluable insights that contribute to my professional development. Viewing every feedback session as a learning experience, I strive to implement suggested improvements and refine my coding practices continuously."},{question:"5. Describe a time when you faced a challenge and what you did to overcome it.",answer:"- In navigating life's challenges, I adopt a methodical approach centered around pausing, analyzing, and adapting accordingly. When confronted with a challenge, I take a moment to pause and thoroughly analyze the situation. I identify the root cause, assess its potential impacts, and brainstorm potential solutions. This analysis involves questioning whether I possess the necessary skills to address the issue independently or if I require assistance.\n\nIf I determine that I may require assistance, I initially attempt to resolve the challenge on my own, allocating a reasonable timeframe to explore potential solutions. I prioritize efficiency and avoid unnecessary delays. Should I encounter difficulty in finding a resolution, I proactively seek assistance from colleagues or mentors.\n\nFor challenges that prove too complex or beyond my expertise, I acknowledge limitations and promptly seek alternative solutions. This may involve compiling a comprehensive overview of the challenge and engaging the expertise of individuals or resources better equipped to provide assistance, ensuring effective problem-solving and forward progress."},{question:"6. Can you discuss a situation where you had to learn a new technology or programming language quickly? How did you approach it?",answer:"- Early in my career, I encountered a scenario where I had to swiftly acquire proficiency in iOS and Android app development for a project aimed at supporting a non-profit foundation's breast cancer awareness initiative. Despite lacking prior experience in app development, I was determined to meet the client's expectations and deliver impactful results.\n\nTo expedite my learning process, I leveraged online learning platforms such as Codecademy and YouTube, focusing on mastering the necessary programming languages. Additionally, I received guidance from the development lead, who provided clear direction on key areas to prioritize.\n\nThrough dedicated self-study and mentorship, I rapidly acquired the requisite skills, enabling me to contribute effectively to the project. Subsequently, my newfound expertise proved valuable when we secured a project with MIT, where I assisted the tech lead in optimizing the app deployment process for their digital wallet solution.\n\nThis experience underscored the effectiveness of proactive learning and collaboration in adapting to new technologies and fulfilling project requirements efficiently."},{question:"7. Describe a time when you had a disagreement with a team member during a project. How did you handle it?",answer:"- Throughout my career, I've encountered differing perspectives and occasional disagreements with team members. Embracing the diversity of backgrounds and experiences within a team, I prioritize fostering understanding and collaboration.\n\nIn one instance, I found myself at odds with a colleague regarding our approaches to problem-solving. Despite the discord, I maintained a composed demeanor and advocated for a brief period of reflection to de-escalate tensions. This allowed both parties to regroup and revisit the discussion with a calmer mindset.\n\nPreferring resolution over conflict, I actively seek to understand others' viewpoints and remain receptive to alternative approaches, provided they align with the project's objectives. By fostering open communication and demonstrating flexibility, I've successfully mitigated conflicts and fostered constructive collaboration among team members."},{question:"8. How do you prioritize tasks and manage your time effectively when working on multiple projects or deadlines?",answer:"- I prioritize tasks by using task management tools to organize them from highest to lowest priority. While I'm still exploring the best software for this purpose, I've found success with tools like the Reminders app and calendar app on Apple products. Each morning, I create a strategic plan of action, ensuring that essential tasks are completed first while allowing flexibility for tasks that can be tackled later if time permits."},{question:"9. How do you approach documentation in your projects?",answer:"- Documentation is integral to my project approach, underscored by professional experience. While teaching a freshman CS course at USU as a student, I learned firsthand the importance of documentation through practical application in coursework. Upon entering the professional realm after graduation, I encountered challenges with poorly documented projects, realizing the significant impact on team productivity and collaboration. Confronted with an undocumented app development project, I invested additional time to decipher its complexities and promptly authored comprehensive documentation, alleviating team setbacks and facilitating smoother collaboration. Subsequently, my colleagues consistently sought my documentation expertise, recognizing its value in navigating projects efficiently."},{question:"10. What do you enjoy most about software/web development, and what do you find most challenging?",answer:"- The most challenging aspect of software/web development for me is grappling with poorly written documentation, which often lacks clarity and coherence. As a developer who prioritizes user-centric thinking, bridging the gap between everyday visualization and the technical intricacies of documentation can be daunting. To address this challenge, I focus on crafting clear and understandable documentation, seeking feedback to ensure its accessibility. Despite these hurdles, the most enjoyable aspect of software/web development lies in witnessing the transformation of ideas into tangible solutions. The satisfaction derived from seeing projects evolve from concept to reality, coupled with the continuous learning experience, remains immensely rewarding."}],color:s.interviewFQSBGColor})]})]})})};var G=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,213)).then((t=>{let{getCLS:i,getFID:n,getFCP:o,getLCP:a,getTTFB:r}=t;i(e),n(e),o(e),a(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(U,{})})),G()}},[[212,1,2]]]);
//# sourceMappingURL=main.57814561.chunk.js.map