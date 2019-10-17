const path = require('path');
const fs = require('fs');

const gaTempHTML = fs.readFileSync(path.join(__dirname, './ga-template.html'));

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/2020/',
        '/2020/cfp'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Auto rewrite assets with sub-path prefix
        route.html = route.html
          .replace(/<(script|link|img)(.*?) (src|href)="(.*?)">(.*?)/g, '<$1$2 $3="/2020$4">$5');

          console.log(route.html);

        // Auto inject GA template
        route.html = route.html
          .replace('<noscript>{{{ %GA_TEMPLATE% }}}</noscript>', gaTempHTML);
        return route;
      }
    }
  }
}
