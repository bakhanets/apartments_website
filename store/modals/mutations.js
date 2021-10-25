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
  setChoiceArray(state, value) {
    const obj = state.choicenDD;
    obj[(value.id - 1)] = value.name;
    state.choicenDD = obj;
  },
  setIsShowWelcome(state, value) {
    state.showWelcomeModal = value;
  },
};
