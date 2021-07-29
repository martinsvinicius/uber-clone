import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Map = styled(MapView)`
  flex: 1;
  width: ${Dimensions.get('window').width + 'px'};
  height: ${Dimensions.get('window').height + 'px'};
`;