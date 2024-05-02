import typeChecker from './typeChecker';

export const constraintsTypes = {
  required: 'required',
  enum: 'enum',
  pattern: 'pattern',
  includes: 'includes',
  equal: 'equal',
  range: 'range',
  length: 'range',
  numberCompare: 'numberCompare',
  yearRange: 'yearRange',
  dateRange: 'dateRange',
  dateCompare: 'dateCompare',
};

export type IConstraints = {
  type: string;
  message: string;
  condition?: string | { min: number; max: number };
};

export default function checkConstraints(value: any, constraints: any) {
  if (!constraints) return null;

  for (const constrain of constraints) {
    if (constrain.type === constraintsTypes.required) {
      if (typeChecker.isBoolean(value) && !value) return constrain.message;
      if (typeChecker.isEmpty(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.enum && typeChecker.isEmpty(value)) return constrain.message;

    if (constrain.type === constraintsTypes.pattern) {
      const regExp = new RegExp(`^${constrain.condition}$`);
      if (value && !regExp.test(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.includes) {
      const regExp = new RegExp(`${constrain.condition}`);
      if (value && !value.match(regExp)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.range) {
      const { min, max } = constrain.condition;
      if (!typeChecker.isEmpty(value) && typeChecker.isNumber(value)) {
        if (typeChecker.isNumber(min) && value < min) return constrain.message;
        if (typeChecker.isNumber(max) && value > max) return constrain.message;
      }
    }

    if (constrain.type === constraintsTypes.length) {
      const { min, max } = constrain.condition;
      if (value && typeChecker.isString(value)) {
        if (typeChecker.isNumber(min) && value.length < min) return constrain.message;
        if (typeChecker.isNumber(max) && value.length > max) return constrain.message;
      }
    }
  }
  return null;
}
