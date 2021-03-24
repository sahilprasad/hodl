export function robinhodl(): void {
  const elements = document.querySelectorAll(
    '[data-testid="OrderFormHeading-Sell"]'
  ) as NodeListOf<HTMLElement>;
  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    element.style.display = 'none';
  }
}
