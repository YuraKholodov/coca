import JustValidate from "just-validate";

export function formValidators() {
  const validation = new JustValidate("#started__form");

  validation
    .addField("#first-name", [
      {
        rule: "required",
      },
      {
        rule: "customRegexp",
        value: /(?<=^|\h)[a-z]+(?=\h|$)/gi,
        errorMessage: "Only Latin letters are allowed!",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "The name must contain at least 2 letters!",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "The name must contain no more than 15 letters!",
      },
    ])
    .addField("#last-name", [
      {
        rule: "required",
      },
      {
        rule: "customRegexp",
        value: /(?<=^|\h)[a-z]+(?=\h|$)/gi,
        errorMessage: "Only Latin letters are allowed!",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "The last name must contain at least 2 letters!",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "The last name must contain no more than 15 letters!",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
      },
    ])
    .addField("#message", [
      {
        rule: "required",
      },
    ]);
}
