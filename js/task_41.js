const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        const item = this.potions[i];

        if(potionName.name === item.name) {

          return `Зелье { name: ${potionName.name}, price: ${potionName.price} } уже есть в инвентаре!`;
        }
      }
      this.potions.push(potionName);
      return this.potions;     
    },
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        const item = this.potions[i];

        if (potionName === item.name) {
          this.potions.splice(i, 1);

          return this.potions;
        }
      }
        return `Зелья ${potionName} нет в инвентаре!`;
    },
    updatePotionName(oldName, newName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        const item = this.potions[i];

        if (oldName === item.name) {
          this.potions[i].name = newName;

          return this.potions;
        }
      }
      return `Зелья ${oldName} нет в инвентаре!`;
    },
    // Пиши код выше этой строки
  }