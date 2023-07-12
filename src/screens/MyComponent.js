/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Text, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('screen');

const MyComponent = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
  const ITEM_SIZE = 200; // Size of each item in pixels 

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <View style={styles.content}>
          <Text key={item.id} style={styles.text}>
            Title: {item}
          </Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.list}>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
      />
    </View>
  );
};

const styles = {
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: Dimensions.get('screen').width * 1,
  },
  content: {
    width: width * 0.8,
    height: 200,
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Lato',
    marginBottom: 10,
    color: '#fff',
  },
  list: {
    backgroundColor: '#031637',
    marginBottom: 40,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Lato',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 20,
  },
};

export default MyComponent;
