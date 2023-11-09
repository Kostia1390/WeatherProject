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
import { Typography } from "../Typography";
import CloseSvg from "../../assets/icons/close.svg";

const SettingsModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={{ flex: 1 }} />
            <Typography f20 style={{ textAlign: "center" }}>
              Налаштування
            </Typography>
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={onClose}
            >
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <Typography f20>Змінити Тему</Typography>
          <Switch onValueChange={handleToggleTheme} value={isDarkTheme} />
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
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default SettingsModal;
