import React from 'react';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { searchStyles } from './styles';

interface SearchProps {
  onLocationSelected: (data: GooglePlaceData, details: GooglePlaceDetail | null) => any;
}

export function Search({ onLocationSelected }: SearchProps) {
  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      onPress={onLocationSelected}
      query={{
        key: 'AIzaSyCKyv1OiQHlqdnlJHIrv4eG9SYy6GrJ8oI',
        language: 'pt-BR',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
        placeholderTextColor: '#808080',
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={searchStyles}
    />
  );
}
