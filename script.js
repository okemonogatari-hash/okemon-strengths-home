const themes = [
  {
    name: "達成欲",
    domain: "実行力",
    catch: "走り続けるエンジン",
    short: "完了と前進に喜びを感じる。",
    about: "一日の終わりに「今日も進んだ」と感じたい人。タスクを積み上げ、成果を目で見て確認できるほど力が湧きます。",
    likes: ["完了した実感", "ゴールの積み重ね", "生産性の高い一日"],
    dislikes: ["中断され続けること", "何も達成できない日", "怠惰な空気"],
    tip: "タスクを小さく分け、完了ログを残すと燃料になります。休むことも成果を続けるための設計に入れておくと安定します。"
  },
  {
    name: "アレンジ",
    domain: "実行力",
    catch: "リソースを組み替える現場監督",
    short: "状況に合わせて段取りを変える。",
    about: "人・時間・情報・道具を見ながら、最もよい組み合わせを探す人。予定通りより、今ある材料で最適化することに強みがあります。",
    likes: ["裁量のある段取り", "複数タスクの整理", "その場に合わせた最適化"],
    dislikes: ["硬直した手順", "変更できない計画", "使える材料を無視されること"],
    tip: "役割を全部背負わず、得意な人に渡すこともアレンジの力。自分を実務者だけでなくプロデューサーとして扱うと広がります。"
  },
  {
    name: "信念",
    domain: "実行力",
    catch: "譲れない価値観の芯",
    short: "大切なものに沿って動く。",
    about: "行動の奥に、はっきりした価値観や意味を持つ人。納得できる目的があると、ぶれずに力を出せます。",
    likes: ["価値観に合う仕事", "誠実な関係", "意味のある貢献"],
    dislikes: ["その場しのぎの判断", "大切なものを軽んじられること", "目的のない忙しさ"],
    tip: "迷ったときは、損得よりも「自分が大切にしたい基準」を言語化すると進みやすくなります。"
  },
  {
    name: "公平性",
    domain: "実行力",
    catch: "みんなが安心できるルール設計",
    short: "一貫性と納得感を大切にする。",
    about: "人によって扱いが変わりすぎることに違和感を覚える人。透明性のあるルールや、公平な運用で場を安定させます。",
    likes: ["基準が明確な環境", "平等な扱い", "納得できるルール"],
    dislikes: ["えこひいき", "気分で変わる判断", "不透明な運用"],
    tip: "ルールを守るだけでなく、ルールの目的まで共有すると、あなたの公平性は人を縛る力ではなく安心をつくる力になります。"
  },
  {
    name: "慎重さ",
    domain: "実行力",
    catch: "見えないリスクを照らすライト",
    short: "失敗を防ぐために先回りする。",
    about: "決める前に危険や落とし穴を確認する人。怖がりではなく、関わる人や成果を守るためのセンサーを持っています。",
    likes: ["十分な検討時間", "リスクを話せる場", "事前準備"],
    dislikes: ["急かされる決断", "雑な見切り発車", "リスクを無視する空気"],
    tip: "リスクを出したあとに、代替案や期限も一緒に出すと、止める人ではなく成功確率を上げる人として伝わります。"
  },
  {
    name: "規律性",
    domain: "実行力",
    catch: "整ったリズムで力を出す人",
    short: "秩序と習慣で安定する。",
    about: "予測できる流れや整った環境があるほど力を発揮する人。仕組み化、習慣化、手順化に強みがあります。",
    likes: ["決まった手順", "整理された場所", "安定したリズム"],
    dislikes: ["場当たり的な進行", "散らかった情報", "予定の混乱"],
    tip: "自分のための型を先につくると安心して進めます。周りには、型の理由も一緒に説明すると協力が得やすくなります。"
  },
  {
    name: "目標志向",
    domain: "実行力",
    catch: "ゴールへ一直線の照準",
    short: "目的地が見えると集中する。",
    about: "やるべきことが定まると、迷いを減らして進める人。ゴールに関係ないものをそぎ落とす力があります。",
    likes: ["明確な目標", "優先順位", "集中できる時間"],
    dislikes: ["目的のない会議", "横道にそれ続けること", "ゴール不明の作業"],
    tip: "大きな目標だけでなく、今週の焦点を一つ置くと動きやすくなります。周りには、何を優先しているかを共有しましょう。"
  },
  {
    name: "責任感",
    domain: "実行力",
    catch: "約束を守り抜く背骨",
    short: "引き受けたことを最後まで果たす。",
    about: "一度引き受けたことに強い誠実さを持つ人。信頼されるほど力が出ますが、抱え込みすぎには注意が必要です。",
    likes: ["信頼されること", "約束を果たすこと", "誠実な関係"],
    dislikes: ["無責任な態度", "約束を軽く扱われること", "中途半端な放置"],
    tip: "すべてにYesと言うことが責任ではありません。守るべき約束を守るために、引き受ける量を調整しましょう。"
  },
  {
    name: "回復志向",
    domain: "実行力",
    catch: "問題を見つけて直す修復家",
    short: "不具合を改善するほど燃える。",
    about: "うまくいっていないものを見ると、原因を探して直したくなる人。課題解決、改善、リカバリーで力を発揮します。",
    likes: ["問題解決", "改善の余地", "原因を突き止めること"],
    dislikes: ["問題の放置", "原因不明のまま進むこと", "改善を拒まれること"],
    tip: "直す力は強い武器です。人に向けるときは、相手を問題扱いせず、仕組みや環境を一緒に直す姿勢が大切です。"
  },
  {
    name: "活発性",
    domain: "影響力",
    catch: "まず動かして風を起こす人",
    short: "考えるより始めると動き出す。",
    about: "じっと考え続けるより、まず動いて学ぶ人。最初の一歩をつくることで、停滞した場に勢いを生みます。",
    likes: ["すぐ試すこと", "スタートの瞬間", "行動しながら学ぶこと"],
    dislikes: ["長すぎる検討", "動けない空気", "やる前から止められること"],
    tip: "動き出す力に、短いふり返りを足すと精度が上がります。始める人として、終わらせる人と組むのも有効です。"
  },
  {
    name: "指令性",
    domain: "影響力",
    catch: "場の核心をまっすぐ示す人",
    short: "必要なことをはっきり言う。",
    about: "あいまいな空気に切り込み、進む方向を示せる人。衝突を恐れず、必要な決断や対話を前に進めます。",
    likes: ["率直な対話", "主導権", "腹を割った関係"],
    dislikes: ["遠回しすぎる会話", "責任の所在が曖昧な場", "本音を避ける空気"],
    tip: "強さに、相手への敬意を添えると伝わりやすくなります。何を守るためにはっきり言うのかを先に置きましょう。"
  },
  {
    name: "コミュニケーション",
    domain: "影響力",
    catch: "言葉で人を動かす翻訳者",
    short: "伝えることで価値を生む。",
    about: "考えや体験を、相手に届く言葉へ変える人。話す、書く、たとえる、場を盛り上げることで力を発揮します。",
    likes: ["話す機会", "表現する場", "人に伝わった実感"],
    dislikes: ["黙って処理するだけの場", "表現を制限されること", "反応がない環境"],
    tip: "伝える前に相手が受け取りやすい形を選ぶと強いです。言葉の力を、理解や行動につながる出口へ向けましょう。"
  },
  {
    name: "競争性",
    domain: "影響力",
    catch: "勝負で火がつくアスリート脳",
    short: "比較や勝利がエネルギーになる。",
    about: "基準や相手がいると燃える人。負けたくない気持ちを、成長や成果へ変えられます。",
    likes: ["勝ち負けが見える場", "高い基準", "ライバルの存在"],
    dislikes: ["勝負を避ける空気", "評価基準の曖昧さ", "ぬるい目標"],
    tip: "勝ちたい対象を人だけでなく、昨日の自分や目標値にも広げると、健全に燃え続けられます。"
  },
  {
    name: "最上志向",
    domain: "影響力",
    catch: "最高を磨き上げる審美眼",
    short: "良いものをもっと良くする。",
    about: "平均点で満足せず、強みや良い素材をさらに伸ばす人。質、一流、洗練、効率に強く反応します。",
    likes: ["一流に触れること", "強みを伸ばすこと", "質を高める時間"],
    dislikes: ["ほどほどでいい空気", "弱み矯正ばかり", "非効率な作業"],
    tip: "全部を最高にしようとすると疲れます。どこにこだわるかを選ぶと、あなたの美学が成果に変わります。"
  },
  {
    name: "自己確信",
    domain: "影響力",
    catch: "自分の内側に羅針盤がある人",
    short: "自分の判断を信じて進む。",
    about: "自分ならできる、自分なら選べるという感覚を持つ人。未知の場でも、自分の判断を軸に前へ進めます。",
    likes: ["裁量", "自分で決めること", "信頼されて任されること"],
    dislikes: ["過度な管理", "自分の感覚を否定されること", "指示待ちの環境"],
    tip: "自信を独りよがりにせず、判断の根拠や目的を言葉にすると、周りを安心させながら進めます。"
  },
  {
    name: "自我",
    domain: "影響力",
    catch: "意味ある存在として貢献したい人",
    short: "重要な役割を担うと燃える。",
    about: "自分だからこそできる貢献を求める人。期待され、指名され、意味のある成果につながるほど力が出ます。",
    likes: ["指名されること", "影響のある仕事", "存在価値が伝わる場"],
    dislikes: ["その他大勢扱い", "貢献が無反応で終わること", "小さく扱われること"],
    tip: "認められたい気持ちは悪者ではありません。何に貢献したいのかを明確にすると、自我は推進力になります。"
  },
  {
    name: "社交性",
    domain: "影響力",
    catch: "出会いを入口に変える人",
    short: "初対面や場づくりで力を出す。",
    about: "新しい人との接点を楽しみ、場の入口を開ける人。人と人をつなぎ、空気を動かします。",
    likes: ["新しい出会い", "会話の始まり", "にぎやかな場"],
    dislikes: ["閉じた空気", "会話のない場所", "入口がない関係"],
    tip: "出会いを広げる力に、後から関係を深める仕組みを足すと、ただの交流で終わらず資産になります。"
  },
  {
    name: "適応性",
    domain: "人間関係構築力",
    catch: "今に合わせてしなやかに動く人",
    short: "変化に合わせて流れをつかむ。",
    about: "予定外のことが起きても、その場に合わせて動ける人。未来を固めすぎるより、今この瞬間の流れに強いです。",
    likes: ["余白のある予定", "変化への柔軟さ", "その場の判断"],
    dislikes: ["固定されすぎた計画", "未来を決め切ること", "変化を責められること"],
    tip: "柔軟さは強みです。大枠だけ決めて、細部はその場で調整する設計にすると安心して進めます。"
  },
  {
    name: "運命思考",
    domain: "人間関係構築力",
    catch: "すべてはつながっていると感じる人",
    short: "関係性や意味のつながりを見る。",
    about: "人や出来事の奥にあるつながりを感じる人。偶然に見えるものにも意味や縁を見出し、広い視点で捉えます。",
    likes: ["ご縁を感じる場", "大きな意味", "つながりのある関係"],
    dislikes: ["分断された空気", "損得だけの関係", "意味を切り捨てる話"],
    tip: "感じているつながりを、相手にも伝わる言葉にすると強いです。抽象と現実の橋をかけましょう。"
  },
  {
    name: "成長促進",
    domain: "人間関係構築力",
    catch: "小さな芽を見つける育て役",
    short: "人の伸びしろに目が向く。",
    about: "まだ小さな変化や成長の兆しに気づける人。相手の可能性を信じ、育つ過程を見守ることに喜びがあります。",
    likes: ["成長の瞬間", "育成や伴走", "小さな進歩を喜ぶこと"],
    dislikes: ["人を諦める空気", "変化を見ない評価", "成果だけで人を見ること"],
    tip: "相手の伸びしろを見る力に、境界線も添えましょう。育てることと背負いすぎることは別です。"
  },
  {
    name: "共感性",
    domain: "人間関係構築力",
    catch: "感情を察するアンテナ",
    short: "言葉にならない気持ちに気づく。",
    about: "場の空気や人の感情を自然に感じ取る人。相手の心の温度を読み、安心感や信頼をつくります。",
    likes: ["感情を大切にする場", "素直な表現", "あたたかい関係"],
    dislikes: ["冷たい反応", "感情を無視した効率優先", "人をデータだけで見ること"],
    tip: "感じ取れるからこそ疲れやすさもあります。自分の感情と相手の感情を分ける時間を持つと、長く活かせます。"
  },
  {
    name: "調和性",
    domain: "人間関係構築力",
    catch: "対立をほどく合意形成の人",
    short: "衝突より合意点を探す。",
    about: "人と人がぶつかるより、共通点や現実的な落としどころを探す人。場の平和と前進を両立させようとします。",
    likes: ["穏やかな対話", "現実的な合意", "摩擦の少ない関係"],
    dislikes: ["感情的な対立", "無駄な争い", "正しさだけで押し切ること"],
    tip: "合わせるだけでなく、より良い第三案を探すと強みが開きます。平和を守る力を、前進にも使いましょう。"
  },
  {
    name: "包含",
    domain: "人間関係構築力",
    catch: "誰も置いていかない場づくり",
    short: "輪の外にいる人に気づく。",
    about: "まだ入れていない人、遠慮している人に自然と目が向く人。みんなが参加できる空気をつくります。",
    likes: ["誰でも歓迎される場", "仲間に入れること", "壁のない関係"],
    dislikes: ["仲間外れ", "排他的な空気", "一部だけで進むこと"],
    tip: "招き入れる力は尊いです。全員を背負いすぎず、場の仕組みとして歓迎を設計すると続きます。"
  },
  {
    name: "個別化",
    domain: "人間関係構築力",
    catch: "一人ひとりの違いを見る観察眼",
    short: "その人らしさに合わせる。",
    about: "人をひとくくりにせず、違いや個性を細かく見る人。相手に合わせた言葉、役割、関わり方を選べます。",
    likes: ["個性を尊重する場", "オーダーメイドの対応", "違いを楽しむこと"],
    dislikes: ["一律対応", "雑なラベリング", "みんな同じ扱い"],
    tip: "見えている違いを、相手に伝わる言葉にすると価値になります。観察したことを提案や配置に変えてみましょう。"
  },
  {
    name: "ポジティブ",
    domain: "人間関係構築力",
    catch: "場に光を持ち込む人",
    short: "前向きな空気をつくる。",
    about: "楽しいこと、明るい面、できる可能性に目を向ける人。場を軽くし、人が動き出しやすい雰囲気をつくります。",
    likes: ["明るい会話", "楽しい企画", "可能性を見る人たち"],
    dislikes: ["否定ばかりの空気", "重苦しい場", "喜びを抑え込まれること"],
    tip: "明るさは問題の否定ではありません。大変さを受け止めた上で光を置くと、周りの信頼も増します。"
  },
  {
    name: "親密性",
    domain: "人間関係構築力",
    catch: "深い信頼を育てる人",
    short: "少人数で濃くつながる。",
    about: "広く浅くより、信頼できる人と深く関わる人。関係が育つほど、自然体で力を発揮します。",
    likes: ["信頼関係", "少人数の深い会話", "長く続くつながり"],
    dislikes: ["表面的な関係", "急に距離を詰められること", "入れ替わりの激しい場"],
    tip: "深い関係が燃料です。いきなり広げようとせず、信頼できる小さな輪から活動を広げると安定します。"
  },
  {
    name: "分析思考",
    domain: "戦略的思考力",
    catch: "なぜ？を解きほぐす検証者",
    short: "事実と因果で考える。",
    about: "感覚だけでなく、根拠や構造を確認したい人。物事の原因、データ、論理を整理することで判断の精度を上げます。",
    likes: ["根拠のある説明", "データ", "筋の通った議論"],
    dislikes: ["感情だけの判断", "矛盾した説明", "根拠のない断定"],
    tip: "正しさを示すだけでなく、相手が安心して受け取れる順番で伝えると、分析がチームの武器になります。"
  },
  {
    name: "原点思考",
    domain: "戦略的思考力",
    catch: "過去から意味を見つける人",
    short: "背景や歩みを重視する。",
    about: "今だけを見るより、これまでの経緯や歴史から理解する人。過去の文脈を知ることで、現在の意味を深くつかみます。",
    likes: ["背景を知ること", "歴史や経緯", "過去から学ぶ時間"],
    dislikes: ["文脈なしの判断", "過去を軽視すること", "急な方向転換"],
    tip: "過去を振り返る力を、今の意思決定につなげましょう。歴史紹介で終わらせず、次に活かす教訓を一つ出すと強いです。"
  },
  {
    name: "未来志向",
    domain: "戦略的思考力",
    catch: "未来の景色を先に見る人",
    short: "これからの可能性に惹かれる。",
    about: "今より未来のビジョンに心が動く人。まだ見えていない可能性を描き、人に希望や方向性を渡せます。",
    likes: ["将来の構想", "可能性の話", "ワクワクする未来"],
    dislikes: ["過去や現状だけの話", "希望を削がれること", "先が見えない停滞"],
    tip: "未来の絵に、今日の小さな一歩を添えると実現力が増します。ビジョンを行動に翻訳しましょう。"
  },
  {
    name: "着想",
    domain: "戦略的思考力",
    catch: "点と点をつなぐ発明脳",
    short: "新しい見方やアイデアが湧く。",
    about: "一見関係ないものをつなげ、新しい切り口を見つける人。退屈な常識に風穴を開ける力があります。",
    likes: ["新しいアイデア", "自由な発想", "面白い組み合わせ"],
    dislikes: ["ありきたりな答え", "発想を止められること", "単調な作業だけの場"],
    tip: "思いつきをメモし、使う場所を決めると価値になります。アイデアを出す人と形にする人を分けても大丈夫です。"
  },
  {
    name: "収集心",
    domain: "戦略的思考力",
    catch: "いつか役立つを集める図書館",
    short: "情報や素材を集めるほど満たされる。",
    about: "知識、資料、人脈、道具などを蓄える人。集めたものが後でつながり、誰かの役に立つ瞬間に喜びがあります。",
    likes: ["情報収集", "保存と整理", "役立つ資料"],
    dislikes: ["材料不足", "調べる時間がないこと", "集めたものを軽く扱われること"],
    tip: "集める前に小さな出口を決めると、インプットが資産になります。誰にどう渡すかまで考えると強いです。"
  },
  {
    name: "内省",
    domain: "戦略的思考力",
    catch: "考える時間で深くなる人",
    short: "一人で深く考えるほど整う。",
    about: "静かに考え、内側で言葉や意味を熟成させる人。考える時間は休憩ではなく、脳の大切な作業時間です。",
    likes: ["一人時間", "深い問い", "考えを熟成させる余白"],
    dislikes: ["考える間もない即答", "浅い会話だけの場", "常に人がいる環境"],
    tip: "考える時間を予定に入れましょう。沈黙を、質の高いアウトプットの準備として周りに説明できると安心です。"
  },
  {
    name: "学習欲",
    domain: "戦略的思考力",
    catch: "学ぶプロセスそのものが燃料",
    short: "知らないことを知ると元気になる。",
    about: "結果だけでなく、学んでいる過程に喜びを感じる人。新しい知識やスキルを吸収するほどエネルギーが増えます。",
    likes: ["新しい学び", "成長のプロセス", "知的刺激"],
    dislikes: ["学びのない単調さ", "成長が止まる環境", "知的好奇心を制限されること"],
    tip: "学びっぱなしを防ぐため、小さなアウトプット先を決めましょう。人に話す、メモにする、試す、で強みに変わります。"
  },
  {
    name: "戦略性",
    domain: "戦略的思考力",
    catch: "複数ルートから最善を選ぶ人",
    short: "道筋を見比べて近道を探す。",
    about: "選択肢を並べ、どの道が通りやすいかを見抜く人。複雑な状況でも、抜け道や筋のよい流れを見つけます。",
    likes: ["選択肢の整理", "勝ち筋を考えること", "複雑な課題"],
    dislikes: ["一本道しかない状況", "考える余地のない指示", "無計画な突撃"],
    tip: "頭の中のルートを図や言葉に出すと、周りも動きやすくなります。戦略を共有できる形にしましょう。"
  }
];

const listEl = document.getElementById("themeList");
const detailEl = document.getElementById("themeDetail");
const searchEl = document.getElementById("themeSearch");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const detailVisualEl = document.querySelector(".detail-visual");

const domainColors = {
  "実行力": "#6B5B95",
  "影響力": "#C97B5B",
  "人間関係構築力": "#4A6FA5",
  "戦略的思考力": "#5B8C7E"
};

let activeDomain = "all";
let selectedTheme = themes[0];

function domainClass(domain) {
  return `domain-${domain}`;
}

function renderList() {
  const query = searchEl.value.trim().toLowerCase();
  const filtered = themes.filter((theme) => {
    const matchesDomain = activeDomain === "all" || theme.domain === activeDomain;
    const haystack = `${theme.name} ${theme.domain} ${theme.catch} ${theme.short}`.toLowerCase();
    return matchesDomain && haystack.includes(query);
  });

  listEl.innerHTML = "";
  filtered.forEach((theme) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theme-button ${domainClass(theme.domain)}${theme.name === selectedTheme.name ? " is-selected" : ""}`;
    button.style.setProperty("--domain-color", domainColors[theme.domain]);
    button.setAttribute("aria-pressed", String(theme.name === selectedTheme.name));
    button.innerHTML = `
      <small>${theme.domain.replace("構築力", "").replace("戦略的", "")}</small>
      <strong>${theme.name}</strong>
      <span>${theme.short}</span>
    `;
    button.addEventListener("click", () => {
      selectedTheme = theme;
      renderList();
      renderDetail();
    });
    listEl.appendChild(button);
  });

  if (!filtered.length) {
    listEl.innerHTML = `<p class="empty-state">該当する資質が見つかりません。検索語を少し短くしてみてください。</p>`;
  }
}

function renderDetail() {
  const theme = selectedTheme;
  if (detailVisualEl) {
    detailVisualEl.style.setProperty("--detail-color", domainColors[theme.domain]);
  }
  detailEl.innerHTML = `
    <span class="detail-kicker ${domainClass(theme.domain)}">${theme.domain}</span>
    <h3>${theme.name}</h3>
    <p class="detail-catch">${theme.catch}</p>
    <div class="detail-block">
      <h4>どういう資質？</h4>
      <p>${theme.about}</p>
    </div>
    <div class="detail-block">
      <h4>喜びやすい環境</h4>
      <ul>${theme.likes.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h4>苦しくなりやすい環境</h4>
      <ul>${theme.dislikes.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h4>おけもん式の活かし方</h4>
      <p>${theme.tip}</p>
    </div>
  `;
}

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  button.addEventListener("click", () => {
    activeDomain = button.dataset.domain;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderList();
  });
});

searchEl.addEventListener("input", renderList);

renderList();
renderDetail();

document.querySelectorAll("main > section:not(.hero-section)").forEach((section) => {
  section.classList.add("reveal-ready");
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  // Mobile sections can be several screens tall. A 16% threshold may never be
  // reached, leaving the section permanently transparent, so reveal as soon as
  // its leading edge enters the viewport.
  }, { threshold: 0.01 });

  document.querySelectorAll(".reveal-ready").forEach((section) => revealObserver.observe(section));
} else {
  document.querySelectorAll(".reveal-ready").forEach((section) => section.classList.add("is-visible"));
}

// The animation is decorative; it must never keep real content hidden.
// This also covers mobile browsers that miss an IntersectionObserver callback
// during fast scrolling or anchor jumps.
window.setTimeout(() => {
  document.querySelectorAll(".reveal-ready").forEach((section) => section.classList.add("is-visible"));
}, 1200);
