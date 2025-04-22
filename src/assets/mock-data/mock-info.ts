/**
 * This file contains information about the frontend-only mode of the application.
 * It provides clear indicators and messages that can be shown to users.
 */

export const MOCK_INFO = {
  mode: 'frontend-only',
  
  // Banner message that can be shown in development mode
  bannerMessage: 'Running in frontend-only mode with mock data',
  
  // Longer explanation for various parts of the application
  explanations: {
    forms: 'This form is functional but will not send data to any backend service. Your submission will be handled locally.',
    counters: 'All counters and statistics displayed are using mock data.',
    github: 'GitHub activity and statistics are simulated with mock data.',
    apis: 'All API calls have been replaced with mock data services.'
  },
  
  // Version info indicating this is a frontend-only version
  versionInfo: {
    tag: 'frontend-only',
    version: '1.0.0',
    lastUpdated: '2025-04-20'
  }
};