"use strict";(self.webpackChunkagentgpt_documentation=self.webpackChunkagentgpt_documentation||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},s="\u2753 Frequently Asked Questions",r={unversionedId:"faq",id:"faq",title:"\u2753 Frequently Asked Questions",description:"Introduction",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/AutoGpt-Documentation/docs/faq",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Roadmap",permalink:"/AutoGpt-Documentation/docs/roadmap"},next:{title:"\ud83d\udee0\ufe0f Setup",permalink:"/AutoGpt-Documentation/docs/setup"}},l={},u=[{value:"Introduction",id:"introduction",level:3},{value:"API key issues",id:"api-key-issues",level:3},{value:"Agent issues",id:"agent-issues",level:3},{value:"Misc",id:"misc",level:3},{value:"Local contribution issues",id:"local-contribution-issues",level:3}],c={toc:u},d="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-frequently-asked-questions"},"\u2753 Frequently Asked Questions"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Below is a list of the most frequently asked questions about AgentGPT. If you have any unanswered questions, please reach out to the moderation or dev team on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/jdSBAnmdnY"},"Discord")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reworkd/AgentGPT"},"GitHub"),". "),(0,a.kt)("h3",{id:"api-key-issues"},"API key issues"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Where can I get an API key?"),"You should first sign up for an OpenAI account. You can do so ",(0,a.kt)("a",{href:"https://openai.com/blog/openai-api"},"here"),". For new accounts, you will be placed under a free tier with $18 of free credits. All you need to do now is visit the ",(0,a.kt)("a",{href:"https://platform.openai.com/account/api-keys"},"API keys page"),", create a new key, and place the key within the AgentGPT settings menu.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"NOTE:")," This key should be private and should not be shared publicly. AgentGPT does not save this key in a database, it is simply stored in your browser."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I have free API credits, why is my API key not working?"),"OpenAI API accounts start with $18 of free tier credits. Look at your ",(0,a.kt)("a",{href:"https://platform.openai.com/account/usage"},"OpenAI API usage page")," to see if it has been used up or expired. Expired credit will show up as red such as the below image",(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example banner",src:n(1098).Z,width:"670",height:"314"})),(0,a.kt)("p",null,"If you have used up your free tier credits, you will need to add billing information into your API key: ",(0,a.kt)("a",{href:"https://platform.openai.com/account/billing/overview"},"OpenAI API Overview"),".\nNote that a few runs of AgentGPT will only cost a few cents.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I have ChatGPT Plus, why is my API key not working?"),"ChatGPT Plus is independent of your OpenAI API key. Although you have ChatGPT Plus, it doesn't mean that you will be able to use the API. All accounts start with $18 of free credits but this can be used of or expired. Given this, you will need to add your billing information into your API key account. You can do so by visiting the following link and adding a payment method: ",(0,a.kt)("a",{href:"https://platform.openai.com/account/billing/overview"},"OpenAI API Overview"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How much will AgentGPT cost me?"),"Using AgentGPT is free as we handle the API costs. If you provide your own API key however, the cost per agent deployment will depend on the model that you use.",(0,a.kt)("ul",null,(0,a.kt)("li",null,"gpt-3.5-turbo will cost only a few cents per run at most"),(0,a.kt)("li",null,"gpt-4 is a lot more expensive. Be sure to limit its loops and watch over costs carefully"),(0,a.kt)("li",null,"NOTE: You can limit the number of loops and number of tokens within the advanced settings"))),(0,a.kt)("h3",{id:"agent-issues"},"Agent issues"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AgentGPT said it made a file / database / script, where can I find it?"),"Currently AgentGPT is incapable of outputs in that manner, but this is something we are actively working on. Keep an eye on our ",(0,a.kt)("a",{href:"/docs/roadmap"},"roadmap")," to get an idea for when this might be available."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Did AgentGPT actually email 100 people?"),"No! We don't currently support this functionality, but its something we're looking to implement. View our ",(0,a.kt)("a",{href:"/docs/roadmap"},"roadmap"),' to get an idea for when this might be available. When this does work, we\'ll be sure to validate that an action like "sending an email" is actually something you want to do \ud83d\ude42'),(0,a.kt)("details",null,(0,a.kt)("summary",null,"My agent keeps running out of loops!"),"We must limit how much the Agent runs in some capacity due to API and infrastructure costs \ud83d\ude22. If you provide your own API key you can increase the number of loops your Agent goes through within the advanced settings of the settings menu."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"My Agent was doing great but then it got stopped! Can I start from where I left off?"),"Currently all Agent runs are isolated from each other so this is not possible. This is something we want to add in the future, but in the meantime you can create another AgentGPT run using the information it generated for you from the previous run. Keep an eye on our ",(0,a.kt)("a",{href:"/docs/roadmap"},"roadmap")," to get an idea for when this might be available."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Can AgentGPT use GPT-4?"),"AgentGPT currently uses GPT-3.5 due to costs and availability. If you have API access to GPT-4, you can input your own API key in the settings menu and select GPT-4 as the model."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I have ChatGPT Plus, why can't I use GPT-4?"),"ChatGPT Plus is independent of your OpenAI API account having access to GPT-4. Unfortunately, our API key account will have to be accepted through the waitlist. Enroll your account here: ",(0,a.kt)("a",{href:"https://openai.com/waitlist/gpt-4-api"},"GPT-4 API waitlist")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why does the output keep getting cut off?"),"The longer the output is, the more expensive it is on our end to generate it. Because of this, we have a limit on the output length which can cause longer messages to be cut off. If you provide your own API key, you can increase the output length within the advanced settings of the settings menu by increasing the number of tokens."),(0,a.kt)("h3",{id:"misc"},"Misc"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is the difference between this and ChatGPT?"),"ChatGPT is a great tool that will allow you to ask a specific question and receive a result. AgentGPT on the otherhand is a platform for AI agents. You configure an agent to accomplish a broad goal, and it will automatically think and perform tasks to achieve it."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is the difference between this and AutoGPT?"),"Both AgentGPT and AutoGPT are projects involving autonomous AI agents. AutoGPT is a tool that one runs locally while AgentGPT is a web based platform."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What can AgentGPT do?"),"AgentGPT can do a lot, but we're also working on giving it a lot more capabilities. Visit our ",(0,a.kt)("a",{href:"/docs/usecases"},"usecases")," page to learn about how people currently use AgentGPT."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Does AgentGPT have access to the internet?"),"Not yet but this is coming very soon! Keep an eye on our ",(0,a.kt)("a",{href:"/docs/roadmap"},"roadmap"),"."),(0,a.kt)("h3",{id:"local-contribution-issues"},"Local contribution issues"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I'm having trouble setting up AgentGPT locally!"),"Please visit our ",(0,a.kt)("a",{href:"/docs/setup"},"setup")," guide to diagnose any issues. If you have a problem that is undocumented, please submit an ",(0,a.kt)("a",{href:"https://github.com/reworkd/AgentGPT/issues"},"issue on GitHub"),"."))}h.isMDXComponent=!0},1098:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expired-free-tier-dea714b213eda7405edca1ef5eca0037.png"}}]);