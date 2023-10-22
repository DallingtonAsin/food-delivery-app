type Color = {
  text: string;
  bgColor: (opacity: number) => string;
  secondaryColor: (opacity: number) => string;
};

const pallete: Color[] = [
  {
    // orange
    text: '#f97316',
    bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
    secondaryColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // dark gray
    text: '#334155',
    bgColor: (opacity) => `rgba(30, 41, 59, ${opacity})`,
    secondaryColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // purple
    text: '#7c3aed',
    bgColor: (opacity) => `rgba(167, 139, 250, ${opacity})`,
    secondaryColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // green
    text: '#009950',
    bgColor: (opacity) => `rgba(0, 179, 89, ${opacity})`,
    secondaryColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // teal
    text: '#14b8a6',
    bgColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
    secondaryColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
    
  },
  {
    // red
    text: '#dc2626',
    bgColor: (opacity) => `rgba(248, 113, 113, ${opacity})`,
    secondaryColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
  },
];

export const themeColors: Color = { ...pallete[4] }