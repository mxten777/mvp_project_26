export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#faf5ff' },
      { name: 'dark', value: '#18181b' },
    ],
  },
};
