import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { SearchBar } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { posts } from './data';
const SearchScreen = () => {
    const [search, setSearch] = useState("")
    const [datas, setDatas] =useState([])
    const updateSearch = (value) => {
        setSearch(value)
        if(search.length > 0){
            let newDatas = posts.filter(post => post.title.toUpperCase().indexOf(search.toUpperCase()) !== -1)
            setDatas(newDatas)        }
    }
    const clearText = () => {
    }
    return (
        <View>
        <SafeAreaView>
            <SearchBar
            placeholder='Tapez votre recherche ici'
            onChangeText={updateSearch}
            value={search}
            lightTheme={true}
            onClear={clearText}
            />

            <FlatList
            data={datas}
            renderItem={({item}) => <View>
                <Text>{item.title}</Text>
            </View> }
            keyExtractor={item => item.id}
            ItemSeparatorComponent={<View style={styles.separator}></View>}
            />
        </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    separator : {
        backgroundColor : "#ddd",
        height : 1,
        marginVertical : 4
      },
})
export default SearchScreen