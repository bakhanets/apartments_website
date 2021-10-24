export default {
  setIsShow(state, value) {
    state.isShow = value;
  },
  setIsShowDD(state, value) {
    state.isShowDD = value;
  },
  setValueArray(state, value) {
    state.ddValues = value;
  },
  setCurrentModalKey(state, value) {
    state.currentModalKey = value;
  },
  setOptions(state, value) {
    state.options = value;
  },
  setUnclicable(state, value) {
    state.options = {
      ...state.options,
      isUnclosable: true,
    };
  },
  setIsShowWelcome(state, value) {
    state.showWelcomeModal = value;
  },
};
