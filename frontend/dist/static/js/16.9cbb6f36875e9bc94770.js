webpackJsonp([16],{"vZz+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(i.a)({url:"/api/permissions",method:"get",params:{pageSize:n,page:t,name:e.name,pid:e.pid,type:e.type}})},t.getInfoById=function(e){return Object(i.a)({url:"/api/permissions/"+e,method:"get"})},t.updateInfo=function(e,t){return Object(i.a)({url:"/api/permissions/"+e,method:"patch",data:t})},t.addInfo=function(e){return Object(i.a)({url:"/api/permissions",method:"post",data:e})},t.deleteInfoById=function(e){return Object(i.a)({url:"/api/permissions/"+e,method:"delete"})},t.deleteAll=function(e){return Object(i.a)({url:"/api/permissions/deleteAll",method:"post",data:{ids:e}})},t.getGroup=function(){return Object(i.a)({url:"/api/permissions/getGroup",method:"post"})},t.getPermission=function(){return Object(i.a)({url:"/api/permissions/getPermissionByTree",method:"post"})},t.Model=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.name=e,this.pid=t,this.type=n,this.method=i,this.route_name=o,this.route_match=l,this.remark=r},t.SearchModel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.name=e,this.pid=t,this.type=n};var i=n("Vo7i")}});