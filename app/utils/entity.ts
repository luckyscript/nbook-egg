interface EntityType {
  data?: object;
}

class Entity implements EntityType {
  data = {} as any;

  constructor(data) {
    this.data = data;
  }

  private static handler = {
    get: (target, property) => {
      if (target[property] !== undefined) {
        return target[property];
      }
      if (target.data[property] !== undefined) {
        return target.data[property];
      }
      return undefined;
    },
  };

  public static Create(data: object) {
    const entity = new this(data);
    return new Proxy(entity, this.handler);
  }
}

export default Entity;
