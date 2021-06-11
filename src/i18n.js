import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {

        "About": "About",
        "Try": 'Try',
        "It's Vidun": "It's Vidun",
        "What is a meaning of": "What does my dream mean",
        "write your dream": "write your dream",
        "Submit": "Submit",
        "Reset": "Reset",
        "Copy": "Copy",
        "Item 1": "How does it work",
        "General info": "VIDUN is a seq2seq neural network fine-tuned on the dream interpretations dataset. Full information will be available on GitHub as soon as the author will have enough time to prepare extensive notebooks.",
        "Item 2": "What's next",
        "Plans": "TODO: improve a quality of the generated text, make it possible for user to input a linear story, generate text by keywords, add a user evaluation of the generated output.",
        "Item 3": "I still have a question",
        "Questions": "You can contact me by any means listed below.",
        "Item 4": "Support the project",
        "Support": "If you like VIDUN, please support it on Patreon."
        }
    },
    ru: {
      translations: {

        "About": "О проекте",
        "Try": 'Попробовать',
        "It's Vidun": "Это Vidun",
        "What is a meaning of": "К чему снится",
        "write your dream": "введите свой сон",
        "Submit": "Узнать",
        "Reset": "Сбросить",
        "Copy": "Копировать",
        "Item 1": "Как это работает",
        "General info": "VIDUN это seq2seq нейросеть обученная на толкованиях снов. Подробная информация будет доступна на GitHub как только автор(-ка) найдет время сделать полноценные ноутбуки.",
        "Item 2": "Что дальше",
        "Plans": "TODO: улучшить качество генерируемого текста, дать возможность пользователю вводить связное описание сна, генерировать текст по ключевым словам, добавить возможность оценивать толкование.",
        "Item 3": "Остались вопросы",
        "Questions": "Со мной можно связаться любыми способами, указанными внизу.",
        "Item 4": "Поддержать проект",
        "Support": "Пожалуйста, поддержите проект на Patreon. Ссылка внизу."
        }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
