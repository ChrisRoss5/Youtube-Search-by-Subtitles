const translationLanguages = [
  { languageCode: "af", languageName: { simpleText: "Afrikaans" } },
  { languageCode: "sq", languageName: { simpleText: "Albanian" } },
  { languageCode: "am", languageName: { simpleText: "Amharic" } },
  { languageCode: "ar", languageName: { simpleText: "Arabic" } },
  { languageCode: "hy", languageName: { simpleText: "Armenian" } },
  { languageCode: "az", languageName: { simpleText: "Azerbaijani" } },
  { languageCode: "bn", languageName: { simpleText: "Bangla" } },
  { languageCode: "eu", languageName: { simpleText: "Basque" } },
  { languageCode: "be", languageName: { simpleText: "Belarusian" } },
  { languageCode: "bs", languageName: { simpleText: "Bosnian" } },
  { languageCode: "bg", languageName: { simpleText: "Bulgarian" } },
  { languageCode: "my", languageName: { simpleText: "Burmese" } },
  { languageCode: "ca", languageName: { simpleText: "Catalan" } },
  { languageCode: "ceb", languageName: { simpleText: "Cebuano" } },
  {
    languageCode: "zh-Hans",
    languageName: { simpleText: "Chinese (Simplified)" },
  },
  {
    languageCode: "zh-Hant",
    languageName: { simpleText: "Chinese (Traditional)" },
  },
  { languageCode: "co", languageName: { simpleText: "Corsican" } },
  { languageCode: "hr", languageName: { simpleText: "Croatian" } },
  { languageCode: "cs", languageName: { simpleText: "Czech" } },
  { languageCode: "da", languageName: { simpleText: "Danish" } },
  { languageCode: "nl", languageName: { simpleText: "Dutch" } },
  { languageCode: "en", languageName: { simpleText: "English" } },
  { languageCode: "eo", languageName: { simpleText: "Esperanto" } },
  { languageCode: "et", languageName: { simpleText: "Estonian" } },
  { languageCode: "fil", languageName: { simpleText: "Filipino" } },
  { languageCode: "fi", languageName: { simpleText: "Finnish" } },
  { languageCode: "fr", languageName: { simpleText: "French" } },
  { languageCode: "gl", languageName: { simpleText: "Galician" } },
  { languageCode: "ka", languageName: { simpleText: "Georgian" } },
  { languageCode: "de", languageName: { simpleText: "German" } },
  { languageCode: "el", languageName: { simpleText: "Greek" } },
  { languageCode: "gu", languageName: { simpleText: "Gujarati" } },
  { languageCode: "ht", languageName: { simpleText: "Haitian Creole" } },
  { languageCode: "ha", languageName: { simpleText: "Hausa" } },
  { languageCode: "haw", languageName: { simpleText: "Hawaiian" } },
  { languageCode: "iw", languageName: { simpleText: "Hebrew" } },
  { languageCode: "hi", languageName: { simpleText: "Hindi" } },
  { languageCode: "hmn", languageName: { simpleText: "Hmong" } },
  { languageCode: "hu", languageName: { simpleText: "Hungarian" } },
  { languageCode: "is", languageName: { simpleText: "Icelandic" } },
  { languageCode: "ig", languageName: { simpleText: "Igbo" } },
  { languageCode: "id", languageName: { simpleText: "Indonesian" } },
  { languageCode: "ga", languageName: { simpleText: "Irish" } },
  { languageCode: "it", languageName: { simpleText: "Italian" } },
  { languageCode: "ja", languageName: { simpleText: "Japanese" } },
  { languageCode: "jv", languageName: { simpleText: "Javanese" } },
  { languageCode: "kn", languageName: { simpleText: "Kannada" } },
  { languageCode: "kk", languageName: { simpleText: "Kazakh" } },
  { languageCode: "km", languageName: { simpleText: "Khmer" } },
  { languageCode: "rw", languageName: { simpleText: "Kinyarwanda" } },
  { languageCode: "ko", languageName: { simpleText: "Korean" } },
  { languageCode: "ku", languageName: { simpleText: "Kurdish" } },
  { languageCode: "ky", languageName: { simpleText: "Kyrgyz" } },
  { languageCode: "lo", languageName: { simpleText: "Lao" } },
  { languageCode: "la", languageName: { simpleText: "Latin" } },
  { languageCode: "lv", languageName: { simpleText: "Latvian" } },
  { languageCode: "lt", languageName: { simpleText: "Lithuanian" } },
  { languageCode: "lb", languageName: { simpleText: "Luxembourgish" } },
  { languageCode: "mk", languageName: { simpleText: "Macedonian" } },
  { languageCode: "mg", languageName: { simpleText: "Malagasy" } },
  { languageCode: "ms", languageName: { simpleText: "Malay" } },
  { languageCode: "ml", languageName: { simpleText: "Malayalam" } },
  { languageCode: "mt", languageName: { simpleText: "Maltese" } },
  { languageCode: "mi", languageName: { simpleText: "Māori" } },
  { languageCode: "mr", languageName: { simpleText: "Marathi" } },
  { languageCode: "mn", languageName: { simpleText: "Mongolian" } },
  { languageCode: "ne", languageName: { simpleText: "Nepali" } },
  { languageCode: "no", languageName: { simpleText: "Norwegian" } },
  { languageCode: "ny", languageName: { simpleText: "Nyanja" } },
  { languageCode: "or", languageName: { simpleText: "Odia" } },
  { languageCode: "ps", languageName: { simpleText: "Pashto" } },
  { languageCode: "fa", languageName: { simpleText: "Persian" } },
  { languageCode: "pl", languageName: { simpleText: "Polish" } },
  { languageCode: "pt", languageName: { simpleText: "Portuguese" } },
  { languageCode: "pa", languageName: { simpleText: "Punjabi" } },
  { languageCode: "ro", languageName: { simpleText: "Romanian" } },
  { languageCode: "ru", languageName: { simpleText: "Russian" } },
  { languageCode: "sm", languageName: { simpleText: "Samoan" } },
  { languageCode: "gd", languageName: { simpleText: "Scottish Gaelic" } },
  { languageCode: "sr", languageName: { simpleText: "Serbian" } },
  { languageCode: "sn", languageName: { simpleText: "Shona" } },
  { languageCode: "sd", languageName: { simpleText: "Sindhi" } },
  { languageCode: "si", languageName: { simpleText: "Sinhala" } },
  { languageCode: "sk", languageName: { simpleText: "Slovak" } },
  { languageCode: "sl", languageName: { simpleText: "Slovenian" } },
  { languageCode: "so", languageName: { simpleText: "Somali" } },
  { languageCode: "st", languageName: { simpleText: "Southern Sotho" } },
  { languageCode: "es", languageName: { simpleText: "Spanish" } },
  { languageCode: "su", languageName: { simpleText: "Sundanese" } },
  { languageCode: "sw", languageName: { simpleText: "Swahili" } },
  { languageCode: "sv", languageName: { simpleText: "Swedish" } },
  { languageCode: "tg", languageName: { simpleText: "Tajik" } },
  { languageCode: "ta", languageName: { simpleText: "Tamil" } },
  { languageCode: "tt", languageName: { simpleText: "Tatar" } },
  { languageCode: "te", languageName: { simpleText: "Telugu" } },
  { languageCode: "th", languageName: { simpleText: "Thai" } },
  { languageCode: "tr", languageName: { simpleText: "Turkish" } },
  { languageCode: "tk", languageName: { simpleText: "Turkmen" } },
  { languageCode: "uk", languageName: { simpleText: "Ukrainian" } },
  { languageCode: "ur", languageName: { simpleText: "Urdu" } },
  { languageCode: "ug", languageName: { simpleText: "Uyghur" } },
  { languageCode: "uz", languageName: { simpleText: "Uzbek" } },
  { languageCode: "vi", languageName: { simpleText: "Vietnamese" } },
  { languageCode: "cy", languageName: { simpleText: "Welsh" } },
  { languageCode: "fy", languageName: { simpleText: "Western Frisian" } },
  { languageCode: "xh", languageName: { simpleText: "Xhosa" } },
  { languageCode: "yi", languageName: { simpleText: "Yiddish" } },
  { languageCode: "yo", languageName: { simpleText: "Yoruba" } },
  { languageCode: "zu", languageName: { simpleText: "Zulu" } },
];
