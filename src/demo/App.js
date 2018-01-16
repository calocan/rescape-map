import React from 'react';
import {
  Deck,
  DeckContainer,
  Mapbox,
  MapboxContainer,
  MapLines,
  MapMarkers,
  MapStops,
  MarkerItem,
  MarkerList,
  MarkerListContainer,
  Sankey,
  SankeyContainer,
  SankeyFilterer,
  SankeyLinkLegend,
  SankeyNodeLegend
} from '../lib';

const App = () => (
  <div>
    <Deck/>
    <DeckContainer/>
    <Mapbox/>
    <MapboxContainer/>
    <MapLines/>
    <MapMarkers/>
    <MapStops/>
    <MarkerItem/>
    <MarkerList/>
    <MarkerListContainer/>
    <Sankey/>
    <SankeyContainer/>
    <SankeyFilterer/>
    <SankeyLinkLegend/>
    <SankeyNodeLegend/>
  </div>
);

export default App;
