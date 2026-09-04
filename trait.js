/* ============================================================================
   trait.js ── 資質徹底解説シリーズ（6資質）の共通スクリプト
   2026-09-04 きょう（図解・デザイン担当）

   守っていること
   ・**JS が無くても全文が読める。** ここでやるのは3つだけ。
       ① バルコニー／地下室チェックの集計（本文はJS無しでも全部見える）
       ② ワーク欄の下書きをこの端末にだけ残す（localStorage・失敗しても黙って諦める）
       ③ 印刷ボタン（JS無しでは出さない。ブラウザの印刷そのものは効く）
   ・断定しない。出すのは「ここ最近の出方はどちらに寄ったか」だけで、
     人を規定する文（「あなたは〜な人です」）は1つも作らない
   ・width のアニメは使わない（doc-check の走行中ガードに掴まれるため transform で動かす）
   ========================================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---- ① バルコニー／地下室 ------------------------------------------- */
  var wrap = document.querySelector('[data-bb]');
  if (wrap) {
    var boxes = wrap.querySelectorAll('input[type="checkbox"][data-side]');
    var barBal = wrap.querySelector('[data-bar="bal"]');
    var barBas = wrap.querySelector('[data-bar="bas"]');
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
      if (barBal) barBal.style.transform = 'scaleX(' + (total.bal ? n.bal / total.bal : 0) + ')';
      if (barBas) barBas.style.transform = 'scaleX(' + (total.bas ? n.bas / total.bas : 0) + ')';
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

    var printBtn = work.querySelector('[data-print]');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

    var clearBtn = work.querySelector('[data-clear]');
    if (clearBtn) clearBtn.addEventListener('click', function () {
      if (!window.confirm('書いた3つの欄を消します。よろしいですか。')) return;
      Array.prototype.forEach.call(fields, function (f) {
        f.value = '';
        if (store) { try { store.removeItem(key + f.id); } catch (e) { /* 諦める */ } }
      });
      if (note) note.textContent = '消しました';
    });
  }
})();
