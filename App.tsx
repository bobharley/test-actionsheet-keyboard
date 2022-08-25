import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import './src/sheets';

const App = () => {
  return (
    <SheetProvider>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
          style={{padding: 16}}
          onPress={() => SheetManager.show('test-keyboard')}>
          <Text>Show action sheet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 16}}
          onPress={() => SheetManager.hideAll()}>
          <Text>Hide all action sheet</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SheetProvider>
  );
};

export default App;
