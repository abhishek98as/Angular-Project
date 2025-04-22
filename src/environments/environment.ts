import { EnvironmentModel } from '../app/model/environment/environment.model';

// Frontend-only simplified environment
export const environment = {
  identity: 'local',
  production: false,
  isFrontendOnly: true,
  
  // Mock server URL (not used in frontend-only mode)
  serverUrl: 'http://localhost:4200/assets/mock-data',
  clientUrl: 'http://localhost:4200',
  
  // Simplified configuration for frontend display only
  oauth: {
    twitter: { tag: 'mock-twitter' },
    google: { tag: 'mock-google' },
    facebook: { tag: 'mock-facebook' },
    linkedin: { tag: 'mock-linkedin' },
    twitch: { tag: 'mock-twitch' },
    github: { tag: 'mock-github' },
    dribbble: { tag: 'mock-dribbble' },
    reddit: { tag: 'mock-reddit' }
  },
  
  payment: {
    stripe: { 
      tag: 'mock-stripe',
      publishableKey: 'pk_test_mock_key'
    },
    coinbase: { tag: 'mock-coinbase' },
    paypal: { 
      tag: 'mock-paypal',
      clientId: 'mock-client-id',
      env: 'sandbox'
    }
  },
  
  fileStorage: {
    aws: { tag: 'mock-aws' },
    googleCloud: { tag: 'mock-google-cloud' }
  },
  
  mail: {
    gmail: { tag: 'mock-gmail' },
    yahoo: { tag: 'mock-yahoo' },
    outlook: { tag: 'mock-outlook' }
  },
  
  sms: {
    twillio: { tag: 'mock-twillio' },
    awsSns: { tag: 'mock-aws-sns' }
  },
  
  analytics: {
    googleAnalytics: { tag: 'mock-google-analytics' },
    matomo: { tag: 'mock-matomo' },
    mixPanel: { tag: 'mock-mixpanel' }
  }
};
