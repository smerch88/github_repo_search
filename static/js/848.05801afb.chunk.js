"use strict";(self.webpackChunkgithub_repo_search=self.webpackChunkgithub_repo_search||[]).push([[848],{4848:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var i=r(1614),s=r(890),t=r(1889),o=r(9434),a=function(e){return e.repos.repos},l=function(e){return e.repos.isLoading},c=r(9439),u=r(2791),h=r(7621),d=r(6647),x=r(9504),m=r(2363),p=r(6151),g=r(184),j=function(e){var n=e.item,r=(0,u.useState)(!0),i=(0,c.Z)(r,2),t=i[0],o=i[1];return(0,g.jsxs)(h.Z,{sx:{minWidth:275},children:[(0,g.jsx)(d.Z,{onClick:function(){o(!t)},children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(s.Z,{children:n.name}),(0,g.jsxs)(s.Z,{children:["Created on ",n.created_at]}),(0,g.jsxs)(s.Z,{children:["Language: ",n.language]}),(0,g.jsxs)(s.Z,{sx:{textOverflow:t?"ellipsis":"unset",whiteSpace:t?"nowrap":"unset",overflow:t?"hidden":"unset"},children:["Description: ",n.description]}),(0,g.jsxs)(s.Z,{children:["Forks: ",n.forks_count]}),(0,g.jsxs)(s.Z,{children:["Watchers: ",n.watchers]}),(0,g.jsxs)(s.Z,{children:["Visibility: ",n.visibility]}),(0,g.jsx)("a",{href:n.owner.html_url,target:"blank",rel:"noopener noreferrer",children:(0,g.jsxs)(s.Z,{children:["Owner: ",n.owner.login]})})]})}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(p.Z,{size:"small",onClick:function(){window.open(n.html_url,"_blank")},children:"Learn More"})})]})},f=function(){var e=(0,o.v9)(a).items;return console.log(e),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z,{variant:"h3",component:"h2",children:"List of repos"}),(0,g.jsx)(t.ZP,{container:!0,spacing:2,children:e&&e.map((function(e){return(0,g.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,g.jsx)(j,{item:e})},e.id)}))})]})},Z=r(3967),b=r(4554),v=r(1106),y=r(3239),w=r(1661),q=r(5705),k=r(6727),_=k.Ry({query:k.Z_("Enter Name to Search").required("Name is Required")}),S=function(){var e=(0,o.I0)(),n=(0,o.v9)(l),r=(0,Z.Z)(),i=(0,q.TA)({initialValues:{query:""},validationSchema:_,onSubmit:function(n){var r={repoName:n.query};console.log(r),e((0,w.$)(r))}});return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(b.Z,{component:"form",onSubmit:i.handleSubmit,sx:{gap:1},children:[(0,g.jsx)(v.Z,{sx:{marginBottom:r.spacing(1)},fullWidth:!0,id:"query",name:"query",label:"What do you want to find?",value:i.values.query,onChange:i.handleChange,error:i.touched.query&&Boolean(i.errors.query),helperText:i.touched.query&&i.errors.query}),(0,g.jsx)(p.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{position:"relative",backgroundColor:n?"lightgrey":void 0,minHeight:r.spacing(6)},children:n?(0,g.jsx)(y.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px",color:"rgba(255,255,255,0.5)"}}):"Submit"})]})})},C=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(s.Z,{variant:"h2",component:"h1",mb:!0,children:"Github Repo Search Page."}),(0,g.jsx)(S,{}),(0,g.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=848.05801afb.chunk.js.map