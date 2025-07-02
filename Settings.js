import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function SettingsScreen({ name, setName, sex, setSex, height, setHeight, weight, setWeight, goal, setGoal, setCalories, setProteins, setCarbs }) {
  const [localName, setLocalName] = useState(name);
  const [localSex, setLocalSex] = useState(sex || '');  // порожній рядок — початкове значення
  const [localHeight, setLocalHeight] = useState(height);
  const [localWeight, setLocalWeight] = useState(weight);
  const [localGoal, setLocalGoal] = useState(goal || '');  // порожній рядок — початкове значення

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isWeightFocused, setIsWeightFocused] = useState(false);
  const [isHeightFocused, setIsHeightFocused] = useState(false);

  const handleSexChange = (value) => {
    setLocalSex(value);
  };

  const handleSave = () => {
    if (!localSex) {
      Alert.alert('Помилка', 'Будь ласка, оберіть стать');
      return;
    }
    if (!localGoal) {
      Alert.alert('Помилка', 'Будь ласка, оберіть ціль');
      return;
    }
    setName(localName);
    setSex(localSex);
    setHeight(localHeight);
    setWeight(localWeight);
    setGoal(localGoal);

    const w = parseFloat(localWeight);
    const h = parseFloat(localHeight);

    if (localGoal === 'Схуднення') {
      setCalories(w * 25);
      setProteins(w * 0.8);
      setCarbs(h * 1.5);
    } else if (localGoal === 'Підтримка ваги') {
      setCalories(w * 30);
      setProteins(w * 1.2);
      setCarbs(h * 2);
    } else if (localGoal === "Набір м'язової маси") {
      setCalories(w * 35);
      setProteins(w * 2);
      setCarbs(h * 2);
    } else {
      setCalories(0);
      setProteins(0);
      setCarbs(0);
    }
  };

  return (
    <View style={stylesSettings.container}>
      <Text style={stylesSettings.title}>👤 Персональна інформація</Text>

      <View style={stylesSettings.setBlock}>
        <Text style={stylesSettings.label}>📝 Ваше ім'я:</Text>
        <TextInput
          style={stylesSettings.input}
          placeholder={!isNameFocused ? "Введіть ім'я" : ""}
          value={localName}
          onChangeText={setLocalName}
          onFocus={() => {
            if (localName === name) setLocalName('');
            setIsNameFocused(true);
          }}
          onBlur={() => setIsNameFocused(false)}
        />
      </View>

      <View style={stylesSettings.setBlock}>
        <Text style={stylesSettings.label}>⚧️ Ваша стать:</Text>
        <Picker
          style={stylesSettings.picker}
          selectedValue={localSex}
          onValueChange={handleSexChange}
          mode="dropdown"
        >
          <Picker.Item label="Оберіть стать" value="" />
          <Picker.Item label="Чоловіча" value="Чоловіча" />
          <Picker.Item label="Жіноча" value="Жіноча" />
        </Picker>

        <Text style={stylesSettings.label}>⚖️ Ваша вага (кг):</Text>
        <TextInput
          style={stylesSettings.input}
          placeholder={!isWeightFocused ? "Наприклад, 70" : ""}
          keyboardType="numeric"
          value={localWeight}
          onChangeText={setLocalWeight}
          onFocus={() => {
            if (localWeight === weight) setLocalWeight('');
            setIsWeightFocused(true);
          }}
          onBlur={() => setIsWeightFocused(false)}
        />

        <Text style={stylesSettings.label}>📏 Ваш ріст (см):</Text>
        <TextInput
          style={stylesSettings.input}
          placeholder={!isHeightFocused ? "Наприклад, 175" : ""}
          keyboardType="numeric"
          value={localHeight}
          onChangeText={setLocalHeight}
          onFocus={() => {
            if (localHeight === height) setLocalHeight('');
            setIsHeightFocused(true);
          }}
          onBlur={() => setIsHeightFocused(false)}
        />
      </View>

      <View style={stylesSettings.setBlock}>
        <Text style={stylesSettings.label}>🎯 Ваша ціль:</Text>
        <Picker
          style={stylesSettings.picker}
          selectedValue={localGoal}
          onValueChange={setLocalGoal}
          mode="dropdown"
        >
          <Picker.Item label="Оберіть ціль" value="" />
          <Picker.Item label="Схуднення" value="Схуднення" />
          <Picker.Item label="Підтримка ваги" value="Підтримка ваги" />
          <Picker.Item label="Набір м'язової маси" value="Набір м'язової маси" />
        </Picker>
      </View>

      <TouchableOpacity style={stylesSettings.addButton} onPress={handleSave}>
        <Text style={stylesSettings.addButtonText}>Зберегти</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesSettings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc', // світло-блакитний, легкий фон
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  setBlock: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6, // тінь для Android
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
    fontSize: 16,
    color: '#222',
    marginBottom: 14,
  },
  picker: {
    height: 44,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d9e6',
    marginBottom: 14,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 32,
    letterSpacing: 0.5,
  },
  information: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    fontStyle: 'italic',
  },
  addButton: {
    backgroundColor: '#4caf50', 
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 10,
    shadowColor: '#4caf50',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 7,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
});