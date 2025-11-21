export interface TemplateCustomization {
  fontSize: {
    body: number;
    heading: number;
    subheading: number;
  };
  fontFamily: string;
  colors: {
    primary: string;
    text: string;
  };
  spacing: number;
  lineHeight: number;
}

export const defaultCustomization: TemplateCustomization = {
  fontSize: {
    body: 10,
    heading: 18,
    subheading: 14,
  },
  fontFamily: "Inter",
  colors: {
    primary: "#1e40af",
    text: "#1f2937",
  },
  spacing: 16,
  lineHeight: 1.5,
};
