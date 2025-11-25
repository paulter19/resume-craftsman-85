// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Resume-specific event tracking helpers
export const trackTemplateSelection = (templateName: string) => {
  event({
    action: 'select_template',
    category: 'resume_builder',
    label: templateName,
  });
};

export const trackDownload = (templateName: string, fileName: string) => {
  event({
    action: 'download_resume',
    category: 'resume_builder',
    label: `${templateName} - ${fileName}`,
  });
};

export const trackCustomization = (customizationType: string, value: string) => {
  event({
    action: 'customize_template',
    category: 'resume_builder',
    label: `${customizationType}: ${value}`,
  });
};

export const trackStartOver = () => {
  event({
    action: 'start_over',
    category: 'resume_builder',
  });
};

export const trackBuilderStart = (templateId?: string) => {
  event({
    action: 'start_building',
    category: 'resume_builder',
    label: templateId,
  });
};
