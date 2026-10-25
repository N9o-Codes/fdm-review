/**
 * Build source-authored markup only. Interpolations are deliberately rejected;
 * insert external values through textContent or DOM properties after creation.
 */
export function staticView(strings, ...values) {
  if (!Array.isArray(strings.raw) || strings.length !== 1 || values.length) {
    throw new TypeError(
      "staticView accepts a template literal without substitutions.",
    );
  }

  const template = document.createElement("template");
  template.innerHTML = strings[0].trim();
  if (template.content.children.length !== 1) {
    throw new Error("A view must have exactly one root element.");
  }
  return template.content.firstElementChild;
}
