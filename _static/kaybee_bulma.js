parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({10:[function(require,module,exports) {
"use strict";function e(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}function n(e,n,t,r){var o,u=[].map,l=r&&r.children[0]||null,i=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:u.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],f=!0,c=p(e),s=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var u=o(e);return"function"==typeof u&&(u=u(g(n,c),r)),u&&u!==(t=g(n,c))&&!u.then&&h(c=m(n,p(t,u),c)),u}}(o,r[o]):e(n.concat(o),t[o]=p(t[o]),r[o]=p(r[o]));return r}([],c,p(n));return h(),s;function v(e){return"function"==typeof e?v(e(c,s)):null!=e?e:""}function d(){o=!o;var e=v(t);for(r&&!o&&(l=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName);var o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=v(n.children[u]),t));for(var l in o)b(r,l,o[l],null,t)}return r}(o,u);n.insertBefore(l,t),null!=r&&k(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in p(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var u=f?t.oncreate:t.onupdate;u&&a.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var i={},c={},s=[],d=r.children,h=o.children,m=0;m<d.length;m++){s[m]=t.childNodes[m];var g=y(d[m]);null!=g&&(i[g]=[s[m],d[m]])}for(var m=0,N=0;N<h.length;){var g=y(d[m]),w=y(h[N]=v(h[N]));if(c[g])m++;else if(null==w||w!==y(d[m+1]))if(null==w||f)null==g&&(e(t,s[m],d[m],h[N],u),N++),m++;else{var x=i[w]||[];g===w?(e(t,x[0],x[1],h[N],u),m++):x[0]?e(t,t.insertBefore(x[0],s[m]),x[1],h[N],u):e(t,s[m],null,h[N],u),c[w]=h[N],N++}else null==g&&k(t,s[m],d[m]),m++}for(;m<d.length;)null==y(d[m])&&k(t,s[m],d[m]),m++;for(var m in i)c[m]||k(t,i[m][0],i[m][1])}return t}(r,l,i,i=e)),f=!1;a.length;)a.pop()()}function h(){o||(o=!0,setTimeout(d))}function p(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function m(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),n,t[e[0]]):n,p(t,r)):n}function g(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function y(e){return e?e.key:null}function N(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)for(var u in p(r,t)){var l=null==t||null==t[u]?"":t[u];"-"===u[0]?e[n].setProperty(u,l):e[n][u]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,N):e.removeEventListener(n,N)):n in e&&"list"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],4:[function(require,module,exports) {

},{}],8:[function(require,module,exports) {
"use strict";var e=this&&this.__assign||Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e};function r(r,t,o){var n={};return Object.entries(r).map(function(c){var a=c[0],s=c[1],p=o+"/../"+s.docname+".html",i=e({},s,{references:[],href:p});if(i.props.primary_reference){var l=r[i.props.primary_reference];i.primary_reference={docname:l.docname,label:l.props.label,title:l.title,logo:l.props.logo}}if(i.props.published){var u=new Date(i.props.published);i.props.published=u.toDateString()}Object.entries(s.props.references||{}).map(function(n){var c=n[0],a=n[1];if("author"===c){var s,p=a[0],l=t.author[p].docname,u=r[l],f=o+"/../"+u.docname+".html",m=u.props.images;m&&m.map(function(e){var r=e.usage,t=e.filename;"icon_24"===r&&(s=f+"/../"+t)}),u&&(i.author={docname:l,href:f,title:u.title,label:p,thumbnailUrl:s,props:e({},u.props)})}else i.references=[],a.map(function(e){var n=t[c][e].docname,a=r[n],s=o+"/../"+a.docname+".html";i.references.push({reftype:c,href:s,label:e,docname:n,title:a.title})})}),n[a]=i}),n}function t(e,r,t){var o={rtypes:{label:"Resource Type",value:"rtype",control:"checkbox",choices:{}}},n={};return Object.entries(r).map(function(e){var r=e[0],o=e[1];t?o.parent_docnames.includes(t)&&(n[r]=o):n[r]=o}),Object.entries(n).map(function(t){t[0];var n=t[1];o.rtypes.choices[n.rtype]?o.rtypes.choices[n.rtype].count++:o.rtypes.choices[n.rtype]={label:n.rtype,value:n.rtype,count:1},n.props&&n.props.references&&Object.entries(n.props.references).map(function(t){var n=t[0],c=t[1];o[n]||(o[n]={label:n,value:n,control:"checkbox",choices:{}});var a=o[n].choices;c.map(function(t){if(a[t])a[t].count++;else{var o=e[n][t],c=r[o.docname];a[t]={label:c.title,value:c.docname,count:1}}})})}),Object.values(o)}exports.__esModule=!0,exports.setResources=r,exports.setFilterGroups=t;
},{}],12:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,s){function u(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(u,o)}c((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,i,s,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){u.label=s[1];break}if(6===s[0]&&u.label<i[1]){u.label=i[1],i=s;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(s);break}i[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};exports.__esModule=!0;var r=require("./dbjson");function n(e){var t=[];return e&&e.map(function(e){Object.values(e.choices).map(function(r){r.checked&&t.push([e.value,r.value])})}),t}function i(e,t,r){var n=e.slice();return r&&(n=n.filter(function(e){return e.parent_docnames.includes(r)})),t.length&&(n=n.filter(function(e){var r=!1;return t.map(function(t){var n=t[0],i=t[1];if("author"===n)r=!(!e.author||e.author.docname!==i);else if("rtype"===n)r=e.rtype===i;else{var s=e.references;s?s.map(function(e){e.reftype===n&&e.docname===i&&(r=!0)}):r=!1}}),r})),n}exports.getFilterGroupValues=n,exports.filterValues=i;var s=function(){return function(){var s=this;this.setDbUrl=function(e){return{dbUrl:e}},this.setFilterParent=function(e){return{filterParent:e}},this.getState=function(){return function(e){return e}},this.setFetching=function(e){return{isFetching:e}},this.setNotification=function(e){return{notification:e}},this.filterResults=function(){return function(e,t){var r=Object.values(e.resources);return e.filterTerm&&(r=r.filter(function(t){return(t.title+" "+t.excerpt).toLowerCase().includes(e.filterTerm.toLowerCase())})),{results:r=i(r,n(e.filterGroups),e.filterParent)}}},this.setDb=function(e){return function(t,n){if(e.resources||!e.references){var i=r.setResources(e.resources,e.references,t.dbUrl),s=r.setFilterGroups(e.references,i,t.filterParent);return n.filterResults(),{resources:i,filterGroups:s}}n.setNotification("Server data missing resources or references")}},this.getJson=function(r){return function(n,i){return e(s,void 0,void 0,function(){var e,n,s;return t(this,function(t){switch(t.label){case 0:i.setDbUrl(r),i.setFetching(!0),i.setNotification(""),t.label=1;case 1:return t.trys.push([1,4,,5]),[4,fetch(r)];case 2:if(200!==(e=t.sent()).status)throw Error(e.statusText);return[4,e.json()];case 3:return n=t.sent(),i.setDb(n),i.filterResults(),[3,5];case 4:throw s=t.sent(),i.setNotification("Error: "+s.message),new Error(s.message);case 5:return i.setFetching(!1),[2]}})})}},this.setFilterTerm=function(e){return{filterTerm:e}},this.setFilterChoice=function(){return function(e){return{filterGroups:e.filterGroups.slice()}}}}}();exports.default=s;
},{"./dbjson":8}],20:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("hyperapp");exports.default=function(e){var r=e.actions;return t.h("p",null,t.h("button",{class:"button is-primary",onclick:function(){return console.log("State:",r.getState())}},"Dump State"))};
},{"hyperapp":10}],21:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var i=require("hyperapp");exports.default=function(t){var r=t.notification;if(r)return i.h("div",{class:"notification is-primary"},"Notification: ",r)};
},{"hyperapp":10}],22:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var a=require("hyperapp");exports.default=function(){return a.h("div",{class:"kbb-pagination"},a.h("nav",{class:"pagination",role:"navigation","aria-label":"pagination"},a.h("a",{class:"pagination-previous"},"Previous"),a.h("a",{class:"pagination-next"},"Next page"),a.h("ul",{class:"pagination-list"},a.h("li",null,a.h("a",{class:"pagination-link","aria-label":"Goto page 1"},"1")),a.h("li",null,a.h("span",{class:"pagination-ellipsis"},"…")),a.h("li",null,a.h("a",{class:"pagination-link","aria-label":"Goto page 45"},"45")),a.h("li",null,a.h("a",{class:"pagination-link is-current","aria-label":"Page 46","aria-current":"page"},"46")),a.h("li",null,a.h("a",{class:"pagination-link","aria-label":"Goto page 47"},"47")),a.h("li",null,a.h("span",{class:"pagination-ellipsis"},"…")),a.h("li",null,a.h("a",{class:"pagination-link","aria-label":"Goto page 86"},"86")))))};
},{"hyperapp":10}],56:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(r){var s=r.href,t=r.src,i=r.title;return e.h("a",{class:"level-item kbb-fl-author",href:s},e.h("figure",{class:"image is-rounded is-24x24",style:"margin: 0"},t&&e.h("img",{src:t,height:"24",width:"24"})),e.h("span",null,i))};
},{"hyperapp":10}],57:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var a=require("hyperapp");exports.default=function(e){var s=e.duration;if(s)return a.h("span",{className:"kbb-fl-duration level-item"},a.h("span",{className:"icon"},a.h("i",{className:"fas fa-video"})),a.h("span",null,s))};
},{"hyperapp":10}],68:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(r){var a=r.href,s=r.label;return e.h("span",{class:"tag"},e.h("a",{href:a},s))};
},{"hyperapp":10}],58:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("hyperapp"),t=e(require("./Reference"));exports.default=function(e){var u=e.values;return r.h("div",{class:"tags"},u.map(function(e){return r.h(t.default,{key:e.href,href:e.href,label:e.label})}))};
},{"hyperapp":10,"./Reference":68}],59:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(r){var s=r.logo;return e.h("figure",{className:"image is-64x64 }"},e.h("img",{src:s}))};
},{"hyperapp":10}],16:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("hyperapp"),l=e(require("./Author")),t=e(require("./Duration")),a=e(require("./References")),s=e(require("./TechLogo"));exports.default=function(e){var i=e.resource,h=i.references.map(function(e){return{key:e.docname,href:e.href,label:e.label}});return r.h("div",{class:"kbb-fl-result box"},r.h("article",{class:"media"},r.h("div",{class:"media-content"},r.h("div",{class:"content"},r.h("p",null,r.h("a",{href:i.href},r.h("strong",null,i.title)),r.h("br",null),r.h("span",null,i.excerpt))),r.h("nav",{class:"level is-mobile"},r.h("div",{class:"level-left"},i.author&&r.h(l.default,{href:i.author.href,src:i.author.thumbnailUrl,title:i.author.title}),r.h("span",{class:"level-item"},r.h(a.default,{values:h}))),r.h("div",{class:"level-right is-size-7 has-text-grey"},i.props.duration&&r.h(t.default,{duration:i.props.duration}),r.h("span",{class:"level-item"},i.props.published)))),i.primary_reference&&i.primary_reference.logo&&r.h("div",{className:"media-right"},r.h(s.default,{logo:i.primary_reference.logo}))))};
},{"hyperapp":10,"./Author":56,"./Duration":57,"./References":58,"./TechLogo":59}],23:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("hyperapp"),u=e(require("./Result"));exports.default=function(e){var t=e.values;if(t)return r.h("div",null,t&&Object.values(t).map(function(e){return r.h(u.default,{resource:e})}))};
},{"hyperapp":10,"./Result":16}],24:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var s=require("hyperapp");exports.default=function(e){var t=e.actions;return s.h("div",{class:"field"},s.h("p",{class:"control is-expanded has-icons-left"},s.h("input",{class:"input",type:"text",placeholder:"Filter listing...",autoFocus:!0,onkeyup:function(s){var e=s.target;t.setFilterTerm(e.value),t.filterResults()}}),s.h("span",{class:"icon is-small is-left"},s.h("i",{class:"fas fa-search"}))))};
},{"hyperapp":10}],17:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(c){var t=c.choices,s=c.actions;return e.h("div",null,Object.values(t).map(function(c){return e.h("div",{class:"control"},e.h("label",{class:"checkbox is-horizontal"},e.h("input",{type:"checkbox",name:c.value,checked:c.checked,oninput:function(e){var t=e.target;c.checked=t.checked,s.setFilterChoice(),s.filterResults()}}),e.h("span",{class:"kbb-label is-size-7"},c.label," (",c.count,")")))}))};
},{"hyperapp":10}],45:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(a){var t=a.choices,l=a.actions;return e.h("div",null,Object.values(t).map(function(a){return e.h("div",{class:"control"},e.h("label",{class:"radio is-horizontal"},e.h("input",{type:"radio",value:a.value,oninput:function(e){var t=e.target;a.checked=t.checked,l.setFilterChoice()}}),e.h("span",{class:"kbb-label"},a.label)))}))};
},{"hyperapp":10}],46:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("hyperapp");exports.default=function(r){r.choices,r.actions;return e.h("div",null,"sc")};
},{"hyperapp":10}],25:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("hyperapp"),c=e(require("./SidebarCheckbox")),t=e(require("./SidebarRadio")),i=e(require("./SidebarSelect"));exports.default=function(e){var s=e.filterGroups,u=e.actions;return r.h("div",null,s.map(function(e){if(Object.keys(e.choices).length)return r.h("div",{class:"kbb-sidebargroup"},r.h("p",{class:"menu-label"},e.label," ",e.choices),function(){switch(e.control){case"checkbox":return r.h(c.default,{choices:e.choices,actions:u});case"radio":return r.h(t.default,{choices:e.choices,actions:u});case"select":return r.h(i.default,{choices:e.choices,actions:u});default:return null}}())}))};
},{"hyperapp":10,"./SidebarCheckbox":17,"./SidebarRadio":45,"./SidebarSelect":46}],33:[function(require,module,exports) {
"use strict";function t(t){for(var e="";t.parentNode;){if(e=(t=t.parentNode).getAttribute("data-filteredlistingurl"))return e;if("body"===t.tagName.toLowerCase())return}}function e(t){for(var e="";t.parentNode;){if(e=(t=t.parentNode).getAttribute("data-filteredlisting-parent"))return e;if("body"===t.tagName.toLowerCase())return}}exports.__esModule=!0,exports.getDbUrl=t,exports.getFilterParent=e;
},{}],6:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var i=require("hyperapp"),t=e(require("./Dumpstate")),r=e(require("./Notification")),s=e(require("./Pagination")),n=e(require("./Results")),a=e(require("./Searchbox")),u=e(require("./Sidebar")),o=require("./utils"),l=function(e,i){var t=o.getDbUrl(e);t&&i.getJson(t);var r=o.getFilterParent(e);r&&"none"!==r&&i.setFilterParent(r)};exports.default=function(e,o){return i.h("div",{class:"kbb-fl",oncreate:function(e){return l(e,o)}},i.h("div",{class:"columns is-centered"},i.h("div",{class:"column is-half"},i.h(r.default,{notification:e.notification}),i.h(a.default,{actions:o}),e.notification&&i.h("div",{class:"notification is-warning"},e.notification))),i.h("div",{class:"columns"},i.h("div",{class:"column"},i.h(u.default,{filterGroups:e.filterGroups,actions:o}),i.h(t.default,{actions:o})),i.h("div",{class:"column is-four-fifths"},i.h(n.default,{values:e.results}),i.h(s.default,null))))};
},{"hyperapp":10,"./Dumpstate":20,"./Notification":21,"./Pagination":22,"./Results":23,"./Searchbox":24,"./Sidebar":25,"./utils":33}],13:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e={isFetching:!1,notification:"Initial State",filterGroups:[],filterTerm:"",resources:{},results:[]};exports.default=e;
},{}],1:[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var t=require("hyperapp");require("./scss/kaybee_bulma.scss"),require("./scss/pygments.css");var r=e(require("./filteredlisting/Actions")),s=e(require("./filteredlisting/Container")),i=e(require("./filteredlisting/State"));t.app(i.default,new r.default,s.default,document.getElementById("kbb-fl"));
},{"hyperapp":10,"./scss/kaybee_bulma.scss":4,"./scss/pygments.css":4,"./filteredlisting/Actions":12,"./filteredlisting/Container":6,"./filteredlisting/State":13}]},{},[1], null)
//# sourceMappingURL=/kaybee_bulma.map