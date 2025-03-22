# Blues Boot Newsletter Landing Page

A modern, responsive landing page for the Blues Boot newsletter built with Vue.js and Three.js.

## Overview

Blues Boot is a newsletter providing a spark of inspiration — from tech news and hackathons to life stories, job leads, and standout LinkedIn finds, all bundled to boot up your blues!

This landing page features:
- Interactive 3D background animation using Three.js
- Responsive design for all device sizes
- Modern UI with the Blues Boot brand colors (blue #00bffe, black, and white)
- Newsletter subscription form

## Technologies Used

- Vue.js 3
- Three.js for 3D animations
- Vite for build tooling
- Modern CSS with variables and flexbox/grid layouts

## Project Setup

```sh
# Install dependencies
npm install

# Compile and hot-reload for development
npm run dev

# Compile and minify for production
npm run build
```

## Beehiiv Integration

This site integrates with Beehiiv for newsletter subscriptions. To set up the integration:

1. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_BEEHIIV_PUBLICATION_ID=your_publication_id_here
   VITE_BEEHIIV_FORM_URL=https://embeds.beehiiv.com/subscribe
   ```

2. Replace `your_publication_id_here` with your actual Beehiiv publication ID.

3. After making changes, rebuild the project with `npm run build`.

## Deployment

This site is deployed at [https://bluesboot.com](https://bluesboot.com).

## Development

To continue development:

1. Clone this repository
2. Install dependencies with `npm install`
3. Run development server with `npm run dev`
4. Make your changes
5. Build for production with `npm run build`

## License

Copyright © 2025 Blues Boot. All rights reserved.
