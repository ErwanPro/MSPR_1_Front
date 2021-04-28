module.exports = {
    preset: "jest-expo",
    setupFiles: [
      "dotenv/config"
    ],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  };