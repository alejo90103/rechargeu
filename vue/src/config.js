/**
 * @Author: Codeals
 * @Date:   05-08-2019
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 21-11-2019
 * @Copyright: Codeals
 */

export const apiDomain = 'http://localhost:8000/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const forgotPassword = apiDomain + 'api/forgot-password'
export const resetPassword = apiDomain + 'api/reset-password'
export const registerUserUrl = apiDomain + 'api/user-register'
export const activeUserUrl = apiDomain + 'api/user-active'

// export const getNomenclatorMaker = apiDomain + 'api/v1/get-meker'
//
// export const userListUrl = apiDomain + 'api/v1/user-list'
// export const getUserConversationUrl = apiDomain + 'api/v1/get-user-conversation'
// export const saveChatMessageUrl = apiDomain + 'api/v1/save-chat'
// export const getUserNotificationsChat = apiDomain + 'api/v1/get-chat-notifications'
// export const clearNotificationChat = apiDomain + 'api/v1/clear-chat-notifications'
//
// export const getUserPMNotifications = apiDomain + 'api/v1/get-private-message-notifications'
// export const getUserPrivateMessages = apiDomain + 'api/v1/get-private-messages'
// export const getUserPrivateMessagesSent = apiDomain + 'api/v1/get-private-messages-sent'
// export const getPrivateMessageById = apiDomain + 'api/v1/get-private-message'
// export const sendPrivateMessage = apiDomain + 'api/v1/send-private-message'
//
// export const carListUrl = apiDomain + 'api/v1/car-list'
// export const getCarById = apiDomain + 'api/v1/get-car'
// export const addNewCar = apiDomain + 'api/v1/add-car'
// export const updateCar = apiDomain + 'api/v1/updata-car'
// export const deleteCar = apiDomain + 'api/v1/delete-car'
// export const uploadImageGallery = apiDomain + 'api/v1/upload-images-car'
//
// export const deleteImage = apiDomain + 'api/v1/delete-images-car'
// export const getGalleryByCar = apiDomain + 'api/v1/get-gallery'
//
// export const sellListUrl = apiDomain + 'api/v1/sell-list'
// export const sellByUserUrl = apiDomain + 'api/v1/sell-user'
// export const getSellById = apiDomain + 'api/v1/get-sell'
// export const addNewSell = apiDomain + 'api/v1/add-sell'
// export const deleteSell = apiDomain + 'api/v1/delete-sell'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
