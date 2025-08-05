export const appContent = {
  title: "DePIN Loudness",
  webTitle: "DePIN Loudness - Web Application",
  nativeTitle: "DePIN Loudness - Native App",
  welcome: "Welcome to the DePIN Loudness project!",
  webDescription: "This is a test application built with Next.js and React Native Web.",
  nativeDescription: "This is a test application built with React Native and Expo.",
  sharedDescription: "This app demonstrates the shared UI components from the @repo/ui package.",
  testText: "Test text: This is a sample text to demonstrate text rendering and styling capabilities.",
  additionalContent: "Additional test content: The application is running successfully and all components are working as expected.",
  buttonText: "Boop",
  buttonLogMessage: "Pressed!"
} as const;

export type AppContent = typeof appContent; 