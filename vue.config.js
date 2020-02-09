const path = require('path');
const fs = require('fs');

const gaTempHTML = fs.readFileSync(path.join(__dirname, './template/ga.html'));

const sessionData = require(path.join(__dirname, './public/json/session.json'));

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/2020/'
    : '/',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/2020/',
        '/2020/cfp',
        '/2020/cfp/',
        '/2020/agenda',
        '/2020/agenda/',
        ...sessionData.sessions.map(session => (`/2020/agenda/${session.id}`)),
        ...sessionData.sessions.map(session => (`/2020/agenda/${session.id}/`)),
        '/2020/activity',
        '/2020/activity/',
        '/2020/venue',
        '/2020/venue/',
        '/2020/traffic',
        '/2020/traffic/',
        '/2020/team',
        '/2020/team/',
        '/2020/team/sponsor',
        '/2020/team/sponsor/',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Auto inject GA template
        route.html = route.html
          .replace('<noscript>{{{ %GA_TEMPLATE% }}}</noscript>', gaTempHTML);
        return route;
      }
    }
  }
}
