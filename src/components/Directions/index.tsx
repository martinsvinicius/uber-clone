import React, { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';

interface DirectionsProps {
  destination: {
    latitude: number;
    longitude: number;
  };
  origin: {
    latitude: number;
    longitude: number;
  };
  onReady: () => any;
}

export function Directions({ destination, origin, onReady }: DirectionsProps) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCKyv1OiQHlqdnlJHIrv4eG9SYy6GrJ8oI"
      strokeWidth={3}
      strokeColor="#222"
      precision="high"
      lineDashPattern={[0, 1]}
    />
  );
}
