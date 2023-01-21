# Forked from [https://github.com/webformulator/vue3-facebook-login](https://github.com/webformulator/vue3-facebook-login)

# vue3-facebook-login

A facebook login component which hides the complexity of facebook javascript SDK to initialize and connect with facebook and get access token.

## Installation

`npm install vue3-facebook-login`

## Usage

vue3-facebook-login hides the complexity of facebook javascript SDK hence it is comparitively very easy to use.

### ES6

**For Local Registration**

```
import FacebookLogin from "vue3-facebook-login";

export default {
    ...
    components : {
        FacebookLogin,
        ...
    },
    ...
}
```

**For Global Registration**

Update main.js

```
import { createApp } from "vue";
import App from "./App.vue";
...
import FacebookLogin from "vue3-facebook-login";

createApp(App).component("facebook-login", FacebookLogin)
...
```

After importing the component, you can use it in your templates as:

```
<facebook-login
    :appId="appId"
    @loggedIn="handleLogin"
    @loginFailed="handleLoginFailed"
>
</facebook-login>
...
</template>
<script>
...
{
    ...
    methods : {
        handleLogin(response) {
            console.log("User Successfully Logged In" , response)
        },
        handleLoginFailed() {
            console.log("User Cancelled or Abort the Login")
        }
    }
...
}
...
```

where appId is the appId recieved after creating App to use Facebook Authentication from [Facebook](https://developers.facebook.com/)

## Props

| Property | Required | Type   | Default             | Decription                                              |
| -------- | -------- | ------ | ------------------- | ------------------------------------------------------- |
| appId    | true     | String | -                   | appId recieved from Facebook after creating App.        |
| type     | false    | String | normal              | defines the type of button (minimal, normal, or custom) |
| theme    | false    | String | light               | defines the theme for the button(light or dark)         |
| text     | false    | String | Login with Facebook | text for the login button when used custom type         |
| classes  | false    | String | null                | classes needs to be applied to custom login button      |
| styles   | false    | String | null                | styles needs to be applied to custom login button       |

## Events

| Event       | Invoking Time                                  | Type     | Decription                                                                                                |
| ----------- | ---------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| loggedIn    | When user successfully logged in with facebook | function | pass a function which should contain all the operations to be performed after successful facebook login   |
| loginFailed | When user cancelled/abort login with facebook  | function | pass a function which should contain all the operations to be performed after cancel/abort facebook login |

## Warning

If after following all the instructions carefully Facebook Login is still not working and saying `App not set up This app is still in development mode, and you don't have access to it. Switch to a registered test user or ask an app admin for permissions.` then there may be 2 reasons behind it.

1. You may have used wrong appId.
2. Facebook Policy : The method FB.login can no longer be called from http pages

So I would Suggest just go ahead and move the app to a https environment and it will be finely working.

## Creator

This component has been initially created by [Md Dilshad Alam](https://github.com/webformulator)
