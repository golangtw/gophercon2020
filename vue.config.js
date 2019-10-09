module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/taigi2019/',
        '/taigi2019/cfp'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Auto rewrite assets with sub-path prefix
        route.html = route.html
          .replace(/<(script|link|img)(.*?) (src|href)="(.*?)">(.*?)/g, '<$1$2 $3="/taigi2019$4">$5');
        return route;
      }
    }
  }
}
