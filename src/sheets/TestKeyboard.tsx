import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  registerSheet,
  useScrollHandlers,
} from 'react-native-actions-sheet';

const TestKeyboard = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const actionSheetRef = useRef<ActionSheetRef>();
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionSheetRef,
  );

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <ActionSheet
        id="test-keyboard"
        gestureEnabled
        ref={actionSheetRef}
        openAnimationConfig={{
          friction: 20,
          tension: 140,
        }}>
        <ScrollView {...scrollHandlers}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <TextInput
            value={username}
            style={{color: '#212121'}}
            placeholder="username"
            onChangeText={value => setUsername(value)}
          />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
          <View>
            <TextInput
              value={password}
              style={{color: '#212121'}}
              placeholder="password"
              onChangeText={value => setPassword(value)}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={{position: 'absolute', right: 0, top: 12}}>
              <Text>{isPasswordVisible ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{padding: 8}}
            onPress={() => setRememberMe(!rememberMe)}>
            <Text>Remember me {rememberMe ? 'yes' : 'no'}</Text>
          </TouchableOpacity>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem
            ipsum dolor sit amet consectetur adipsicing elit eiusmod Lorem ipsum
            dolor sit amet consectetur adipsicing elit eiusmod
          </Text>
        </ScrollView>
      </ActionSheet>
    </>
  );
};

registerSheet('test-keyboard', TestKeyboard);

export default TestKeyboard;
