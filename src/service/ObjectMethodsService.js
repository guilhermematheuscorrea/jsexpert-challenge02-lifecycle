class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const object = {
      ...rawObject.__proto__,
      valueOf() {
        return this.age;
      },
    };

    return object;
  }

  getEnhancedObject2(rawObject) {
    const object = {
      ...rawObject.__proto__,
      toString() {
        return `[name="${this.name}",age=${this.age}]`;
      },
    };
    return object;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const object = {
      ...rawObject.__proto__,
      [Symbol.toPrimitive](coercionType) {
        switch (coercionType) {
          case "number":
            return this.age;
          case "string":
            return `[name="${this.name}",age=${this.age}]`;
          default:
            return `[name="${this.name}",age=${this.age}]`;
        }
      },
    };
    return object;
  }
}

module.exports = ObjectMethodsService;
