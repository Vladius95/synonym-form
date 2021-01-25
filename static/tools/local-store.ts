export const localStore = new Proxy(
  {},
  {
    set(target, prop: string, val: any) {
      localStorage.setItem(prop, JSON.stringify(val));
      return true;
    },
    get(target, prop: string) {
      return JSON.parse(localStorage.getItem(prop));
    },
    deleteProperty(target, prop: string) {
      localStorage.removeItem(prop);
      return true;
    },
  }
);
