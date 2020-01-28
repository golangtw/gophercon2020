const path = require('path');
const fs = require('fs');

const gaTempHTML = fs.readFileSync(path.join(__dirname, './template/ga.html'));

const sessionData = require(path.join(__dirname, './public/json/session.json'));

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/2020/',
        '/2020/cfp',
        '/2020/cfp/',
        '/2020/agenda',
        '/2020/agenda/',
        ...sessionData.sessions.map(session => (session.id))
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Auto rewrite assets with sub-path prefix
        route.html = route.html
          .replace(/<(script|link|img)(.*?) (src|href)="(.*?)">(.*?)/g, '<$1$2 $3="/2020$4">$5');

        // Auto inject GA template
        route.html = route.html
          .replace('<noscript>{{{ %GA_TEMPLATE% }}}</noscript>', gaTempHTML);
        return route;
      }
    }
  }
}
