"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[101],{1718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(4848),t=s(8453);const o={sidebar_position:1},c="Users",r={id:"Users",title:"Users",description:"Yaml structure",source:"@site/docs/Users.md",sourceDirName:".",slug:"/Users",permalink:"/dcnios/docs/Users",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro",permalink:"/dcnios/docs/intro"}},d={},a=[{value:"Yaml structure",id:"yaml-structure",level:2},{value:"Nifi credentials:",id:"nifi-credentials",level:3},{value:"ProcessGroups",id:"processgroups",level:3},{value:"Connections",id:"connections",level:3},{value:"Example",id:"example",level:3},{value:"Manage the dataflow with commands",id:"manage-the-dataflow-with-commands",level:2},{value:"Change Schedule time",id:"change-schedule-time",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"users",children:"Users"}),"\n",(0,i.jsx)(n.h2,{id:"yaml-structure",children:"Yaml structure"}),"\n",(0,i.jsx)(n.p,{children:"This document tries to guide the users in understanding the possibilities of dCNiOS."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Some fields need to be defined for the main section that represents a NiFi instance:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nifi credentials of the instance."}),"\n",(0,i.jsx)(n.li,{children:"The ProcessGroups that are going to be created."}),"\n",(0,i.jsx)(n.li,{children:"The connection between those ProcessGroups.\nI"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nifi-credentials",children:"Nifi credentials:"}),"\n",(0,i.jsx)(n.p,{children:"This section indicates the Nifi credentials:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Endpoint"}),"\n",(0,i.jsx)(n.li,{children:"User"}),"\n",(0,i.jsx)(n.li,{children:"Password"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nifi:\n  endpoint: https://<>\n  user: <>\n  password: <>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"processgroups",children:"ProcessGroups"}),"\n",(0,i.jsx)(n.p,{children:"Nifi allows saving the behavior of some processes to create a small workflow. This is called ProcessGroup. dCNiOS uses those ProcessGroup. It is necessary to fill in the variables to create custom workflows adapted for each use case."}),"\n",(0,i.jsx)(n.p,{children:"Some ProcessGroups operate as Source:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"dCache"}),"\n",(0,i.jsx)(n.li,{children:"KAFKA"}),"\n",(0,i.jsx)(n.li,{children:"S3"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Other operate as Destination:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OSCAR"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Inside a ProcessGroup, a subsection ",(0,i.jsx)(n.code,{children:"components"})," has been created to change the configuration of a process. It changes the scheduled time, seconds between executions (ratio execution), and execution node, where you can choose which node is going to be executed, in all nodes or the primary node."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    components:\n    - name: GetFile\n      seconds: 2\n      node: (ALL | PRIMARY)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"connections",children:"Connections"}),"\n",(0,i.jsx)(n.p,{children:"This section defines the connection between the ProcessGroups using identifier names."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- from: dcachelistening\n  to: edgan3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nifi:\n  endpoint: https://<>\n  user: <>\n  password: <>\n  dcache:\n    - name: dcachelistening\n      endpoint: <>/api/v1\n      user: <>\n      password: <>\n      folder: /Users/slangarita/itwin/input\n      statefile: statess1.txt\n  oscar:\n    - name: edgan3\n      endpoint: <>\n      service: <>\n      token: <>\n  connection:\n    - from: dcachelistening\n      to: edgan3\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"manage-the-dataflow-with-commands",children:"Manage the dataflow with commands"}),"\n",(0,i.jsx)(n.p,{children:"Once the dataflow is defined in the YAML file, it is time to create it with the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python dcnios-cli.py apply -f description.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"To start or stop all the ProcessGroup defined in the YAML:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python dcnios-cli.py [start | stop] -f description.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"To delete all the ProcessGroup defined in the YAML:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python dcnios-cli.py delete -f description.yaml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"change-schedule-time",children:"Change Schedule time"}),"\n",(0,i.jsx)(n.p,{children:"A command has been created to change the time of a process between execution:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python dcnios-cli.py changeSchedule --host={nifi-endpoint} \\\n--user={user} --password={pass}  \\\n--processGroup={processGroupName} --component={defined_in_template} \\\n--seconds=10\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(6540);const t={},o=i.createContext(t);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);