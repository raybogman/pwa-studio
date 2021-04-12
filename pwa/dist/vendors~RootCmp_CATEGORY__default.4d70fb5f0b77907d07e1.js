/*!
 * @version v10.0.0-30-ga63e653f8-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"31g3":function(e,t,n){(t=e.exports=n("JPst")(!1)).i(n("ysJs"),""),t.push([e.i,".category-root-1dB {\n    padding: 1rem;\n}\n\n.category-title-2U5 {\n    font-size: 1.5rem;\n    font-weight: 400;\n    padding: 0 0.5rem;\n}\n\n.category-pagination-9c0 {\n    position: relative;\n    bottom: 0;\n}\n\n.category-placeholder-2xS {\n    height: 100vh;\n}\n\n.category-headerButtons-2x_ {\n    display: flex;\n    justify-content: center;\n    padding-bottom: 1.5rem;\n}\n\n.category-categoryTitle-1Ut {\n    color: rgb(var(--venia-global-color-text));\n    padding-bottom: 1rem;\n    font-size: 1.375rem;\n    font-weight: 300;\n    line-height: 1.375rem;\n    text-align: center;\n}\n\n.category-sortContainer-34B {\n    color: rgb(var(--venia-global-color-text-alt));\n    text-align: center;\n    font-size: 0.875rem;\n    padding-bottom: 1rem;\n}\n\n.category-sortText-2IS {\n    font-weight: 600;\n}\n\n.category-filterButton-3b9 {\n    min-width: 6.25rem;\n}\n",""]),t.locals={root:"category-root-1dB",title:"category-title-2U5",pagination:"category-pagination-9c0",placeholder:"category-placeholder-2xS",headerButtons:"category-headerButtons-2x_",categoryTitle:"category-categoryTitle-1Ut",sortContainer:"category-sortContainer-34B",sortText:"category-sortText-2IS",filterButton:"category-filterButton-3b9 "+n("ysJs").locals.root_lowPriority}},"9teu":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return ie})
var r,a,o,c=n("q1tI"),i=n.n(c),s=n("17x9"),l=n("lSNA"),u=n.n(l),g=n("J4zp"),d=n.n(g),m=n("Ty5D"),y=n("VX74"),p=n("y1Xp"),b=n("OlZo"),f=n("Cszt"),h=n("PKba"),P=n("Unmo"),v=n("+wQL"),E=n("VkAN"),j=n.n(E),_={getCategoryQuery:Object(y.gql)(r||(r=j()(["\n    query GetCategories(\n        $id: Int!\n        $pageSize: Int!\n        $currentPage: Int!\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        category(id: $id) {\n            id\n            description\n            name\n            product_count\n            meta_title\n            meta_keywords\n            meta_description\n        }\n        products(\n            pageSize: $pageSize\n            currentPage: $currentPage\n            filter: $filters\n            sort: $sort\n        ) {\n            items {\n                # id is always required, even if the fragment includes it.\n                id\n                # TODO: Once this issue is resolved we can use a\n                # GalleryItemFragment here:\n                # https://github.com/magento/magento2/issues/28584\n                name\n                price {\n                    regularPrice {\n                        amount {\n                            currency\n                            value\n                        }\n                    }\n                }\n                small_image {\n                    url\n                }\n                url_key\n                url_suffix\n            }\n            page_info {\n                total_pages\n            }\n            total_count\n        }\n    }\n"]))),getFilterInputsQuery:Object(y.gql)(a||(a=j()(['\n    query GetFilterInputsForCategory {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n'])))},O=n("DUu4"),F=n("kriW"),C={getProductFiltersByCategoryQuery:Object(y.gql)(o||(o=j()(["\n    query getProductFiltersByCategory(\n        $categoryIdFilter: FilterEqualTypeInput!\n    ) {\n        products(filter: { category_id: $categoryIdFilter }) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"])))},x=n("Rpel"),I=n("ACyH"),S=n("vh/y"),w=n("UPvi"),z=n("C0us"),N=n("tuiD"),T=n("STDB"),B=n("LboF"),k=n.n(B),q=n("31g3"),D=n.n(q),M={injectType:"singletonStyleTag",insert:"head",singleton:!0},$=(k()(D.a,M),D.a.locals||{}),Q=n("dDsW"),L=n("STEg"),A=n("55Ip"),J=n("UqBt"),U=function isNonDefaultCategory(e){return Boolean(e.parentId)},W=n("OlhY"),R=n("u2JS"),V=n.n(R),G=n("zhPx"),X=n.n(G),H={injectType:"singletonStyleTag",insert:"head",singleton:!0},K=(k()(X.a,H),X.a.locals||{}),Y=function NoProductsFound(e){var t=e.categoryId,n=Object(p.a)(K,e.classes),r=Object(Q.a)().formatMessage,a=function useNoProductsFound(e){var t=e.categoryId,n=Object(J.b)(),r=d()(n,1)[0].categories
return{recommendedCategories:Object(c.useMemo)(function(){var e,n=Object.values(r).filter(U).filter(function isNotSameCategory(e){return e.id!==t}),a=n.length
if(a<=3)e=n
else{var o=a-3+1,c=Math.floor(Math.random()*o),i=c+3
e=n.slice(c,i)}return e},[t,r])}}({categoryId:t}).recommendedCategories,o=Object(c.useMemo)(function(){return a.map(function(e){var t=Object(L.a)("/".concat(e.url_path).concat(e.url_suffix))
return i.a.createElement("li",{key:e.id,className:n.listItem},i.a.createElement(A.b,{to:t},e.name))})},[n,a]),s=r({id:"noProductsFound.noProductsFound",defaultMessage:"Sorry! We couldn't find any products."})
return i.a.createElement("div",{className:n.root},i.a.createElement(W.a,{alt:s,classes:{image:n.image,root:n.imageContainer},src:V.a}),i.a.createElement("h2",{className:n.title},s),i.a.createElement("div",{className:n.categories},i.a.createElement("p",null,i.a.createElement(F.a,{id:"noProductsFound.tryOneOfTheseCategories",defaultMessage:"Try one of these categories"})),i.a.createElement("ul",{className:n.list},o)))},Z=Y
Y.propTypes={categoryId:s.number,classes:Object(s.shape)({root:s.string,title:s.string,list:s.string,categories:s.string,listItem:s.string,image:s.string,imageContainer:s.string})}
var ee,te=i.a.lazy(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"dzHx"))}),ne=function CategoryContent(e){var t=e.categoryId,n=e.data,r=e.pageControl,a=e.sortProps,o=e.pageSize,s=d()(a,1)[0],l=function useCategoryContent(e){var t=e.categoryId,n=e.data,r=e.pageSize,a=void 0===r?6:r,o=Object(p.a)(C,e.operations).getProductFiltersByCategoryQuery,i=Array.from({length:a}).fill(null),s=Object(c.useState)(!1),l=d()(s,2),u=l[0],g=l[1],m=Object(b.b)(),f=d()(m,2)[1].toggleDrawer,h=Object(c.useCallback)(function(){g(!0)},[g]),P=Object(c.useCallback)(function(){g(!0),f("filter")},[g,f]),v=Object(y.useLazyQuery)(o,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),E=d()(v,2),j=E[0],_=E[1].data
Object(c.useEffect)(function(){t&&j({variables:{categoryIdFilter:{eq:t}}})},[t,j])
var O=_?_.products.aggregations:null,F=n?n.products.items:i,x=n?n.products.page_info.total_pages:null
return{categoryName:n?n.category.name:null,categoryDescription:n?n.category.description:null,filters:O,handleLoadFilters:h,handleOpenFilters:P,items:F,loadFilters:u,totalPagesFromData:x}}({categoryId:t,data:n,pageSize:o}),u=l.categoryName,g=l.categoryDescription,m=l.filters,f=l.handleLoadFilters,h=l.handleOpenFilters,P=l.items,v=l.totalPagesFromData,E=Object(p.a)($,e.classes),j=m?i.a.createElement(I.a,{priority:"low",classes:{root_lowPriority:E.filterButton},onClick:h,onFocus:f,onMouseOver:f,type:"button"},i.a.createElement(F.a,{id:"categoryContent.filter",defaultMessage:"Filter"})):null,_=v&&m?i.a.createElement(N.a,{sortProps:a}):null,O=v&&m?i.a.createElement("div",{className:E.sortContainer},i.a.createElement(F.a,{id:"categoryContent.itemsSortedBy",defaultMessage:"Items sorted by "}),i.a.createElement("span",{className:E.sortText},i.a.createElement(F.a,{id:s.sortId,defaultMessage:s.sortText}))):null,B=m?i.a.createElement(te,{filters:m}):null,k=g?i.a.createElement(T.a,{html:g}):null,q=v?i.a.createElement(c.Fragment,null,i.a.createElement("section",{className:E.gallery},i.a.createElement(S.a,{items:P})),i.a.createElement("div",{className:E.pagination},i.a.createElement(z.a,{pageControl:r}))):i.a.createElement(Z,{categoryId:t})
return i.a.createElement(c.Fragment,null,i.a.createElement(x.a,{categoryId:t}),i.a.createElement(w.b,null,u),i.a.createElement("article",{className:E.root},i.a.createElement("h1",{className:E.title},i.a.createElement("div",{className:E.categoryTitle},u)),k,i.a.createElement("div",{className:E.headerButtons},j,_),O,q,i.a.createElement(c.Suspense,{fallback:null},B)))},re=ne
ne.propTypes={classes:Object(s.shape)({filterContainer:s.string,sortContainer:s.string,gallery:s.string,headerButtons:s.string,filterButton:s.string,pagination:s.string,root:s.string,title:s.string}),sortProps:s.array,pageSize:s.number}
var ae=Object(y.gql)(ee||(ee=j()(["\n    query getPageSize {\n        storeConfig {\n            id\n            grid_per_page\n        }\n    }\n"]))),oe=n("Fk0k"),ce=function Category(e){var t=e.id,n=function useCategory(e){var t=e.id,n=e.queries.getPageSize,r=Object(p.a)(_,e.operations),a=r.getCategoryQuery,o=r.getFilterInputsQuery,i=Object(y.useQuery)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}).data,s=i&&i.storeConfig.grid_per_page,l=Object(f.a)(),g=d()(l,2),E=g[0],j=g[1],O=E.currentPage,F=E.totalPages,C=j.setCurrentPage,x=j.setTotalPages,I=Object(P.a)(),S=d()(I,1)[0],w=Object(c.useRef)(S),z={currentPage:O,setPage:C,totalPages:F},N=Object(b.b)(),T=d()(N,2)[1].actions.setPageLoading,B=Object(y.useLazyQuery)(a,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),k=d()(B,2),q=k[0],D=k[1],M=D.called,$=D.loading,Q=D.error,L=D.data,A=Object(m.h)().search,J=!!L&&$
Object(c.useEffect)(function(){T(J)},[J,T])
var U=Object(c.useRef)(A),W=Object(y.useQuery)(o,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),R=W.called,V=W.data,G=W.loading,X=Object(c.useMemo)(function(){var e=new Map
return V&&V.__type.inputFields.forEach(function(t){var n=t.name,r=t.type
e.set(n,r.name)}),e},[V])
Object(c.useEffect)(function(){if(X.size&&s){var e=Object(v.c)(A),n={}
e.forEach(function(e,t){n[t]=Object(v.b)(e,X.get(t))}),n.category_id={eq:String(t)},q({variables:{currentPage:Number(O),id:Number(t),filters:n,pageSize:Number(s),sort:u()({},S.sortAttribute,S.sortDirection)}})}},[O,S,X,t,s,q,A])
var H=L?L.products.page_info.total_pages:null
Object(c.useEffect)(function(){return x(H),function(){x(null)}},[x,H]),Object(c.useEffect)(function(){!Q||$||L||1===O||C(1)},[O,Q,$,C,L]),Object(c.useEffect)(function(){var e=new URLSearchParams(U.current),t=new URLSearchParams(A)
e.delete("page"),t.delete("page"),e.toString()===t.toString()&&w.current.sortAttribute.toString()===S.sortAttribute.toString()&&w.current.sortDirection.toString()===S.sortDirection.toString()||(C(1),U.current=A,w.current=S)},[S,U,A,C])
var K=$&&!L?null:L,Y=L&&L.category&&L.category.meta_description?L.category.meta_description:"",Z=R&&!M||$&&!L||G
return Object(h.a)(O),{error:Q,categoryData:K,loading:Z,metaDescription:Y,pageControl:z,sortProps:I,pageSize:s}}({id:t,queries:{getPageSize:ae}}),r=n.error,a=n.metaDescription,o=n.loading,s=n.categoryData,l=n.pageControl,g=n.sortProps,E=n.pageSize,j=Object(p.a)($,e.classes)
if(!s){if(o)return O.a
if(r&&1===l.currentPage)return i.a.createElement(oe.a,null)}return i.a.createElement(c.Fragment,null,i.a.createElement(w.a,{name:"description",content:a}),i.a.createElement(re,{categoryId:t,classes:j,data:s,pageControl:l,sortProps:g,pageSize:E}))}
ce.propTypes={classes:Object(s.shape)({gallery:s.string,root:s.string,title:s.string}),id:s.number},ce.defaultProps={id:3}
var ie=ce},Rpel:function(e,t,n){"use strict"
var r,a=n("q1tI"),o=n.n(a),c=n("kriW"),i=n("17x9"),s=n("55Ip"),l=n("STEg"),u=n("VX74"),g=n("y1Xp"),d=n("VkAN"),m=n.n(d),y={getBreadcrumbsQuery:Object(u.gql)(r||(r=m()(["\n    query GetBreadcrumbs($category_id: Int!) {\n        category(id: $category_id) {\n            breadcrumbs {\n                category_id\n                # We may not need level if `breadcrumbs` is sorted.\n                category_level\n                category_name\n                category_url_path\n            }\n            id\n            name\n            url_path\n            url_suffix\n        }\n    }\n"],["\n    query GetBreadcrumbs($category_id: Int!) {\n        category(id: $category_id) {\n            breadcrumbs {\n                category_id\n                # We may not need level if \\`breadcrumbs\\` is sorted.\n                category_level\n                category_name\n                category_url_path\n            }\n            id\n            name\n            url_path\n            url_suffix\n        }\n    }\n"])))},p=function sortCrumbs(e,t){return e.category_level>t.category_level},b=function getPath(e,t){return e?"/".concat(e).concat(t):"#"},f=n("LboF"),h=n.n(f),P=n("pBWi"),v=n.n(P),E={injectType:"singletonStyleTag",insert:"head",singleton:!0},j=(h()(v.a,E),v.a.locals||{}),_=function Breadcrumbs(e){var t=Object(g.a)(j,e.classes),n=e.categoryId,r=e.currentProduct,i=function useBreadcrumbs(e){var t=e.categoryId,n=Object(g.a)(y,e.operations).getBreadcrumbsQuery,r=Object(u.useQuery)(n,{variables:{category_id:t},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),o=r.data,c=r.loading,i=r.error,s=o&&o.category.url_suffix||"",l=Object(a.useMemo)(function(){if(!c&&o){var e=o.category.breadcrumbs
return e&&e.map(function(e){return{category_level:e.category_level,text:e.category_name,path:b(e.category_url_path,s)}}).sort(p)}},[s,o,c])
return{currentCategory:o&&o.category.name||"",currentCategoryPath:o&&"".concat(o.category.url_path).concat(s)||"#",isLoading:c,hasError:!!i,normalizedData:l||[]}}({categoryId:n}),d=i.currentCategory,m=i.currentCategoryPath,f=i.hasError,h=i.isLoading,P=i.normalizedData,v=Object(a.useMemo)(function(){return P.map(function(e){var n=e.text,r=e.path
return o.a.createElement(a.Fragment,{key:n},o.a.createElement("span",{className:t.divider},"/"),o.a.createElement(s.b,{className:t.link,to:Object(l.a)(r)},n))})},[t.divider,t.link,P])
if(h||f)return o.a.createElement("div",{className:t.root})
var E=r?o.a.createElement(s.b,{className:t.link,to:Object(l.a)(m)},d):o.a.createElement("span",{className:t.currentCategory},d),_=r?o.a.createElement(a.Fragment,null,o.a.createElement("span",{className:t.divider},"/"),o.a.createElement("span",{className:t.text},r)):null
return o.a.createElement("div",{className:t.root},o.a.createElement(s.b,{className:t.link,to:"/"},o.a.createElement(c.a,{id:"global.home",defaultMessage:"Home"})),v,o.a.createElement("span",{className:t.divider},"/"),E,_)}
t.a=_
_.propTypes={categoryId:i.number.isRequired,currentProduct:i.string}},pBWi:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".breadcrumbs-root-1VT {\n    margin-left: 1rem;\n    margin-top: 1rem;\n    font-size: 0.875rem;\n\n    /* Permanent height to prevent pop-in. */\n    height: 0.875rem;\n\n    /* Show ellipses when overflowing. */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.breadcrumbs-text-1Es {\n    padding: 0.25rem;\n}\n\n.breadcrumbs-divider-34t {\n}\n\n.breadcrumbs-link-1aE {\n    text-decoration: underline;\n}\n\n.breadcrumbs-currentCategory-3l1 {\n}\n",""]),t.locals={root:"breadcrumbs-root-1VT",text:"breadcrumbs-text-1Es",divider:"breadcrumbs-divider-34t breadcrumbs-text-1Es",link:"breadcrumbs-link-1aE breadcrumbs-text-1Es",currentCategory:"breadcrumbs-currentCategory-3l1 breadcrumbs-text-1Es"}},u2JS:function(e,t,n){e.exports=n.p+"noProductsFound-e9n.png"},zhPx:function(e,t,n){(t=e.exports=n("JPst")(!1)).push([e.i,".noProductsFound-root-3gI {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: center;\n}\n\n.noProductsFound-title-1vj {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n}\n\n.noProductsFound-categories-2Mj {\n    margin-top: 2rem;\n}\n\n.noProductsFound-list-b4o {\n    margin-top: 1rem;\n}\n\n.noProductsFound-listItem-3jz {\n    text-align: center;\n    text-decoration: underline;\n}\n\n.noProductsFound-listItem-3jz:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.noProductsFound-imageContainer-277 {\n    margin-bottom: 2rem;\n}\n\n.noProductsFound-image-3mz {\n    height: 200px;\n    width: 200px;\n    max-width: 200px;\n}\n",""]),t.locals={root:"noProductsFound-root-3gI",title:"noProductsFound-title-1vj",categories:"noProductsFound-categories-2Mj",list:"noProductsFound-list-b4o",listItem:"noProductsFound-listItem-3jz",imageContainer:"noProductsFound-imageContainer-277",image:"noProductsFound-image-3mz"}}}])
