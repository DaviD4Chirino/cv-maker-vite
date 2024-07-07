export function updateObject(
  originalObject: object,
  keyToUpdate: string,
  valueToUpdate: unknown
): any {
  if (!originalObject) {
    return originalObject;
  }

  const keys: string[] = keyToUpdate.split(".");
  const updatedKey: string = keys[0];
  const restOfKey: string = keys.slice(1).join(".");

  if (keys.length > 1) {
    return {
      ...originalObject,
      [updatedKey]: updateObject(
        originalObject[updatedKey],
        restOfKey,
        valueToUpdate
      ),
    };
  }

  return {
    ...originalObject,
    [updatedKey]: valueToUpdate,
  };
}
// function updateObject(obj, key, value) {
//   if (!obj) {
//     return obj;
//   }

//   const keys = key.split(".");
//   const updatedKey = keys[0];
//   const restOfKey = keys.slice(1).join(".");

//   if (keys.length > 1) {
//     return {
//       ...obj,
//       [updatedKey]: updateObject(obj[updatedKey], restOfKey, value),
//     };
//   }

//   return {
//     ...obj,
//     [updatedKey]: value,
//   };
// }
