type ValueType = 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array' | 'function' | 'undefined';

const types: { [key: string]: ValueType } = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  null: 'null',
  object: 'object',
  array: 'array',
  function: 'function',
  undefined: 'undefined',
};

interface TypeChecker {
  (value: any): ValueType;
  isNull: (value: any) => boolean;
  isArray: (value: any) => boolean;
  isObject: (value: any) => boolean;
  isEmpty: (value: any) => boolean;
  isFunction: (value: any) => boolean;
  isString: (value: any) => boolean;
  isNumber: (value: any) => boolean;
  isBoolean: (value: any) => boolean;
  isSimple: (value: any) => boolean;
}

const typeChecker: TypeChecker = (value: any) => {
  if (typeChecker.isString(value)) {
    return types.string;
  }
  if (typeChecker.isNumber(value)) {
    return types.number;
  }
  if (typeChecker.isBoolean(value)) {
    return types.boolean;
  }
  if (typeChecker.isObject(value)) {
    return types.object;
  }
  if (typeChecker.isArray(value)) {
    return types.array;
  }
  if (typeChecker.isNull(value)) {
    return types.null;
  }
  if (typeChecker.isFunction(value)) {
    return types.function;
  }
  return types.undefined;
};

typeChecker.isNull = (value: any): boolean => value === null && typeof value === 'object';

typeChecker.isArray = (value: any): boolean => Array.isArray(value);

typeChecker.isObject = (value: any): boolean =>
  typeof value === 'object' && !typeChecker.isNull(value) && !typeChecker.isArray(value);

typeChecker.isEmpty = (value: any): boolean =>
  typeChecker.isNull(value) ||
  typeof value === 'undefined' ||
  (typeChecker.isArray(value) && value.length === 0) ||
  (typeChecker.isObject(value) && Object.keys(value).length === 0) ||
  (typeChecker.isString(value) && value.length === 0);

typeChecker.isFunction = (value: any): boolean => typeof value === 'function';

typeChecker.isString = (value: any): boolean => typeof value === 'string';

typeChecker.isNumber = (value: any): boolean => typeof value === 'number' && !Number.isNaN(value);

typeChecker.isBoolean = (value: any): boolean => typeof value === 'boolean';

typeChecker.isSimple = (value: any): boolean =>
  typeChecker.isString(value) ||
  typeChecker.isNumber(value) ||
  typeChecker.isBoolean(value) ||
  typeChecker.isNull(value) ||
  typeof value === 'undefined';

export default typeChecker;
