// tslint:disable: max-line-length

// !WARNING! DO NOT EDIT THIS TEMPLATE EXCEPT YOU UNDERSTAND WHAT ARE YOU ACTUALLY DO.
// This is a session template block, edit this and it will auto inject contents as popup-ready DOMElement.

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
  "url": "https://sitcon.org/2020/session/${data.id}"
}
</script>
<h1 class="title font-black">${data.zh.title}</h1>
<p class="paragraph">${contentParser(data.zh.description)}</p>
${data.speakers.map(((speaker: ISpeaker) => (speakerContent(speaker))))}
`;

const speakerContent = (speaker: ISpeaker): string => `
<h1 class="title font-black">About ${speaker.zh.name}</h1>
<p class="paragraph"><img src="${speaker.avatar}" alt="Speaker ${speaker.zh.name}'s avatar" /></p>
<p class="paragraph">${ speaker.zh.bio ? contentParser(speaker.zh.bio) : '' }</p>
`;

const contentParser = (content: string): string => (
  content.replace(
    /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/gm,
    `<a href='$&' target='_blank' rel='noopener noreferrer'>$&</a>`
  )
);

export default content;
