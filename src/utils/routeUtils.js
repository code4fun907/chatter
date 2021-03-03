export const navRoutes = [
  { text: "Login", to: "/login" },
  { text: "Sign up", to: "/signup" },
];

// User needs to be logged in to access these
export const privateNavRoutes = [
  { text: "Logout", to: "/login" },
  { text: "Dashboard", to: "/" },
];
