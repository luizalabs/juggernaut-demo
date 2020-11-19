const spacing = [0, 1, 2, 3, 4]

const getSpacing = (name, prefix) => ({ theme }) => (
  spacing.reduce((accumulator, value) => `
    ${accumulator}

    .${prefix}-${value} {
      ${name}: ${theme.spacing(value)}px !important;
    }

    .${prefix}t-${value} {
      ${name}-top: ${theme.spacing(value)}px !important;
    }

    .${prefix}b-${value} {
      ${name}-bottom: ${theme.spacing(value)}px !important;
    }

    .${prefix}r-${value} {
      ${name}-right: ${theme.spacing(value)}px !important;
    }

    .${prefix}l-${value} {
      ${name}-left: ${theme.spacing(value)}px !important;
    }

    .${prefix}x-${value} {
      ${name}-left: ${theme.spacing(value)}px !important;
      ${name}-right: ${theme.spacing(value)}px !important;
    }

    .${prefix}y-${value} {
      ${name}-top: ${theme.spacing(value)}px !important;
      ${name}-bottom: ${theme.spacing(value)}px !important;
    }
  `, '')
)

export {
  getSpacing
}
