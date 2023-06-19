/*
<input type=button value='Ввод информации о напитке' onclick='newInfo()'>
<input type=button value='Получение информации о напитке' onclick='getInfo()'>
<input type=button value='Удаление информации о напитке' onclick='deleteInfo()'>
<input type=button value='Перечень всех напитков' onclick='allInfo()'>
*/

"use strict"

class HashStorageClass {

  constructor() {
    this.store = {};
  }

  addValue(key, value) {
    this.store[key] = value;
  };

  getValue(key) {
    return this.store[key]
  };

  deleteValue(key) {
    if (key in this.store) {
      delete this.store[key];
      return true;
    }
    else
      return false;
  }

  getKeys() {
    let a1 = [];
    for (var key in this.store)
      a1.push(key)
    return a1;
  }
}

class LocalStorageClass {

  lsAddValue(key, value) {
    let lcJsonKey=JSON.stringify(key);
    let lcJsonValue=JSON.stringify(value);
    localStorage.setItem(lcJsonKey,lcJsonValue);
  }
  lsGetValue(key) {
    let lsKeyStringify=JSON.stringify(key);
    let lsKeyGet=localStorage.getItem(lsKeyStringify);
    let lsKeyParse=JSON.parse(lsKeyGet);
    return lsKeyParse
  }
  lsDeleteValue(key) {
    let lsKeyStringify=JSON.stringify(key);
    let lsKeyGet=localStorage.getItem(lsKeyStringify);
    if (lsKeyGet !== null) {
      localStorage.removeItem(lsKeyStringify)
      return true;
    }
    else
      return false;
  }
  lsGetKeys() {
    let lsA=[];
    for (var lcKey in localStorage)
      lsA.push(lcKey)
    return lsA
  }
}

var drinkStorage = new HashStorageClass;
var localDrinkStorage = new LocalStorageClass;

function newInfo() {
  let nameDr = prompt('Название');
  let alcoDr = confirm('Алкогольный? Ок-да, отмена- нет');
  let alcoDrRus;
  if (alcoDr == true)
    alcoDrRus = 'Да';
  else
    alcoDrRus = 'Нет';
  let recepDr = prompt('Рецепт его?');
  drinkStorage.addValue(nameDr, { a: alcoDrRus, r: recepDr });
  localDrinkStorage.lsAddValue(nameDr, { a: alcoDrRus, r: recepDr });
}

function getInfo() {
  let nameDr = prompt('Название');
  let info = drinkStorage.getValue(nameDr);
  let lsInfo = localDrinkStorage.lsGetValue(nameDr);
  if ((lsInfo == undefined))
    return console.log('Такого напитка не существует');
  else { if (lsInfo !== undefined) return console.log('Напиток: ' + nameDr + '\n' +
        'Алкогольный: ' + lsInfo.a + '\n' +
        'Рецепт: ' + lsInfo.r)
        else return console.log('Напиток: ' + nameDr + '\n' +
        'Алкогольный: ' + info.a + '\n' +
        'Рецепт: ' + info.r) }
}

function deleteInfo() {
  let nameDr = prompt('Название');
  let lsInfo = localDrinkStorage.lsDeleteValue(nameDr);
  drinkStorage.deleteValue(nameDr);
  if (lsInfo == true)
    return console.log('Удален напиток: ' + nameDr)
  else
    return console.log('Такого напитка не существует: ' + nameDr)
}

function allInfo() {
  if (drinkStorage.getKeys()==0)
    return console.log(localDrinkStorage.lsGetKeys())
  else
    return console.log(drinkStorage.getKeys(),localDrinkStorage.lsGetKeys())
}