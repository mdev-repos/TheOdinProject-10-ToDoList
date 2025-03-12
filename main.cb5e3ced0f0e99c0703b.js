(()=>{"use strict";var t={56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},365:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"/* GENERAL STYLES */\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Bai Jamjuree', sans-serif;\n    font-size: 16px;\n}\n\n:root{\n    --bg-color: #0b132b;\n    --primary-color: #6fffe9;\n    --secondary-color: #5bc0be;\n    --third-color: #3a506b;\n\n    --create-color: #2ba320;\n    --create-hov-color: #56f547;\n\n    --edit-color: #2555be;\n    --edit-hov-color: #4177ec;\n\n    --delete-color: #c50b0b;\n    --delete-hov-color: #f02f2f;\n}\n\nbody{\n    background-color:var(--bg-color);\n    color: var(--primary-color);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* HEADER STYLES */\nheader{\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hd-title{\n    text-align: center;\n    font-weight: 600;\n    font-size: 2.5rem;\n}\n\n\n/* MAIN STYLES */\nmain{\n    width: 100%;\n    min-height: 485px;\n    margin-bottom: 30px;\n}\n\n.main-content{\n    width: 100%;\n}\n\n  /* HOME STYLES */\n.home-container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding-top: 10px;\n}\n\n.home-container p{\n    font-style: italic;\n    color: var(--secondary-color);\n}\n\n.home-image{\n    width: 80%;\n    height: 300px;\n    margin: 15px 0;\n}\n\n.home-image img{\n    width: 100%;\n    height: auto;\n    max-height: 100%;\n    object-fit: cover;\n    object-position: center;\n    border-radius: 50px;\n    box-shadow: 3px 4px 3px var(--third-color);\n}\n\n#home-cta {\n    text-decoration: none;\n    border: none;\n    padding: 8px 12px;\n    border-radius: 10px;\n    background-color: var(--secondary-color);\n    color: var(--bg-color);\n    font-size: 1.1rem;\n    font-weight: 600;\n    margin-top: 20px;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n#home-cta:hover {\n    cursor: pointer;\n    background-color: var(--primary-color);\n    transform: scale(1.05);\n    box-shadow: 2px 2px 2px var(--third-color);\n}\n\n  /* APP STYLES */\n.app-container{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 10%;\n    gap: 7px;\n}\n\n.projects-adm{\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    gap: 20px;\n    border: 1px solid var(--secondary-color);\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n\n.projects-adm p{\n    font-size: 1.3rem;\n    font-weight: 600;\n}\n\n.projects-adm span, .proj-card-header span{\n    width: 25%;\n    color: var(--bg-color);\n    padding: 8px 12px;\n    border-radius: 10px;\n    transition: transform 0.2s;\n    text-align: center;\n}\n\n.projects-adm span{\n    background-color: var(--create-color);\n}\n\n.proj-card-header span{\n    background-color: var(--edit-color);\n}\n\n.projects-adm span:hover, .proj-card-header span:hover{\n    cursor: pointer;\n    transform: scale(1.05);\n}\n\n.projects-adm span:hover{\n    background-color: var(--create-hov-color);\n}\n\n.proj-card-header span:hover{\n    background-color: var(--edit-hov-color);\n}\n\n.projects-container{\n width: 100%;\n display: flex;\n flex-direction: column;\n gap: 10px;\n color: var(--secondary-color);\n}\n\n.project-card {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 15px;\n    border: 1px solid var(--third-color);\n    border-radius: 10px;\n}\n\n.proj-card-header{\n    width: 100%;\n    height: 20%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.proj-card-title{\n    font-size: 1.1rem;\n    font-weight: 600;\n    font-style: italic;\n}\n\n.proj-card-descript{\n    width: 100%;\n    height: 80%;\n    font-size: 0.9rem;\n    font-weight: 200;\n    color: var(--secondary-color);\n    font-style: italic;\n}\n\n/* FOOTER STYLES */\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n}\n\n\n/* RESPONSIVE DESIGN */\n@media (min-width: 768px) {\n    *, *::before, *::after {\n        font-size: 24px;\n    }\n    \n    header{\n        height: 120px;\n    }\n\n    .home-image{\n        width: 50%;\n        height: auto;\n    }\n\n    .projects-adm span{\n        max-width: 100px;\n    }\n\n    .projects-container{\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        gap: 10px;\n        color: var(--secondary-color);\n    }\n\n    .project-card {\n        width: 48%;\n        min-width: 300px;\n        height: 270px;\n    }\n\n    .proj-card-header span{\n        min-width: 100px;\n    }\n}",""]);const c=i},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),s=n.n(c),u=n(56),d=n.n(u),l=n(540),h=n.n(l),m=n(113),f=n.n(m),p=n(365),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;let w=[],b=[];class y{constructor(t,e,n,r,a){this.taskID=crypto.randomUUID(),this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.state="To do",this.projectID=a}}class v{static createTask(t,e,n,r,a){if(!t||!e)throw new Error("Title and description are required");if(!n||isNaN(new Date(n).getTime()))throw new Error("Invalid due date");const o=new y(t,e,n,r,a);return b.push(o),o}static getAllTasks(t){return b.filter((e=>e.projectID===t))||null}static getTaskByID(t){return b.find((e=>e.taskID===t))||null}static updateTask(t,e){const n=b.findIndex((e=>e.taskID===t));return-1!==n?(b[n]={...b[n],...e},b[n]):null}static deleteTask(t){const e=b.findIndex((e=>e.taskID===t));return-1!==e?(b.splice(e,1),b):null}}class x{constructor(t,e){this.projectID=crypto.randomUUID(),this.title=t,this.description=e,this.state="Open",this.taskList=[]}}class k{static createProject(t,e){const n=new x(t,e);return w.push(n),n}static getAllProjects(){return w}static getProjectByID(t){return w.find((e=>e.projectID===t))||null}static addTask(t,e){const n=w.find((e=>e.projectID===t))||null;return n.taskList.push(e),n.taskList}static updateProject(t,e){const n=w.findIndex((e=>e.projectID===t));return-1!==n?(w[n]=e,e):null}static deleteProject(t){const e=w.findIndex((e=>e.projectID===t));return-1!==e?(w.splice(e,1),w):null}}const M={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const S={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},T={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const P={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function E(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const C={ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(W.matchPattern);if(!n)return null;const r=n[0],a=t.match(W.parsePattern);if(!a)return null;let o=W.valueCallback?W.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var W;const L={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=M[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:S,formatRelative:(t,e,n,r)=>T[t],localize:P,match:C,options:{weekStartsOn:0,firstWeekContainsDate:1}};let I={};function Y(){return I}Math.pow(10,8);const O=6048e5,A=Symbol.for("constructDateFrom");function N(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&A in t?t[A](e):t instanceof Date?new t.constructor(e):new Date(e)}function q(t,e){return N(e||t,t)}function H(t){const e=q(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function F(t,e){const n=q(t,e?.in);return n.setHours(0,0,0,0),n}function z(t,e){const n=q(t,e?.in);return function(t,e,n){const[r,a]=function(t,...e){const n=N.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=F(r),i=F(a),c=+o-H(o),s=+i-H(i);return Math.round((c-s)/864e5)}(n,function(t,e){const n=q(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function B(t,e){const n=Y(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=q(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function G(t,e){return B(t,{...e,weekStartsOn:1})}function Q(t,e){const n=q(t,e?.in),r=n.getFullYear(),a=N(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=G(a),i=N(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const c=G(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function X(t,e){const n=q(t,e?.in),r=+G(n)-+function(t,e){const n=Q(t,e),r=N(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),G(r)}(n);return Math.round(r/O)+1}function $(t,e){const n=q(t,e?.in),r=n.getFullYear(),a=Y(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=N(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const c=B(i,e),s=N(e?.in||t,0);s.setFullYear(r,0,o),s.setHours(0,0,0,0);const u=B(s,e);return+n>=+c?r+1:+n>=+u?r:r-1}function R(t,e){const n=q(t,e?.in),r=+B(n,e)-+function(t,e){const n=Y(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=$(t,e),o=N(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),B(o,e)}(n,e);return Math.round(r/O)+1}function U(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const J={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return U("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):U(n+1,2)},d:(t,e)=>U(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>U(t.getHours()%12||12,e.length),H:(t,e)=>U(t.getHours(),e.length),m:(t,e)=>U(t.getMinutes(),e.length),s:(t,e)=>U(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return U(Math.trunc(r*Math.pow(10,n-3)),e.length)}},V={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return J.y(t,e)},Y:function(t,e,n,r){const a=$(t,r),o=a>0?a:1-a;return"YY"===e?U(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):U(o,e.length)},R:function(t,e){return U(Q(t),e.length)},u:function(t,e){return U(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return J.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=R(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):U(a,e.length)},I:function(t,e,n){const r=X(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):J.d(t,e)},D:function(t,e,n){const r=z(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return U(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return U(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return U(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return J.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):J.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):J.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):J.s(t,e)},S:function(t,e){return J.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Z(r);case"XXXX":case"XX":return _(r);default:return _(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Z(r);case"xxxx":case"xx":return _(r);default:return _(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+K(r,":");default:return"GMT"+_(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+K(r,":");default:return"GMT"+_(r,":")}},t:function(t,e,n){return U(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return U(+t,e.length)}};function K(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+U(o,2)}function Z(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):_(t,e)}function _(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+U(Math.trunc(r/60),2)+e+U(r%60,2)}const tt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},et=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},nt={p:et,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return tt(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",tt(r,e)).replace("{{time}}",et(a,e))}},rt=/^D+$/,at=/^Y+$/,ot=["D","DD","YY","YYYY"];function it(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+q(t)));var e}const ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,dt=/''/g,lt=/[a-zA-Z]/;function ht(t){const e=t.match(ut);return e?e[1].replace(dt,"'"):t}function mt(t,e,n,r,a){return function(t,e,n){const r=Y(),a=n?.locale??r.locale??L,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=q(t,n?.in);if(!it(c))throw new RangeError("Invalid time value");let s=e.match(st).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,nt[e])(t,a.formatLong):t})).join("").match(ct).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ht(t)};if(V[e])return{isToken:!0,value:t};if(e.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(s=a.localize.preprocessor(c,s));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return s.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return at.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return rt.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),ot.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,V[o[0]])(c,o,a.localize,u)})).join("")}(new Date(t,e,n,r,a),"MM/dd/yyyy HH:mm")}const ft=n.p+"edd952586cc34c3c73f4.png",pt=n.p+"97c921b62bab0f5407f5.png";function gt(){document.querySelector(".main-content").innerHTML=""}const wt=k.createProject("Example Project","This is an example project for new users. Enjoy the app!"),bt=v.createTask("First Task","This is an example task",mt(2025,2,15,22,15),"Medium",wt.projectID),yt=v.createTask("Second Task","This is an example task",mt(2025,2,17,15,45),"High",wt.projectID);k.addTask(wt.projectID,bt.taskID),k.addTask(wt.projectID,yt.taskID);const vt=k.createProject("Another Project","This is an example project for new users. Enjoy the app!"),xt=v.createTask("Another Task","This is an example task",mt(2025,2,19,19,30),"Low",vt.projectID);k.addTask(vt.projectID,xt.taskID),gt(),function(){const t=document.querySelector(".main-content"),e=document.createElement("div");e.classList.add("home-container");const n=document.createElement("p");n.textContent="Create personal projects to manage your time",e.appendChild(n);const r=document.createElement("div");r.classList.add("home-image");const a=document.createElement("img");a.src=ft,a.alt="Illustration of people with an organizer",r.appendChild(a),e.appendChild(r);const o=document.createElement("p");o.textContent="Add tasks and monitor their status",e.appendChild(o);const i=document.createElement("div");i.classList.add("home-image");const c=document.createElement("img");c.src=pt,c.alt="Illustration of people with an organizer",i.appendChild(c),e.appendChild(i);const s=document.createElement("button");s.id="home-cta",s.textContent="Try for free",e.appendChild(s),t.appendChild(e)}(),document.querySelector("#home-cta").addEventListener("click",(()=>{gt(),function(){const t=document.querySelector(".main-content"),e=document.createElement("div");e.classList.add("app-container");const n=document.createElement("div");n.classList.add("projects-adm");const r=document.createElement("p");r.textContent="Projects",n.appendChild(r);const a=document.createElement("span");a.textContent="+ ADD",n.appendChild(a),e.appendChild(n);const o=document.createElement("div");o.classList.add("projects-container"),k.getAllProjects().forEach((t=>{const e=function(t){const e=document.createElement("div");e.classList.add("project-card");const n=document.createElement("div");n.classList.add("proj-card-header");const r=document.createElement("p");r.classList.add("proj-card-title"),r.textContent=`${t.title}`,n.appendChild(r);const a=document.createElement("span");a.classList.add("project-open-btn"),a.textContent="OPEN",n.appendChild(a),e.appendChild(n);const o=document.createElement("p");return o.classList.add("proj-card-descript"),o.textContent=`${t.description}`,e.appendChild(o),e}(t);o.appendChild(e)})),e.appendChild(o),t.appendChild(e)}(),document.querySelectorAll(".project-open-btn").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),gt()}))}))}))})();