import React from 'react';
import { View, Text } from 'react-native';

import styles from './tabs.style';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  );
};

export default Tabs;
