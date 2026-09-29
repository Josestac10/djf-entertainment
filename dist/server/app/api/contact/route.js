(()=>{var a={};a.id=746,a.ids=[746],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},2192:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>I,patchFetch:()=>H,routeModule:()=>D,serverHooks:()=>G,workAsyncStorage:()=>E,workUnitAsyncStorage:()=>F});var d={};c.r(d),c.d(d,{POST:()=>C,runtime:()=>y});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(10641);let v=require("node:events"),w=require("node:tls");var x=c.n(w);let y="nodejs";function z(a,b=1e3){return String(a??"").trim().slice(0,b)}function A(a){return a.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}async function B({user:a,appPassword:b,to:c,replyTo:d,subject:e,html:f}){let g=x().connect({host:"smtp.gmail.com",port:465,servername:"smtp.gmail.com",rejectUnauthorized:!0});g.setTimeout(15e3,()=>g.destroy(Error("SMTP timeout"))),await (0,v.once)(g,"secureConnect");let h=g[Symbol.asyncIterator](),i="";async function j(){for(;!i.includes("\r\n");){let a=await h.next();if(a.done)throw Error("SMTP connection closed unexpectedly");i+=Buffer.from(a.value).toString("utf8")}let a=i.indexOf("\r\n"),b=i.slice(0,a);return i=i.slice(a+2),b}async function k(a){let b=[];for(;;){let c=await j();b.push(c);let d=c.match(/^(\d{3})\s/);if(d){let c=Number(d[1]);if(!a.includes(c))throw Error(`SMTP error ${c}: ${b.join(" | ")}`);return b.join("\n")}}}async function l(a,b){return g.write(`${a}\r
`),k(b)}try{await k([220]),await l("EHLO djfentertainment.com",[250]),await l("AUTH LOGIN",[334]),await l(Buffer.from(a).toString("base64"),[334]),await l(Buffer.from(b.replace(/\s+/g,"")).toString("base64"),[235]),await l(`MAIL FROM:<${a}>`,[250]),await l(`RCPT TO:<${c}>`,[250,251]),await l("DATA",[354]);let h=`=?UTF-8?B?${Buffer.from(e,"utf8").toString("base64")}?=`,i=[`From: DJF Entertainment Website <${a}>`,`To: ${c}`,`Reply-To: ${d}`,`Subject: ${h}`,"MIME-Version: 1.0","Content-Type: text/html; charset=UTF-8","Content-Transfer-Encoding: 8bit","",f].join("\r\n").split("\r\n").map(a=>a.startsWith(".")?`.${a}`:a).join("\r\n");g.write(`${i}\r
.\r
`),await k([250]),await l("QUIT",[221])}finally{g.end()}}async function C(a){try{let b=await a.json(),c={name:z(b.name,120),phone:z(b.phone,60),email:z(b.email,180),eventDate:z(b.eventDate,40),eventType:z(b.eventType,80),location:z(b.location,180),hours:z(b.hours,60),extras:z(b.extras,500),message:z(b.message,2e3),website:z(b.website,200)};if(c.website)return u.NextResponse.json({ok:!0});if(!c.name||!c.phone||!c.email||!c.eventDate||!c.eventType||!c.location||!c.message)return u.NextResponse.json({error:"Missing required fields."},{status:400});if(!/^\S+@\S+\.\S+$/.test(c.email))return u.NextResponse.json({error:"Invalid email address."},{status:400});let d=process.env.GMAIL_USER?.trim(),e=process.env.GMAIL_APP_PASSWORD?.trim(),f=process.env.CONTACT_TO_EMAIL?.trim()||d;if(!d||!e||!f)return console.error("Contact form email environment variables are not configured."),u.NextResponse.json({error:"Email delivery is not configured yet."},{status:503});let g=A(c.extras||"No extras specified").replace(/\r?\n/g,"<br />"),h=A(c.message).replace(/\r?\n/g,"<br />");c.phone.replace(/[^+\d]/g,"");let i=/^\d{4}-\d{2}-\d{2}$/.test(c.eventDate)?new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(`${c.eventDate}T00:00:00Z`)):c.eventDate,j=`
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="width:100%;background:#ffffff;margin:0;padding:0;"
          >
            <tr>
              <td align="center" style="padding:36px 16px;">

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="
                    width:100%;
                    max-width:680px;
                    background:#0d0d12;
                    border:1px solid #24242c;
                    border-radius:20px;
                    overflow:hidden;
                  "
                >

                  <!-- BLUE ACCENT -->
                  <tr>
                    <td
                      style="
                        height:5px;
                        background:#0529ED;
                        font-size:0;
                        line-height:0;
                      "
                    >
                      &nbsp;
                    </td>
                  </tr>

                  <!-- HEADER -->
                  <tr>
                    <td style="padding:32px 32px 26px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:11px;
                          font-weight:700;
                          letter-spacing:2.4px;
                          text-transform:uppercase;
                        "
                      >
                        DJF ENTERTAINMENT
                      </div>

                      <h1
                        style="
                          margin:10px 0 0 0;
                          color:#ffffff;
                          font-size:30px;
                          line-height:1.15;
                          font-weight:800;
                        "
                      >
                        New Event Inquiry
                      </h1>

                      <p
                        style="
                          margin:10px 0 0 0;
                          color:#a1a1aa;
                          font-size:14px;
                          line-height:1.6;
                        "
                      >
                        A new customer submitted an inquiry through the DJF Entertainment website.
                      </p>
                    </td>
                  </tr>

                  <!-- DIVIDER -->
                  <tr>
                    <td style="padding:0 32px;">
                      <div
                        style="
                          height:1px;
                          background:#24242c;
                          font-size:0;
                          line-height:0;
                        "
                      >
                        &nbsp;
                      </div>
                    </td>
                  </tr>

                  <!-- CLIENT INFORMATION -->
                  <tr>
                    <td style="padding:28px 32px 10px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:18px;
                        "
                      >
                        Client Information
                      </div>

                      <div
                        style="
                          color:#ffffff;
                          font-size:22px;
                          font-weight:700;
                          margin-bottom:8px;
                        "
                      >
                        ${A(c.name)}
                      </div>

                      <div
                        style="
                          color:#a1a1aa;
                          font-size:14px;
                          line-height:1.8;
                        "
                      >
                        ${A(c.email)}
                        <br />
                        ${A(c.phone)}
                      </div>

                    </td>
                  </tr>

                  <!-- EVENT DETAILS -->
                  <tr>
                    <td style="padding:24px 32px;">

                      <div
  style="
    background:#15151b;
    border:1px solid #24242c;
    border-radius:14px;
    padding:18px;
    margin-bottom:12px;
  "
>
  <div
    style="
      color:#71717a;
      font-size:9px;
      font-weight:700;
      letter-spacing:1.6px;
      text-transform:uppercase;
      margin-bottom:7px;
    "
  >
    Event Type
  </div>

  <div
    style="
      color:#ffffff;
      font-size:15px;
      font-weight:700;
      line-height:1.5;
    "
  >
    ${A(c.eventType)}
  </div>
</div>

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="width:100%;"
                      >

                        <tr>

                          <td
                            width="50%"
                            valign="top"
                            style="padding:0 6px 12px 0;"
                          >
                            <div
                              style="
                                background:#15151b;
                                border:1px solid #24242c;
                                border-radius:14px;
                                padding:18px;
                              "
                            >
                              <div
                                style="
                                  color:#71717a;
                                  font-size:9px;
                                  font-weight:700;
                                  letter-spacing:1.6px;
                                  text-transform:uppercase;
                                  margin-bottom:7px;
                                "
                              >
                                Event Date
                              </div>

                              <div
                                style="
                                  color:#ffffff;
                                  font-size:15px;
                                  font-weight:700;
                                  line-height:1.5;
                                "
                              >
                                ${A(i)}
                              </div>
                            </div>
                          </td>

                          <td
                            width="50%"
                            valign="top"
                            style="padding:0 0 12px 6px;"
                          >
                            <div
                              style="
                                background:#15151b;
                                border:1px solid #24242c;
                                border-radius:14px;
                                padding:18px;
                              "
                            >
                              <div
                                style="
                                  color:#71717a;
                                  font-size:9px;
                                  font-weight:700;
                                  letter-spacing:1.6px;
                                  text-transform:uppercase;
                                  margin-bottom:7px;
                                "
                              >
                                Service Hours
                              </div>

                              <div
                                style="
                                  color:#ffffff;
                                  font-size:15px;
                                  font-weight:700;
                                  line-height:1.5;
                                "
                              >
                                ${A(c.hours||"Not specified")}
                              </div>
                            </div>
                          </td>

                        </tr>

                      </table>

                      <!-- LOCATION -->
                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:18px;
                          margin-top:2px;
                        "
                      >
                        <div
                          style="
                            color:#71717a;
                            font-size:9px;
                            font-weight:700;
                            letter-spacing:1.6px;
                            text-transform:uppercase;
                            margin-bottom:7px;
                          "
                        >
                          Location / Venue
                        </div>

                        <div
                          style="
                            color:#ffffff;
                            font-size:15px;
                            line-height:1.6;
                          "
                        >
                          ${A(c.location)}
                        </div>
                      </div>

                    </td>
                  </tr>

                  <!-- EXTRAS -->
                  <tr>
                    <td style="padding:0 32px 26px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:12px;
                        "
                      >
                        Lighting / Extras
                      </div>

                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:18px;
                          color:#d4d4d8;
                          font-size:14px;
                          line-height:1.7;
                        "
                      >${g}</div>
                    </td>
                  </tr>

                  <!-- MESSAGE -->
                  <tr>
                    <td style="padding:0 32px 32px 32px;">

                      <div
                        style="
                          color:#5270ff;
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                          margin-bottom:12px;
                        "
                      >
                        Event Description
                      </div>

                      <div
                        style="
                          background:#15151b;
                          border:1px solid #24242c;
                          border-radius:14px;
                          padding:20px;
                          color:#d4d4d8;
                          font-size:14px;
                          line-height:1.8;
                        "
                      >${h}</div>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td
                      style="
                        background:#09090d;
                        border-top:1px solid #24242c;
                        padding:22px 32px;
                        text-align:center;
                      "
                    >
                      <div
                        style="
                          color:#ffffff;
                          font-size:12px;
                          font-weight:700;
                          letter-spacing:1.5px;
                        "
                      >
                        DJF ENTERTAINMENT
                      </div>

                      <div
                        style="
                          color:#71717a;
                          font-size:11px;
                          margin-top:6px;
                          line-height:1.5;
                        "
                      >
                        Sioux Falls, South Dakota
                        <br />
                        Inquiry submitted through the DJF Entertainment website
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
      </html>
      `;return await B({user:d,appPassword:e,to:f,replyTo:c.email,subject:`New DJF inquiry - ${c.eventType} - ${c.name}`,html:j}),u.NextResponse.json({ok:!0})}catch(a){return console.error("Contact form error:",a),u.NextResponse.json({error:"Unable to send inquiry right now."},{status:500})}}let D=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},distDir:"dist",relativeProjectDir:"",resolvedPagePath:"C:\\Users\\Usuario\\Desktop\\P\xe1ginas Web Pr\xe1cticas\\djf-entertainment\\app\\api\\contact\\route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:E,workUnitAsyncStorage:F,serverHooks:G}=D;function H(){return(0,g.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:F})}async function I(a,b,c){var d;let e="/api/contact/route";"/index"===e&&(e="/");let g=await D.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:y,routerServerContext:z,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,resolvedPathname:C}=g,E=(0,j.normalizeAppPath)(e),F=!!(y.dynamicRoutes[E]||y.routes[C]);if(F&&!x){let a=!!y.routes[C],b=y.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||D.isDev||x||(G="/index"===(G=C)?"/":G);let H=!0===D.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:y,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>D.onRequestError(a,b,d,z)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>D.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&A&&B&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await D.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:A})},z),b}},l=await D.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",A?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(b instanceof s.NoFallbackError||await D.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:A})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[331,692],()=>b(b.s=2192));module.exports=c})();