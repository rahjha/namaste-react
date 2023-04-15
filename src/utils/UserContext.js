import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Code2Elevate",
    email: "support@code2Elevate.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
