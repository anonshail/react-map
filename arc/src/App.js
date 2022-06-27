import './App.css';
import React from 'react';
import {WebMap} from '@esri/react-arcgis';
import Campus from './Campus';

export default (props) => (
  <WebMap id="3d8a6c02692d409eb799524ec374b17b" style={{ width: '70vw', height: '90vh' }}
    //mapProperties={{ basemap: 'satellite' }}
    viewProperties={{
      center: [-118.28538,34.0205],
      zoom: 15
    }}>
    <Campus />
  </WebMap>
)