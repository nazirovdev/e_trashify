import React from 'react'
import { Alert, Pressable, ScrollView, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { useInput } from '../../hooks/useInput'
import { asyncSetAuthAdmin } from '../../store/auth/admin/action'

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex:1;
  justify-content:center;
`

const TextInput = styled.TextInput`
  border-style: solid;
  border-color: #EFA3C8;
  border-width: 2px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
`

const Form = styled.View`
  display: flex;
  flex-direction: column;
  gap:20px;
`

const ButtonStyle = styled.Pressable`
  background-color: #EFA3C8;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
  border-radius:10px;
  margin-top: 20px;
`

const TextButton = styled.Text`
  font-weight: bold;
`

const Button = ({ title, onClick }) => (
  <ButtonStyle onPress={onClick}>
    <TextButton>{title}</TextButton>
  </ButtonStyle>
)

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`

const TextButtonStyle = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`

const ButtonText = ({ title, onClick }) => (
  <Pressable onPress={onClick}>
    <TextButtonStyle>{title}</TextButtonStyle>
  </Pressable>
)

export default function LoginAdmin({ navigation }) {
  const [email, setEmail, resetEmail] = useInput('')
  const [password, setPassword, resetPassword] = useInput('')

  const dispatch = useDispatch()

  const onHandleLoginAdmin = () => {
    dispatch(asyncSetAuthAdmin({ email, password }))

    resetEmail()
    resetPassword()
  }

  return (
    <Container>
      <Title>Login Admin</Title>
      <Form>
        <TextInput placeholder='Masukkan Email' placeholderTextColor='gray' value={email} onChangeText={setEmail} />
        <TextInput placeholder='Masukkan Password' placeholderTextColor='gray' value={password} onChangeText={setPassword} />
        <Button title='Masuk' onClick={onHandleLoginAdmin} />
      </Form>
      <ButtonText title='Masuk sebagai Nasabah' onClick={() => navigation.navigate('LoginNasabah')} />
    </Container>
  )
}
