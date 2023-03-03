"use strict";(self.webpackChunkgithub_repo_search=self.webpackChunkgithub_repo_search||[]).push([[693],{4693:function(e,r,n){n.r(r),n.d(r,{default:function(){return U}});var a=n(1614),t=n(890),o=n(1889),s=n(9434),i=function(e){return e.repos.repos},l=function(e){return e.repos.isLoading},u=function(e){return e.repos.searchQuery},d=function(e){return e.repos.perPage},c=function(e){return e.repos.sort},g=function(e){return e.repos.order},h=function(e){return e.repos.language},x=n(9439),p=n(2791),m=n(7621),v=n(6647),j=n(9504),Z=n(4721),f=n(4554),b=n(2363),P=n(6151),y=n(1087),C=n(184),w=function(e){var r=e.item,n=(0,p.useState)(!0),a=(0,x.Z)(n,2),o=a[0],s=a[1],i=new Date(r.created_at),l={textOverflow:o?"ellipsis":"unset",whiteSpace:o?"nowrap":"unset",overflow:o?"hidden":"unset"};return(0,C.jsxs)(m.Z,{sx:{minWidth:275},children:[(0,C.jsx)(v.Z,{onClick:function(){s(!o)},children:(0,C.jsxs)(j.Z,{children:[(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Name:"})," ",r.name]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Updated on"})," ",i.toLocaleString()]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Language:"})," ",r.language]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Description:"})," ",r.description]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Forks:"})," ",r.forks_count]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Watchers:"})," ",r.watchers]}),(0,C.jsx)(Z.Z,{}),(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Visibility:"})," ",r.visibility]}),(0,C.jsx)(Z.Z,{}),!o&&(0,C.jsx)(f.Z,{sx:{width:"40px",height:"40px"},children:(0,C.jsx)("img",{src:r.owner.avatar_url,alt:"user_avatar",width:"100%",loading:"lazy"})}),(0,C.jsx)(f.Z,{component:y.rU,to:r.owner.html_url,target:"blank",rel:"noopener noreferrer",color:"inherit",children:(0,C.jsxs)(t.Z,{sx:l,children:[(0,C.jsx)("b",{children:"Owner:"})," ",r.owner.login]})})]})}),(0,C.jsx)(b.Z,{children:(0,C.jsx)(P.Z,{size:"small",onClick:function(){window.open(r.html_url,"_blank")},variant:"outlined",children:"Check It"})})]})},S=function(){var e=(0,s.v9)(i),r=e.items,n=e.total_count;return(0,C.jsxs)(C.Fragment,{children:[r&&(0,C.jsxs)(t.Z,{variant:"h4",component:"h2",mb:!0,children:["List of repos: ",n," in total."]}),(0,C.jsx)(o.ZP,{container:!0,spacing:2,children:r&&r.map((function(e){return(0,C.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,C.jsx)(w,{item:e})},e.id)}))})]})},q=n(3967),_=n(5193),k=n(7246),B=n(1661),W=function(){var e=(0,s.I0)(),r=(0,q.Z)(),n=(0,p.useState)(1),a=(0,x.Z)(n,2),t=a[0],o=a[1],l=(0,p.useState)(0),c=(0,x.Z)(l,2),g=c[0],h=c[1],m=(0,s.v9)(u),v=(0,s.v9)(d),j=(0,s.v9)(i),Z=(0,_.Z)(r.breakpoints.down("sm"));(0,p.useEffect)((function(){if(j){var e=j.total_count;h(Math.ceil(e/v))}}),[j,v]);return(0,C.jsx)(C.Fragment,{children:g>0&&(0,C.jsx)(f.Z,{sx:{display:"flex",justifyContent:"center",marginTop:r.spacing(2),marginBottom:r.spacing(2)},children:(0,C.jsx)(k.Z,{count:g,variant:"outlined",onChange:function(r,n){o(n),e((0,B.$)({repoName:m,page:n,perPage:v}))},page:t,siblingCount:Z?0:1})})})},L=n(7391),N=n(8096),F=n(4925),I=n(8583),O=n(5022),R=n(3239),D=n(6947),E=n(5705),T=n(6727),H=T.Ry({query:T.Z_("Enter Name to Search").required("Name is Required"),perPage:T.Rx("Enter Repos per Page"),language:T.Z_("Enter Programming Language"),sort:T.Z_("Choose Sort Parameters"),order:T.Z_("Choose Order")}),z=function(){var e,r,n,a,t,o=(0,s.I0)(),i=(0,q.Z)(),m=(0,s.v9)(l),v=(0,s.v9)(u),j=(0,s.v9)(d),Z=(0,s.v9)(c),b=(0,s.v9)(g),w=(0,s.v9)(h),S=(0,y.lr)(),_=(0,x.Z)(S,2),k=_[0],W=_[1],T=null!==(e=k.get("repoName"))&&void 0!==e?e:v,z=null!==(r=k.get("perPage"))&&void 0!==r?r:j,U=null!==(n=k.get("language"))&&void 0!==n?n:w,$=null!==(a=k.get("sort"))&&void 0!==a?a:Z,A=null!==(t=k.get("order"))&&void 0!==t?t:b,M={repoName:T,perPage:z,language:U,sort:$,order:A},V=(0,p.useState)(!1),Y=(0,x.Z)(V,2),Q=Y[0],G=Y[1];(0,p.useEffect)((function(){T&&(o((0,B.$)(M)),o((0,D.ql)(M.query)),o((0,D.Yp)(M.perPage)),o((0,D.m0)(M.language)),o((0,D.HD)(M.sort)),o((0,D.OL)(M.order)))}),[]);var J=(0,E.TA)({initialValues:{query:null!==T&&void 0!==T?T:v,perPage:null!==z&&void 0!==z?z:j,language:null!==U&&void 0!==U?U:w,sort:null!==$&&void 0!==$?$:Z,order:null!==A&&void 0!==A?A:b},validationSchema:H,onSubmit:function(e){var r={repoName:e.query,perPage:e.perPage,language:e.language,sort:e.sort,order:e.order};o((0,B.$)(r)),o((0,D.ql)(e.query)),o((0,D.Yp)(e.perPage)),o((0,D.m0)(e.language)),o((0,D.HD)(e.sort)),o((0,D.OL)(e.order)),W({repoName:e.query,perPage:e.perPage,language:e.language,sort:e.sort,order:e.order})}});return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(f.Z,{component:"form",onSubmit:J.handleSubmit,sx:{gap:1},children:[(0,C.jsx)(L.Z,{sx:{marginBottom:i.spacing(1)},fullWidth:!0,id:"query",name:"query",label:"What do you want to find?",value:J.values.query,onChange:J.handleChange,error:J.touched.query&&Boolean(J.errors.query),helperText:J.touched.query&&J.errors.query}),(0,C.jsx)(P.Z,{fullWidth:!0,variant:"contained",onClick:function(){G(!Q)},sx:{marginBottom:i.spacing(1)},children:Q?"Hide advanced options":"Show advanced options"}),Q&&(0,C.jsx)(L.Z,{sx:{marginBottom:i.spacing(1)},fullWidth:!0,id:"perPage",name:"perPage",label:"Repos per Page",value:J.values.perPage,onChange:J.handleChange,error:J.touched.perPage&&Boolean(J.errors.perPage),helperText:J.touched.perPage&&J.errors.perPage}),Q&&(0,C.jsx)(L.Z,{sx:{marginBottom:i.spacing(1)},fullWidth:!0,id:"language",name:"language",label:"Programming Language",value:J.values.language,onChange:J.handleChange,error:J.touched.language&&Boolean(J.errors.language),helperText:J.touched.language&&J.errors.language}),Q&&(0,C.jsxs)(N.Z,{fullWidth:!0,sx:{marginBottom:i.spacing(1)},children:[(0,C.jsx)(F.Z,{id:"sort-label",children:"Sorting Parameters"}),(0,C.jsx)(I.Z,{labelId:"sort-label",id:"sort",name:"sort",value:J.values.sort,onChange:J.handleChange,error:J.touched.sort&&Boolean(J.errors.sort),children:[{value:"best-match",text:"Best Match"},{value:"stars",text:"Stars"},{value:"forks",text:"Forks"},{value:"updated",text:"Updated"},{value:"help-wanted-issues",text:"Help Wanted Issues"}].map((function(e){return(0,C.jsx)(O.Z,{value:e.value,children:e.text},e.value)}))})]}),Q&&(0,C.jsxs)(N.Z,{fullWidth:!0,sx:{marginBottom:i.spacing(1)},children:[(0,C.jsx)(F.Z,{id:"order-label",children:"Sorting Order"}),(0,C.jsx)(I.Z,{labelId:"order-label",id:"order",name:"order",value:J.values.order,onChange:J.handleChange,error:J.touched.order&&Boolean(J.errors.order),children:[{value:"asc",text:"Ascending"},{value:"desc",text:"Descending"}].map((function(e){return(0,C.jsx)(O.Z,{value:e.value,children:e.text},e.value)}))})]}),(0,C.jsx)(P.Z,{fullWidth:!0,sx:{marginBottom:i.spacing(1)},variant:"contained",color:"primary",disabled:m,type:"submit",children:m?(0,C.jsx)(R.Z,{size:24}):"Search"})]})})},U=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(a.Z,{children:[(0,C.jsx)(t.Z,{variant:"h2",component:"h1",mb:!0,children:"Repo Search Page"}),(0,C.jsx)(z,{}),(0,C.jsx)(S,{}),(0,C.jsx)(W,{})]})})}}}]);
//# sourceMappingURL=693.3326c4ac.chunk.js.map