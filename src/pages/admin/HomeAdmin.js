import { useEffect } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveJenisSampah } from '../../store/jenis_sampah/action'
import bg from '../../assets/bg.png'
import { BackgroundTop, CardMenu, CardSaldo, Container, ProfileImage, SectionWelcome, Typografi } from '../nasabah/HomeNasabah'
import { getFirstName, getTwoCharName } from '../../utils'

export const HomeAdmin = ({ navigation }) => {
  const { authAdminReducer, jenisSampahReducer } = useSelector(state => state)

  const { name } = authAdminReducer.authAdmin

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {/* <BackgroundTop source={bg} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <SectionWelcome bgColor='transaprent'>
            <ProfileImage>
              <Typografi color='white' fontWeight='bold' fontSize='30'>{getTwoCharName(name)}</Typografi>
            </ProfileImage>
            <Container gap={5} alignItems='flex-start'>
              <Typografi color='#00d185' fontWeight='bold'>Welcome, {getFirstName(name)}</Typografi>
              <Typografi color='#00d185' fontWeight='bold' fontSize='15'>Anda admin E-Trashify</Typografi>
            </Container>
          </SectionWelcome>
          <Container flexDirection='row' gap='20' flexWrap='wrap' marginTop='30' marginBottom='30'>
            <TouchableOpacity onPress={() => navigation.navigate('TambahSampah')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/tabung_sampah.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Tambah Sampah</Typografi>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DataSampah')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/data_sampah.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Data Sampah</Typografi>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DaftarNasabah')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/riwayat_transaksi.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Daftar Nasabah</Typografi>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DataTransaksi')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/riwayat_transaksi.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Data Nasabah</Typografi>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DataTransaksi')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/riwayat_transaksi.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Data Transaksi</Typografi>
              </Container>
            </TouchableOpacity>
          </Container>
        </Container>
      </ScrollView>
    </SafeAreaView >
  )
}