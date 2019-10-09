export const pinYinParser = (raw: string): string => {
  return `<ruby>${raw.replace(/\/(.*?)\//gm, `<rp>(</rp><rt>$1</rt><rp>)</rp>`)}</ruby>`;
};
