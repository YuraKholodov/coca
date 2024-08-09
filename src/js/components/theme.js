export function useTheme() {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');
  const theme = localStorage.getItem('theme') || 'light';
  const themeTargetDataset = themeTarget.dataset;
  themeTargetDataset.theme = theme;

  if (theme == 'dark') {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme == 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
}
