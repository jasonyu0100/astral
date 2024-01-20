export function cleanGql(obj: any) {
    return removeEmpty(removeTypename(obj))
}

export function removeEmpty(obj: any) {
  return Object.keys(obj)
    .filter(function (k) {
      return obj[k] != null;
    })
    .reduce(function (acc: any, k) {
      acc[k] = obj[k];
      return acc;
    }, {});
}

export function removeTypename(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => removeTypename(item));
  }
  return Object.keys(obj).reduce((acc: any, key) => {
    if (key !== '__typename') {
      acc[key] = removeTypename(obj[key]);
    }
    return acc;
  }, {});
}