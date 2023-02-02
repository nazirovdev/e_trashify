export const getFirstName = (fullName) => fullName.split(' ')[0]


export const getColorStatus = (status) => {
  if (status.match(/pending/gi)) {
    return '#e89609'
  }

  if (status.match(/success/gi)) {
    return '#00d185'
  }

  if (status.match(/gagal/gi)) {
    return '#e31912'
  }
}

export const convertDate = (time) => {
  const date = new Date(time);
  const currentTime = Date.now();

  const timeDifference = currentTime - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return (`${days} hari yang lalu`);
  } else if (hours > 0) {
    return (`${hours} jam yang lalu`);
  } else if (minutes > 0) {
    return (`${minutes} menit yang lalu`);
  } else {
    return (`${seconds} detik yang lalu`);
  }
}

export const convertIsoToDate = (dateData) => {
  const date = new Date(dateData);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('id-ID', options);

  return formattedDate
}

export const getTwoCharName = (userName) => {
  const enforceToCapitallize = userName.toUpperCase()
  const splittedStr = enforceToCapitallize.split(' ')

  if (splittedStr.length > 1) {
    return `${splittedStr[0][0]}${splittedStr[1][0]}`
  } else {
    return `${splittedStr[0][0]}${splittedStr[0][1]}`
  }
}