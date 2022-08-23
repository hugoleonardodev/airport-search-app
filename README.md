This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Requirements

Build a web app that calculates the distance between two airports in nautical miles, using auto-complete for the airport fields.

1. Airports should be searchable by name or 3 digit code;
   It is possible to search for a free term. Although, the first API recommended for the test was returning better results

2. Use an autocomplete component;
   Autocomplete is working good with the Material UI component.

3. Use Material UI;
   Autocomplete components and recommendations for NEXTJS from [https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript)

4. Only show nautical miles distance, KM don't matter;
   Nautical miles calculation is available

5. Make a self-test in the application;
   Do you mean automated tests? I have manually tested a bit. But it is not 100% tested.

6. Validate if the API works well with many airports;
   Well, this application only calculates the distance between TWO airports.

7. Validate if the interface works well in mobile;
   Yes. It is working good for most mobile devices.

8. Validate if the calculation is correct.
   I have verified the result for a few distances. And there is a small difference between the results. ~0.02

## You will be evaluated based on

1. The structure of your React components, HTML and CSS structure;
   Atomice Design [Atomic Design](https://atomicdesign.bradfrost.com/) is a design system that helps you build beautiful, usable, and accessible web apps.

2. Use of Material UI components;
   Material UI is cool but the API changes a lot, because they are always updating. But I believe I can master it.

3. The cleanliness (or whatever else you care about) of your visual design;
   I'm not a designer. I can help the designers to find the best solution for the app. But I'm not a designer.

4. Appropriate use of TypeScript;
   Yes, we love Typescript.

5. Being mobile friendly;
   Mobile First!

6. Messages displayed to the user and error handling.
   There are some messages. We could customize more. Track some bugs. Write tests. Handling all errors. But it takes a lot of time...

**_ Bonus _**: plot the route (with line, not car or other type of route) on Google maps. Make more than required, like put animations, make an PWA, etc. Use imagination to deliver the best user experience.
There is a marker with a line between it on the map.
Animations while searching for results (Tanks MUI Autocomplete)!
PWA is a good catch. But It has been a while since the last time I tried to do it. I can try to it with more time.
Debounce hook to delay the request. While the users is typing the search term. To avoid multiple API calls.
Centers the map between distances but with Eurocentric vision (need to improve).

## TO DO

1. Sanitization

2. End-to-End tests

3. Improve UI/UX

# Recommendations

## ENV.LOCAL

Sorry for this. I know it is not a good practice. Just for sharing proposes.

```bash
NEXT_PUBLIC_BASE_API='https://www.air-port-codes.com/api/v1/'

NEXT_PUBLIC_BASE_API_KEY='a3063d49cf'
NEXT_PUBLIC_BASE_API_HOST='www.air-port-codes.com'

NEXT_PUBLIC_GOOGLE_API_KEY='AIzaSyA9A6PngCVXblm99gTxRq9T4Nf3qvcXUig'
```

### Final thoughts

This boilerplate is following the Material UI recommendations. [MUI NextJS with Typescript](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript)
It is taking some time to get the first load. Probably because of the cache and getInitialProps configurations from MUI.
Personally, I would create this application with Webpack and Babel. Because it is faster. And NextJS has a lot of production features that must be considered.
There is a lot of work to do to make this application production ready. Like manual tests, end to end tests, improve the performance, features, and so on.
I believe that this prototype or MVP is meeting the requirements of the project.

Thanks for the opportunity to share this project with you. I would love to share my thoughts on a meeting.

### Contacts

[LinkedIn](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)
[GitHub](https://github.com/hugoleonardodev)

```bash
hugoleonardo.dev@gmail.com
```

```bash
+5531999699361
```
