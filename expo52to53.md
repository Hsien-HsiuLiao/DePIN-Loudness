
## Major Changes from Expo SDK 52 to 53:

### 1. **React Native Version**
- **SDK 52**: React Native 0.75.x
- **SDK 53**: React Native 0.79.x

### 2. **React Version**
- **SDK 52**: React 18.3.x
- **SDK 53**: React 19.0.x

### 3. **Package Version Updates**
Most Expo packages need version bumps:

```json
// SDK 52
"expo": "~52.0.46",
"expo-constants": "~17.0.8",
"expo-linking": "~7.0.5",
"expo-router": "~4.0.21",
"expo-status-bar": "~2.0.1",
"expo-system-ui": "~4.0.9",
"react-native": "0.75.0"

// SDK 53
"expo": "^53.0.20",
"expo-constants": "~17.1.7",
"expo-linking": "~7.1.7", 
"expo-router": "~5.1.4",
"expo-status-bar": "~2.2.3",
"expo-system-ui": "~5.0.10",
"react-native": "0.79.5"
```

### 4. **New Dependencies**
SDK 53 introduced some new required dependencies:
- `@react-native/virtualized-lists` (for React Native 0.79.x)
- Updated `react-native-safe-area-context` and `react-native-screens`

### 5. **Babel Preset Updates**
- **SDK 52**: `@react-native/babel-preset@^0.75.0`
- **SDK 53**: `@react-native/babel-preset@^0.79.0`

### 6. **TypeScript Types**
- **SDK 52**: `@types/react@~18.3.12`
- **SDK 53**: `@types/react@~19.0.10`

### 7. **App Configuration**
SDK 53 introduced new experimental features:
```json
{
  "expo": {
    "experiments": {
      "tsconfigPaths": true
    }
  }
}
```

### 8. **Breaking Changes**
- Some APIs may have changed
- New Metro bundler requirements
- Different peer dependency requirements

## Common Issues When Upgrading:

1. **PlatformConstants error** - Often requires updating Expo Go app
2. **Metro bundler conflicts** - May need Metro version updates
3. **Peer dependency warnings** - Need to align all package versions
4. **TypeScript errors** - Due to React 19 type changes

## Best Practices for Upgrading:

1. **Update Expo CLI first**: `npm install -g @expo/cli@latest`
2. **Use Expo's upgrade command**: `npx expo install --fix`
3. **Update all related packages together**
4. **Test thoroughly** - SDK 53 is still relatively new
5. **Check the [Expo SDK 53 migration guide](https://docs.expo.dev/versions/v53.0.0/introduction/changelog/)**

The upgrade from 52 to 53 is significant because it includes React Native 0.79 and React 19, which are major version bumps with breaking changes.