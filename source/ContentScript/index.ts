import {robinhodl} from './robinhood';

const DIAMOND_HANDS = '💎🙌';

const SLEEP_DURATION = 2500;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const main = (): void => {
  const {location} = window;

  switch (location.pathname) {
    case 'robinhood.com':
      robinhodl();
      break;
    default:
      break;
    // TODO: add more sites
  }

  // By default, replace all mentions of `sell` with DIAMOND_HANDS.
  document.body.innerHTML = document.body.innerHTML.replaceAll(
    /sell/gi,
    DIAMOND_HANDS
  );
};

const onLoad = async (): Promise<void> => {
  await sleep(SLEEP_DURATION);
  main();
};

window.onload = onLoad;

export {};
