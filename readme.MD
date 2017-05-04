# Introduction

Normally Next.js has all the application folders in the root folder. However, I preferred to move them into `app/`.

# Configuration
All the configuration settings should be stored in `config/indejs.js`.
Note that in this file everything that is in `next: { ... }` will be imported as is in the `app/next.config.js` and is the facto the Next's configuration file.

# Development
`npm run dev`

# Other scripts
`npm run prettier`: prettify the code
`npm run build`: should build, but is work in progress
`npm run start`: runs the production build if existing

# Structure
```javascript
app/
  components/
    globalComponent.js
    globalComponent/
        styles/
          index.js
      index.js
  containers/
    MyContainer/
      actions/
      styles/
        index.js
      components/
        LocalComponent.js
      index.js
  pages/
  static/

```
