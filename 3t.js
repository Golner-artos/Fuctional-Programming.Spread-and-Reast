console.log(" Задание 1 ");
function createPlayerSettings() {
  let settings = {
    volume: 50,
    difficulty: "normal"
  };
 
  return {
    getSetting(key) {
      return settings[key];
    },
    setSetting(key, value) {
      settings[key] = value;
    }
  };
}
 
const playerSettings = createPlayerSettings();
console.log("Громкость до изменения:", playerSettings.getSetting("volume"));
playerSettings.setSetting("volume", 80);
console.log("Громкость после изменения:", playerSettings.getSetting("volume"));
console.log("Сложность:", playerSettings.getSetting("difficulty"));
 
console.log(" Задание 2 ");
(function () {
  const startMessage = "Игра запущена. Добро пожаловать!";
  console.log(startMessage);
})();
 
console.log("Задание 3 ");
const getPlayerGold = (function () {
  let gold = 100;
 
  return function () {
    return gold;
  };
})();
 
console.log("Золото игрока:", getPlayerGold());

console.log("Задание 4")
const PlayerModule = (function () {
  let name = "Alex";
  let level = 1;
 
  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
    getLevel() {
      return level;
    }
  };
})();
 
console.log("Имя игрока:", PlayerModule.getName());
PlayerModule.setName("Sasha");
console.log("Новое имя игрока:", PlayerModule.getName());
console.log("Уровень игрока:", PlayerModule.getLevel());

console.log("Задание 5")
const InventoryModule = (function () {
  let items = []; 
 
  return {
    addItem(item) {
      items.push(item);
    },
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    getItemCount() {
      return items.length;
    }
  };
})();
 
InventoryModule.addItem("Меч");
InventoryModule.addItem("Щит");
InventoryModule.addItem("Зелье здоровья");
console.log("Количество предметов после добавления:", InventoryModule.getItemCount());
InventoryModule.removeItem("Щит");
console.log("Количество предметов после удаления:", InventoryModule.getItemCount());
 
console.log(" Задание 6 "); 
const CharacterModule = (function () {
  let level = 1; 
 
  return {
    levelUp() {
      level++;
    },
    getLevel() {
      return level;
    },
    resetLevel() {
      level = 1;
    }
  };
})();
 
console.log("Уровень персонажа:", CharacterModule.getLevel());
CharacterModule.levelUp();
CharacterModule.levelUp();
console.log("Уровень после повышений:", CharacterModule.getLevel());
CharacterModule.resetLevel();
console.log("Уровень после сброса:", CharacterModule.getLevel());
console.log("Прямой доступ к переменной level снаружи невозможен (undefined):", typeof level === "undefined");
 
 
console.log(" Задание 7 ");
function countDownToZero(number) {
  console.log(number);
  if (number <= 0) {
    return;
  }
  countDownToZero(number - 1);
}
 
countDownToZero(5);