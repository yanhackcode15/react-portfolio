"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[1348],{1348:function(e,i,o){o.r(i),o.d(i,{Collider:function(){return f}});var t=o(7762),n=o(5671),s=o(3144),a=o(136),l=o(7277),r=o(450);function u(e,i,o,t,n,s){var a=(0,r.uZ)(e.options.collisions.absorb.speed*n.factor/10,0,t);e.size.value+=.5*a,o.size.value-=a,t<=s&&(o.size.value=0,o.destroy())}var d=function(e){void 0===e.collisionMaxSpeed&&(e.collisionMaxSpeed=(0,r.Gu)(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function c(e,i){(0,r.kR)((0,r.gy)(e),(0,r.gy)(i)),d(e),d(i)}function v(e,i,o,t){switch(e.options.collisions.mode){case"absorb":!function(e,i,o,t){var n=e.getRadius(),s=i.getRadius();void 0===n&&void 0!==s?e.destroy():void 0!==n&&void 0===s?i.destroy():void 0!==n&&void 0!==s&&(n>=s?u(e,0,i,s,o,t):u(i,0,e,n,o,t))}(e,i,o,t);break;case"bounce":c(e,i);break;case"destroy":!function(e,i){e.unbreakable||i.unbreakable||c(e,i),void 0===e.getRadius()&&void 0!==i.getRadius()?e.destroy():void 0!==e.getRadius()&&void 0===i.getRadius()?i.destroy():void 0!==e.getRadius()&&void 0!==i.getRadius()&&(e.getRadius()>=i.getRadius()?i:e).destroy()}(e,i)}}var f=function(e){(0,a.Z)(o,e);var i=(0,l.Z)(o);function o(e){return(0,n.Z)(this,o),i.call(this,e)}return(0,s.Z)(o,[{key:"clear",value:function(){}},{key:"init",value:function(){}},{key:"interact",value:function(e,i){if(!e.destroyed&&!e.spawning){var o,n=this.container,s=e.getPosition(),a=e.getRadius(),l=n.particles.quadTree.queryCircle(s,2*a),u=(0,t.Z)(l);try{for(u.s();!(o=u.n()).done;){var d=o.value;if(e!==d&&d.options.collisions.enable&&e.options.collisions.mode===d.options.collisions.mode&&!d.destroyed&&!d.spawning){var c=d.getPosition(),f=d.getRadius();if(!(Math.abs(Math.round(s.z)-Math.round(c.z))>a+f))(0,r.Sp)(s,c)>a+f||v(e,d,i,n.retina.pixelRatio)}}}catch(p){u.e(p)}finally{u.f()}}}},{key:"isEnabled",value:function(e){return e.options.collisions.enable}},{key:"reset",value:function(){}}]),o}(r.$S)}}]);