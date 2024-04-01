import { mediaSizes } from 'components/_themes/constants';

export const gridSizes = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
} as const;

export const gridRefs = {
  justify: {
    start: 'start',
    center: 'center',
    end: 'end',
    spaceBetween: 'spaceBetween',
    spaceAround: 'spaceAround',
    spaceEvenly: 'spaceEvenly',
  },

  alignItems: {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch',
  },

  directions: {
    row: 'row',
    rowReverse: 'rowReverse',
    column: 'column',
    columnReverse: 'columnReverse',
  },

  spacing: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  },
};

export const gridStyles = {
  justify: {
    [gridRefs.justify.start]: 'flex-start',
    [gridRefs.justify.center]: 'center',
    [gridRefs.justify.end]: 'flex-end',
    [gridRefs.justify.spaceBetween]: 'space-between',
    [gridRefs.justify.spaceAround]: 'space-around',
    [gridRefs.justify.spaceEvenly]: 'space-evenly',
  },

  alignItems: {
    [gridRefs.alignItems.start]: 'flex-start',
    [gridRefs.alignItems.center]: 'center',
    [gridRefs.alignItems.end]: 'flex-end',
    [gridRefs.alignItems.stretch]: 'stretch',
  },

  directions: {
    [gridRefs.directions.row]: 'row',
    [gridRefs.directions.rowReverse]: 'row-reverse',
    [gridRefs.directions.column]: 'column',
    [gridRefs.directions.columnReverse]: 'column-reverse',
  },

  spacing: {
    [mediaSizes.s]: {
      [gridRefs.spacing.xs]: 0,
      [gridRefs.spacing.s]: 4,
      [gridRefs.spacing.m]: 6,
      [gridRefs.spacing.l]: 8,
      [gridRefs.spacing.xl]: 12,
    },
    [mediaSizes.m]: {
      [gridRefs.spacing.xs]: 0,
      [gridRefs.spacing.s]: 4,
      [gridRefs.spacing.m]: 6,
      [gridRefs.spacing.l]: 8,
      [gridRefs.spacing.xl]: 12,
    },
    [mediaSizes.l]: {
      [gridRefs.spacing.xs]: 0,
      [gridRefs.spacing.s]: 4,
      [gridRefs.spacing.m]: 6,
      [gridRefs.spacing.l]: 8,
      [gridRefs.spacing.xl]: 12,
    },
  },

  item_width: {
    [gridSizes[0]]: 0,
    [gridSizes[1]]: 8.333,
    [gridSizes[2]]: 16.666,
    [gridSizes[3]]: 25,
    [gridSizes[4]]: 33.333,
    [gridSizes[5]]: 41.6,
    [gridSizes[6]]: 50,
    [gridSizes[7]]: 58.333,
    [gridSizes[8]]: 66.666,
    [gridSizes[9]]: 75,
    [gridSizes[10]]: 83.333,
    [gridSizes[11]]: 91.666,
    [gridSizes[12]]: 100,
  },
};
