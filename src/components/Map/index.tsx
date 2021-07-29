import React, { useEffect, useState } from 'react';
import { Container, Map as StyledMap } from './styles';
import * as Location from 'expo-location';
import { Region } from 'react-native-maps';
import { Search } from '../Search';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Directions } from '../Directions';

export function Map() {
  const [permissionStatus, setPermissionStatus] =
    useState<Location.PermissionStatus | null>(null);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [destination, setDestination] = useState<{
    latitude: number;
    longitude: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    getUserLocation();
  }, [permissionStatus]);

  useEffect(() => {
    if (!location) {
      return;
    }

    setRegion({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    });
  }, [location]);

  async function requestLocationPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    setPermissionStatus(status);
  }

  async function getUserLocation() {
    if (permissionStatus !== 'granted' && permissionStatus !== null) {
      alert('You need to provide the location permission to use the app');
      requestLocationPermission();
      return;
    } else if (permissionStatus === null) {
      requestLocationPermission();
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Highest,
      timeInterval: 2000,
    });
    setLocation(location);
  }

  function handleLocationSelected(data: GooglePlaceData, details: GooglePlaceDetail | null) {
    if (!details) {
      alert('Cannot find location details');
      return;
    };

    const { location: { lat: latitude, lng: longitude } } = details.geometry;

    const destination = {
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    };

    setDestination(destination);
  }

  return (
    <Container>
      <StyledMap region={region} showsUserLocation loadingEnabled>
        {destination && region && (
          <Directions
            origin={region}
            destination={destination}
            onReady={() => {}}
          />
        )}
      </StyledMap>

      <Search onLocationSelected={handleLocationSelected} />
    </Container>
  );
}
