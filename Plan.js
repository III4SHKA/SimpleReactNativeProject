import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';

export function Plan({ goal, calories, proteins, carbs, eatenCalories, setEatenCalories, eatenProteins, setEatenProteins, eatenFats, setEatenFats }) {

  if (!goal || goal.trim() === 'Ціль') {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          ⚠️ Дані про харчування відсутні або неповні. Будь ласка, оберіть у Settings
        </Text>
      </View>
    );
  }

  const portions = {
    breakfast: 0.25,
    lunch: 0.3,
    snack: 0.15,
    dinner: 0.3,
  };

  const total = {
    calories: Number(calories),
    proteins: Number(proteins),
    carbs: Number(carbs),
  };

  const getMealsForGoal = (type) => {
    const basePlans = {
      'Підтримка ваги': {
        breakfast: [
          { name: 'Вівсянка з молоком', amount: '50 г', benefit: 'Складні вуглеводи, кальцій.' },
          { name: 'Грецький йогурт', amount: '100 г', benefit: 'Білок, пробіотики.' },
          { name: 'Ягоди', amount: '50 г', benefit: 'Антиоксиданти.' },
        ],
        lunch: [
          { name: 'Куряча грудка', amount: '120 г', benefit: 'Пісне м’ясо.' },
          { name: 'Кіноа / Булгур', amount: '80 г', benefit: 'Повільні вуглеводи.' },
          { name: 'Овочі на пару', amount: '100 г', benefit: 'Мікроелементи, клітковина.' },
        ],
        snack: [
          { name: 'Сир твердий', amount: '30 г', benefit: 'Кальцій, білок.' },
          { name: 'Груша', amount: '1 шт.', benefit: 'Фруктоза, клітковина.' },
        ],
        dinner: [
          { name: 'Риба (лосось/тілапія)', amount: '120 г', benefit: 'Омега-3, білок.' },
          { name: 'Печені овочі', amount: '150 г', benefit: 'Ситність без зайвих калорій.' },
          { name: 'Кус-кус / Чечевиця', amount: '70 г', benefit: 'Легкий білок.' },
        ],
      },

      'Схуднення': {
        breakfast: [
          { name: 'Яєчні білки', amount: '3 шт.', benefit: 'Низька калорійність, білок.' },
          { name: 'Огірок + помідор', amount: '100 г', benefit: 'Обʼєм без калорій.' },
          { name: 'Чорна кава / Зелений чай', amount: '1 чашка', benefit: 'Підтримка метаболізму.' },
        ],
        lunch: [
          { name: 'Індичка на грилі', amount: '100 г', benefit: 'Пісне мʼясо.' },
          { name: 'Салат з оливковою олією', amount: '150 г', benefit: 'Клітковина та жирні кислоти.' },
          { name: 'Гречка', amount: '50 г', benefit: 'Складні вуглеводи.' },
        ],
        snack: [
          { name: 'Мигдаль', amount: '10 г', benefit: 'Жири, ситість.' },
          { name: 'Яблуко / Ягідний смузі', amount: '1 шт. / 100 мл', benefit: 'Легка енергія.' },
        ],
        dinner: [
          { name: 'Омлет з овочами', amount: '2 яйця', benefit: 'Білок, без надлишку вуглеводів.' },
          { name: 'Броколі на пару', amount: '100 г', benefit: 'Мікроелементи.' },
          { name: 'Кефір 1%', amount: '100 мл', benefit: 'Легка вечеря.' },
        ],
      },

      "Набір м'язової маси": {
        breakfast: [
          { name: 'Омлет з 3 яєць + сир', amount: '3 яйця, 30 г сиру', benefit: 'Білок і жир на старт дня.' },
          { name: 'Тости з арахісовим маслом', amount: '2 скибки', benefit: 'Калорії та білок.' },
          { name: 'Банан', amount: '1 шт.', benefit: 'Калій, вуглеводи.' },
        ],
        lunch: [
          { name: 'Яловичина на грилі', amount: '150 г', benefit: 'Креатин, білок.' },
          { name: 'Рис / Картопля', amount: '150 г', benefit: 'Швидкі вуглеводи.' },
          { name: 'Салат з авокадо', amount: '100 г', benefit: 'Жири, клітковина.' },
        ],
        snack: [
          { name: 'Гейнер / Протеїн з бананом', amount: '1 порція', benefit: 'Швидкі калорії та білок.' },
          { name: 'Горіхи', amount: '30 г', benefit: 'Калорії та жир.' },
        ],
        dinner: [
          { name: 'Паста з тунцем', amount: '150 г пасти + 100 г тунця', benefit: 'Білок і вуглеводи для відновлення.' },
          { name: 'Овочі тушковані', amount: '150 г', benefit: 'Клітковина.' },
          { name: 'Сир кисломолочний', amount: '100 г', benefit: 'Казеїн на ніч.' },
        ],
      },
    };

    return basePlans[goal]?.[type] || [];
  };

  const meals = ['breakfast', 'lunch', 'snack', 'dinner'].map((type) => ({
    type,
    name:
      type === 'breakfast' ? '🥣 Сніданок' :
      type === 'lunch' ? '🍽 Обід' :
      type === 'snack' ? '🕓 Перекус' :
      '🌙 Вечеря',
    description:
      type === 'breakfast' ? 'Старт дня — енергія та ситість.' :
      type === 'lunch' ? 'Основне приймання їжі для підтримки сил.' :
      type === 'snack' ? 'Міжобідній заряд енергії.' :
      'Легка, поживна вечеря для відновлення.',
    items: getMealsForGoal(type),
  }));

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>🎯 План харчування для цілі: <Text style={{ color: '#4CAF50' }}>{goal}</Text></Text>

      <View style={styles.macroContainer}>
        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>🔥 Калорії</Text>
          <Text style={styles.macroValue}>{total.calories} ккал</Text>
        </View>
        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>💪 Білки</Text>
          <Text style={styles.macroValue}>{total.proteins} г</Text>
        </View>
        <View style={styles.macroBox}>
          <Text style={styles.macroLabel}>🍞 Вуглеводи</Text>
          <Text style={styles.macroValue}>{total.carbs} г</Text>
        </View>
      </View>

      <View style={styles.eatenContainer}>
        <Text style={styles.sectionTitle}>Що ви вже з’їли:</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>🔥 Калорії з'їдено:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={eatenCalories}
            onChangeText={setEatenCalories}
            placeholder="0"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>💪 Білки з'їдено (г):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={eatenProteins}
            onChangeText={setEatenProteins}
            placeholder="0"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>🥑 Жири з'їдено (г):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={eatenFats}
            onChangeText={setEatenFats}
            placeholder="0"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {meals.map((meal, i) => {
        const mealCalories = Math.round(total.calories * portions[meal.type]);
        return (
          <View key={i} style={styles.mealBlock}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealDesc}>{meal.description}</Text>
            <Text style={styles.mealCalories}>≈ {mealCalories} ккал</Text>

            {meal.items.map((item, idx) => (
              <View key={idx} style={styles.itemRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemName}>• {item.name} — <Text style={styles.itemAmount}>{item.amount}</Text></Text>
                  <Text style={styles.itemBenefit}>📝 {item.benefit}</Text>
                </View>
              </View>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: '#d32f2f',
    textAlign: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },
  macroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  macroBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    width: '30%',
  },
  macroLabel: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 5,
    fontWeight: '600',
  },
  macroValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2e7d32',
  },
  eatenContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
    color: '#000',
  },
  mealBlock: {
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mealName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1976d2',
  },
  mealDesc: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 6,
    color: '#555',
  },
  mealCalories: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    color: '#388e3c',
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  itemAmount: {
    fontWeight: '700',
    color: '#000',
  },
  itemBenefit: {
    fontSize: 13,
    color: '#777',
    marginLeft: 20,
  },
});
