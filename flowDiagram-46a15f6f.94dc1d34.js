function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8ed7;e.register("cDO4U",(function(r,n){t(r.exports,"diagram",(()=>s));var a=e("5Gmgp");e("4LkSm"),e("2YFJl"),e("jmbVX");e("8evp0");e("4mVOR"),e("fUGrY"),e("ilMBJ"),e("3IUvT"),e("020TX"),e("jTBQv");var i=e("dOnoM");e("i8Fxz"),e("gngdn"),e("2ujND"),e("hV1gR"),e("c0ySZ"),e("6Radu");const l={},o=function(t){const e=Object.keys(t);for(const r of e)l[r]=t[r]},s={parser:a.p,db:a.f,renderer:i.f,styles:i.a,init:t=>{t.flowchart||(t.flowchart={}),t.flowchart.arrowMarkerAbsolute=t.arrowMarkerAbsolute,o(t.flowchart),a.f.clear(),a.f.setGen("gen-1")}}})),e.register("8evp0",(function(r,n){t(r.exports,"render",(()=>e("4mVOR").render));e("4mVOR"),e("4LkSm"),e("bGsHL")})),e.register("4mVOR",(function(r,n){t(r.exports,"render",(()=>x));var a=e("2YFJl"),i=e("bZ3BC"),l=e("fpekr"),o=e("8XLqy"),s=e("hV1gR"),d=e("6M3ec"),c=e("cAF5L"),p=e("h22rD"),u=e("gKfIZ"),h=e("kXQ1r"),g=e("eA9Lm"),f=e("6UAuB"),y=e("c3aLw"),b=e("hvBt2");function x(){var t=function(t,e){!function(t){t.nodes().forEach((function(e){var r=t.node(e);o.default(r,"label")||t.children(e).length||(r.label=e),o.default(r,"paddingX")&&i.default(r,{paddingLeft:r.paddingX,paddingRight:r.paddingX}),o.default(r,"paddingY")&&i.default(r,{paddingTop:r.paddingY,paddingBottom:r.paddingY}),o.default(r,"padding")&&i.default(r,{paddingLeft:r.padding,paddingRight:r.padding,paddingTop:r.padding,paddingBottom:r.padding}),i.default(r,w),l.default(["paddingLeft","paddingRight","paddingTop","paddingBottom"],(function(t){r[t]=Number(r[t])})),o.default(r,"width")&&(r._prevWidth=r.width),o.default(r,"height")&&(r._prevHeight=r.height)})),t.edges().forEach((function(e){var r=t.edge(e);o.default(r,"label")||(r.label=""),i.default(r,v)}))}(e);var r=m(t,"output"),n=m(r,"clusters"),a=m(r,"edgePaths"),x=(0,p.createEdgeLabels)(m(r,"edgeLabels"),e),k=(0,h.createNodes)(m(r,"nodes"),e,b.shapes);(0,s.layout)(e),(0,y.positionNodes)(k,e),(0,f.positionEdgeLabels)(x,e),(0,u.createEdgePaths)(a,e,d.arrows);var T=(0,c.createClusters)(n,e);(0,g.positionClusters)(T,e),function(t){l.default(t.nodes(),(function(e){var r=t.node(e);o.default(r,"_prevWidth")?r.width=r._prevWidth:delete r.width,o.default(r,"_prevHeight")?r.height=r._prevHeight:delete r.height,delete r._prevWidth,delete r._prevHeight}))}(e)};return t.createNodes=function(e){return arguments.length?((0,h.setCreateNodes)(e),t):h.createNodes},t.createClusters=function(e){return arguments.length?((0,c.setCreateClusters)(e),t):c.createClusters},t.createEdgeLabels=function(e){return arguments.length?((0,p.setCreateEdgeLabels)(e),t):p.createEdgeLabels},t.createEdgePaths=function(e){return arguments.length?((0,u.setCreateEdgePaths)(e),t):u.createEdgePaths},t.shapes=function(e){return arguments.length?((0,b.setShapes)(e),t):b.shapes},t.arrows=function(e){return arguments.length?((0,d.setArrows)(e),t):d.arrows},t}var w={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},v={arrowhead:"normal",curve:a.curveLinear};function m(t,e){var r=t.select("g."+e);return r.empty()&&(r=t.append("g").attr("class",e)),r}})),e.register("6M3ec",(function(r,n){t(r.exports,"arrows",(()=>i)),t(r.exports,"setArrows",(()=>l));var a=e("fUGrY"),i={normal:function(t,e,r,n){var i=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");a.applyStyle(i,r[n+"Style"]),r[n+"Class"]&&i.attr("class",r[n+"Class"])},vee:function(t,e,r,n){var i=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");a.applyStyle(i,r[n+"Style"]),r[n+"Class"]&&i.attr("class",r[n+"Class"])},undirected:function(t,e,r,n){var i=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");a.applyStyle(i,r[n+"Style"]),r[n+"Class"]&&i.attr("class",r[n+"Class"])}};function l(t){i=t}})),e.register("cAF5L",(function(r,n){t(r.exports,"createClusters",(()=>o)),t(r.exports,"setCreateClusters",(()=>s));var a=e("2YFJl"),i=e("dfUtR"),l=e("fUGrY"),o=function(t,e){var r=e.nodes().filter((function(t){return l.isSubgraph(e,t)})),n=t.selectAll("g.cluster").data(r,(function(t){return t}));l.applyTransition(n.exit(),e).style("opacity",0).remove();var o=n.enter().append("g").attr("class","cluster").attr("id",(function(t){return e.node(t).id})).style("opacity",0).each((function(t){var r=e.node(t),n=a.select(this);a.select(this).append("rect");var l=n.append("g").attr("class","label");(0,i.addLabel)(l,r,r.clusterLabelPos)}));return n=n.merge(o),(n=l.applyTransition(n,e).style("opacity",1)).selectAll("rect").each((function(t){var r=e.node(t),n=a.select(this);l.applyStyle(n,r.style)})),n};function s(t){o=t}})),e.register("dfUtR",(function(r,n){t(r.exports,"addLabel",(()=>o));var a=e("ilMBJ"),i=e("860lz"),l=e("c9RZI");function o(t,e,r){var n=e.label,o=t.append("g");"svg"===e.labelType?(0,i.addSVGLabel)(o,e):"string"!=typeof n||"html"===e.labelType?(0,a.addHtmlLabel)(o,e):(0,l.addTextLabel)(o,e);var s,d=o.node().getBBox();switch(r){case"top":s=-e.height/2;break;case"bottom":s=e.height/2-d.height;break;default:s=-d.height/2}return o.attr("transform","translate("+-d.width/2+","+s+")"),o}})),e.register("860lz",(function(r,n){t(r.exports,"addSVGLabel",(()=>i));var a=e("fUGrY");function i(t,e){var r=t;return r.node().appendChild(e.label),a.applyStyle(r,e.labelStyle),r}})),e.register("c9RZI",(function(r,n){t(r.exports,"addTextLabel",(()=>i));var a=e("fUGrY");function i(t,e){for(var r=t.append("text"),n=function(t){for(var e,r="",n=!1,a=0;a<t.length;++a)if(e=t[a],n){if("n"===e)r+="\n";else r+=e;n=!1}else"\\"===e?n=!0:r+=e;return r}(e.label).split("\n"),i=0;i<n.length;i++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[i]);return a.applyStyle(r,e.labelStyle),r}})),e.register("h22rD",(function(r,n){t(r.exports,"createEdgeLabels",(()=>s)),t(r.exports,"setCreateEdgeLabels",(()=>d));var a=e("2YFJl"),i=e("8XLqy"),l=e("dfUtR"),o=e("fUGrY");let s=function(t,e){var r,n=t.selectAll("g.edgeLabel").data(e.edges(),(function(t){return o.edgeToId(t)})).classed("update",!0);return n.exit().remove(),n.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(n=t.selectAll("g.edgeLabel")).each((function(t){var r=a.select(this);r.select(".label").remove();var n=e.edge(t),o=(0,l.addLabel)(r,e.edge(t),0).classed("label",!0),s=o.node().getBBox();n.labelId&&o.attr("id",n.labelId),i.default(n,"width")||(n.width=s.width),i.default(n,"height")||(n.height=s.height)})),r=n.exit?n.exit():n.selectAll(null),o.applyTransition(r,e).style("opacity",0).remove(),n};function d(t){s=t}})),e.register("gKfIZ",(function(r,n){t(r.exports,"createEdgePaths",(()=>d)),t(r.exports,"setCreateEdgePaths",(()=>c));var a=e("2YFJl"),i=e("jJJbn"),l=e("5GUsF"),o=e("6O58d"),s=e("fUGrY"),d=function(t,e,r){var n=t.selectAll("g.edgePath").data(e.edges(),(function(t){return s.edgeToId(t)})).classed("update",!0),d=function(t,e){var r=t.enter().append("g").attr("class","edgePath").style("opacity",0);return r.append("path").attr("class","path").attr("d",(function(t){var r=e.edge(t),n=e.node(t.v).elem;return p(r,i.default(r.points.length).map((function(){return e=(t=n).getBBox(),{x:(r=t.ownerSVGElement.getScreenCTM().inverse().multiply(t.getScreenCTM()).translate(e.width/2,e.height/2)).e,y:r.f};var t,e,r})))})),r.append("defs"),r}(n,e);!function(t,e){var r=t.exit();s.applyTransition(r,e).style("opacity",0).remove()}(n,e);var c=void 0!==n.merge?n.merge(d):n;return s.applyTransition(c,e).style("opacity",1),c.each((function(t){var r=a.select(this),n=e.edge(t);n.elem=this,n.id&&r.attr("id",n.id),s.applyClass(r,n.class,(r.classed("update")?"update ":"")+"edgePath")})),c.selectAll("path.path").each((function(t){var r=e.edge(t);r.arrowheadId=l.default("arrowhead");var n=a.select(this).attr("marker-end",(function(){return"url("+(t=location.href,e=r.arrowheadId,t.split("#")[0]+"#"+e+")");var t,e})).style("fill","none");s.applyTransition(n,e).attr("d",(function(t){return function(t,e){var r=t.edge(e),n=t.node(e.v),a=t.node(e.w),i=r.points.slice(1,r.points.length-1);return i.unshift((0,o.intersectNode)(n,i[0])),i.push((0,o.intersectNode)(a,i[i.length-1])),p(r,i)}(e,t)})),s.applyStyle(n,r.style)})),c.selectAll("defs *").remove(),c.selectAll("defs").each((function(t){var n=e.edge(t);(0,r[n.arrowhead])(a.select(this),n.arrowheadId,n,"arrowhead")})),c};function c(t){d=t}function p(t,e){var r=(a.line||a.svg.line)().x((function(t){return t.x})).y((function(t){return t.y}));return(r.curve||r.interpolate)(t.curve),r(e)}})),e.register("6O58d",(function(e,r){function n(t,e){return t.intersect(e)}t(e.exports,"intersectNode",(()=>n))})),e.register("kXQ1r",(function(r,n){t(r.exports,"createNodes",(()=>d)),t(r.exports,"setCreateNodes",(()=>c));var a=e("2YFJl"),i=e("8XLqy"),l=e("3mNDi"),o=e("dfUtR"),s=e("fUGrY"),d=function(t,e,r){var n,d=e.nodes().filter((function(t){return!s.isSubgraph(e,t)})),c=t.selectAll("g.node").data(d,(function(t){return t})).classed("update",!0);return c.exit().remove(),c.enter().append("g").attr("class","node").style("opacity",0),(c=t.selectAll("g.node")).each((function(t){var n=e.node(t),d=a.select(this);s.applyClass(d,n.class,(d.classed("update")?"update ":"")+"node"),d.select("g.label").remove();var c=d.append("g").attr("class","label"),p=(0,o.addLabel)(c,n),u=r[n.shape],h=l.default(p.node().getBBox(),"width","height");n.elem=this,n.id&&d.attr("id",n.id),n.labelId&&c.attr("id",n.labelId),i.default(n,"width")&&(h.width=n.width),i.default(n,"height")&&(h.height=n.height),h.width+=n.paddingLeft+n.paddingRight,h.height+=n.paddingTop+n.paddingBottom,c.attr("transform","translate("+(n.paddingLeft-n.paddingRight)/2+","+(n.paddingTop-n.paddingBottom)/2+")");var g=a.select(this);g.select(".label-container").remove();var f=u(g,h,n).classed("label-container",!0);s.applyStyle(f,n.style);var y=f.node().getBBox();n.width=y.width,n.height=y.height})),n=c.exit?c.exit():c.selectAll(null),s.applyTransition(n,e).style("opacity",0).remove(),c};function c(t){d=t}})),e.register("eA9Lm",(function(r,n){t(r.exports,"positionClusters",(()=>l));var a=e("2YFJl"),i=e("fUGrY");function l(t,e){var r=t.filter((function(){return!a.select(this).classed("update")}));function n(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}r.attr("transform",n),i.applyTransition(t,e).style("opacity",1).attr("transform",n),i.applyTransition(r.selectAll("rect"),e).attr("width",(function(t){return e.node(t).width})).attr("height",(function(t){return e.node(t).height})).attr("x",(function(t){return-e.node(t).width/2})).attr("y",(function(t){return-e.node(t).height/2}))}})),e.register("6UAuB",(function(r,n){t(r.exports,"positionEdgeLabels",(()=>o));var a=e("2YFJl"),i=e("8XLqy"),l=e("fUGrY");function o(t,e){function r(t){var r=e.edge(t);return i.default(r,"x")?"translate("+r.x+","+r.y+")":""}t.filter((function(){return!a.select(this).classed("update")})).attr("transform",r),l.applyTransition(t,e).style("opacity",1).attr("transform",r)}})),e.register("c3aLw",(function(r,n){t(r.exports,"positionNodes",(()=>l));var a=e("2YFJl"),i=e("fUGrY");function l(t,e){function r(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}t.filter((function(){return!a.select(this).classed("update")})).attr("transform",r),i.applyTransition(t,e).style("opacity",1).attr("transform",r)}})),e.register("hvBt2",(function(r,n){t(r.exports,"shapes",(()=>s)),t(r.exports,"setShapes",(()=>d));var a=e("bnaJN"),i=e("33exb"),l=e("020TX"),o=e("jTBQv"),s={rect:function(t,e,r){var n=t.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return r.intersect=function(t){return(0,o.intersectRect)(r,t)},n},ellipse:function(t,e,r){var n=e.width/2,a=e.height/2,l=t.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",n).attr("ry",a);return r.intersect=function(t){return(0,i.intersectEllipse)(r,n,a,t)},l},circle:function(t,e,r){var n=Math.max(e.width,e.height)/2,i=t.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return r.intersect=function(t){return(0,a.intersectCircle)(r,n,t)},i},diamond:function(t,e,r){var n=e.width*Math.SQRT2/2,a=e.height*Math.SQRT2/2,i=[{x:0,y:-a},{x:-n,y:0},{x:0,y:a},{x:n,y:0}],o=t.insert("polygon",":first-child").attr("points",i.map((function(t){return t.x+","+t.y})).join(" "));return r.intersect=function(t){return(0,l.intersectPolygon)(r,i,t)},o}};function d(t){s=t}})),e.register("bnaJN",(function(r,n){t(r.exports,"intersectCircle",(()=>i));var a=e("33exb");function i(t,e,r){return(0,a.intersectEllipse)(t,e,e,r)}})),e.register("33exb",(function(e,r){function n(t,e,r,n){var a=t.x,i=t.y,l=a-n.x,o=i-n.y,s=Math.sqrt(e*e*o*o+r*r*l*l),d=Math.abs(e*r*l/s);n.x<a&&(d=-d);var c=Math.abs(e*r*o/s);return n.y<i&&(c=-c),{x:a+d,y:i+c}}t(e.exports,"intersectEllipse",(()=>n))})),e.register("020TX",(function(r,n){t(r.exports,"intersectPolygon",(()=>i));var a=e("aopqb");function i(t,e,r){var n=t.x,i=t.y,l=[],o=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;e.forEach((function(t){o=Math.min(o,t.x),s=Math.min(s,t.y)}));for(var d=n-t.width/2-o,c=i-t.height/2-s,p=0;p<e.length;p++){var u=e[p],h=e[p<e.length-1?p+1:0],g=(0,a.intersectLine)(t,r,{x:d+u.x,y:c+u.y},{x:d+h.x,y:c+h.y});g&&l.push(g)}return l.length?(l.length>1&&l.sort((function(t,e){var n=t.x-r.x,a=t.y-r.y,i=Math.sqrt(n*n+a*a),l=e.x-r.x,o=e.y-r.y,s=Math.sqrt(l*l+o*o);return i<s?-1:i===s?0:1})),l[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",t),t)}})),e.register("aopqb",(function(e,r){function n(t,e,r,n){var i,l,o,s,d,c,p,u,h,g,f,y,b;if(i=e.y-t.y,o=t.x-e.x,d=e.x*t.y-t.x*e.y,h=i*r.x+o*r.y+d,g=i*n.x+o*n.y+d,!(0!==h&&0!==g&&a(h,g)||(l=n.y-r.y,s=r.x-n.x,c=n.x*r.y-r.x*n.y,p=l*t.x+s*t.y+c,u=l*e.x+s*e.y+c,0!==p&&0!==u&&a(p,u)||0==(f=i*s-l*o))))return y=Math.abs(f/2),{x:(b=o*c-s*d)<0?(b-y)/f:(b+y)/f,y:(b=l*d-i*c)<0?(b-y)/f:(b+y)/f}}function a(t,e){return t*e>0}t(e.exports,"intersectLine",(()=>n))})),e.register("jTBQv",(function(e,r){function n(t,e){var r,n,a=t.x,i=t.y,l=e.x-a,o=e.y-i,s=t.width/2,d=t.height/2;return Math.abs(o)*s>Math.abs(l)*d?(o<0&&(d=-d),r=0===o?0:d*l/o,n=d):(l<0&&(s=-s),r=s,n=0===l?0:s*o/l),{x:a+r,y:i+n}}t(e.exports,"intersectRect",(()=>n))})),e.register("bGsHL",(function(t,r){e("6O58d"),e("bnaJN"),e("33exb"),e("020TX"),e("jTBQv")})),e.register("dOnoM",(function(r,n){t(r.exports,"f",(()=>g)),t(r.exports,"a",(()=>f));var a=e("4LkSm"),i=e("2YFJl"),l=e("5Gmgp"),o=e("jmbVX"),s=e("3IUvT"),d=e("evFAv"),c=e("ilMBJ");const p={},u=function(t,e,r,n,a,i){const l=n.select(`[id="${r}"]`);Object.keys(t).forEach((function(r){const n=t[r];let d="default";n.classes.length>0&&(d=n.classes.join(" ")),d+=" flowchart-label";const p=(0,s.n)(n.styles);let u,h=void 0!==n.text?n.text:n.id;if(o.l.info("vertex",n,n.labelType),"markdown"===n.labelType)o.l.info("vertex",n,n.labelType);else if((0,o.k)((0,o.g)().flowchart.htmlLabels)){const t={label:h.replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`))};u=(0,c.addHtmlLabel)(l,t).node(),u.parentNode.removeChild(u)}else{const t=a.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",p.labelStyle.replace("color:","fill:"));const e=h.split(o.e.lineBreakRegex);for(const r of e){const e=a.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","1"),e.textContent=r,t.appendChild(e)}u=t}let g=0,f="";switch(n.type){case"round":g=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}e.setNode(n.id,{labelStyle:p.labelStyle,shape:f,labelText:h,labelType:n.labelType,rx:g,ry:g,class:d,style:p.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:i.db.getTooltip(n.id)||"",domId:i.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,o.g)().flowchart.padding}),o.l.info("setNode",{labelStyle:p.labelStyle,labelType:n.labelType,shape:f,labelText:h,rx:g,ry:g,class:d,style:p.style,id:n.id,domId:i.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,o.g)().flowchart.padding})}))},h=function(t,e,r){o.l.info("abc78 edges = ",t);let n,a,l=0,d={};if(void 0!==t.defaultStyle){const e=(0,s.n)(t.defaultStyle);n=e.style,a=e.labelStyle}t.forEach((function(r){l++;var c="L-"+r.start+"-"+r.end;void 0===d[c]?(d[c]=0,o.l.info("abc78 new entry",c,d[c])):(d[c]++,o.l.info("abc78 new entry",c,d[c]));let u=c+"-"+d[c];o.l.info("abc78 new link id to be used is",c,u,d[c]);var h="LS-"+r.start,g="LE-"+r.end;const f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let y="",b="";switch(r.stroke){case"normal":y="fill:none;",void 0!==n&&(y=n),void 0!==a&&(b=a),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const t=(0,s.n)(r.style);y=t.style,b=t.labelStyle}f.style=f.style+=y,f.labelStyle=f.labelStyle+=b,void 0!==r.interpolate?f.curve=(0,s.o)(r.interpolate,i.curveLinear):void 0!==t.defaultInterpolate?f.curve=(0,s.o)(t.defaultInterpolate,i.curveLinear):f.curve=(0,s.o)(p.curve,i.curveLinear),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=r.text.replace(o.e.lineBreakRegex,"\n"),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=u,f.classes="flowchart-link "+h+" "+g,e.setEdge(r.start,r.end,f,l)}))},g={setConf:function(t){const e=Object.keys(t);for(const r of e)p[r]=t[r]},addVertices:u,addEdges:h,getClasses:function(t,e){o.l.info("Extracting classes"),e.db.clear();try{return e.parse(t),e.db.getClasses()}catch(t){return}},draw:function(t,e,r,n){o.l.info("Drawing flowchart"),n.db.clear(),l.f.setGen("gen-2"),n.parser.parse(t);let c=n.db.getDirection();void 0===c&&(c="TD");const{securityLevel:p,flowchart:g}=(0,o.g)(),f=g.nodeSpacing||50,y=g.rankSpacing||50;let b;"sandbox"===p&&(b=(0,i.select)("#i"+e));const x="sandbox"===p?(0,i.select)(b.nodes()[0].contentDocument.body):(0,i.select)("body"),w="sandbox"===p?b.nodes()[0].contentDocument:document,v=new a.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:f,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let m;const k=n.db.getSubGraphs();o.l.info("Subgraphs - ",k);for(let t=k.length-1;t>=0;t--)m=k[t],o.l.info("Subgraph - ",m),n.db.addVertex(m.id,{text:m.title,type:m.labelType},"group",void 0,m.classes,m.dir);const T=n.db.getVertices(),S=n.db.getEdges();o.l.info("Edges",S);let L=0;for(L=k.length-1;L>=0;L--){m=k[L],(0,i.selectAll)("cluster").append("text");for(let t=0;t<m.nodes.length;t++)o.l.info("Setting up subgraphs",m.nodes[t],m.id),v.setParent(m.nodes[t],m.id)}u(T,v,e,x,w,n),h(S,v);const C=x.select(`[id="${e}"]`),B=x.select("#"+e+" g");if((0,d.r)(B,v,["point","circle","cross"],"flowchart",e),s.u.insertTitle(C,"flowchartTitleText",g.titleTopMargin,n.db.getDiagramTitle()),(0,s.s)(v,C,g.diagramPadding,g.useMaxWidth),n.db.indexNodes("subGraph"+L),!g.htmlLabels){const t=w.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const e of t){const t=e.getBBox(),r=w.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",t.width),r.setAttribute("height",t.height),e.insertBefore(r,e.firstChild)}}Object.keys(T).forEach((function(t){const r=T[t];if(r.link){const n=(0,i.select)("#"+e+' [id="'+t+'"]');if(n){const t=w.createElementNS("http://www.w3.org/2000/svg","a");t.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),t.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),t.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===p?t.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&t.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const e=n.insert((function(){return t}),":first-child"),a=n.select(".label-container");a&&e.append((function(){return a.node()}));const i=n.select(".label");i&&e.append((function(){return i.node()}))}}}))}},f=t=>`.label {\n    font-family: ${t.fontFamily};\n    color: ${t.nodeTextColor||t.textColor};\n  }\n  .cluster-label text {\n    fill: ${t.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${t.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${t.nodeTextColor||t.textColor};\n    color: ${t.nodeTextColor||t.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${t.edgeLabelBackground};\n      fill: ${t.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${t.clusterBkg};\n    stroke: ${t.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${t.titleColor};\n  }\n  /* .cluster div {\n    color: ${t.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${t.fontFamily};\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`})),e.register("eVRfl",(function(r,n){t(r.exports,"p",(()=>s)),t(r.exports,"s",(()=>g));var a=e("2YFJl"),i=e("3IUvT"),l=e("jmbVX");let o=0;const s=function(t){let e=t.match(/^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/),r=t.match(/^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/);return e&&!r?d(e):r?c(r):p(t)},d=function(t){let e="",r="";try{let n=t[1]?t[1].trim():"",a=t[2]?t[2].trim():"",i=t[3]?(0,l.z)(t[3].trim()):"",o=t[4]?t[4].trim():"",s=t[5]?t[5].trim():"";r=n+a+i+" "+o,e=h(s)}catch(e){r=t}return{displayText:r,cssStyle:e}},c=function(t){let e="",r="";try{let n=t[1]?t[1].trim():"",a=t[2]?t[2].trim():"",i=t[3]?(0,l.z)(t[3].trim()):"",o=t[4]?t[4].trim():"";r=n+a+"("+i+")"+(t[5]?" : "+(0,l.z)(t[5]).trim():""),e=h(o)}catch(e){r=t}return{displayText:r,cssStyle:e}},p=function(t){let e="",r="",n="",a=t.indexOf("("),i=t.indexOf(")");if(a>1&&i>a&&i<=t.length){let o="",s="",d=t.substring(0,1);d.match(/\w/)?s=t.substring(0,a).trim():(d.match(/[#+~-]/)&&(o=d),s=t.substring(1,a).trim());const c=t.substring(a+1,i);t.substring(i+1,1),r=h(t.substring(i+1,i+2)),e=o+s+"("+(0,l.z)(c.trim())+")",i<t.length&&(n=t.substring(i+2).trim(),""!==n&&(n=" : "+(0,l.z)(n),e+=n))}else e=(0,l.z)(t);return{displayText:e,cssStyle:r}},u=function(t,e,r,n){let a=s(e);const i=t.append("tspan").attr("x",n.padding).text(a.displayText);""!==a.cssStyle&&i.attr("style",a.cssStyle),r||i.attr("dy",n.textHeight)},h=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},g={drawClass:function(t,e,r,n){l.l.debug("Rendering class ",e,r);const a=e.id,i={id:a,label:e.id,width:0,height:0},o=t.append("g").attr("id",n.db.lookUpDomId(a)).attr("class","classGroup");let s;s=e.link?o.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):o.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let d=!0;e.annotations.forEach((function(t){const e=s.append("tspan").text("«"+t+"»");d||e.attr("dy",r.textHeight),d=!1}));let c=e.id;void 0!==e.type&&""!==e.type&&(c+="<"+e.type+">");const p=s.append("tspan").text(c).attr("class","title");d||p.attr("dy",r.textHeight);const h=s.node().getBBox().height,g=o.append("line").attr("x1",0).attr("y1",r.padding+h+r.dividerMargin/2).attr("y2",r.padding+h+r.dividerMargin/2),f=o.append("text").attr("x",r.padding).attr("y",h+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");d=!0,e.members.forEach((function(t){u(f,t,d,r),d=!1}));const y=f.node().getBBox(),b=o.append("line").attr("x1",0).attr("y1",r.padding+h+r.dividerMargin+y.height).attr("y2",r.padding+h+r.dividerMargin+y.height),x=o.append("text").attr("x",r.padding).attr("y",h+2*r.dividerMargin+y.height+r.textHeight).attr("fill","white").attr("class","classText");d=!0,e.methods.forEach((function(t){u(x,t,d,r),d=!1}));const w=o.node().getBBox();var v=" ";e.cssClasses.length>0&&(v+=e.cssClasses.join(" "));const m=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*r.padding).attr("height",w.height+r.padding+.5*r.dividerMargin).attr("class",v).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(m-t.getBBox().width)/2)})),e.tooltip&&s.insert("title").text(e.tooltip),g.attr("x2",m),b.attr("x2",m),i.width=m,i.height=w.height+r.padding+.5*r.dividerMargin,i},drawEdge:function(t,e,r,n,s){const d=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const c=e.points,p=(0,a.line)().x((function(t){return t.x})).y((function(t){return t.y})).curve(a.curveBasis),u=t.append("path").attr("d",p(c)).attr("id","edge"+o).attr("class","relation");let h,g,f="";n.arrowMarkerAbsolute&&(f=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,f=f.replace(/\(/g,"\\("),f=f.replace(/\)/g,"\\)")),1==r.relation.lineType&&u.attr("class","relation dashed-line"),10==r.relation.lineType&&u.attr("class","relation dotted-line"),"none"!==r.relation.type1&&u.attr("marker-start","url("+f+"#"+d(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&u.attr("marker-end","url("+f+"#"+d(r.relation.type2)+"End)");const y=e.points.length;let b,x,w,v,m=i.u.calcLabelPosition(e.points);if(h=m.x,g=m.y,y%2!=0&&y>1){let t=i.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),n=i.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[y-1]);l.l.debug("cardinality_1_point "+JSON.stringify(t)),l.l.debug("cardinality_2_point "+JSON.stringify(n)),b=t.x,x=t.y,w=n.x,v=n.y}if(void 0!==r.title){const e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",h).attr("y",g).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;const i=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-n.padding/2).attr("y",i.y-n.padding/2).attr("width",i.width+n.padding).attr("height",i.height+n.padding)}if(l.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",b).attr("y",x).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",w).attr("y",v).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}o++},drawNote:function(t,e,r,n){l.l.debug("Rendering note ",e,r);const a=e.id,i={id:a,text:e.text,width:0,height:0},o=t.append("g").attr("id",a).attr("class","classGroup");let s=o.append("text").attr("y",r.textHeight+r.padding).attr("x",0);const d=JSON.parse(`"${e.text}"`).split("\n");d.forEach((function(t){l.l.debug(`Adding line: ${t}`),s.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)}));const c=o.node().getBBox(),p=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*r.padding).attr("height",c.height+d.length*r.textHeight+r.padding+.5*r.dividerMargin).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(p-t.getBBox().width)/2)})),i.width=p,i.height=c.height+d.length*r.textHeight+r.padding+.5*r.dividerMargin,i},parseMember:s}})),e.register("bzIQZ",(function(r,n){t(r.exports,"default",(()=>a));var a=(0,e("7N1cZ").default)(Object.getPrototypeOf,Object)})),e.register("3rtvu",(function(r,n){t(r.exports,"default",(()=>u));var a=e("hArsG"),i=e("bzIQZ"),l=e("f2iog"),o=Function.prototype,s=Object.prototype,d=o.toString,c=s.hasOwnProperty,p=d.call(Object);var u=function(t){if(!(0,l.default)(t)||"[object Object]"!=(0,a.default)(t))return!1;var e=(0,i.default)(t);if(null===e)return!0;var r=c.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&d.call(r)==p}}));
//# sourceMappingURL=flowDiagram-46a15f6f.94dc1d34.js.map
