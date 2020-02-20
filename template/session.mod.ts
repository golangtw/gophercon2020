// tslint:disable: max-line-length

// !WARNING! DO NOT EDIT THIS TEMPLATE EXCEPT YOU UNDERSTAND WHAT ARE YOU ACTUALLY DO.
// This is a session template block, edit this and it will auto inject contents as popup-ready DOMElement.

import { markdown } from 'markdown';

export interface ISpeaker {
  id: string;
  avatar?: string;
  zh: {
    name: string;
    bio?: string;
  };
  en: {
    name: string;
    bio?: string;
  };
}

const content = (data: any): string => `
<script id="meta-content" type="application/json">
{
  "title": "${data.zh.title}",
  "description": "${data.zh.description.replace(/\n/gm, '')}",
  "url": "https://gopohercon.golang.tw/2020/agenda/${data.id}"
}
</script>
<h1 class="title font-black">${data.zh.title}</h1>
<p class="paragraph">${contentParser(data.zh.description)}</p>
${data.speakers.map(((speaker: ISpeaker) => (speakerContent(speaker)))).join('')}
`;

const speakerContent = (speaker: ISpeaker): string => `
<h1 class="title font-black">About ${speaker.zh.name}</h1>
${ speaker.zh.bio ? contentParser(`![Speaker ${speaker.zh.name}'s avatar](${speaker.avatar})` + speaker.zh.bio) : '' }
`;

const contentParser = (content: string): string => (
  markdown.toHTML(content)
    .replace(/<p>/gm, '<p class="paragraph">')
    .replace(/<a /gm, '<a target="_blank" rel="noreferrer"')
);

export default content;
