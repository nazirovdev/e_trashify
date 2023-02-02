import { Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackgroundTop, Container, ProfileImage, Typografi } from "./HomeNasabah";
import bg from '../../assets/bg.png'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from "react-redux";
import { asyncUnsetAuthNasabah } from "../../store/auth/nasabah/action";
import { getTwoCharName } from "../../utils";

const width = Dimensions.get('screen').width

export const Profile = () => {
  const { authNasabahReducer } = useSelector(state => state)

  const { name, email, address } = authNasabahReducer.authNasabah

  const dispatch = useDispatch()

  const onLogoutHandle = () => {
    dispatch(asyncUnsetAuthNasabah())
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <BackgroundTop source={bg} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View style={{ marginVertical: 10 }}>
            <ProfileImage width='150' height='150'>
              <Typografi color='white' fontWeight='bold' fontSize='50'>{getTwoCharName(name)}</Typografi>
            </ProfileImage>
          </View>
          <View style={{ width: width * 0.80, gap: 20, marginTop: 15 }}>
            <Container flexDirection='row' gap='10'>
              <View><Feather name='user' size={30} color='gray' /></View>
              <View style={{ flex: 1 }}>
                <Typografi fontSize='16' color='gray'>Name</Typografi>
                <Typografi fontSize='16'>{name}</Typografi>
              </View>
            </Container>
            <View style={{ height: 2, backgroundColor: '#f7f5f5' }} />
            <Container flexDirection='row' gap='10'>
              <View><Fontisto name='email' size={30} color='gray' /></View>
              <View style={{ flex: 1 }}>
                <Typografi fontSize='16' color='gray'>Email</Typografi>
                <Typografi fontSize='16'>{email}</Typografi>
              </View>
            </Container>
            <View style={{ height: 2, backgroundColor: '#f7f5f5' }} />
            <Container flexDirection='row' gap='10'>
              <View><Feather name='map-pin' size={30} color='gray' /></View>
              <View style={{ flex: 1 }}>
                <Typografi fontSize='16' color='gray'>Alamat</Typografi>
                <Typografi fontSize='16'>{address}</Typografi>
              </View>
            </Container>
          </View>
          <View style={{ marginTop: 30, borderRadius: 50, width: width * 0.40, flex: 1, backgroundColor: '#f72832', padding: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={onLogoutHandle}>
              <Typografi fontSize='18' fontWeight='bold' color='white'>Keluar</Typografi>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView >
  )
}