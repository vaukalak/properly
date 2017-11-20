/* eslint-disable no-console */
const createTable = value =>
  Object
    .keys(value)
    .reduce(
      (res, k) => {
        const type = typeof value[k];
        res[k] = {
          Value: type === 'object' ? JSON.stringify(value[k]) : value[k],
          Type: type,
        };
        return res;
      },
      {},
    );

export default () => ({
  logInit: (componentName, groups) => {
    console.groupCollapsed(`initializing component ${componentName}`);
    groups.forEach(({ name, value }) => {
      console.groupCollapsed(name);
      console.table(createTable(value));
      console.groupEnd();
    });
    console.groupEnd();
  },

  logUpdate: (componentName, groups) => {
    console.groupCollapsed(`updating component ${componentName}`);
    groups.forEach(({ name, value }) => {
      console.groupCollapsed(name);
      console.table(createTable(value));
      console.groupEnd();
    });
    console.groupEnd();
  },
});