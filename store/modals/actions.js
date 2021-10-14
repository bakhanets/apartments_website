export default {
    show({commit}, payload) {
        commit('setIsShow', true);
        commit('setValueArray', payload);
    },
    hide({commit}) {
        commit('setIsShow', false);
    },
    setUnclicable({commit}) {
        commit('setUnclicable');
    },
    async sendData({commit}, payload) {
        const url = 'https://sheet.best/api/sheets/505abe1a-b797-432b-ab9c-709eea459da7';
        try {
            const response = await fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(payload), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.error('Ошибка:', error);
        }
    },
    checkWelcomeModal({commit}, value) {
        commit('setIsShowWelcome', value);
    },
};
