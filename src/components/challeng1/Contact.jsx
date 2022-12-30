export default class Contact {
  name = '';
  lastName = '';
  email = '';
  connect = false;
  constructor(name, lastName, email, connect) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.connect = connect;
  }
}
