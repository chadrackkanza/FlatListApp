import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl,  FlatList, ScrollView, TextInput, Button} from 'react-native';
import { posts } from './data';
function PostItem({post}){
  return (
    <View style={styles.post}>
      <View style={styles.margin}>
        <Text style={styles.postTitle} className="text-red">{post.title}</Text>
        {/* <Text style={styles.postBody}>{post.body}</Text> */}
      </View>
    </View>
  )
}

function Header(){
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>Last news</Text>
      <Text>Toutes nos dernières publications</Text>
      <Button
        title='AsyncStorage'
        onPress={() => alert('pressed')}
      />
    </View>
  )
}
export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  const empty = []
  const obj = {
    page : 1,
    items : [
      
    ]
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={posts}
        renderItem={({item}) => <PostItem post={item} /> }
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
        ListEmptyComponent={<Text>Aucune donnee</Text>}
        ListFooterComponent={<Text>Pied de page</Text>}
        ListHeaderComponent={<Header/>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />


      


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post : {

    // width : '33%',
  },
  separator : {
    backgroundColor : "#ddd",
    height : 1,
  },
  header : {
    margin : 8
  },
  headertitle : {
    fontSize : 35,
    fontWeight : 'bold'
  },
  postTitle : {
    fontSize : 18,
    fontWeight : 'bold',
    marginBottom : 10,
    textAlign : 'center'

  },
  postBody: {
    color : '#334155'
  },
  margin: {
    backgroundColor : '#e2e8f0',
    padding : 30,
    borderRadius : 10,
    margin : 8,
  }
});
