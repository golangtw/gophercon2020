const titleDOM = document.querySelector('head>title') as HTMLElement;
const metaDOM = Array.from(document.querySelectorAll('head>meta')) as HTMLElement[];

const headPayload = {
  'title': titleDOM,
  'og:title': metaDOM[3],
  'og:description': metaDOM[4],
  'og:url': metaDOM[5],
  'og:image': metaDOM[6],
  'og:type': metaDOM[7],
  'og:site_name': metaDOM[8]
};

const defaultValue = {
  title: `Gopher Conference Taiwan 2020`,
  description: 'GopherCon TW 2020 邀請身為 Golang 使用者的你，向大家分享您的經驗與技術，期待您能在演講桌前，與我們一起 have fun with golang。',
  url: 'https://golang.tw/2020',
  image: 'https://golang.tw/2020/img/og.png',
  type: 'website'
};

const head = {
  reset () {
    headPayload.title.innerText = defaultValue.title;
    headPayload['og:title'].setAttribute('content', defaultValue.title);
    headPayload['og:description'].setAttribute('content', defaultValue.description);
    headPayload['og:url'].setAttribute('content', defaultValue.url);
    headPayload['og:image'].setAttribute('content', defaultValue.image);
    headPayload['og:type'].setAttribute('content', defaultValue.type);
    headPayload['og:site_name'].setAttribute('content', defaultValue.title);
  },
  title (text: string) {
    headPayload.title.innerText = `${text} - ${defaultValue.title}`;
  },
  ogTitle (text: string) {
    headPayload['og:title'].setAttribute('content', `${text} - ${defaultValue.title}`);
  },
  ogDescription (text: string) {
    headPayload['og:description'].setAttribute('content', text);
  },
  ogImage (link: string) {
    headPayload['og:image'].setAttribute('content', link);
  },
  ogType (text: string) {
    headPayload['og:type'].setAttribute('content', text);
  },
  ogUrl (link: string) {
    headPayload['og:url'].setAttribute('content', link);
  }
};

export default head;
