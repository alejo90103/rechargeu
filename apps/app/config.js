/**
 * @Author: Codeals
 * @Date:   06-03-2020
 * @Email:  ian@codeals.es
 * @Last modified by:   Codeals
 * @Last modified time: 06-03-2020
 * @Copyright: Codeals
 */

import {getString} from 'tns-core-modules/application-settings';

export const apiClient = 'http://127.0.0.1:8080/';
export const apiDomain = 'https://adminrecharge.codeals.es/';

export const loginUrl = apiDomain + 'oauth/token';
export const userUrl = apiDomain + 'api/user';
export const forgotPassword = apiDomain + 'api/forgot-password';
export const resetPassword = apiDomain + 'api/reset-password';
export const registerUserUrl = apiDomain + 'api/user-register';
export const activeUserUrl = apiDomain + 'api/user-active';
export const changePassword = apiDomain + 'api/v1/change-password';

// recharge
export const rechargeCell = apiDomain + 'api/v1/recharge-cell';
export const rechargeNauta = apiDomain + 'api/v1/recharge-nauta';
export const multiRechargeCell = apiDomain + 'api/v1/multi-recharge-cell';
export const multiRechargeNauta = apiDomain + 'api/v1/multi-recharge-nauta';
export const rechargeList = apiDomain + 'api/v1/recharge-list';

// offert
export const offerList = apiDomain + 'api/offer-list';

// contact
export const contactListUrl = apiDomain + 'api/v1/contact-list';
export const getContactById = apiDomain + 'api/v1/contact-get';
export const addNewContact = apiDomain + 'api/v1/contact-add';
export const updateContact = apiDomain + 'api/v1/contact-update';
export const deleteContact = apiDomain + 'api/v1/contact-delete';

// paymemt
export const paymentRedsys = apiDomain + 'api/v1/pay-redsys';
export const paymentPayPal = apiDomain + 'api/v1/pay-paypal';
export const redsys = 'https://sis.redsys.es/sis/realizarPago';

// test
export const getTestUrl = apiDomain + 'api/test';

export const getHeader = function () {
  // const tokenData = JSON.parse(window.localStorage.getItem('authUser'))

  const tokenData = getString("authUser");
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData
  }
  return headers;
}
