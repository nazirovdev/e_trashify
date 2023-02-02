import { useEffect } from "react";
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import bg from '../../assets/bg.png'
import { asyncReceiveJenisSampah } from "../../store/jenis_sampah/action";
import { getFirstName, getTwoCharName } from "../../utils";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const Container = styled.View`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  padding: ${({ padding }) => `${padding}px`};
  background-color: ${({ bgColor }) => bgColor && bgColor};
`

Container.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  justifyContent: 'center',
  flexWrap: 'nowrap',
  marginTop: 0,
  marginBottom: 0,
  zIndex: 0,
  padding: 0,
}

export const BackgroundTop = styled.ImageBackground`
  width: ${width}px;
  height: ${height / 2}px;
  position: absolute;
  z-index: -999;
`

export const SectionWelcome = styled.View`
  width: ${width * 0.90}px;
  background-color: ${({ bgColor }) => bgColor};
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`

SectionWelcome.defaultProps = {
  bgColor: '#00d185'
}

export const ProfileImage = styled.View`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: #999;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

ProfileImage.defaultProps = {
  width: 80,
  height: 80
}

export const Typografi = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
`

Typografi.defaultProps = {
  color: 'black',
  fontSize: 20,
  fontWeight: 'normal'
}

export const CardSaldo = styled.View`
  width: ${width * 0.90}px;
  height: ${width * 0.30}px;
  background-color: #f5f7f5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  elevation: 3;
  border-radius:5px;
`

export const CardMenu = styled.View`
  width: 150px;
  height: 150px;
  background-color: white;
  elevation: 3;
  border-radius: 10px;
  justify-content:center;
  align-items: center;
`

export const HomePage = ({ navigation }) => {
  const { authNasabahReducer, jenisSampahReducer } = useSelector(state => state)

  const { name, point } = authNasabahReducer.authNasabah

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveJenisSampah())
  }, [dispatch])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <BackgroundTop source={bg} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <SectionWelcome>
            <ProfileImage>
              <Typografi color='white' fontWeight='bold' fontSize='30'>{getTwoCharName(name)}</Typografi>
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