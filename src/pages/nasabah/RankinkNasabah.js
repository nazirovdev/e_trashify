import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { BackgroundTop, Container, Typografi } from "./HomeNasabah";
import bg from '../../assets/bg.png'

const width = Dimensions.get('screen').width

const RankinkCard = () => (
  <View style={{
    width: width * 0.90,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <View style={{ width: 70, height: 100, backgroundColor: 'gray' }} />
      <Typografi fontSize='18' fontWeight='bold' color='gray'>Muhammad</Typografi>
    </View>
    <View style={{ marginRight: 10 }}>
      <Typografi fontSize='18' fontWeight='bold' color='gray'>100 Pt</Typografi>
    </View>
  </View>
)

export const RankinkNasabah = () => (
  <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
    <BackgroundTop source={bg} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container marginTop='30' marginBottom='30' gap='15'>
        <RankinkCard />
        <RankinkCard />
        <RankinkCard />
      </Container>
    </ScrollView>
  </SafeAreaView >
)