---
title: 'Social Authentication with Expo and Supabase'
date: '2023-07-13'
tags: ['Expo', 'React Native', 'Supabase', 'Other']
summary: 'Sign In with Apple or Google login? With Supabase social auth providers both are very easy to implement. Try it out now!'
---

## Project goal and set up

The goal of this tutorial will be to create a React Native app and be able to log into the app with several social media providers. The app will support different app flavours/variants/environments so we can set up a development, staging and production version.

To start, [download the Github repository](https://github.com/rnnyrk/expo-router-supabase-social-auth) I’ve made as an example. All the finalised code to build the application is included within the repository. The app makes use of [Expo Application Service (EAS)](https://expo.dev/eas). Make sure that, before this tutorial, you have a basic knowledge about creating an Expo app using EAS.

While I’d try to keep to boilerplate as easy and small as possible, some libraries I’ve used and implementations I did are opinionated to the way I work. Think about using `styled-components` for styling, ESLint for linting and Prettier for formatting (including import sorting).

### Installation

This project support building the app in different environments/variants/app flavours. The app will support `development`, `staging` and `production`, but for this tutorial, we will only use `development` and `production`. Start with modifying the `env.js` in the root of your project. Change the `BUNDLE_IN`, `PACKAGE` and `NAME` constants within this file. This will automatically set up the current deep linking/redirect URLs. In my example, the name `com.expobase` is being used. Therefore, the redirect URLs will be to `com.expobase://{PAGE}/`.

```bash
git clone git@github.com:rnnyrk/expo-router-supabase-social-auth.git YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
npm install
```

To customise the project, you can modify:

- `src/styles/theme.ts`, to change colours within the application
- `src/assets/images/*.png`, the images in this folder are used as app icons and splash screens. The Expo plugin [app-icon-badge](https://github.com/obytes/app-icon-badge) automatically creates different app icons based on the environment you are building (see `app.config.ts`).

### Environments

**Because we're creating both the `development` and `production` environment, all the steps of this tutorial have to be done twice.**

Create a project within Supabase and under “Project Settings” find your “Reference ID” (Supabase ID).

Revisit your project in your editor and change the `.env.example` file to `.env` or `.env.local`. Fill in the required properties from your “Project Settings” page. The `EXPO_PUBLIC_SUPABASE_URL_DEV` is within “Project Settings > API > Project API keys” and can be found as an `anon` key.

```bash
EXPO_PUBLIC_SUPABASE_URL_DEV=https://{SUPABASE_ID}.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLIC_KEY_DEV={SUPABASE_ANON_KEY}
```

`_DEV`

You can now build the project. For a development build, run (you can also replace `ios` with `android`):

```bash
npm run prebuild
npm run ios
```

For every environment, we have separate NPM build commands.

- Development
  - `npm run prebuild`
  - `npm run ios` / `npm run android`
  - `npm run build:development:ios`
  - `npm run build:development:android`
- Production
  - `npm run prebuild:production`
  - `npm run ios:production` / `npm run android:production`
  - `npm run build:production:ios`
  - `npm run build:production:android`

It's possible to run both the development build as well as the production build on the same device. Both will be installed with separate names and app icons. Don't forget to run `npm run prebuild` or `npm run prebuild:production` before building the app for a specific environment. Prebuilding will set the correct config for that environment. [Read more about Prebuilding in the Expo docs](https://docs.expo.dev/workflow/prebuild/).

![Different app environments on one device](/images/expo-supabase-social-auth/App-Env-Installs.png)

## Database

In the main menu go to “Database > Tables” to create a new table called `users`. Create the fields as shown below. Fill in `gen_random_uuid()` as the default value for the `id` field.

![Supabase Database access](/images/expo-supabase-social-auth/Supabase-Database.png)

### Row Level Security

The next step is to set up Row Level Security (RLS) for this table. With RLS we can set CRUD actions to be allowed publicly, or only when users are, for example, authenticated.

Within the Supabase main menu go to the “Table editor > `users`” and find the “No active RLS policies” in the top right corner.

![Supabase Row Level Security overview](/images/expo-supabase-social-auth/Supabase-RLS.png)

For now, we only need two RLS policies. We want everyone to be able to sign up and read the user data. When you click “New Policy > Get Started Quickly” you can use a template to set up the `read` and `insert` access for all users by simply setting the value to `true`. For `update`, use the "Quick start" template of the policy named `"Enable update for users based on email"`, so the passed JWT token of the logged-in user is matched with the email column in this table to find the rows a user is allowed to update.

![Supabase Row Level Security detail](/images/expo-supabase-social-auth/Supabase-RLS.png)

The first step is done! Now let’s move on to setting up authentication with Google.

## Google Authentication

Visit your [Google Cloud Developer Console](https://www.notion.so/95a55f410d5e4e15a00f2084a2c8eb6c?pvs=21) and create a new project. After creating the project, you might be prompted to setup the OAuth Consent screen first. Just follow the steps accordingly. After, choose “Create credentials” and create a new “OAuth Client ID”.

![Where to find Google OAuth creation](/images/expo-supabase-social-auth/Google-OAuth.png)

Use “Web application” as the application type. Now get your “Reference ID” from your “Project Settings” page in Supabase, as mentioned in the first step of this tutorial and use it as an “Authorized redirect URI“: `https://{SUPABASE_ID}.supabase.co/auth/v1/callback`

![Create Google OAuth credentials.png](/images/expo-supabase-social-auth/Google-CreateOAuth.png)

On the following screen, after creating the project, you will find your Client ID and Client Secret on the right side. These values need to be filled in your Supabase dashboard. In the Supabase main menu go to “Authentication > Providers > Google”. To start with, disable the email provider and enable the Google provider. Fill in your Client ID and Client Secret from the Google developer console.

![Google auth provider settings within Supabase.png](/images/expo-supabase-social-auth/Supabase-Google.png)

In Supabase, find the left submenu within “Authentication” and navigate to “URL Configuration”. Under “Redirect URL” fill in your scheme and the page you want to redirect to, from your Expo app (see `app.json`). In my case, this is `com.expobase://home/`, since the scheme name is `com.expobase` and the page I want to redirect to, after authenticating, is `home/`.

![Setup redirect URLs within Supabase.png](/images/expo-supabase-social-auth/Supabase-RedirectUri.png)

### Usage within your app

The Github repository includes some basics to provide a working login.

First of all, you shouldn’t forget to adjust the redirect URLs within the following two files:

- `src/utils/SupabaseContext.tsx` the `redirectTo` urls
- `/app/index.tsx` the second param of the `openAuthSessionAsync` functions

The `/app/index.tsx` is the login screen of the application and the first screen users will land on. There are two buttons, one for Google login and one for Apple login.

Both initiate an OAuth flow using `supabase.auth.signInWithOAuth()` and opening a web browser, redirecting you to the login, using `expo-web-browser`.

After these steps, you should be able to successfully login into your app using Google Authentication. Once you've completed the login, you should see a new user in both the `users` table, as well as in the overview on the “Authentication” page of Supabase.

Let’s move on to authenticating with Apple!

## Apple Authentication

Starting with the Apple authentication, you should be having a paid Apple Developer Account, and should be able to access this [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) page.

First, find your Apple Team ID in the top right corner of the developer console.

![Apple dev Console find your Team ID.png](/images/expo-supabase-social-auth/Apple-TeamID.png)

Secondly, register your email and domain for *Sign in with Apple for Email Communication* which can be found in the [Services](https://developer.apple.com/account/resources/services/list) section of the Apple Developer Console.

After that, go to the [Identifiers](https://developer.apple.com/account/resources/identifiers/list) page and create a new identifier for your application, choose to register an App ID. Make sure you configure **Sign In with Apple** Capabilities list.

_At this time Supabase Auth does not support Server-to-Server notification endpoints, so you should leave that setting blank when configuring the capability._

![Apple dev Console where to find your App ID.png](/images/expo-supabase-social-auth/Apple-AppID.png)

Setting up **Sign in with Apple** requires some more configuration. Go to the [Identifiers](https://developer.apple.com/account/resources/identifiers/list) page and create a new identifier again. Choose **Service ID** (second option) now instead of App ID. Create the Service ID (I usually pick `com.expobase.swa` as an identifier, where `swa` stands for SignIn with Apple). After creating the Service ID, directly edit it, check the Sign In with Apple checkbox and configure the URLs. This is usually `<project-id>.supabase.co` while the redirect URL is `https://<project-id>.supabase.co/auth/v1/callback`.

![Apple dev Console how to create a Service ID.png](/images/expo-supabase-social-auth/Apple-ServiceID.png)

After that, go to the Keys page and create a new key. I called my key `ExpobaseSWA`, check the Sign In with Apple checkbox and configure it with your created App ID. After registering it, download the key (save it somewhere securely, since it can only be downloaded once). [This page in the Supabase documentation](https://supabase.com/docs/guides/auth/social-login/auth-apple) provides - halfway through the page - a tool where you can generate a secret key with your just downloaded `.p8` file, your Account ID (Team ID), your Service ID and your Key ID (should be in the `.p8` filename `AuthKey_{KEY_ID}.p8` or can be found on the key detail page in the Apple dashboard).

Insert this secret key in your Supabase dashboard under “Authentication > Providers > Apple” together with your other app credentials.

![Apple auth provider settings within Supabase.png](/images/expo-supabase-social-auth/Supabase-Apple-Provider.png)

You should now be able to have a successful login using **Sign In with Apple**.

## Conclusion
