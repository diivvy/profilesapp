import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator, Heading, View } from "@aws-amplify/ui-react";

const CustomSignInHeader = () => (
  <View textAlign="center" padding="1rem">
    <Heading level={3}>Welcome to My App made by Divya Darji</Heading>
    <p>Created by: Divya</p> {/* Your name added here */}
  </View>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticator
      components={{
        Header: CustomSignInHeader, // Override the default header
      }}
    >
      {({ signOut, user }) => <App />}
    </Authenticator>
  </React.StrictMode>
);
