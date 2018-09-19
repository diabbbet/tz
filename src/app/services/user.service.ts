export class UserService {

  private user = [];

  constructor() {}

  public getAll() {
    return this.user;
  }

  public add(name: string, age: number) {
    this.user = [name,age];
  }
}


