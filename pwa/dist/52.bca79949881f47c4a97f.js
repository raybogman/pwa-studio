/*!
 * @version v10.0.0-30-ga63e653f8-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{MHbn:function(n,r,t){"use strict"
t.r(r),t.d(r,"default",function(){return w})
var e=t("RIqP"),a=t.n(e),o=t("q1tI"),i=t.n(o),s=t("17x9"),g=t("OS56"),d=t.n(g),p=t("LboF"),l=t.n(p),b=t("kgOT"),c=t.n(b),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(l()(c.a,m),c.a.locals||{}),u=t("y1Xp"),h=t("JOgF"),y=function Slider(n){var r=Object(u.a)(f,n.classes),t=n.minHeight,e=n.autoplay,s=n.autoplaySpeed,g=n.fade,p=n.infinite,l=n.showArrows,b=n.showDots,c=n.textAlign,m=n.border,y=n.borderColor,w=n.borderWidth,O=n.borderRadius,R=n.marginTop,T=n.marginRight,j=n.marginBottom,L=n.marginLeft,v=n.paddingTop,C=n.paddingRight,k=n.paddingBottom,S=n.paddingLeft,x=n.cssClasses,B=void 0===x?[]:x,A=n.children,W={minHeight:t,textAlign:c,border:m,borderColor:y,borderWidth:w,borderRadius:O,marginTop:R,marginRight:T,marginBottom:j,marginLeft:L,paddingTop:v,paddingRight:C,paddingBottom:k,paddingLeft:S},H={},P={dots:b,arrows:l,afterChange:function afterChange(){Object.keys(H).map(function(n){Object(h.jarallax)(H[n].element,"onScroll")})},infinite:p,autoplay:e,autoplaySpeed:s,fade:g}
return o.Children.map(A,function(n,t){return n.props&&n.props.data&&(n.props.data.classes={root:r.bannerRoot,link:r.bannerLink,wrapper:r.bannerWrapper,posterOverlay:r.bannerPosterOverlay},n.props.data.getParallax=function(n,r){H[t]={element:n,options:r}}),n}),i.a.createElement("div",{className:[r.root].concat(a()(B)).join(" "),style:W},i.a.createElement(d.a,P,A))}
y.propTypes={classes:Object(s.shape)({root:s.string,bannerRoot:s.string,bannerLink:s.string,bannerWrapper:s.string,bannerPosterOverlay:s.string}),appearance:Object(s.oneOf)(["default"]),minHeight:s.string,autoplay:s.bool,autoplaySpeed:s.number,fade:s.bool,infinite:s.bool,showArrows:s.bool,showDots:s.bool,textAlign:s.string,border:s.string,borderColor:s.string,borderWidth:s.string,borderRadius:s.string,marginTop:s.string,marginRight:s.string,marginBottom:s.string,marginLeft:s.string,paddingTop:s.string,paddingRight:s.string,paddingBottom:s.string,paddingLeft:s.string,cssClasses:Object(s.arrayOf)(s.string)}
var w=y}}])
