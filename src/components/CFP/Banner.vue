<template>
  <div
    id="banner"
    class="banner-container"
    :style="{
      '--viewbox-width': `${(sight.width + sight.gap) * 3}px`,
      '--viewbox-height': `${sight.offset + (sight.height + sight.gap) * 3}px`,
      '--box-width': `${(sight.width)}px`,
      '--box-height': `${(sight.height)}px`,
      '--box-gap': `${sight.gap}px`,
      '--sight-offset': `${sight.offset}px`
     }"
  >
    <div class="banner-bg" ref="sightContainer">
      <Sight
        :containerWidth="sight.containerWidth"
        :containerHeight="sight.containerHeight"
        :width="sight.width"
        :height="sight.height"
        :cols="sight.cols"
        :rows="sight.rows"
        :gap="sight.gap"
      />
    </div>
    <header class="banner-header">
      <div class="view-box">
        <h3 class="flag font-bold">SITCON 2020</h3>
        <h1 class="title font-black">Call for<br>Paper</h1>
        <h2 class="subtitle font-black">稿件徵求中！</h2>
      </div>
      <div class="view-box">
        <div class="define">
          <p class="code font-black font-italic">#define</p>
          <p
            v-if="theme.includes('RAINBOW')"
            class="code font-black font-italic"
          >
            GenderEquality
          </p>
          <p class="code font-black font-italic">student</p>
          <p class="code font-black font-italic">2020</p>
          <p class="code font-black font-italic">future</p>
          <p class="code font-black font-italic">programmer</p>
          <div class="board">
            <h1 class="date font-black">3/28（六）</h1>
            <h3>中央研究院</h3>
            <h2 class="font-bold">人文社會科學館</h2>
          </div>
        </div>
      </div>
      <div class="view-box side-menu">
        <a
          @click="processPopup('submitExample')"
          class="button"
        >
          <p>投稿資訊</p>
        </a>
        <a
          @click="processPopup('openSubmit')"
          class="button smaller"
        >
          <p>開放式議程</p>
        </a>
        <a
          @click="processPopup('loudly')"
          class="button"
        >
          <p>大鳴大放</p>
        </a>
        <a href="#sponsor" class="button">
          <p>贊助資訊</p>
        </a>
      </div>
    </header>
    <main class="popup-pre-content" ref="submitExample">
      <ul class="summary">
        <li><a href="#important-time">重要時程</a></li>
        <li><a href="#example">投稿主題範例</a></li>
        <li><a href="#coc">Code of Conduct 行為準則</a></li>
        <li><a href="#session-type">議程種類</a></li>
        <li><a href="#paper-rule">投稿方式</a></li>
        <li><a href="#paper-trail">審稿方式</a></li>
        <li><a href="#notice">投稿注意事項</a></li>
      </ul>
      <h1 id="important-time" class="title font-black">重要時程</h1>
      <ul>
        <li>2019/10/18（五）投稿開始</li>
        <li>2020/01/02（四）早上 06:41 投稿截止</li>
        <li>一月下旬審稿結束、隨後公佈完整議程</li>
        <li>2020/03/28（六）SITCON 2020</li>
      </ul>
      <h1 id="example" class="title font-black">投稿主題範例</h1>
      <p class="paragraph">
        我們特別期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是探討學生相關議題等等；廣義而言，只要是與資訊技術、電腦相關的講題，都歡迎投稿！<br>
        以下的投稿範例可以提供一些靈感，或是您可以參與投稿者小聚，亦可前往 SITCON 前幾屆的網站（<a href="https://sitcon.org/2013" class="font-bold" target="_blank" rel="noopener noreferrer">2013</a>、 <a href="https://sitcon.org/2014" class="font-bold" target="_blank" rel="noopener noreferrer">2014</a>、 <a href="https://sitcon.org/2015" class="font-bold" target="_blank" rel="noopener noreferrer">2015</a>、 <a href="https://sitcon.org/2016" class="font-bold" target="_blank" rel="noopener noreferrer">2016</a>、 <a href="https://sitcon.org/2017" class="font-bold" target="_blank" rel="noopener noreferrer">2017</a>、<a href="https://sitcon.org/2018" class="font-bold" target="_blank" rel="noopener noreferrer">2018</a>、<a href="https://sitcon.org/2019" class="font-bold" target="_blank" rel="noopener noreferrer">2019</a>）查看過去的議程。
      </p>
      <p class="paragraph">以下是我們以往的熱門議程，可供您參考：</p>
      <ul>Presentation：
        <li>從學校到業界，工程師作為職業的現實（<a href="https://sitcon.org/2019/agenda/7a67f4fb-b6f4-4595-b9af-527b3024c8f8" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/qYxdomoMEf8" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>TMML 真相靠自己─You are Fake News！（<a href="https://sitcon.org/2019/agenda/f5d28cd1-5165-4388-9dc2-5d2257a5b5bc" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/9PFZ0_C2Sxo" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>黑客、社團、資訊魔法學習大總匯（<a href="https://sitcon.org/2019/agenda/64ed212c-f1a9-40df-a84e-5f7411d4c887" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/SkUuK731XGY" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>奔跑吧！台北：遊戲開發經驗分享（<a href="https://sitcon.org/2018/#/agenda/sub/d946b6e1-d826-4c64-86a4-bf013bcc0c06" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=85bW97XI4i0" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>Club Mate 與德國駭客精神：34C3 大會實錄（<a href="https://sitcon.org/2018/#/agenda/sub/35598abf-4efe-48fc-93a4-3d539e6f6c47" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=8xrYLc4num8" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>由淺入坑區塊鏈～從認識架構到應用智能合約！（<a href="https://sitcon.org/2018/#/agenda/sub/08c2816d-ea25-4169-89e6-dc0e0bc7b9a4" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=B3fXXElzc9Q" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>開發學校雲端服務的奇技淫巧（<a href="https://www.youtube.com/watch?v=msrsjX8mddE" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>校園資訊系統的困境與嘗試改善（<a href="https://www.youtube.com/watch?v=1N3HZsPzKrI" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>cjdns: 重新發明網路（<a href="https://sitcon.org/2017/#schedule-page" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=l75ArFBCMlM" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
      </ul>
      <ul>Espresso：
        <li>淺談社會網路分析（<a href="https://sitcon.org/2019/agenda/f60637a1-0ccb-4c02-b1b0-be7a6a393d87" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/GFfaD-kVe_A" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>你所不知道的維基 - Wikidata（<a href="https://sitcon.org/2019/agenda/7959ab0b-cdfa-40bc-8566-099477abb195" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/kD-jGfDZGGo" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>AI for the Art in a Box（<a href="https://sitcon.org/2019/agenda/0b49bfce-a147-4702-a5b9-87eb2dfa5135" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://youtu.be/iZz5au-vVHk" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>校園駭客-看你學號() return 你家住址; （<a href="https://sitcon.org/2018/#/agenda/sub/b8998705-c6e2-4c48-ae76-984f23b54719" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=yahEwM88q-Q" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>600秒學會UI設計（<a href="https://sitcon.org/2018/#/agenda/sub/d6daa14b-39ef-410b-883c-0b1c3ae02a60" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=hqhmwt7SCJc" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>深度學習如何深度學習（<a href="https://sitcon.org/2018/#/agenda/sub/f3c6853d-2b0e-464c-8837-9411455961d8" class="font-bold" target="_blank" rel="noopener noreferrer">Link</a>、<a href="https://www.youtube.com/watch?v=H5o5Oa_nbqs" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
        <li>格鬥遊戲 AI 開發經驗談（<a href="https://www.youtube.com/watch?v=ryLLzSwQ54w" class="font-bold" target="_blank" rel="noopener noreferrer">Video</a>）</li>
      </ul>
      <h1 id="coc" class="title font-black">Code of Conduct 行為準則</h1>
      <p class="paragraph">
        SITCON 非常歡迎女性、跨性別與多元背景的投稿者。為了讓大家都能愉快的參加 SITCON，我們鼓勵所有參與者閱讀年會的<a href="https://sitcon.org/code-of-conduct/" class="font-bold" target="_blank" rel="noopener noreferrer">行為守則（Code of Conduct）</a>，共同創造一個友善的環境。
      </p>
      <h1 id="session-type" class="title font-black">議程種類</h1>
      <h2 class="subtitle font-bold">Presentation</h2>
      <p class="paragraph">Presentation 會有完整 30 分鐘的議程加上 10 分鐘的問答時間，讓您有充分的時間展示想法以及與會眾互動。</p>
      <h2 class="subtitle font-bold">Espresso</h2>
      <p class="paragraph">Espresso 為包含問答時間僅有 10 分鐘的短講，挑戰講者提供最為濃縮與精華的議程。</p>
      <h2 class="subtitle font-bold">Lighting Talk</h2>
      <p class="paragraph">大會當天早上開放報名，每位講者有 3 分鐘，3 分鐘一到可是會被趕下臺喔！</p>
      <h1 id="paper-rule" class="title font-black">投稿方式</h1>
      <p class="paragraph">
        稿件均經議程組形式審查，交予該領域之審稿委員審稿；審稿委員由業界人士、學界人士及 SITCON 議程組員組成。
      </p>
      <h2 class="subtitle font-bold">格式</h2>
      <p class="paragraph">Espresso 與 Presentation 的投稿格式相同，除有特別標示會公布的資料外，其餘則只會供審稿委員閱讀。</p>
      <ul>
        <li>投稿類型：必填、公開。請寫明所欲投稿為 Presentation 或 Espresso。</li>
        <li>題目 Title：必填、公開。20 字以下。</li>
        <li>摘要 Abstract：必填、公開。建議含標點符號 150 ~ 250 全形字，使用於宣傳以及網站。</li>
        <li>演講大綱 Outline：必填，請說明該議程的大綱以及時間長度規劃。</li>
        <li>目標受眾 Target Audience：必填，請說明您期待該議程的目標受眾，為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「欲精進某技能的後端工程師」等。</li>
        <li>先備知識 Prior Knowledge：必填、公開。請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python 基礎語法」、「能熟練運用 Class 與 OOP」等。</li>
        <li>詳細說明 Description：必填，不限字數，請說明這個議程你認爲重要的相關細節，以利審稿委員更瞭解你的作品。我們強烈建議您詳細填寫此項，以增加入選機率。</li>
        <li>關鍵字 Key Words：選填、公開。請提供幾個與議程直接相關的關鍵字。</li>
        <li>附件 Attachment：選填。可以附上程式碼、投影片草稿或任何你認爲有助於我們瞭解你的議程的附件。</li>
      </ul>
      <h2 class="subtitle font-bold">個人資料</h2>
      <p class="paragraph">除暱稱／姓名會被用於宣傳，其餘則只會供議程組聯絡您使用，不會在未經您允許下給第三方。</p>
      <ul>
        <li>電子郵件 Email：能讓大會聯絡的電子信箱。</li>
        <li>暱稱／名字 Name：公開於講者海報及網站的稱呼。</li>
        <li>電話號碼 Phone：用於大會聯絡、確認資訊用的電話號碼。</li>
        <li>其他聯絡方式 Other contact information：其他任何我們能聯絡您的方式。</li>
      </ul>
      <h1 id="paper-trail" class="title font-black">審稿方式</h1>
      <p class="paragraph">審稿委員主要針對以下項目進行篩選：</p>
      <ul>
        <li>稿件內容：包含的知識分享、經驗案例、想法觀點是否獨特等。</li>
        <li>表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。</li>
        <li>適合聽眾：稿件是否適合 SITCON 大多數的會眾，若經我們評估比較小眾的議程可能會被安排至較小的演講廳。</li>
      </ul>
      <h1 id="notice" class="title font-black">投稿注意事項</h1>
      <ul>
        <li>SITCON 2020 採用 Google Forms 接收投稿。</li>
        <li>SITCON 2020 將會有 4 軌議程同時進行（不計 Unconference 及 Lightning talk）。</li>
        <li>Lightning talk 將於所有議程結束後，閉幕前於國際會議廳舉行。</li>
        <li>上述審稿方式不考慮稿件內容的技術難度，我們仍以稿件是否能夠吸引人、高品質、適合聽眾（即上述篩選方式）為考量。</li>
        <li>為鼓勵投稿，大會提供投稿人一組邀請碼 （一人一組，非一稿一組），可優先報名參與本年會，獲選講者請使用講者身分入場，不需要報名，並可將邀請碼轉移他人使用。</li>
        <li>在截稿之前，投稿者可以隨時使用投稿系統修改已投的稿件。</li>
        <li>SITCON 議程組得經作者同意，轉換 Presentation 或 Espresso 稿件之投稿類型。</li>
        <li>無論有無入選，仍然歡迎於年會當天報名 Lightning Talk 或 Unconference！</li>
        <li>凡稿件經接受者，年會將頒予感謝狀以表彰投稿人之熱情付出與貢獻。</li>
        <li>「議程題目」、「摘要」與「先備知識」會放置於官網以及會前發行的電子報中。</li>
      </ul>
      <p class="paragraph">
        若有任何問題或需投稿建議請 Email 至 SITCON 議程組信箱 <a href="mailto:session@sitcon.org" class="font-bold">session@sitcon.org</a>。
      </p>
      <h2 class="subtitle font-bold">錄影以及記錄</h2>
      <p class="paragraph">所有議程皆會錄影，若不希望被錄影與釋出可以與議程組聯絡。</p>
      <h2 class="subtitle font-bold">授權</h2>
      <p class="paragraph">議程錄影會在經過您的同意後一律以 CC - BY 3.0 授權在 YouTube 釋出。</p>
      <p class="paragraph">議程相關素材，如投影片等，將由您自行決定在何處以何種方式釋出，或是選擇不釋出，我們不會干涉。年會後會向您蒐集素材連結，若您選擇釋出，我們會將連結放置在官網的議程表上。</p>
      <h2 class="subtitle font-bold">試講</h2>
      <p class="paragraph">試講讓講者在演講前有練習的機會，比照年會時間安排供講者講完整場演講，並有議程組人員提供建議（如簡報、台風等），講者可以自由參加，自行選擇最接近的場次，入選後將由議程組與您協調精確時間。</p>
      <p class="paragraph">所有場次將依報名情況舉辦，並提供投影機、音響、簡報筆、倒數計時器等設備。預計舉辦北部、中部、南部、東部場等，時間約為二月份或三月初，地點另行通知。</p>
      <p class="paragraph">補助：依照客運價格標準補助講者至最近試講場地的全額或部分車馬費。</p>
      <h2 class="subtitle font-bold">彩排</h2>
      <ul>
        <li>日期：2020/03/27（五）。</li>
        <li>場地：使用場地與正式年會相同，細節將於稿件錄取後通知。</li>
        <li>時間：一人約 5～10 分鐘，如有 Live Demo 或是特殊需求，可提前與議程組安排時間。</li>
        <li>流程：講者可以嘗試操作設備，測試 Live Demo 連結及切換方式，也可以演練部分簡報內容。</li>
        <li>提供設備：與年會當天場地的設備相同，有麥克風、倒數計時器、簡報筆等。</li>
      </ul>
      <h2 class="subtitle font-bold">注意</h2>
      <ul>
        <li>除非內容明顯偏離講題或不符事實，我們不會要求講者對演講內容進行修正。</li>
        <li>為了維護所有講者的權利，試講時間恕不接受更改，請各位講者者準時參與。</li>
      </ul>
      <h2 class="subtitle font-bold">Q&amp;A</h2>
      <p class="paragraph">
        Q：先備知識與目標受眾有何不同？<br>
        A：「目標受眾」表示您預期何種人將會前來參與該場議程，此欄位可能表示為會眾的興趣、生活環境抑或年齡層。「先備知識」表示對該議程有興趣者，您建議須先備哪些基礎技術、能力或經驗，有助於了解與吸收該場議程的知識精華。舉例而言，若一講題為「在營隊中使用虛擬貨幣」，則先備知識可能是「沒有」，目標受眾可能是「有想要辦營隊的人」。而如果是有關 Julia 程式語言的演講，則先備知識可能是「知道平行運算是什麼」，目標受眾可能是「想用 Julia 做資料科學的人」。
      </p>
      <p class="paragraph">
        Q：投稿主題是否有必要切合年會 slogan（#define student）？<br>
        A：不用。審稿時僅會依照上文所述方式審查，不會因為切合 slogan 就拿到比較高分，或是與 slogan 無關就被扣分。
      </p>
      <p class="paragraph">
        Q：什麼情況下議程組會提出希望能轉變成 Presentation 或是 Espresso？<br>
        A：若我們認為您的稿件很優秀，但可能比較適合另一種形式，或是該形式的名額已經額滿無法再增額時，會向您充分說明與溝通，並經您的同意後轉換稿件類型。
      </p>
      <p class="paragraph">
        Q：還有疑問怎麼辦？<br>
        A：歡迎來投稿者小聚與我們聊聊，或是寄信至 <a href="mailto:session@sitcon.org" class="font-bold">session@sitcon.org</a> 詢問，我們會儘速回應。
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuKARckZoYPw5RdagVQk9IBrASuS3TA-rS8LUzaCBB79955A/viewform" class="submission button font-black" target="_blank" rel="noopener noreferrer">
        <p>我要投稿</p>
      </a>
    </main>
    <main class="popup-pre-content" ref="openSubmit">
      <ul class="summary">
        <li><a href="#important-time">重要時程</a></li>
        <li><a href="#example">投稿主題</a></li>
        <li><a href="#coc">Code of Conduct 行為準則</a></li>
        <li><a href="#session-type">議程種類</a></li>
        <li><a href="#paper-rule">投稿方式</a></li>
        <li><a href="#paper-trail">審稿方式</a></li>
        <li><a href="#notice">投稿注意事項</a></li>
      </ul>
      <h1 id="important-time" class="title font-black">重要時程</h1>
      <ul>
        <li>2019/12/10（二）投稿開始</li>
        <li>2020/01/02（四）早上 06:41 投稿截止</li>
        <li>一月下旬審稿結束、隨後公佈完整議程</li>
        <li>2020/03/28（六）SITCON 2020</li>
      </ul>
      <h1 id="example" class="title font-black">投稿主題</h1>
      <p class="paragraph">過往的議程都是從講者對聽眾單向式的演講，而開放式議程跳脫以往都是從講者對聽眾單向式的資訊傳遞，期待藉由主講者與與會者的雙向交流，碰撞出更多的觀點與討論。在開放式議程，你可以主持一個圓桌會議，一起腦力激盪，甚至辦一場競賽，任何你想得到的非傳統議程形式，都可以在開放式議程中進行。  </p>
      <p class="paragraph">我們特別期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是探討學生相關議題等等；廣義而言，只要是與資訊技術、電腦相關的講題，都歡迎投稿！主題可以是：新課綱的現狀與困難、程式相關科目的家教市場、自由軟體滋潤不同領域的成果、女性與 LGBTQ 族群在資訊學術界或產業的處境等。</p>
      <h1 id="coc" class="title font-black">Code of Conduct 行為準則</h1>
      <p class="paragraph">SITCON 非常歡迎女性、跨性別與多元背景的投稿者。為了讓大家都能愉快的參加 SITCON，我們鼓勵所有參與者閱讀年會的<a href="https://sitcon.org/code-of-conduct/" class="font-bold" target="_blank" rel="noopener noreferrer">行為守則（Code of Conduct）</a>，共同創造一個友善的環境。</p>
      <h1 id="session-type" class="title font-black">格式</h1>
      <p class="paragraph">除有特別標示會公布的資料外，其餘則只會供審稿委員閱讀。</p>
      <ul>
        <li>題目 Title：必填、公開。20 字以下。</li>
        <li>摘要 Abstract：必填、公開。建議含標點符號 150 ~ 250 全形字，使用於宣傳以及網站。</li>
        <li>大綱 Outline：必填，請說明該開放式議程的大綱、如何進行、時間長度規劃。</li>
        <li>目標受眾 Target Audience：必填，請說明您期待該議程的目標受眾，為怎麼樣的人。例如：「對網路治理有興趣的人」、「不知道該不該讀研究所的學生」等。</li>
        <li>先備知識 Prior Knowledge：必填、公開。請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python 基礎語法」、「熟悉 Machine Learning 演算法」等。</li>
        <li>詳細說明 Description：必填，不限字數，請說明這個議程你認爲重要的相關細節，以利審稿委員更瞭解你的作品。我們強烈建議您詳細填寫此項，以增加入選機率。</li>
        <li>附件 Attachment：選填。可以附上程式碼、投影片草稿或任何你認爲有助於我們瞭解你的議程的附件。</li>
      </ul>
      <h2 class="subtitle font-bold">個人資料</h2>
      <p class="paragraph">除暱稱／姓名會被用於宣傳，其餘則只會供議程組聯絡您使用，不會在未經您允許下給第三方。</p>
      <ul>
        <li>電子郵件 Email：能讓大會聯絡的電子信箱。</li>
        <li>暱稱／名字 Name：公開於講者海報及網站的稱呼。</li>
        <li>電話號碼 Phone：用於大會聯絡、確認資訊用的電話號碼。</li>
        <li>其他聯絡方式 Other contact information：其他任何我們能聯絡您的方式。</li>
      </ul>
      <h1 id="paper-trail" class="title font-black">審稿方式</h1>
      <p class="paragraph">審稿委員主要針對以下項目進行篩選：</p>
      <ul>
        <li>稿件內容：包含的知識分享、經驗案例、想法觀點是否獨特等。</li>
        <li>表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。</li>
        <li>適合與會者：稿件是否適合 SITCON 大多數的與會者討論。</li>
      </ul>
      <h1 id="notice" class="title font-black">投稿注意事項</h1>
      <ul>
        <li>SITCON 2020 採用 Google Forms 接收投稿。</li>
        <li>議程時間長度以 40 分鐘為原則。</li>
        <li>L除了開放式議程外，同一時間將有 3 至 4 軌一般議程同時進行。</li>
        <li>上述審稿方式不考慮稿件內容的技術難度，我們仍以稿件是否能夠吸引人、高品質、適合與會者（即上述篩選方式）為考量。</li>
        <li>為鼓勵投稿，大會提供投稿者一組邀請碼 （一人一組，非一稿一組），可優先報名參與本年會。獲選講者請使用講者身分入場，不需要報名，並可將邀請碼轉移他人使用。</li>
        <li>在截稿之前，投稿者可以隨時使用投稿系統修改已投的稿件。</li>
        <li>凡稿件經接受者，年會將頒予感謝狀以表彰講者之熱情付出與貢獻。</li>
        <li>「議程題目」、「摘要」與「先備知識」會放置於官網以及會前發行的電子報中。</li>
      </ul>
      <p class="paragraph">
        若有任何問題或需投稿建議請 Email 至 SITCON 議程組信箱 <a href="mailto:session@sitcon.org" class="font-bold">session@sitcon.org</a>。
      </p>
      <h2 class="subtitle font-bold">錄影以及記錄</h2>
      <p class="paragraph">所有議程皆會錄影，若不希望被錄影與釋出可以與議程組聯絡。</p>
      <h2 class="subtitle font-bold">授權</h2>
      <p class="paragraph">議程錄影會在經過您的同意後一律以 CC - BY 3.0 授權在 YouTube 釋出。</p>
      <p class="paragraph">議程相關素材，如投影片等，將由您自行決定在何處以何種方式釋出，或是選擇不釋出，我們不會干涉。年會後會向您蒐集素材連結，若您選擇釋出，我們會將連結放置在官網的議程表上。</p>
      <h2 class="subtitle font-bold">演練</h2>
      <p class="paragraph">「演練」讓講者在演講前有練習的機會，我們會與您討論開放式議程進行的方式並進行演練。講者可以自由參加，入選後將由議程組與您協調精確時間。</p>
      <p class="paragraph">所有場次將依報名情況舉辦，並提供投影機、音響、簡報筆、倒數計時器等設備。預計舉辦北部、中部、南部、東部場等，時間約為二月份或三月初，地點另行通知。</p>
      <p class="paragraph">補助：依照客運價格標準補助講者至最近演練場地的全額或部分車馬費。</p>
      <h2 class="subtitle font-bold">注意</h2>
      <ul>
        <li>除非內容明顯偏離講題或不符事實，我們不會要求講者對演講內容進行修正。</li>
        <li>為了維護所有講者的權利，試講時間恕不接受更改，請各位講者者準時參與。</li>
      </ul>
      <h2 class="subtitle font-bold">Q&amp;A</h2>
      <p class="paragraph">
        Q：我想在開放式議程嘗試 XXX 可以嗎？<br>
        A：原則上只要是跳脫傳統演講形式，以雙向互動為主的議程進行方式都是可以的，但必須遵守 CoC，且建議議程以知識與想法交流為優先。
      </p>
      <p class="paragraph">
        Q：先備知識與目標受眾有何不同？<br>
        A：「目標受眾」表示您預期何種人將會前來參與該場議程，此欄位可能表示為會眾的興趣、生活環境抑或年齡層。「先備知識」表示對該議程有興趣者，您建議須先備哪些基礎技術、能力或經驗，有助於了解與吸收該場議程的知識精華。舉例而言，若一講題為「在營隊中使用虛擬貨幣」，則先備知識可能是「沒有」，目標受眾可能是「有想要辦營隊的人」。而如果是有關 Julia 程式語言的演講，則先備知識可能是「知道平行運算是什麼」，目標受眾可能是「想用 Julia 做資料科學的人」。
      </p>
      <p class="paragraph">
        Q：投稿主題是否有必要切合年會 slogan（#define student）？<br>
        A：不用。審稿時僅會依照上文所述方式審查，不會因為切合 slogan 就拿到比較高分，或是與 slogan 無關就被扣分。
      </p>
      <p class="paragraph">
        Q：還有疑問怎麼辦？<br>
        A：歡迎來投稿者小聚與我們聊聊，或是寄信至 <a href="mailto:session@sitcon.org" class="font-bold">session@sitcon.org</a> 詢問，我們會儘速回應。
      </p>
      <a href="https://forms.gle/VeSHAk1pohNi9bZb7" class="submission button font-black" target="_blank" rel="noopener noreferrer">
        <p>我要投稿</p>
      </a>
    </main>
    <main class="popup-pre-content" ref="loudly">
      <h1 class="title font-black">籌備中，敬請期待</h1>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { AppState } from '@/store/types/app';
import Sight from './Sight.vue';

const namespace: string = 'app';

@Component({
  components: {
    Sight
  }
})
export default class Banner extends Vue {
  @Action('setSightMeasure', { namespace }) private setSightMeasure: any;
  @Action('togglePopup', { namespace }) private togglePopup: any;
  @Action('togglePopupContent', { namespace }) private togglePopupContent: any;
  @Getter('device', { namespace }) private device: any;
  @Getter('theme', { namespace }) private theme: any;
  @Getter('sight', { namespace }) private sight: any;

  @Watch('device')
  public onDeviceChanged (val: string, newVal: string) {
    this.measureSightSize();
  }

  public mounted () {
    this.measureSightSize();

    window.addEventListener('resize', this.measureSightSize);
  }

  public destroyed () {
    window.removeEventListener('resize', this.measureSightSize);
  }

  private measureSightSize (): void {
    const sightContainer: any = this.$refs.sightContainer;

    const sightOffset: number = sightContainer.offsetTop;
    const boxCols: number = this.device === 'MOBILE' ? Math.floor((sightContainer.clientWidth + 12) / 100) : 8;
    const boxRows: number = 3;
    const boxGap = this.device === 'MOBILE' ? 27 : 40;
    const boxWidth: number = (sightContainer.clientWidth - boxGap * (boxCols - 1)) / boxCols;
    const boxHeight: number = boxWidth;
    const containerWidth: number = boxWidth * boxCols + boxGap * (boxCols - 1);
    const containerHeight: number = boxHeight * boxRows + boxGap * (boxRows - 1);

    this.setSightMeasure({
      offset: sightOffset,
      containerWidth,
      containerHeight,
      width: boxWidth,
      height: boxHeight,
      cols: boxCols,
      rows: boxRows,
      gap: boxGap
    });
  }

  private processPopup (hook: string): void {
    this.togglePopup(true);
    const targetDOM = this.$refs[hook] as HTMLElement;
    this.togglePopupContent(targetDOM.innerHTML);
  }
}
</script>
