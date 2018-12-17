const cacheName = 'CountryForLife';

const preCache = ['images/flags/kz.svg', 'images/right_arrows.png', 'index.html', 'images/flags/la.svg', 'images/flags/ae.svg', 'images/flags/ag.svg', 'images/flags/ai.svg', 'images/flags/am.svg', 'images/flags/al.svg', 'images/flags/ao.svg', 'images/flags/aq.svg', 'images/flags/ar.svg', 'images/flags/as.svg', 'images/flags/at.svg', 'images/flags/au.svg', 'images/flags/aw.svg', 'images/flags/ax.svg', 'images/flags/az.svg', 'images/flags/ba.svg', 'images/flags/bb.svg', 'images/flags/bd.svg', 'images/flags/be.svg', 'images/flags/bf.svg', 'images/flags/bg.svg', 'images/flags/bh.svg', 'images/flags/bi.svg', 'images/flags/bl.svg', 'images/flags/bj.svg', 'images/flags/bm.svg', 'images/flags/bn.svg', 'images/flags/bo.svg', 'images/flags/bq.svg', 'images/flags/br.svg', 'images/flags/brl.svg', 'images/flags/bs.svg', 'images/flags/bt.svg', 'images/flags/bv.svg', 'images/flags/bw.svg', 'images/flags/by.svg', 'images/flags/bz.svg', 'images/flags/ca.svg', 'images/flags/cc.svg', 'images/flags/cd.svg', 'images/flags/cf.svg', 'images/flags/cg.svg', 'images/flags/ch.svg', 'images/flags/ci.svg', 'images/flags/ck.svg', 'images/flags/cl.svg', 'images/flags/cm.svg', 'images/flags/cn.svg', 'images/flags/cr.svg', 'images/flags/co.svg', 'images/flags/cu.svg', 'images/flags/cv.svg', 'images/flags/cw.svg', 'images/flags/cx.svg', 'images/flags/cy.svg', 'images/flags/cz.svg', 'images/flags/de.svg', 'images/flags/dj.svg', 'images/flags/dk.svg', 'images/flags/dm.svg', 'images/flags/do.svg', 'images/flags/dz.svg', 'images/flags/ec.svg', 'images/flags/ee.svg', 'images/flags/eg.svg', 'images/flags/eh.svg', 'images/flags/eo.svg', 'images/flags/er.svg', 'images/flags/es.svg', 'images/flags/et.svg', 'images/flags/eu.svg', 'images/flags/fi.svg', 'images/flags/fj.svg', 'images/flags/fk.svg', 'images/flags/fo.svg', 'images/flags/fm.svg', 'images/flags/fr.svg', 'images/flags/gb.svg', 'images/flags/ga.svg', 'images/flags/gd.svg', 'images/flags/ge.svg', 'images/flags/gf.svg', 'images/flags/gg.svg', 'images/flags/gh.svg', 'images/flags/gl.svg', 'images/flags/gm.svg', 'images/flags/gi.svg', 'images/flags/gn.svg', 'images/flags/gp.svg', 'images/flags/gr.svg', 'images/flags/gq.svg', 'images/flags/gs.svg', 'images/flags/gt.svg', 'images/flags/gu.svg', 'images/flags/gw.svg', 'images/flags/gy.svg', 'images/flags/hk.svg', 'images/flags/hm.svg', 'images/flags/hn.svg', 'images/flags/hr.svg', 'images/flags/ht.svg', 'images/flags/hu.svg', 'images/flags/id.svg', 'images/flags/ie.svg', 'images/flags/il.svg', 'images/flags/im.svg', 'images/flags/in.svg', 'images/flags/io.svg', 'images/flags/iq.svg', 'images/flags/ir.svg', 'images/flags/is.svg', 'images/flags/it.svg', 'images/flags/je.svg', 'images/flags/jm.svg', 'images/flags/jo.svg', 'images/flags/jp.svg', 'images/flags/ke.svg', 'images/flags/kg.svg', 'images/flags/kh.svg', 'images/flags/ki.svg', 'images/flags/km.svg', 'images/flags/kn.svg', 'images/flags/kp.svg', 'images/flags/kr.svg', 'images/flags/kw.svg', 'images/flags/ky.svg', 'images/logo.png', 'images/flags/af.svg', 'images/flags/lb.svg', 'images/flags/lc.svg', 'images/flags/li.svg', 'images/flags/lk.svg', 'images/flags/lr.svg', 'images/flags/ls.svg', 'images/flags/lu.svg', 'images/flags/lt.svg', 'images/flags/lv.svg', 'images/flags/ly.svg', 'images/flags/ma.svg', 'images/flags/mc.svg', 'images/flags/md.svg', 'images/flags/me.svg', 'images/flags/mf.svg', 'images/flags/mg.svg', 'images/flags/mh.svg', 'images/flags/mk.svg', 'images/flags/ml.svg', 'images/flags/mm.svg', 'images/flags/mn.svg', 'images/flags/mo.svg', 'images/flags/mp.svg', 'images/flags/mq.svg', 'images/flags/mr.svg', 'images/flags/ms.svg', 'images/flags/mt.svg', 'images/flags/mu.svg', 'images/flags/mv.svg', 'images/flags/mw.svg', 'images/flags/mx.svg', 'images/flags/my.svg', 'images/flags/mz.svg', 'images/flags/na.svg', 'images/flags/nc.svg', 'images/flags/ne.svg', 'images/flags/nf.svg', 'images/flags/ng.svg', 'images/flags/ni.svg', 'images/flags/nl.svg', 'images/flags/no.svg', 'images/flags/np.svg', 'images/flags/nr.svg', 'images/flags/nu.svg', 'images/flags/nz.svg', 'images/flags/om.svg', 'images/flags/pa.svg', 'images/flags/pe.svg', 'images/flags/pf.svg', 'images/flags/pg.svg', 'images/flags/ph.svg', 'images/flags/pk.svg', 'images/flags/pl.svg', 'images/flags/pm.svg', 'images/flags/pn.svg', 'images/flags/pr.svg', 'images/flags/ps.svg', 'images/flags/pt.svg', 'images/flags/pw.svg', 'images/flags/py.svg', 'images/flags/qa.svg', 'images/flags/re.svg', 'images/flags/ro.svg', 'images/flags/ru.svg', 'images/flags/rw.svg', 'images/flags/sa.svg', 'images/flags/sb.svg', 'images/flags/sc.svg', 'images/flags/sd.svg', 'images/flags/se.svg', 'images/flags/rs.svg', 'images/flags/sg.svg', 'images/flags/sh.svg', 'images/flags/si.svg', 'images/flags/sj.svg', 'images/flags/sk.svg', 'images/flags/sl.svg', 'images/flags/sm.svg', 'images/flags/sn.svg', 'images/flags/so.svg', 'images/flags/sr.svg', 'images/flags/ss.svg', 'images/flags/st.svg', 'images/flags/sv.svg', 'images/flags/sx.svg', 'images/flags/sy.svg', 'images/flags/sz.svg', 'images/flags/tc.svg', 'images/flags/td.svg', 'images/flags/tf.svg', 'images/flags/tg.svg', 'images/flags/th.svg', 'images/flags/tj.svg', 'images/flags/tl.svg', 'images/flags/tk.svg', 'images/flags/tn.svg', 'images/flags/to.svg', 'images/flags/tr.svg', 'images/flags/tm.svg', 'images/flags/tt.svg', 'images/flags/tv.svg', 'images/flags/tw.svg', 'images/flags/tz.svg', 'images/flags/ua.svg', 'images/flags/ug.svg', 'images/flags/um.svg', 'images/flags/us.svg', 'images/flags/uy.svg', 'images/flags/uz.svg', 'images/flags/vc.svg', 'images/flags/va.svg', 'images/flags/ve.svg', 'images/flags/vg.svg', 'images/flags/vi.svg', 'images/flags/vn.svg', 'images/flags/vu.svg', 'images/flags/wf.svg', 'images/flags/ye.svg', 'images/flags/ws.svg', 'images/flags/yt.svg', 'images/flags/za.svg', 'images/flags/zm.svg', 'images/flags/zw.svg', 'images/flags/zz.svg', 'images/left_arrows.png', 'images/flags/ad.svg', 'bundle.js', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', 'favicon.ico'];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(preCache);
  }))
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim(),
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  const {url} = event.request;

  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  if (event.request.mode === 'navigate') {
    event.respondWith(caches.match('index.html'));
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (url.startsWith('https://restcountries') || url.startsWith('https://translate.yandex')) {
          if (!navigator.onLine) {
            if (response) {
              return response;
            } else {
              const responseInit = {
                status: 204,
                statusText: 'No content',
              };
              const newResponse = new Response(null, responseInit);

              return newResponse;
            }
          }
        }

        if (response) {
          return response;
        }
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(response.status !== 200) {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
