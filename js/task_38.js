const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
      const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex,1);
    return this.potions;
    // Пиши код выше этой строки
  },
};
