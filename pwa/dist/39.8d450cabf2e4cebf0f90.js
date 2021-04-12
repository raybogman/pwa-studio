/*!
 * @version v10.0.0-32-g05b011ddb-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{GyKt:function(e,n,a){"use strict"
a.r(n),a.d(n,"default",function(){return F})
var t,o,r,i,s=a("MVZn"),l=a.n(s),c=a("q1tI"),m=a.n(c),u=a("dDsW"),g=a("kriW"),d=a("Ty5D"),f=a("o0o1"),b=a.n(f),p=a("yXPU"),I=a.n(p),P=a("J4zp"),w=a.n(P),h=a("VX74"),C=a("FITH"),y=a("y1Xp"),E=a("ACyH"),v=a("gpca"),j=a("UPvi"),O=a("DUu4"),L=a("LboF"),M=a.n(L),S=a("ujwO"),N=a.n(S),k={injectType:"singletonStyleTag",insert:"head",singleton:!0},V=(M()(N.a,k),N.a.locals||{}),x=a("VkAN"),D=a.n(x),z=Object(h.gql)(t||(t=D()(["\n    fragment AccountInformationPageFragment on Customer {\n        id\n        firstname\n        lastname\n        email\n    }\n"]))),B={mutations:{setCustomerInformationMutation:Object(h.gql)(o||(o=D()(['\n    mutation SetCustomerInformation($customerInput: CustomerInput!) {\n        updateCustomer(input: $customerInput)\n            @connection(key: "updateCustomer") {\n            customer {\n                id\n                ...AccountInformationPageFragment\n            }\n        }\n    }\n    ',"\n"])),z),changeCustomerPasswordMutation:Object(h.gql)(r||(r=D()(['\n    mutation ChangeCustomerPassword(\n        $currentPassword: String!\n        $newPassword: String!\n    ) {\n        changeCustomerPassword(\n            currentPassword: $currentPassword\n            newPassword: $newPassword\n        ) @connection(key: "changeCustomerPassword") {\n            id\n            email\n        }\n    }\n'])))},queries:{getCustomerInformationQuery:Object(h.gql)(i||(i=D()(["\n    query GetCustomerInformation {\n        customer {\n            id\n            ...AccountInformationPageFragment\n        }\n    }\n    ","\n"])),z)}},A=m.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(30)]).then(a.bind(null,"+jtD"))}),F=function AccountInformationPage(e){var n=Object(y.a)(V,e.classes),a=function useAccountInformationPage(e){var n,a=e.mutations,t=a.setCustomerInformationMutation,o=a.changeCustomerPasswordMutation,r=e.queries.getCustomerInformationQuery,i=Object(C.b)(),s=w()(i,1)[0].isSignedIn,l=Object(c.useState)(!1),m=w()(l,2),u=m[0],g=m[1],d=Object(c.useState)(!1),f=w()(d,2),p=f[0],P=f[1],y=Object(c.useState)(!1),E=w()(y,2),v=E[0],j=E[1],O=Object(h.useQuery)(r,{skip:!s,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),L=O.data,M=O.error,S=Object(h.useMutation)(t),N=w()(S,2),k=N[0],V=N[1],x=V.error,D=V.loading,z=Object(h.useMutation)(o),B=w()(z,2),A=B[0],F=B[1],J=F.error,q=F.loading,T=Object(c.useMemo)(function(){if(L)return{customer:L.customer}},[L]),U=Object(c.useCallback)(function(){g(!0)},[g]),_=Object(c.useCallback)(function(){P(!1),g(!1)},[P]),Q=Object(c.useCallback)(function(){P(!0),j(!1)},[P]),W=Object(c.useCallback)((n=I()(b.a.mark(function _callee(e){var n,a,t,o,r
return b.a.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.email,a=e.firstname,t=e.lastname,o=e.password,r=e.newPassword,i.prev=1,n=n.trim(),a=a.trim(),t=t.trim(),o=o.trim(),r=r?r.trim():r,T.customer.email===n&&T.customer.firstname===a&&T.customer.lastname===t){i.next=10
break}return i.next=10,k({variables:{customerInput:{email:n,firstname:a,lastname:t,password:o}}})
case 10:if(!o||!r){i.next=13
break}return i.next=13,A({variables:{currentPassword:o,newPassword:r}})
case 13:_(!1),i.next=20
break
case 16:return i.prev=16,i.t0=i.catch(1),j(!0),i.abrupt("return")
case 20:case"end":return i.stop()}},_callee,null,[[1,16]])})),function(e){return n.apply(this,arguments)}),[k,_,A,T])
return{handleCancel:_,formErrors:v?[x,J]:[],handleSubmit:W,handleChangePassword:U,initialValues:T,isDisabled:D||q,isUpdateMode:p,isSignedIn:s,loadDataError:M,shouldShowNewPassword:u,showUpdateMode:Q}}(l()({},B)),t=a.handleCancel,o=a.formErrors,r=a.handleChangePassword,i=a.handleSubmit,s=a.initialValues,f=a.isDisabled,p=a.isSignedIn,P=a.isUpdateMode,L=a.loadDataError,M=a.shouldShowNewPassword,S=a.showUpdateMode,N=Object(u.a)().formatMessage
if(!p)return m.a.createElement(d.a,{to:"/"})
var k=L?m.a.createElement(v.a,null,m.a.createElement(g.a,{id:"accountInformationPage.errorTryAgain",defaultMessage:"Something went wrong. Please refresh and try again."})):null,x=null
if(!s)return O.a
var D=s.customer,z="".concat(D.firstname," ").concat(D.lastname)
return x=m.a.createElement(c.Fragment,null,m.a.createElement("div",{className:n.accountDetails},m.a.createElement("div",{className:n.lineItemsContainer},m.a.createElement("span",{className:n.nameLabel},m.a.createElement(g.a,{id:"global.name",defaultMessage:"Name"})),m.a.createElement("span",{className:n.nameValue},z),m.a.createElement("span",{className:n.emailLabel},m.a.createElement(g.a,{id:"global.email",defaultMessage:"Email"})),m.a.createElement("span",{className:n.emailValue},D.email),m.a.createElement("span",{className:n.passwordLabel},m.a.createElement(g.a,{id:"global.password",defaultMessage:"Password"})),m.a.createElement("span",{className:n.passwordValue},"***********")),m.a.createElement("div",{className:n.editButtonContainer},m.a.createElement(E.a,{className:n.editInformationButton,disabled:!1,onClick:S,priority:"normal"},m.a.createElement(g.a,{id:"global.editButton",defaultMessage:"Edit"})))),m.a.createElement(c.Suspense,{fallback:null},m.a.createElement(A,{formErrors:o,initialValues:D,isDisabled:f,isOpen:P,onCancel:t,onChangePassword:r,onSubmit:i,shouldShowNewPassword:M}))),m.a.createElement("div",{className:n.root},m.a.createElement(j.b,null,N({id:"accountInformationPage.titleAccount",defaultMessage:"Account Information"})),m.a.createElement("h1",{className:n.title},m.a.createElement(g.a,{id:"accountInformationPage.accountInformation",defaultMessage:"Account Information"})),k||x)}},Y9xl:function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".message-root-3-g {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-3-g:empty {\n    display: none;\n}\n\n.message-root_error-1hZ {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),n.locals={root:"message-root-3-g",root_error:"message-root_error-1hZ message-root-3-g"}},gpca:function(e,n,a){"use strict"
var t=a("q1tI"),o=a.n(t),r=a("dDsW"),i=a("17x9"),s=a("LboF"),l=a.n(s),c=a("Y9xl"),m=a.n(c),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(l()(m.a,u),m.a.locals||{}),d=a("y1Xp"),f=function Message(e){var n,a=e.children,t=e.classes,i=e.fieldState,s=Object(r.a)().formatMessage,l=i.error,c=Object(d.a)(g,t),m=l?c.root_error:c.root
return l&&(n=s({id:l.id,defaultMessage:l.defaultMessage},{value:l.value})),o.a.createElement("p",{className:m},n||a)}
n.a=f
f.defaultProps={fieldState:{}},f.propTypes={children:i.node,classes:Object(i.shape)({root:i.string,root_error:i.string}),fieldState:Object(i.shape)({error:Object(i.shape)({id:i.string,defaultMessage:i.string,value:Object(i.oneOfType)([i.number,i.string])})})}},ujwO:function(e,n,a){(n=e.exports=a("JPst")(!1)).i(a("ysJs"),""),n.push([e.i,".accountInformationPage-root-3dg {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.accountInformationPage-title-Uli {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-accountDetails-1eC {\n    display: grid;\n    row-gap: 2rem;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.accountInformationPage-lineItemsContainer-3bf {\n    grid-column: 1 / span 1;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    line-height: 1.5rem;\n}\n\n.accountInformationPage-lineItemLabel-1zl {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-nameLabel-1tz,\n.accountInformationPage-emailLabel-1QG,\n.accountInformationPage-passwordLabel-3EB {\n}\n\n.accountInformationPage-nameValue-3JI,\n.accountInformationPage-emailValue-JQF,\n.accountInformationPage-passwordValue-3YW {\n}\n\n.accountInformationPage-editButtonContainer-1ZN {\n    grid-column: 1 / span 1;\n    text-align: center;\n}\n\n.accountInformationPage-editInformationButton-34w {\n}\n\n@media (min-width: 961px) {\n    .accountInformationPage-nameLabel-1tz,\n    .accountInformationPage-emailLabel-1QG,\n    .accountInformationPage-passwordLabel-3EB {\n    }\n}\n\n@media (max-width: 960px) {\n    .accountInformationPage-accountDetails-1eC {\n        grid-template-columns: 1fr;\n    }\n\n    .accountInformationPage-lineItemsContainer-3bf {\n        grid-template-columns: 1fr;\n        grid-gap: 0.75rem;\n    }\n}\n",""]),n.locals={root:"accountInformationPage-root-3dg",title:"accountInformationPage-title-Uli",accountDetails:"accountInformationPage-accountDetails-1eC",lineItemsContainer:"accountInformationPage-lineItemsContainer-3bf",lineItemLabel:"accountInformationPage-lineItemLabel-1zl",nameLabel:"accountInformationPage-nameLabel-1tz accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",emailLabel:"accountInformationPage-emailLabel-1QG accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",passwordLabel:"accountInformationPage-passwordLabel-3EB accountInformationPage-lineItemLabel-1zl accountInformationPage-lineItemLabel-1zl",nameValue:"accountInformationPage-nameValue-3JI",emailValue:"accountInformationPage-emailValue-JQF",passwordValue:"accountInformationPage-passwordValue-3YW",editButtonContainer:"accountInformationPage-editButtonContainer-1ZN",editInformationButton:"accountInformationPage-editInformationButton-34w "+a("ysJs").locals.root_normalPriority}}}])