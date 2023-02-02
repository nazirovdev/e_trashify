import AsyncStorage from "@react-native-async-storage/async-storage"

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
  getOwnProfileAdmin
}