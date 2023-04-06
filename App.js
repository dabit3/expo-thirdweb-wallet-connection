import {
  ConnectWallet,
  ThirdwebProvider,
  useAddress,
  metamaskWallet,
  rainbowWallet,
  useDisconnect
} from "@thirdweb-dev/react-native";
import { Text, View, TouchableHighlight } from 'react-native'

export default function App() {
  return (
    <ThirdwebProvider
      supportedWallets={[rainbowWallet(), metamaskWallet()]}
    >
      <Main />
    </ThirdwebProvider>
  );
}

function Main() {
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <View style={styles.container}>
      { !address && <ConnectWallet /> }
      { address && (
        <View>
          <Text style={styles.text}>GM 🌞 {address}</Text>
          <TouchableHighlight underlayColor='rgba(255, 255, 255, .6)' onPress={disconnect} style={styles.button}>
            <Text style={styles.buttonText} >DISCONNECT</Text>
          </TouchableHighlight>
        </View>
      ) }
    </View>
  )
}

const styles = {
  container: {
    paddingTop: 370,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 22,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    padding: 20,
    backgroundColor: '#fefefe',
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '700'
  }
}