var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8ed7;t.register("gUiYD",(function(e,n){var i,r,s,a;i=e.exports,r="diagram",s=()=>V,Object.defineProperty(i,r,{get:s,set:a,enumerable:!0,configurable:!0});var o=t("eCa9q"),c=t("jmbVX"),l=t("2YFJl"),h=t("3IUvT");t("i8Fxz"),t("gngdn"),t("2ujND");var u=function(){var t,e=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},n=[1,2],i=[1,5],r=[6,9,11,17,18,20,22,23,24,26],s=[1,15],a=[1,16],o=[1,17],c=[1,18],l=[1,19],h=[1,20],u=[1,24],y=[4,6,9,11,17,18,20,22,23,24,26],p={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,n,i,r,s,a){var o=s.length-1;switch(r){case 1:return s[o-1];case 3:case 7:case 8:this.$=[];break;case 4:s[o-1].push(s[o]),this.$=s[o-1];break;case 5:case 6:this.$=s[o];break;case 11:i.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 12:this.$=s[o].trim(),i.setAccTitle(this.$);break;case 13:case 14:this.$=s[o].trim(),i.setAccDescription(this.$);break;case 15:i.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 16:i.addTask(s[o-1],s[o]),this.$="task";break;case 18:i.parseDirective("%%{","open_directive");break;case 19:i.parseDirective(s[o],"type_directive");break;case 20:s[o]=s[o].trim().replace(/'/g,'"'),i.parseDirective(s[o],"arg_directive");break;case 21:i.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:n,7:3,12:4,26:i},{1:[3]},e(r,[2,3],{5:6}),{3:7,4:n,7:3,12:4,26:i},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:s,18:a,20:o,22:c,23:l,24:h,26:i},{1:[2,2]},{14:22,15:[1,23],29:u},e([15,29],[2,19]),e(r,[2,8],{1:[2,1]}),e(r,[2,4]),{7:21,10:25,12:4,17:s,18:a,20:o,22:c,23:l,24:h,26:i},e(r,[2,6]),e(r,[2,7]),e(r,[2,11]),{19:[1,26]},{21:[1,27]},e(r,[2,14]),e(r,[2,15]),{25:[1,28]},e(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},e(r,[2,5]),e(r,[2,12]),e(r,[2,13]),e(r,[2,16]),e(y,[2,9]),{14:32,29:u},{29:[2,20]},{11:[1,33]},e(y,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],r=[null],s=[],a=this.table,o="",c=0,l=0,h=1,u=s.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(p.yy[d]=this.yy[d]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var f=y.yylloc;s.push(f);var g=y.options&&y.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var x,m,k,_,b,v,w,$,M,T={};;){if(m=n[n.length-1],this.defaultActions[m]?k=this.defaultActions[m]:(null==x&&(M=void 0,"number"!=typeof(M=i.pop()||y.lex()||h)&&(M instanceof Array&&(M=(i=M).pop()),M=e.symbols_[M]||M),x=M),k=a[m]&&a[m][x]),void 0===k||!k.length||!k[0]){var S="";for(b in $=[],a[m])this.terminals_[b]&&b>2&&$.push("'"+this.terminals_[b]+"'");S=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(c+1)+": Unexpected "+(x==h?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(S,{text:y.match,token:this.terminals_[x]||x,line:y.yylineno,loc:f,expected:$})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+x);switch(k[0]){case 1:n.push(x),r.push(y.yytext),s.push(y.yylloc),n.push(k[1]),x=null,l=y.yyleng,o=y.yytext,c=y.yylineno,f=y.yylloc;break;case 2:if(v=this.productions_[k[1]][1],T.$=r[r.length-v],T._$={first_line:s[s.length-(v||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(v||1)].first_column,last_column:s[s.length-1].last_column},g&&(T._$.range=[s[s.length-(v||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply(T,[o,l,c,p.yy,k[1],r,s].concat(u))))return _;v&&(n=n.slice(0,-1*v*2),r=r.slice(0,-1*v),s=s.slice(0,-1*v)),n.push(this.productions_[k[1]][0]),r.push(T.$),s.push(T._$),w=a[n[n.length-2]][n[n.length-1]],n.push(w);break;case 3:return!0}}return!0}},d=(t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}},t);function f(){this.yy={}}return p.lexer=d,f.prototype=p,p.Parser=f,new f}();u.parser=u;const y=u;let p="";const d=[],f=[],g=[],x=function(){let t=!0;for(const[e,n]of g.entries())g[e].processed,t=t&&n.processed;return t},m={parseDirective:function(t,e,n){o.m.parseDirective(this,t,e,n)},getConfig:()=>(0,c.g)().journey,clear:function(){d.length=0,f.length=0,p="",g.length=0,(0,c.y)()},setDiagramTitle:c.w,getDiagramTitle:c.x,setAccTitle:c.o,getAccTitle:c.p,setAccDescription:c.v,getAccDescription:c.q,addSection:function(t){p=t,d.push(t)},getSections:function(){return d},getTasks:function(){let t=x();let e=0;for(;!t&&e<100;)t=x(),e++;return f.push(...g),f},addTask:function(t,e){const n=e.substr(1).split(":");let i=0,r=[];1===n.length?(i=Number(n[0]),r=[]):(i=Number(n[0]),r=n[1].split(","));const s=r.map((t=>t.trim())),a={section:p,type:p,people:s,task:t,score:i};g.push(a)},addTaskOrg:function(t){const e={section:p,type:p,description:t,task:t,classes:[]};f.push(e)},getActors:function(){return function(){const t=[];return f.forEach((e=>{e.people&&t.push(...e.people)})),[...new Set(t)].sort()}()}},k=t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`,_=function(t,e){const n=t.append("rect");return n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),void 0!==e.class&&n.attr("class",e.class),n},b=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n},v=function(t,e){const n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);const r=i.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(n),i};let w=-1;const $=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},M=function(){function t(t,e,n,r,s,a,o,c){i(e.append("text").attr("x",n+s/2).attr("y",r+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function e(t,e,n,r,s,a,o,c,l){const{taskFontSize:h,taskFontFamily:u}=c,y=t.split(/<br\s*\/?>/gi);for(let t=0;t<y.length;t++){const c=t*h-h*(y.length-1)/2,p=e.append("text").attr("x",n+s/2).attr("y",r).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",u);p.append("tspan").attr("x",n+s/2).attr("dy",c).text(y[t]),p.attr("y",r+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(p,o)}}function n(t,n,r,s,a,o,c,l){const h=n.append("switch"),u=h.append("foreignObject").attr("x",r).attr("y",s).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,r,s,a,o,c,l),i(u,c)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),T={drawRect:_,drawCircle:b,drawSection:function(t,e,n){const i=t.append("g"),r=$();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),r.height=n.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,_(i,r),M(n)(e.text,i,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},n,e.colour)},drawText:v,drawLabel:function(t,e){const n=t.append("polygon");var i,r,s,a,o;n.attr("points",(i=e.x,r=e.y,i+","+r+" "+(i+(s=50))+","+r+" "+(i+s)+","+(r+(a=20)-(o=7))+" "+(i+s-1.2*o)+","+(r+a)+" "+i+","+(r+a))),n.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,v(t,e)},drawTask:function(t,e,n){const i=e.x+n.width/2,r=t.append("g");w++;r.append("line").attr("id","task"+w).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(t,e){const n=15,i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function(t){const i=(0,l.arc)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(r):e.score<3?function(t){const i=(0,l.arc)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(r):r.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(r,{cx:i,cy:300+30*(5-e.score),score:e.score});const s=$();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=n.width,s.height=n.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,_(r,s);let a=e.x+14;e.people.forEach((t=>{const n=e.actors[t].color,i={cx:a,cy:e.y,r:7,fill:n,stroke:"#000",title:t,pos:e.actors[t].position};b(r,i),a+=10})),M(n)(e.task,r,s.x,s.y,s.width,s.height,{class:"task"},n,e.colour)},drawBackgroundRect:function(t,e){_(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"}).lower()},getTextObj:function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},getNoteRect:$,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}},S={};const E=(0,c.g)().journey,I=E.leftMargin,A={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])},updateBounds:function(t,e,n,i){const r=(0,c.g)().journey,s=this;let a=0;var o;this.sequenceItems.forEach((function(c){a++;const l=s.sequenceItems.length-a+1;s.updateVal(c,"starty",e-l*r.boxMargin,Math.min),s.updateVal(c,"stopy",i+l*r.boxMargin,Math.max),s.updateVal(A.data,"startx",t-l*r.boxMargin,Math.min),s.updateVal(A.data,"stopx",n+l*r.boxMargin,Math.max),"activation"!==o&&(s.updateVal(c,"startx",t-l*r.boxMargin,Math.min),s.updateVal(c,"stopx",n+l*r.boxMargin,Math.max),s.updateVal(A.data,"starty",e-l*r.boxMargin,Math.min),s.updateVal(A.data,"stopy",i+l*r.boxMargin,Math.max))}))},insert:function(t,e,n,i){const r=Math.min(t,n),s=Math.max(t,n),a=Math.min(e,i),o=Math.max(e,i);this.updateVal(A.data,"startx",r,Math.min),this.updateVal(A.data,"starty",a,Math.min),this.updateVal(A.data,"stopx",s,Math.max),this.updateVal(A.data,"stopy",o,Math.max),this.updateBounds(r,a,s,o)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},P=E.sectionFills,C=E.sectionColours,j=function(t,e,n){const i=(0,c.g)().journey;let r="";const s=n+(2*i.height+i.diagramMarginY);let a=0,o="#CCC",l="black",h=0;for(const[n,c]of e.entries()){if(r!==c.section){o=P[a%P.length],h=a%P.length,l=C[a%C.length];let s=0;const u=c.section;for(let t=n;t<e.length&&e[t].section==u;t++)s+=1;const y={x:n*i.taskMargin+n*i.width+I,y:50,text:c.section,fill:o,num:h,colour:l,taskCount:s};T.drawSection(t,y,i),r=c.section,a++}const u=c.people.reduce(((t,e)=>(S[e]&&(t[e]=S[e]),t)),{});c.x=n*i.taskMargin+n*i.width+I,c.y=s,c.width=i.diagramMarginX,c.height=i.diagramMarginY,c.colour=l,c.fill=o,c.num=h,c.actors=u,T.drawTask(t,c,i),A.insert(c.x,c.y,c.x+c.width+i.taskMargin,450)}},D={setConf:function(t){Object.keys(t).forEach((function(e){E[e]=t[e]}))},draw:function(t,e,n,i){const r=(0,c.g)().journey;i.db.clear(),i.parser.parse(t+"\n");const s=(0,c.g)().securityLevel;let a;"sandbox"===s&&(a=(0,l.select)("#i"+e));const o="sandbox"===s?(0,l.select)(a.nodes()[0].contentDocument.body):(0,l.select)("body");A.init();const u=o.select("#"+e);T.initGraphics(u);const y=i.db.getTasks(),p=i.db.getDiagramTitle(),d=i.db.getActors();for(const t in S)delete S[t];let f=0;d.forEach((t=>{S[t]={color:r.actorColours[f%r.actorColours.length],position:f},f++})),function(t){const e=(0,c.g)().journey;let n=60;Object.keys(S).forEach((i=>{const r=S[i].color,s={cx:20,cy:n,r:7,fill:r,stroke:"#000",pos:S[i].position};T.drawCircle(t,s);const a={x:40,y:n+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};T.drawText(t,a),n+=20}))}(u),A.insert(0,0,I,50*Object.keys(S).length),j(u,y,0);const g=A.getBounds();p&&u.append("text").text(p).attr("x",I).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const x=g.stopy-g.starty+2*r.diagramMarginY,m=I+g.stopx+2*r.diagramMarginX;(0,h.k)(u,x,m,r.useMaxWidth),u.append("line").attr("x1",I).attr("y1",4*r.height).attr("x2",m-I-4).attr("y2",4*r.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const k=p?70:0;u.attr("viewBox",`${g.startx} -25 ${m} ${x+k}`),u.attr("preserveAspectRatio","xMinYMin meet"),u.attr("height",x+k+25)}},V={parser:y,db:m,renderer:D,styles:k,init:t=>{D.setConf(t.journey),m.clear()}}}));
//# sourceMappingURL=journeyDiagram-d38aa57d.0e94fa7a.js.map
