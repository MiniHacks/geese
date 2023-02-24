module.exports = {
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "subject-empty": [2, "always"],
    "function-rules/header-case": [
      2,
      "always",
      (parsed) => {
        const { header } = parsed;
        const headerPattern = /^[^A-z0-9 ]/;
        const headerPatternMatch = headerPattern.test(header);
        if (!headerPatternMatch) {
          return [false, "ur commit msg needs to start w an emoji 💗 \n\n"];
        }
        return [true];
      },
    ],
  },
};
