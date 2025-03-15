# Account Dashboard App

A React Native application that provides users with a comprehensive financial dashboard showing their account balance and transaction history.

## Features

### Core Features

- **Account Balance**: Real-time calculated account balance display
- **Recent Transactions**: View three most recent transactions on the dashboard
- **Full Transaction History**: Access complete transaction list via "See all" button

### Additional Features

- **Pull to Refresh**: Update dashboard data by pulling down on the transaction list
- **Dark/Light Mode**: Toggle between light and dark themes for better user experience
- **Offline Support**: Cache data locally for viewing when offline
- **Connection Status**: Display components to notify users of offline status and when connection restores using NetInfo
- **Skeleton Loading Screens**: Show placeholder loaders while data is being fetched
- **Modal Transaction Details**: Tap on any transaction to view detailed information in a modal

## Technologies Used

- React Native Expo
- Expo Router
- React Query (TanStack Query) for data fetching, caching, and state management
- AsyncStorage for persistent offline data storage
- NetInfo for network connectivity detection
- NativeWind

## Project Structure

```
project-root/
├── app/
│ ├── _layout.tsx
│ ├── +not-found.tsx
│ ├── index.tsx
│ └── transactions.tsx
├── assets/
├── components/
│ ├── shared/
│ │ ├── Amount.tsx
│ │ ├── ConnectionStatus.tsx
│ │ ├── EmptyData.tsx
│ │ ├── ScreenWrapper.tsx
│ │ ├── Skeleton.tsx
│ │ ├── Summary.tsx
│ │ └── TransactionItem.tsx
│ ├── ProductsCarousel.tsx
│ ├── RecentTransactions.tsx
│ └── ShowFullTransactions.tsx
├── config/
│ └── api-config.ts
├── utils/
│ └── index.ts
└── hooks/
 ├── useColorScheme.ts
 ├── useProducts.ts
 └── useTransactions.ts
```
