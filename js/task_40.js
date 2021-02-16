const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
  const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex,1,newName);
    return this.potions;
    // Пиши код выше этой строки
  },
};