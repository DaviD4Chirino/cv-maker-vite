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

/**
 * Returns a regex that targets the contents between a html tag if it has
 * a specific class.
 * It contains 3 groups, openTag, content, closedTag.
 * @param classToSearch string
 * @returns RegExp
 */
export function htmlTagRegExp(classToSearch: string): RegExp {
  return new RegExp(
    `(?<openTag><.*class=["'\`].*${classToSearch}.*["'\`]>)\\s*(?<content>.*)\\s*(?<closedTag><\\/.*>)`,
    "g"
  );
}

export function getTagNameById(id: string, text: string): string | null {
  const regex: RegExp = new RegExp(
    `<\\s*(?<tagName>\\w+).*id=["\`'].*${id}.*["\`']>`
  );

  if (!regex.test(text)) return;

  const exec: RegExpExecArray = regex.exec(text);

  return exec.groups?.tagName ? exec.groups?.tagName : null;
}
