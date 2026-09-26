# ShoppingCart Project

Develop and design shopping cart system by react, tailwind technology.

## Step 1: ViteJs

1. npm create vite@latest
2. React
3. Typescript
4. ESLint

## Step 2: Tailwind

1. npm install tailwindcss @tailwindcss/vite
2. vite.config.ts > import tailwindcss from '@tailwindcss/vite' >

3.

```
    export default defineConfig({
        plugins: [
            tailwindcss(),
        ],
    })
```

4. index.css > @import "tailwindcss";

## react alias

1. tsconfig >

```
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

2. tsconfig.app.json >

```
  "extends": "./tsconfig.json"
```

3. vite.config.ts > import path from "path" >

```
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  }
```

## folder structure

1. src > data
2. src > services
3. src > components

## feed data

data > cart.json

## Add services

1. getCart
2. getCartById

## Add components

1. Cart
2. CartItem
3. PaymentPanel

## Add UI

Design UI and feed it to app.tsx file.

## Add RemixIcon icon library

1. npm install @remixicon/react
2. import { RiHeartFill } from "@remixicon/react";
3.

```
  <RiHeartFill size={16} color="blue" className="font-bold" />
```

## Fill components

Separate different part of the page and make component.

## CartItem

1. loop through each item by map
2. pass item data to CartItem component
3. define props
4. feed data to component

## Payment panel

1. services > cartServices > calculateTotal
2. define state in cart
3. pass state to PaymentPanel
