/**
 *  It creates an object, even with nested values, use like:
 * @example updateObject(data, "personal_information.full_name", "deus")
 * @param originalObject object
 * @param keyToUpdate string
 * @param valueToUpdate any
 * @returns any
 */
export function updateObject(
  originalObject: object,
  keyToUpdate: string,
  valueToUpdate: any
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
