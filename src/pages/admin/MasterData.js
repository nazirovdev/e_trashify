import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundTop, CardMenu, CardSaldo, Container, ProfileImage, SectionWelcome, Typografi } from '../nasabah/HomeNasabah'

export default function MasterData() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <BackgroundTop source={bg} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <SectionWelcome>
            <ProfileImage>
              <Typografi color='white' fontWeight='bold' fontSize='30'>RN</Typografi>
            </ProfileImage>
            <Container gap={5} alignItems='flex-start'>
              <Typografi color='white' fontWeight='bold'>Welcome, {getFirstName(name)}</Typografi>
              <Typografi color='white' fontWeight='bold' fontSize='15'>Skuy Nabung Sampah</Typografi>
            </Container>
          </SectionWelcome>
          <CardSaldo>
            <Container gap={5}>
              <Typografi color='#00d185' fontWeight='bold'>Point Saat ini</Typografi>
              <Typografi color='#00d185' fontWeight='bold' fontSize='25'>{point}</Typografi>
            </Container>
          </CardSaldo>
          <Container flexDirection='row' gap='20' flexWrap='wrap' marginTop='30' marginBottom='30'>
            <TouchableOpacity onPress={() => navigation.navigate('TabungSampahNasabah')}>
              <Container>
                <CardMenu>
                  <ImageBackground source={require('../../assets/tabung_sampah.png')} style={{ width: 100, height: 100 }} />
                </CardMenu>
                <Typografi color='#00d185' fontWeight='bold' fontSize='16'>Tabung Sampah</Typografi>
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