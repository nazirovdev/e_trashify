import { ActionType } from "./action";


const dataSampahReducer = (dataSampah = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DATA_SAMPAH:
      break
    default:
      return dataSampah
  }
}

export default dataSampahReducer