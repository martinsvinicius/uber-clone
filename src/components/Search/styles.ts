import { Platform } from "react-native";
import { Styles } from "react-native-google-places-autocomplete";

export const searchStyles: Object | Styles = {
  container: {
    position: 'absolute',
    top: Platform.select({ ios: 60, android: 40 }),
    width: '100%',
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 54,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
    color: '#000',
  },
  listView: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#DDD',
    marginTop: 10,
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
  },
  description: {
    fontSize: 16,
  },
  row: {
    padding: 16,
    height: 58,
  },
};
