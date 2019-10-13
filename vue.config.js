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
        return route;
      }
    }
  }
}
