export const formFields = {
    login: [
      {
        name: "email",
        label: "Email",
        type: "email",
        rules: {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        },
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        rules: {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        },
      },
    ],
    registration: [
      {
        name: "email",
        label: "Email",
        type: "email",
        rules: {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        },
      },
      {
        name: "login",
        label: "Login",
        type: "text",
        rules: {
          required: "Login is required",
        },
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        rules: {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        },
      },
      {
        name: "firstname",
        label: "First Name",
        type: "text",
        rules: {
          required: "First name is required",
        },
      },
      {
        name: "lastname",
        label: "Last Name",
        type: "text",
        rules: {
          required: "Last name is required",
        },
      },
    ],
  };