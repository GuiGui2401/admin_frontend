import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import useBodyClass from './helpers/useBodyClass';
import AppLocale from './configs/app-locale';
import i18n from './configs/i18next';

const themes = {
  dark: '/css/dark-theme.css',
  light: '/css/light-theme.css',
};

export default function Providers({ children }) {
  const { theme } = useSelector((state) => state.theme, shallowEqual);
  
  // Utilisation de useBodyClass comme un hook
  useBodyClass(`dir-${theme.direction}`);

  // Utilisation de useMemo pour optimiser la locale et la direction
  const localeConfig = useMemo(() => ({
    locale: AppLocale[i18n.language],
    direction: theme.direction
  }), [theme.direction, i18n.language]);

  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={theme.currentTheme}
    >
      <ConfigProvider
        {...localeConfig}
        getPopupContainer={(triggerNode) => {
          // Ajout d'une vérification de sécurité
          return triggerNode?.parentNode || document.body;
        }}
        // Nouvelles options pour améliorer l'accessibilité
        renderEmpty={() => (
          <div 
            role="alert" 
            aria-live="assertive"
          >
            Aucun contenu
          </div>
        )}
        // Options supplémentaires pour gérer les problèmes d'accessibilité
        componentSize="middle"
        // Désactiver certains comportements problématiques
        autoInsertSpaceInButton={false}
      >
        {children}
      </ConfigProvider>
    </ThemeSwitcherProvider>
  );
}