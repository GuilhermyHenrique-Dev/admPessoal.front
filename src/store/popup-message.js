const state = {
    popupDialog: false,
    message: '',
    title: '',
    type: '',
    callback: null,
    messageForm: null,
    btConfirm: { name: 'Ok', show: true, color: 'primary' },
    btCancel: { name: 'Cancelar', show: false },
    textForm: { label: "placeholder", show: false}
  }
  const mutations = {
    showPopupMessage: (state, opts) => {
      state.message = opts.message
      state.title = opts.title
      state.callback = opts.callback
      state.messageForm = opts.messageForm
      state.type = opts.type
      state.btConfirm = opts.btConfirm ? opts.btConfirm : { name: 'Ok', show: true, color: 'primary' },
      state.btConfirm.color = opts.btConfirm.color ? opts.btConfirm.color : 'primary'
      state.btCancel = opts.btCancel ? opts.btCancel : { name: 'Cancelar', show: false },
      state.textForm = opts.textForm ? opts.textForm :  { label: "placeholder", show: false}
      state.popupDialog = true
    },
    closePopupMessage: (state) => {
      state.popupDialog = false
    }
  }
  export default {
    namespaced: true,
    root: true,
    state,
    mutations
  }
  