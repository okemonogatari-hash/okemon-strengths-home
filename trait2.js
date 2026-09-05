/* ============================================================================
   trait2.js ── 資質徹底解説シリーズ・第2骨（5画面版）の共通スクリプト
   2026-09-05 きょう（図解・デザイン担当）

   trait.js から変えたのは2つだけ。
   ・バルコニー／地下室のメーター（塗ったバー2本）を捨て、数字と一文だけにした
   ・右stickyの目次に「いま読んでいる章」を出した（Stripeが持っていてうちが
     持っていなかった唯一の機能。実測ノート 2026-09-05 §3）

   守っていること（第1骨から継続）
   ・JSが無くても全文が読める。断定しない。人を規定する文は作らない
   ・width のアニメは使わない（doc-check の走行中ガード）
   ========================================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---- ① バルコニー／地下室 ------------------------------------------- */
  var wrap = document.querySelector('[data-bb]');
  if (wrap) {
    var boxes = wrap.querySelectorAll('input[type="checkbox"][data-side]');
    var numBal = wrap.querySelector('[data-num="bal"]');
    var numBas = wrap.querySelector('[data-num="bas"]');
    var say = wrap.querySelector('[data-say]');

    var total = { bal: 0, bas: 0 };
    Array.prototype.forEach.call(boxes, function (b) { total[b.dataset.side]++; });

    /* 出方の読み。主語は「ここ最近」であって、人ではない */
    function read(bal, bas) {
      if (bal + bas === 0) {
        return 'まだ印がついていません。ここ1〜2週間を思い出しながら、心当たりのある行に触れてみてください。';
      }
      if (bal - bas >= 2) {
        return 'ここ最近の出方は、日なた側に寄っていました。うまくいっている時の使い方を、いま自分の言葉で説明できる状態です。下の「ワーク」の受容する！に、その場面をそのまま書けます。';
      }
      if (bas - bal >= 2) {
        return 'ここ最近の出方は、地下室側に寄っていました。資質が変わったのではなく、出方が変わっているだけです。下のふたつが、Gallup公式が置いている出口です。';
      }
      return '日なた側と地下室側、どちらにも印がつきました。同じ資質が場面によって別の出方をするのは、よくあることです。どの場面で分かれたのかを、あとで思い出してみてください。';
    }

    function update() {
      var n = { bal: 0, bas: 0 };
      Array.prototype.forEach.call(boxes, function (b) { if (b.checked) n[b.dataset.side]++; });
      if (numBal) numBal.textContent = n.bal + ' / ' + total.bal;
      if (numBas) numBas.textContent = n.bas + ' / ' + total.bas;
      if (say) say.textContent = read(n.bal, n.bas);
    }

    Array.prototype.forEach.call(boxes, function (b) { b.addEventListener('change', update); });
    update();
  }

  /* ---- ② ワーク欄の下書きを、この端末にだけ残す ------------------------ */
  var work = document.querySelector('[data-work]');
  if (work) {
    var key = 'trait-work-' + (work.dataset.work || 'x') + '-';
    var fields = work.querySelectorAll('textarea[id]');
    var note = work.querySelector('[data-save-note]');

    var store = (function () {
      try {
        var t = '__t'; window.localStorage.setItem(t, '1'); window.localStorage.removeItem(t);
        return window.localStorage;
      } catch (e) { return null; }
    })();

    if (store) {
      Array.prototype.forEach.call(fields, function (f) {
        try { var v = store.getItem(key + f.id); if (v) f.value = v; } catch (e) { /* 諦める */ }
        f.addEventListener('input', function () {
          try {
            store.setItem(key + f.id, f.value);
            if (note) note.textContent = 'この端末に下書きを残しました（サーバーには送っていません）';
          } catch (e) { /* 容量切れ等。書けなくても入力は止めない */ }
        });
      });
      if (note) note.textContent = '書いた内容は、この端末のブラウザにだけ残ります';
    }

    // 印刷は⑤の書き込み欄だけ。5画面ぜんぶ刷ると紙が増える
    var printBtn = work.querySelector('[data-print]');
    if (printBtn) printBtn.addEventListener('click', function () {
      var body = document.body;
      var off = function () { body.classList.remove('print-work'); };
      body.classList.add('print-work');
      window.addEventListener('afterprint', off, { once: true });
      window.addEventListener('focus', off, { once: true });
      window.print();
    });

    var clearBtn = work.querySelector('[data-clear]');
    if (clearBtn) clearBtn.addEventListener('click', function () {
      if (!window.confirm('書いた' + fields.length + 'つの欄を消します。よろしいですか。')) return;
      Array.prototype.forEach.call(fields, function (f) {
        f.value = '';
        if (store) { try { store.removeItem(key + f.id); } catch (e) { /* 諦める */ } }
      });
      if (note) note.textContent = '消しました';
    });
  }

  /* ---- ③ 目次に、いま読んでいる章を出す ------------------------------- */
  var links = document.querySelectorAll('.toc a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    Array.prototype.forEach.call(links, function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) { map[el.id] = a; }
    });
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting ? e.boundingClientRect.top : null; });
      var here = null;
      Object.keys(map).forEach(function (id) { if (seen[id] !== null && seen[id] !== undefined) { if (here === null) here = id; } });
      Array.prototype.forEach.call(links, function (a) { a.classList.remove('is-here'); });
      if (here && map[here]) { map[here].classList.add('is-here'); }
    }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }
})();
