<template>
  <div id="gophercon-map">
    <div :style="{ width: width, height: height }"></div>
    <div class="sitetext">中央研究院人文社會科學館</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Map from 'ol/Map';
import Feature from 'ol/Feature';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import LayerVector from 'ol/layer/Vector';
import SourceVector from 'ol/source/Vector';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import * as Proj from 'ol/proj';
import * as Interaction from 'ol/interaction';
import { Coordinate } from 'ol/coordinate';
import 'ol/ol.css';

@Component
export default class GopherConMap extends Vue {
  @Prop({
    required: false,
    default: '320px'
  })
  private width!: string;

  @Prop({
    required: false,
    default: '240px'
  })
  private height!: string;

  private osmMap!: Map;

  public mounted () {
    this.osmMap = this.makeMap();
  }

  private mapMarkerLayer (name: string, imgSrc: string, pos: Coordinate) {
    const icon = new Feature({
      name,
      geometry: new Point(Proj.fromLonLat(pos))
    });
    const iconStyle = new Style({
      image: new Icon({
        scale: 0.5,
        anchor: [0.5, 1],
        anchorXUnits: IconAnchorUnits.FRACTION,
        anchorYUnits: IconAnchorUnits.FRACTION,
        src: imgSrc
      })
    });
    icon.setStyle(iconStyle);
    return new LayerVector({
      source: new SourceVector({ features: [icon] }),
      style: iconStyle
    });
    }

  private makeMap () {
    const iconMain = this.mapMarkerLayer('main', '/2020/img/gophercon-logo.png', [121.6116, 25.0410]);
    const osmMap = new Map({
      target: this.$el.firstChild as HTMLElement,
      interactions: Interaction.defaults({mouseWheelZoom: false}),
      layers: [
        new Tile({
          source: new OSM(),
          opacity: 0.6
        }),
        iconMain
      ],
      view: new View({
        center: Proj.fromLonLat([121.6116, 25.0410]),
        zoom: 15
      })
    });
    return osmMap;
  }
}
</script>

<style lang="scss" scoped>
#gophercon-map {
  position: relative;
  width: calc(100% - 140px * 2);
  padding: 64px 140px;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0;
    padding-top: 4rem;
  }

  .sitetext {
    text-align: center;
    position: absolute;
    bottom: 20%;
    border: 1px solid black;
    left: 50%;
    transform: translate(-50%);
    color: black;
    padding: 12px;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.7);
    line-height: 1.4;
    font-family: 'Noto Sans CTK TC', sans-serif;
  }
}
</style>
