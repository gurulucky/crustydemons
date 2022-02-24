import { SET_WALLET } from './types'


export const setWallet = (wallet) => dispatch => {
    dispatch({
        type: SET_WALLET,
        payload: wallet
    })
}