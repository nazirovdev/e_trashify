import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

const BASE_URL = 'http://192.168.100.42:3000'

const getAccessToken = async () => {
  return await AsyncStorage.getItem('token')
}

const setAccessToken = async (token) => {
  return await AsyncStorage.setItem('token', token)
}

const removeAccessToken = async (token) => {
  return await AsyncStorage.removeItem('token')
}

const fetchWithAuth = async (url, options) => {
  return await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${await getAccessToken()}`
    }
  })
}

const loginNasabah = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/nasabah/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.accessTokenId
}

const getOwnProfileNasabah = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/nasabah/me`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.nasabah
}

const getSampah = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/jenis_sampah`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.jenis_sampah
}

const getTransaksi = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/nasabah/transaksi`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.transaksi
}

const getDetailTransaksi = async ({ id }) => {
  const response = await fetchWithAuth(`${BASE_URL}/nasabah/transaksi/${id}`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.detailTransaksi
}

const addTransaksi = async ({ idJenisSampah, berat, description }) => {
  const response = await fetchWithAuth(`${BASE_URL}/nasabah/transaksi`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ idJenisSampah, berat, description })
  })

  const result = await response.json()

  if (result.error) {
    throw new Error(error.message)
  }

  return result
}

const loginAdmin = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/admin/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.accessTokenId
}

const getOwnProfileAdmin = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/me`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.admin
}

const addSampah = async ({ name, point }) => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/jenis_sampah`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, point })
  })

  const result = await response.json()

  return result.data.jenis_sampah
}

const putJenisSampah = async ({ id, name, point }) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/admin/jenis_sampah/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, point })
    })

    const result = await response.json()

    return result.data.jenis_sampah
  } catch (error) {
    Alert.alert(error.message)
  }
}

const deleteJenisSampah = async ({ id }) => {
  try {
    const response = await fetchWithAuth(`${BASE_URL}/admin/jenis_sampah/${id}`, {
      method: 'DELETE',
    })

    await response.json()
  } catch (error) {
    Alert.alert(error.message)
  }
}

const getNasabah = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/nasabah`, {
    method: 'GET',
  })

  const result = await response.json()

  if (result.error) {
    throw new Error(result.message)
  }

  return result.data.nasabah
}

const addNasabah = async ({ name, email, password, address }) => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/nasabah`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, password, address
    })
  })

  const result = await response.json()

  if (result.error) {
    throw new Error(result.message)
  }

  return result.data.nasabah
}

const deleteNasabah = async ({ id }) => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/nasabah/${id}`, {
    method: 'DELETE',
  })

  const result = await response.json()

  if (result.error) {
    throw new Error(result.message)
  }
}

const getAllTransaksi = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/admin/transaksi`, {
    method: 'GET'
  })

  const result = await response.json()

  if (result.error === true) {
    throw new Error(result.message)
  }

  return result.data.transaksi
}

export const api = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  loginNasabah,
  getOwnProfileNasabah,
  getSampah,
  getTransaksi,
  getDetailTransaksi,
  addTransaksi,
  loginAdmin,
  getOwnProfileAdmin,
  addSampah,
  putJenisSampah,
  deleteJenisSampah,
  getNasabah,
  addNasabah,
  deleteNasabah,
  getTransaksi,
  getAllTransaksi
}