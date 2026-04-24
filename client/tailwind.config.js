module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}" // <-- YOU NEED THIS LINE!
  ],
  theme: {
    extend: {
      colors: {
        cliff: "#050505",
        accent: "#7c3aed"
      }
    }
  }
};