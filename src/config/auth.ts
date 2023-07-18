import type { Configuration } from '@azure/msal-browser'
import { LogLevel } from '@azure/msal-browser'

export const scopes = [
  'openid profile'
]

export const config: Configuration = {
  // required
  auth: {
    // must match info in dashboard
    clientId: "26581cea-19ca-4e02-8e64-68676836db6c",
    authority: 'https://login.microsoftonline.com/d2f6c0f3-9039-4a02-9e93-b489a6944a07',
    knownAuthorities: [
      'https://login.microsoftonline.com/d2f6c0f3-9039-4a02-9e93-b489a6944a07',
    ],

    // login redirect; must match path in dashboard
    redirectUri: `http://localhost:3000/`,
  },

  // optional
  system: {
    loggerOptions: {
      logLevel: LogLevel.Verbose,
      loggerCallback,
    }
  }
}

function loggerCallback (level: LogLevel, message: string, containsPii: boolean) {
  if (!containsPii) {
    const parts = message.split(' : ')
    const text = parts.pop()
    switch (level) {
      case LogLevel.Error:
        return console.error(text)

      case LogLevel.Warning:
        return console.warn(text)

      case LogLevel.Info:
        return console.info(text)

      case LogLevel.Verbose:
        return console.debug(text)
    }
  }
}
