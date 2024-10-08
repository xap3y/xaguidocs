import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'XaGui Docs',
  },
  links: [
    {
      text: 'Documentation',
      url: '/',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
