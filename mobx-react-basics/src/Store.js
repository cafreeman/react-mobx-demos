import { observable, computed } from 'mobx';

class Store {
  @observable people = [];
  @observable inputValue = '';

  constructor(initialPeople) {
    this.people = initialPeople;
  }

  @computed get isInputEmpty() {
    return this.inputValue.length === 0;
  }

  updateInputValue = (newValue) => {
    this.inputValue = newValue;
  }

  addPerson = () => {
    this.people.push(this.inputValue);
    this.inputValue = '';
  }
}

export default Store;
