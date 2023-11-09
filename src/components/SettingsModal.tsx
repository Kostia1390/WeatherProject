import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native';

const SettingsModal = ({ visible, onClose, onThemeChange, isDarkTheme }) => {
    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
           <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Настройки</Text>
          <Switch
            onValueChange={onThemeChange}
            value={isDarkTheme}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  // Стили для модального окна
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default SettingsModal;
