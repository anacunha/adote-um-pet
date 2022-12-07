import { Flex, View } from "@aws-amplify/ui-react";
import { PetCollection } from './ui-components';

function App() {
  return (
    <div className="App">
      <Flex direction="row" justifyContent="center">
        <View>
          <PetCollection />
        </View>
      </Flex>
    </div>
  );
}

export default App;
