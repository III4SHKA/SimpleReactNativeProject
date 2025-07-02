import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-web';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SettingsScreen } from './Settings';
import { Plan } from './Plan';
import { AdviceScreen } from './Advice';

const Tab = createBottomTabNavigator();

function HomeScreen({ name, sex, height, weight, goal, calories, proteins, carbs, eatenCalories, eatenProteins, eatenFats }) {
  const caloriesPercent = (eatenCalories / calories) * 100;
  const proteinsPercent = (eatenProteins / proteins) * 100;
  const carbsPercent = (eatenFats / carbs) * 100;
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text style={styles.greeting}>👋 Вітаю, <Text style={styles.name}>{name}</Text>!</Text>
          <View style={styles.infoBlock}>
          <Icon name="wc" size={24} color="#4caf50" />
          <Text style={styles.label}>Стать:</Text>
          <Text style={styles.value}>{sex}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoBlock}>
          <Icon name="height" size={24} color="#2196f3" />
          <Text style={styles.label}>Ріст:</Text>
          <Text style={styles.value}>{height}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoBlock}>
          <Icon name="fitness-center" size={24} color="#ff5722" />
          <Text style={styles.label}>Вага:</Text>
          <Text style={styles.value}>{weight}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.infoBlock}>
          <Text style={styles.emojiGoal}>🎯</Text>
          <Text style={styles.label}>Ціль:</Text>
          <Text style={styles.value}>{goal}</Text>
        </View>
      </View>
      
      <View style={styles.daily}>
        <View style={styles.blockDaily}>
          <Text style={styles.dailytext}>🔥 {calories}</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min(caloriesPercent, 100)}%`, backgroundColor: '#4caf50' },
              ]}
            />
            <Text style={styles.progressText}>
              {Math.round(caloriesPercent)}% / {calories}
            </Text>
          </View>
        </View>

        <View style={styles.blockDaily}>
          <Text style={styles.dailytext}>🍗 {proteins}</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min(proteinsPercent, 100)}%`, backgroundColor: '#2196f3' },
              ]}
            />
            <Text style={styles.progressText}>
              {Math.round(proteinsPercent)}% / {proteins}
            </Text>
          </View>
        </View>

        <View style={styles.blockDaily}>
          <Text style={styles.dailytext}>🍞 {carbs}</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.min(carbsPercent, 100)}%`, backgroundColor: '#ff9800' },
              ]}
            />
            <Text style={styles.progressText}>
              {Math.round(carbsPercent)}% / {carbs}
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.blockAdvice}>
        <Text style={styles.blockAdviceText}>
          📋 У Advice є список страв з їх калорійністю, білками, жирами та вуглеводами. Завдяки ним ви можете спланувати свій раціон.
        </Text>
      </View>

      <View style={styles.add}>
        <Text style={styles.addText}>
          💚 Програма є абсолютно безкоштовною, тому ми будемо раді будь-якій підтримці!
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Підтримати</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.information}>
        <Text style={styles.infoText}>⚙️ Щоб вказати свої характеристики та запланувати програму — перейдіть у SETTINGS</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [name, setName] = useState('Користувач')
  const [sex, setSex] = useState('Стать')
  const [height, setHeight] = useState('Ріст')
  const [weight, setWeight] = useState('Вага')
  const [goal, setGoal] = useState('Ціль')

  //Денна норма
  const [calories, setCalories] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const [eatenCalories, setEatenCalories] = useState('');
  const [eatenProteins, setEatenProteins] = useState('');
  const [eatenFats, setEatenFats] = useState('');

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = 'home';
            } else if (route.name === "Advice") {
              iconName = 'favorite';
            } else if (route.name === "Settings") {
              iconName = 'settings';
            }
             if (route.name === "Plan") {
              iconName = 'list';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" children={() => ( <HomeScreen name={name} sex={sex} height={height} weight={weight} goal={goal} calories={calories} proteins={proteins} carbs={carbs} eatenCalories={eatenCalories} eatenProteins={eatenProteins} eatenFats={eatenFats}/>)} />
        <Tab.Screen name="Advice" component={AdviceScreen} />
        <Tab.Screen
            name="Settings"
            children={() => (
              <SettingsScreen
                name={name}
                setName={setName}
                sex={sex}
                setSex={setSex}
                height={height}
                setHeight={setHeight}
                weight={weight}
                setWeight={setWeight}
                goal={goal}
                setGoal={setGoal}
                setCalories={setCalories}
                setProteins={setProteins}
                setCarbs={setCarbs}
              />
            )}
          />
        <Tab.Screen
          name="Plan"
          children={() => (
            <Plan
              goal={goal}
              calories={calories}
              proteins={proteins}
              carbs={carbs}
              eatenCalories={eatenCalories}
              setEatenCalories={setEatenCalories}
              eatenProteins={eatenProteins}
              setEatenProteins={setEatenProteins}
              eatenFats={eatenFats}
              setEatenFats={setEatenFats}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6f9',
    padding: 20,
  },
  stats: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
  },
  name: {
    color: '#1976d2',
  },
  infoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#555',
    width: 80,
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#222',
  },
  separator: {
    height: 1,
    backgroundColor: '#cfd8dc',
    marginVertical: 8,
    marginLeft: 34,
  },
  emojiGoal: {
    fontSize: 24,
    marginRight: 10,
  },
  daily: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 15,
  },
  dailytext: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  progressBarBackground: {
    width: 75,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
    color: '#333',
    textAlign: 'center',
  },
  information: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    lineHeight: 16,
  },
  blockAdvice: {
    marginTop: 20,
    backgroundColor: '#f0f4f7',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  blockAdviceText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    lineHeight: 20,
  },
  add: {
    backgroundColor: '#f1f8f5',
    borderRadius: 15,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  addText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: '#a5d6a7',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
