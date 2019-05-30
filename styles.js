import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get("window").width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "black",
    position:"absolute",
    bottom:0,
    left:0,
  },
  iconGroupContainer: {
    textAlign: "center",
    maxWidth: 100,
  },
  conducts: {
    flex: 1,
    fontSize: 10,
  },
  iconText: {
    color: "white",
    padding: 5,
    width: "100%",
  },
  icon: {
    padding: 10,
  },
  aboutHeader: {
    paddingBottom: 30,
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: "white",
    color: "#9370DB",
  },
  aboutContent: {
    fontSize: 20,
    padding: 20,
    backgroundColor: "white",
  },
  r10: {
    justifyContent: "center",
    marginLeft: 55,
    width: 300,
    height: 120,
    resizeMode: 'contain',
  },
  sessionTime: {
    width: width,
    height: 30,
    paddingLeft: 10,
    backgroundColor: "#E8E8E8",
    marginBottom: 10,
  },
  sessionInfo: {
    width: width,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  sessionLocation: {
    fontSize: 20,
    color: "grey",
    marginBottom: 10,
  },
  speakerSessionInfo: {
    width: width,
    padding: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  speakerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  speakerName: {
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 10,
    paddingTop: 25,
  },
  presentedText: {
    fontSize: 20,
    color: "grey",
    paddingLeft: 20,
    paddingBottom: 0,
  },
  heartIcon: {
    marginLeft: "auto",
    paddingRight: 10,
  },
  heartLocationContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalTitleContainer: {
    display: "flex",
    height: 100,
    marginTop: 70,
    flexDirection: 'row',
  },
  speakerDescContainter: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
  },
  wikipediaButton: {
    alignSelf: "center",
    backgroundColor: "#b070eb",
    padding: 15,
    borderRadius: 40,
  },
});