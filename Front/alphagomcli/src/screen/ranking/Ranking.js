// import React from 'react';
// import { View } from 'react-native';
// import { Tab, Text, TabView } from '@rneui/themed';

// import MagicRank from './MagicRank'
// import CaveRank from './CaveRank'
// import SkyRank from './SkyRank'
// import SwampRank from './SwampRank'
// import AllRank from './AllRank'

// function Ranking () {
// const [index, setIndex] = React.useState(0);

// return (
//   <View>
//     <Tab
//       value={index}
//       onChange={(e) => setIndex(e)}
//       indicatorStyle={{
//         backgroundColor: 'white',
//         height: 3,
//       }}
//       variant="primary"
//     >
//       <Tab.Item
//         title="마법의 성"
//         titleStyle={{ fontSize: 12 }}
//       />
//       <Tab.Item
//         title="늪"
//         titleStyle={{ fontSize: 12 }}
//       />
//       <Tab.Item
//         title="어둠의 동굴"
//         titleStyle={{ fontSize: 12 }}
//       />
//       <Tab.Item
//         title="하늘"
//         titleStyle={{ fontSize: 12 }}
//       />
//       <Tab.Item
//         title="총합"
//         titleStyle={{ fontSize: 12 }}
//       />
//     </Tab>

//     <TabView value={index} onChange={setIndex} animationType="spring">
      
//       <TabView.Item>
//         <View>
//         {{ MagicRank }}
//         </View>
//       </TabView.Item>
      
//       <TabView.Item>
//       <View>
//         {{ SwampRank }}
//         </View>
//       </TabView.Item>
      
//       <TabView.Item>
//       <View>
//         {{ CaveRank }}
//         </View>
//       </TabView.Item>
      
//       <TabView.Item >
//       <View>
//         {{ SkyRank }}
//         </View>
//       </TabView.Item>
      
//       <TabView.Item>
//       <View>
//         {{ AllRank }}
//         </View>
//       </TabView.Item>
    
//     </TabView>
//   </View>
// );
// };

// export default Ranking;



import React from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import { useNavigation } from '@react-navigation/native';
import Footer from '../../Footer';


function Ranking () {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

    <View>
      <Button
        title="총점수"
        onPress={() => navigation.navigate('AllRank')}
      />
    </View>

    <View>
      <Button
        title="마법의 성"
        onPress={() => navigation.navigate('MagicRank')}
      />
    </View>

    <View>
      <Button
        title="늪"
        onPress={() => navigation.navigate('SwampRank')}
      />
    </View>

    <View>
      <Button
        title="어둠의 동굴"
        onPress={() => navigation.navigate('CaveRank')}
      />
    </View>

    <View>
      <Button
        title="밤하늘"
        onPress={() => navigation.navigate('SkyRank')}
      />
    </View>

    <Footer />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Ranking;
