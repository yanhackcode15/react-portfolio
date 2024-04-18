"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[944],{944:function(i,e,a){a.r(e),a.d(e,{BaseMover:function(){return s}});var n=a(5671),t=a(3144),o=a(450);function r(i,e,a,n,t,r){!function(i,e){var a,n=i.options,t=n.move.path;if(!t.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=e.value);var r=null===(a=i.pathGenerator)||void 0===a?void 0:a.generate(i,e);r&&i.velocity.addTo(r);t.clamp&&(i.velocity.x=(0,o.uZ)(i.velocity.x,-1,1),i.velocity.y=(0,o.uZ)(i.velocity.y,-1,1));i.lastPathTime-=i.pathDelay}(i,r);var s=i.gravity,l=null!==s&&void 0!==s&&s.enable&&s.inverse?-1:1;t&&a&&(i.velocity.x+=t*r.factor/(60*a)),null!==s&&void 0!==s&&s.enable&&a&&(i.velocity.y+=l*(s.acceleration*r.factor)/(60*a));var c=i.moveDecay;i.velocity.multTo(c);var v=i.velocity.mult(a);null!==s&&void 0!==s&&s.enable&&n>0&&(!s.inverse&&v.y>=0&&v.y>=n||s.inverse&&v.y<=0&&v.y<=-n)&&(v.y=l*n,a&&(i.velocity.y=v.y/a));var p=i.options.zIndex,y=Math.pow(1-i.zIndexFactor,p.velocityRate);v.multTo(y);var u=i.position;u.addTo(v),e.vibrate&&(u.x+=Math.sin(u.x*Math.cos(u.y)),u.y+=Math.cos(u.y*Math.sin(u.x)))}var s=function(){function i(){(0,n.Z)(this,i)}return(0,t.Z)(i,[{key:"init",value:function(i){var e=i.options.move.gravity;i.gravity={enable:e.enable,acceleration:(0,o.Gu)(e.acceleration),inverse:e.inverse},function(i){var e,a=i.container,n=i.options.move.spin;if(n.enable){var t=null!==(e=n.position)&&void 0!==e?e:{x:50,y:50},r={x:.01*t.x*a.canvas.size.width,y:.01*t.y*a.canvas.size.height},s=i.getPosition(),l=(0,o.Sp)(s,r),c=(0,o.Gu)(n.acceleration);i.retina.spinAcceleration=c*a.retina.pixelRatio,i.spin={center:r,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:l,acceleration:i.retina.spinAcceleration}}}(i)}},{key:"isEnabled",value:function(i){return!i.destroyed&&i.options.move.enable}},{key:"move",value:function(i,e){var a,n,t,s,l,c=i.options,v=c.move;if(v.enable){var p=i.container,y=p.retina.pixelRatio;null!==(n=(a=i.retina).moveSpeed)&&void 0!==n||(a.moveSpeed=(0,o.Gu)(v.speed)*y),null!==(s=(t=i.retina).moveDrift)&&void 0!==s||(t.moveDrift=(0,o.Gu)(i.options.move.drift)*y);var u=function(i){return i.slow.inRange?i.slow.factor:1}(i),d=i.retina.moveSpeed*p.retina.reduceFactor,f=i.retina.moveDrift,x=(0,o.KI)(c.size.value)*y,h=d*(v.size?i.getRadius()/x:1)*u*(e.factor||1)/2,m=null!==(l=i.retina.maxSpeed)&&void 0!==l?l:p.retina.maxSpeed;v.spin.enable?function(i,e){var a=i.container;if(i.spin){var n={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*n.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*n.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;var t=Math.max(a.canvas.size.width,a.canvas.size.height),o=.5*t;i.spin.radius>o?(i.spin.radius=o,i.spin.acceleration*=-1):i.spin.radius<0&&(i.spin.radius=0,i.spin.acceleration*=-1),i.spin.angle+=.01*e*(1-i.spin.radius/t)}}(i,h):r(i,v,h,m,f,e),function(i){var e,a,n=i.initialPosition,t=(0,o.oW)(n,i.position),r=t.dx,s=t.dy,l=Math.abs(r),c=Math.abs(s),v=i.retina.maxDistance,p=v.horizontal,y=v.vertical;if(p||y){var u=null!==(a=y&&c>=y)&&void 0!==a&&a;if((null!==(e=p&&l>=p)&&void 0!==e&&e||u)&&!i.misplaced)i.misplaced=!!p&&l>p||!!y&&c>y,p&&(i.velocity.x=.5*i.velocity.y-i.velocity.x),y&&(i.velocity.y=.5*i.velocity.x-i.velocity.y);else if((!p||l<p)&&(!y||c<y)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){var d=i.position,f=i.velocity;p&&(d.x<n.x&&f.x<0||d.x>n.x&&f.x>0)&&(f.x*=-(0,o.sZ)()),y&&(d.y<n.y&&f.y<0||d.y>n.y&&f.y>0)&&(f.y*=-(0,o.sZ)())}}}(i)}}}]),i}()}}]);