import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'lt', name: 'Lietuvių', flag: 'lt' },
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'ru', name: 'Русский', flag: 'ru' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher">
      <div className="custom-dropdown">
        <button 
          className="dropdown-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`fi fi-${currentLanguage.flag}`}></span>
          <span className="dropdown-arrow">▼</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`dropdown-item ${i18n.language === language.code ? 'active' : ''}`}
              >
                <span className={`fi fi-${language.flag}`}></span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
