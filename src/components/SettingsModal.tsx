import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/actions/themeActions"; 

const SettingsModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme); 

  const handleToggleTheme = () => {
    dispatch(toggleTheme());

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Налаштування</Text>
          <Switch onValueChange={handleToggleTheme} value={isDarkTheme} />
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>Закрити</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default SettingsModal;
