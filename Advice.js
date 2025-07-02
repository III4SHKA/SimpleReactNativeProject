import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export function AdviceScreen() {
  return (
    <ScrollView style={stylesAdvice.container}>
      <Text style={stylesAdvice.title}>Список продуктів для здорового харчування</Text>

      <View style={[stylesAdvice.categoryBox, { borderColor: '#FF7043', backgroundColor: '#FFF3E0' }]}>
        <Text style={stylesAdvice.category}>🥩 Білки:</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Куряча грудка</Text>
        <Text style={stylesAdvice.itemCalories}>110 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Яйце</Text>
        <Text style={stylesAdvice.itemCalories}>70 ккал / 1 шт.</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Тунець</Text>
        <Text style={stylesAdvice.itemCalories}>95 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Нежирний творог</Text>
        <Text style={stylesAdvice.itemCalories}>80-100 ккал / 100г</Text>
      </View>

      <View style={[stylesAdvice.categoryBox, { borderColor: '#42A5F5', backgroundColor: '#E3F2FD' }]}>
        <Text style={stylesAdvice.category}>🍚 Вуглеводи:</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Вівсянка</Text>
        <Text style={stylesAdvice.itemCalories}>350 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Гречка</Text>
        <Text style={stylesAdvice.itemCalories}>340 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Рис коричневий</Text>
        <Text style={stylesAdvice.itemCalories}>360 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Цільнозерновий хліб</Text>
        <Text style={stylesAdvice.itemCalories}>~100 ккал / 1 скибка</Text>
      </View>

      <View style={[stylesAdvice.categoryBox, { borderColor: '#66BB6A', backgroundColor: '#E8F5E9' }]}>
        <Text style={stylesAdvice.category}>🥦 Овочі:</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Броколі</Text>
        <Text style={stylesAdvice.itemCalories}>30 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Огірок</Text>
        <Text style={stylesAdvice.itemCalories}>15 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Морква</Text>
        <Text style={stylesAdvice.itemCalories}>35 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Помідор</Text>
        <Text style={stylesAdvice.itemCalories}>18 ккал / 100г</Text>
      </View>

      <View style={[stylesAdvice.categoryBox, { borderColor: '#FFA726', backgroundColor: '#FFF3E0' }]}>
        <Text style={stylesAdvice.category}>🥜 Жири / перекуси:</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Горіхи</Text>
        <Text style={stylesAdvice.itemCalories}>600-650 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Авокадо</Text>
        <Text style={stylesAdvice.itemCalories}>240 ккал / 1 шт.</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Арахісова паста</Text>
        <Text style={stylesAdvice.itemCalories}>580 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Темний шоколад</Text>
        <Text style={stylesAdvice.itemCalories}>500 ккал / 100г</Text>
      </View>

      <View style={[stylesAdvice.categoryBox, { borderColor: '#AB47BC', backgroundColor: '#F3E5F5' }]}>
        <Text style={stylesAdvice.category}>🍌 Фрукти:</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Банан</Text>
        <Text style={stylesAdvice.itemCalories}>89 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Яблуко</Text>
        <Text style={stylesAdvice.itemCalories}>50 ккал / 100г</Text>
      </View>
      <View style={stylesAdvice.itemRow}>
        <Text style={stylesAdvice.itemName}>Апельсин</Text>
        <Text style={stylesAdvice.itemCalories}>45 ккал / 100г</Text>
      </View>
    </ScrollView>
  );
}
const stylesAdvice = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  categoryBox: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  category: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  itemName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    flexShrink: 1,
  },
  itemCalories: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#3a3a3a',           
    backgroundColor: '#c7e8b4',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 110,
    textAlign: 'center',
  },
});