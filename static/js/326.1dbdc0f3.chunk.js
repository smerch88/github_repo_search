"use strict";(self.webpackChunkgithub_repo_search=self.webpackChunkgithub_repo_search||[]).push([[326],{3326:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var i=n(1614),o=n(890),t=n(9434),a=function(e){return e.repos.repos},u=function(e){return e.repos.isLoading},s=n(184),l=function(){var e=(0,t.v9)(a);console.log(e);var r=e.items;return e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{variant:"h3",component:"h2",children:"List of repos"}),(0,s.jsx)("ul",{children:r.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.html_url,children:e.name})},e.id)}))})]}):(0,s.jsx)(o.Z,{variant:"h3",component:"h2",children:"No repositories found."})},c=n(3967),h=n(4554),d=n(1106),m=n(6151),p=n(3239),x=n(1661),g=n(5705),f=n(6727),j=f.Ry({query:f.Z_("Enter Name to Search").required("Name is Required")}),v=function(){var e=(0,t.I0)(),r=(0,t.v9)(u),n=(0,c.Z)(),i=(0,g.TA)({initialValues:{query:""},validationSchema:j,onSubmit:function(r){var n={repoName:r.query};console.log(n),e((0,x.$)(n))}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h.Z,{component:"form",onSubmit:i.handleSubmit,sx:{gap:1},children:[(0,s.jsx)(d.Z,{sx:{marginBottom:n.spacing(1)},fullWidth:!0,id:"query",name:"query",label:"What do you want to find?",value:i.values.query,onChange:i.handleChange,error:i.touched.query&&Boolean(i.errors.query),helperText:i.touched.query&&i.errors.query}),(0,s.jsx)(m.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",sx:{position:"relative",backgroundColor:r?"lightgrey":void 0,minHeight:n.spacing(6)},children:r?(0,s.jsx)(p.Z,{size:24,sx:{position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px",color:"rgba(255,255,255,0.5)"}}):"Submit"})]})})},b=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.Z,{variant:"h2",component:"h1",mb:!0,children:"Github Repo Search Page."}),(0,s.jsx)(v,{}),(0,s.jsx)(l,{})]})})}}}]);
//# sourceMappingURL=326.1dbdc0f3.chunk.js.map