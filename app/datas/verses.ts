export interface Verse {
    arabic: string;
    translation: string;
    reference: string;
    category: string;
}

const verses = [
  {
    arabic: "وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُمْ مُؤْمِنِينَ",
    translation:
      "Do not grieve, for you will be the superior if you are [true] believers.",
    reference: "Surah Al-Imran (3:139)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ رَبِّي غَفُورٌ رَحِيمٌ",
    translation: "Indeed, my Lord is Forgiving and Merciful.",
    reference: "Surah Al-Buruj (85:14)",
    category: "Sadness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "يُحْشَرُونَ إِلَىٰ رَبِّهِمْ زُرْفًا",
    translation: "They are brought to their Lord in rows.",
    reference: "Surah Al-Ankabut (29:69)",
    category: "Sadness",
  },
  {
    arabic:
      "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl (16:128)",
    category: "Sadness",
  },
  {
    arabic: "وَلَا تَقْتُلُوا أَنفُسَكُمْ إِنَّ اللَّهَ كَانَ بِكُمْ رَحِيمًا",
    translation:
      "And do not kill yourselves. Indeed, Allah is to you ever Merciful.",
    reference: "Surah An-Nisa (4:29)",
    category: "Sadness",
  },
  {
    arabic:
      "وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الَّذِينَ يَتَّقُونَ وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "And know that Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah Al-Baqarah (2:194)",
    category: "Sadness",
  },
  {
    arabic: "فَإِنَّمَا الْعُسْرِ يُسْرٌ",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    translation: "And when I am ill, it is He who cures me.",
    reference: "Surah Ash-Shu'ara (26:80)",
    category: "Sadness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ",
    translation: "Indeed, Allah is All-Hearing, All-Knowing.",
    reference: "Surah Al-Baqarah (2:137)",
    category: "Sadness",
  },
  {
    arabic: "يَحْذَرُ الْمُنَافِقُونَ أَنْ تَأْتِيَهُمْ سُورَةٌ",
    translation: "The hypocrites fear that a surah may be revealed.",
    reference: "Surah At-Tawbah (9:64)",
    category: "Sadness",
  },
  {
    arabic: "فَإِنَّ اللَّهَ فَاعِلٌ مَا يُرِيدُ",
    translation: "Indeed, Allah does what He wills.",
    reference: "Surah Al-Qamar (54:49)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "Indeed, my Lord is capable of everything.",
    reference: "Surah An-Naml (27:40)",
    category: "Sadness",
  },
  {
    arabic: "وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُمْ مُؤْمِنِينَ",
    translation:
      "Do not grieve, for you will be the superior if you are [true] believers.",
    reference: "Surah Al-Imran (3:139)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Sadness",
  },
  {
    arabic: "فَصَبْرٌ جَمِيلٌ",
    translation: "So beautiful patience!",
    reference: "Surah Yusuf (12:18)",
    category: "Sadness",
  },
  {
    arabic:
      "وَمَا أَمْوَالُكُمْ وَمَا أَوْلَادُكُمْ بِالَّتِي تُقَرِّبُكُمْ عِندَنَا زُلْفَىٰ",
    translation: "And your wealth and your children are but a trial.",
    reference: "Surah Al-Furqan (25:20)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah At-Tawbah (9:118)",
    category: "Sadness",
  },
  {
    arabic: "وَأَنَاۤ عَذَابِىۤ إِذَا أَخَذْتُهُ",
    translation: "And I am the one who punishes when I punish.",
    reference: "Surah Ash-Shu'ara (26:55)",
    category: "Sadness",
  },
  {
    arabic: "وَيُدْنِيَا رَبُّكَ إِلَيْهِ فِي قُرْبِهِ",
    translation: "And your Lord draws near to you in closeness.",
    reference: "Surah At-Tawbah (9:117)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّمَا الْعُسْرِ يُسْرٌ",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ رَبِّي سَمِيعٌ قَرِيبٌ",
    translation: "Indeed, my Lord is Near and He hears.",
    reference: "Surah Al-Baqarah (2:186)",
    category: "Sadness",
  },
  {
    arabic: "وَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
    translation: "Those who believe and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find peace",
    reference: "Surah Ar-Ra'd (13:28)",
    category: "Sadness",
  },
  {
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says: Call upon Me; I will respond to you.",
    reference: "Surah Ghafir (40:60)",
    category: "Sadness",
  },
  {
    arabic: "وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُمْ مُؤْمِنِينَ",
    translation:
      "Do not grieve, for you will be the superior if you are [true] believers.",
    reference: "Surah Al-Imran (3:139)",
    category: "Sadness",
  },
  {
    arabic: "لَا تَحْزَنَا إِنَّ اللَّهَ مَعَنَا",
    translation: "Do not grieve, indeed Allah is with us.",
    reference: "Surah At-Tawbah (9:40)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "Indeed, my Lord is capable of everything.",
    reference: "Surah An-Naml (27:40)",
    category: "Sadness",
  },
  {
    arabic: "يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ",
    translation: "Whatever is in the heavens and the earth glorifies Him.",
    reference: "Surah Al-Jumu'ah (62:1)",
    category: "Sadness",
  },
  {
    arabic: "وَيُدْنِيَا رَبُّكَ إِلَيْهِ فِي قُرْبِهِ",
    translation: "And your Lord draws near to you in closeness.",
    reference: "Surah At-Tawbah (9:117)",
    category: "Sadness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Sadness",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Stress",
  },
  {
    arabic: "وَلَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    translation: "Do not grieve. Indeed, Allah is with us.",
    reference: "Surah At-Tawbah (9:40)",
    category: "Stress",
  },
  {
    arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation:
      "And whoever fears Allah... He will make a way for him to get out (from every difficulty).",
    reference: "Surah At-Talaq (65:2)",
    category: "Stress",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:7)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    translation: "Indeed, your Lord is vast in forgiveness.",
    reference: "Surah An-Najm (53:32)",
    category: "Stress",
  },
  {
    arabic: "وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
    translation: "And above every possessor of knowledge is one more knowing.",
    reference: "Surah Yusuf (12:76)",
    category: "Stress",
  },
  {
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says: 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Stress",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation:
      "And whoever fears Allah... He will make a way for him to get out (from every difficulty).",
    reference: "Surah At-Talaq (65:2)",
    category: "Stress",
  },
  {
    arabic:
      "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
    translation:
      "And perhaps you hate something and Allah has placed within it much good.",
    reference: "Surah An-Nisa (4:19)",
    category: "Stress",
  },
  {
    arabic: "يُدَبِّرُ الْأَمْرَ",
    translation: "He manages the affair.",
    reference: "Surah At-Tawbah (9:51)",
    category: "Stress",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:7)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Stress",
  },
  {
    arabic: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ فَإِنَّ اللَّهَ يَعْلَمُهُ",
    translation: "And whatever good you do – indeed, Allah knows it.",
    reference: "Surah Al-Baqarah (2:215)",
    category: "Stress",
  },
  {
    arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    translation: "Do not grieve. Indeed, Allah is with us.",
    reference: "Surah At-Tawbah (9:40)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ مَعِي الْمُؤْمِنِينَ",
    translation: "Indeed, Allah loves those who believe.",
    reference: "Surah Al-Imran (3:146)",
    category: "Stress",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ: ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says: 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Stress",
  },
  {
    arabic:
      "فَإِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl (16:128)",
    category: "Stress",
  },
  {
    arabic: "يُدَبِّرُ الْأَمْرَ",
    translation: "He manages the affair.",
    reference: "Surah At-Tawbah (9:51)",
    category: "Stress",
  },
  {
    arabic: "يُصِيبُ بِهِ مَن يَشَاءُ",
    translation: "He strikes with it whom He wills.",
    reference: "Surah Ash-Shura (42:30)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Stress",
  },
  {
    arabic: "فَصَبْرٌ جَمِيلٌ",
    translation: "So beautiful patience.",
    reference: "Surah Yusuf (12:18)",
    category: "Stress",
  },
  {
    arabic: "وَمَا نَصْرُ اللَّهِ إِلَّا لِلَّذِينَ يَصْبِرُونَ",
    translation: "And the victory of Allah is for those who are patient.",
    reference: "Surah Ash-Shura (42:43)",
    category: "Stress",
  },
  {
    arabic:
      "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl (16:128)",
    category: "Stress",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:7)",
    category: "Stress",
  },
  {
    arabic: "وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
    translation: "And above every possessor of knowledge is one more knowing.",
    reference: "Surah Yusuf (12:76)",
    category: "Stress",
  },
  {
    arabic: "وَصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
    translation: "And be patient, and your patience is not but through Allah.",
    reference: "Surah An-Nahl (16:127)",
    category: "Stress",
  },
  {
    arabic:
      "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
    translation:
      "And perhaps you hate something and Allah has placed within it much good.",
    reference: "Surah An-Nisa (4:19)",
    category: "Stress",
  },
  {
    arabic: "يُدَبِّرُ الْأَمْرَ",
    translation: "He manages the affair.",
    reference: "Surah At-Tawbah (9:51)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    translation: "Indeed, your Lord is vast in forgiveness.",
    reference: "Surah An-Najm (53:32)",
    category: "Stress",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation:
      "And whoever fears Allah... He will make a way for him to get out (from every difficulty).",
    reference: "Surah At-Talaq (65:2)",
    category: "Stress",
  },
  {
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says: 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Stress",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation:
      "And whoever fears Allah... He will make a way for him to get out (from every difficulty).",
    reference: "Surah At-Talaq (65:2)",
    category: "Stress",
  },
  {
    arabic:
      "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
    translation:
      "And perhaps you hate something and Allah has placed within it much good.",
    reference: "Surah An-Nisa (4:19)",
    category: "Stress",
  },
  {
    arabic: "يُدَبِّرُ الْأَمْرَ",
    translation: "He manages the affair.",
    reference: "Surah At-Tawbah (9:51)",
    category: "Stress",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Loneliness"
  },
  {
    arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    translation: "And when I am ill, it is He who cures me.",
    reference: "Surah Ash-Shu'ara (26:80)",
    category: "Loneliness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّـهَ مَعَنَا",
    translation: "Indeed, Allah is with us.",
    reference: "Surah At-Tawbah (9:40)",
    category: "Loneliness",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says, 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Loneliness",
  },
  {
    arabic: "وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "And do not despair of the mercy of Allah.",
    reference: "Surah Az-Zumar (39:53)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَابِينَ",
    translation: "Indeed, Allah loves those who repent.",
    reference: "Surah Al-Baqarah (2:222)",
    category: "Loneliness",
  },
  {
    arabic:
      "إِنَّمَا يُؤْمِنُ بِآيَاتِيَ الَّذِينَ إِذَا ذُكِّرُوا بِهَا خَرُّوا سُجَّدًا وَسَبَّحُوا بِحَمْدِ رَبِّهِمْ",
    translation:
      "Only those believe in Our verses who, when they are reminded of them, fall down in prostration and glorify [Allah] with praise.",
    reference: "Surah Al-Isra (17:109)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Loneliness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Loneliness",
  },
  {
    arabic: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
    translation: "Allah is the ally of those who believe.",
    reference: "Surah Al-Baqarah (2:257)",
    category: "Loneliness",
  },
  {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    translation:
      "And when My servants ask you concerning Me, indeed I am near.",
    reference: "Surah Al-Baqarah (2:186)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الَّذِينَ تَقَوْا",
    translation: "Indeed, Allah is with those who fear Him.",
    reference: "Surah An-Nahl (16:128)",
    category: "Loneliness",
  },
  {
    arabic: "مَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "Whoever relies upon Allah – then He is sufficient for him.",
    reference: "Surah At-Talaq (65:3)",
    category: "Loneliness",
  },
  {
    arabic: "وَأَنَا مَعَكُمْ",
    translation: "And I am with you.",
    reference: "Surah Al-Mujadila (58:11)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah At-Tawbah (9:118)",
    category: "Loneliness",
  },
  {
    arabic: "فَإِنَّ اللَّهَ يَعْصِمُكَ مِنَ النَّاسِ",
    translation: "Indeed, Allah will protect you from the people.",
    reference: "Surah Al-Ma'idah (5:67)",
    category: "Loneliness",
  },
  {
    arabic: "وَصَارِحُوا لِلَّهِ وَأَمِّنُوا",
    translation: "And purify yourselves for Allah and be secure.",
    reference: "Surah Al-Ma’idah (5:89)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with those who are patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Loneliness",
  },
  {
    arabic: "اللَّهُ يَحْشُرُهُمْ يَوْمَ الْقِيَامَةِ",
    translation: "Allah will gather them on the Day of Judgment.",
    reference: "Surah Al-Imran (3:169)",
    category: "Loneliness",
  },
  {
    arabic: "يُحِبُّ اللَّهُ الَّذِينَ يَقْتَتِلُونَ فِي سَبِيلِهِ",
    translation: "Allah loves those who fight in His cause.",
    reference: "Surah As-Saff (61:4)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُحِبُّ أَنْ يَكُونَ الَّذِينَ يَفْتَرُونَ",
    translation: "Indeed, Allah does not love those who lie.",
    reference: "Surah Al-Hajj (22:11)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ",
    translation: "Indeed, Allah is Hearing and Seeing.",
    reference: "Surah An-Nisa (4:58)",
    category: "Loneliness",
  },
  {
    arabic: "وَلَا تَحْزَنُوا",
    translation: "And do not grieve.",
    reference: "Surah Al-Imran (3:139)",
    category: "Loneliness",
  },
  {
    arabic: "فَإِنَّ اللَّهَ هُوَ رَحِيمٌ",
    translation: "Indeed, Allah is the Most Merciful.",
    reference: "Surah Al-Insan (76:3)",
    category: "Loneliness",
  },
  {
    arabic:
      "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانُوا فِي رَحْمَةٍ مِّنْ رَّبِّهِمْ",
    translation:
      "Indeed, those who have believed and done righteous deeds are in mercy from their Lord.",
    reference: "Surah Al-Baqarah (2:218)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ رَبِّي قَرِيبٌ",
    translation: "Indeed, my Lord is near.",
    reference: "Surah Al-Isra (17:57)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ",
    translation: "Indeed, in that is a reminder.",
    reference: "Surah Al-Baqarah (2:164)",
    category: "Loneliness",
  },
  {
    arabic:
      "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَىٰ الْأَرْضِ هَوْنًا",
    translation:
      "And the servants of the Most Merciful are those who walk upon the earth easily.",
    reference: "Surah Al-Furqan (25:63)",
    category: "Loneliness",
  },
  {
    arabic: "وَإِنَّكُمْ لَفِي شَكٍّ",
    translation: "And indeed, you are in doubt.",
    reference: "Surah Al-Ankabut (29:53)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ رَحْمَتِ اللَّهِ قَرِيبٌ",
    translation: "Indeed, the mercy of Allah is near.",
    reference: "Surah Al-A'raf (7:56)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الصَّابِرِينَ",
    translation: "Indeed, Allah loves those who are patient.",
    reference: "Surah Aal-e-Imran (3:146)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah At-Tawbah (9:118)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    translation: "Indeed, Allah is the Most Merciful, the Most Compassionate.",
    reference: "Surah Al-Fatiha (1:3)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يَقَاتِلُونَ فِي سَبِيلِهِ",
    translation: "Indeed, Allah loves those who fight in His cause.",
    reference: "Surah As-Saff (61:4)",
    category: "Loneliness",
  },
  {
    arabic: "وَعِبَادُ اللَّهِ",
    translation: "And the servants of Allah.",
    reference: "Surah Al-Furqan (25:63)",
    category: "Loneliness",
  },
  {
    arabic: "فَذُوقُوا بِمَا نَسِيتُمْ",
    translation: "So taste [the punishment] for what you forgot.",
    reference: "Surah Al-Hashr (59:9)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ رَبَّكُمْ تَوَابٌ",
    translation: "Indeed, your Lord is the Most Forgiving.",
    reference: "Surah At-Tawbah (9:118)",
    category: "Loneliness",
  },
  {
    arabic: "إِنَّ الْمُؤْمِنِينَ فِي جَنَّاتٍ",
    translation: "Indeed, the believers are in gardens.",
    reference: "Surah Al-Ahzab (33:57)",
    category: "Loneliness",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّـهَ مَعَنَا",
    translation: "Indeed, Allah is with us.",
    reference: "Surah At-Tawbah (9:40)",
    category: "Confused",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says, 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّـهَ يُحِبُّ التَّوَابِينَ",
    translation: "Indeed, Allah loves those who repent.",
    reference: "Surah Al-Baqarah (2:222)",
    category: "Confused",
  },
  {
    arabic: "يُضِلُّ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ",
    translation: "He leaves astray whom He wills and guides whom He wills.",
    reference: "Surah Al-An'am (6:39)",
    category: "Confused",
  },
  {
    arabic: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
    translation: "And indeed, you are of a great moral character.",
    reference: "Surah Al-Qalam (68:4)",
    category: "Confused",
  },
  {
    arabic: "قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ",
    translation: "He is the Lord of the heavens and the earth.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Confused",
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    translation: "And my success is not but through Allah.",
    reference: "Surah Hud (11:88)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا",
    translation: "Indeed, Allah is with those who fear Him.",
    reference: "Surah An-Nahl (16:128)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ سَيَجْعَلُ لَكُمْ فَرَجًا",
    translation: "Indeed, Allah will make for you a way out.",
    reference: "Surah At-Talaq (65:4)",
    category: "Confused",
  },
  {
    arabic: "وَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Confused",
  },
  {
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    translation: "Say, 'He is Allah, [Who is] One.'",
    reference: "Surah Al-Ikhlas (112:1)",
    category: "Confused",
  },
  {
    arabic: "فَذُوقُوا بِمَا نَسِيتُمْ",
    translation:
      "So taste [the punishment] because you forgot [the meeting] of this Day.",
    reference: "Surah As-Sajda (32:14)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "Indeed, Allah is over all things competent.",
    reference: "Surah Al-Baqarah (2:20)",
    category: "Confused",
  },
  {
    arabic: "وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "And do not despair of the mercy of Allah.",
    reference: "Surah Az-Zumar (39:53)",
    category: "Confused",
  },
  {
    arabic: "أَمْ حَسِبْتُمْ أَنْ تَدْخُلُوا الْجَنَّةَ",
    translation: "Or do you think that you will enter Paradise?",
    reference: "Surah Al-Baqarah (2:214)",
    category: "Confused",
  },
  {
    arabic: "لَا إِلٰهَ إِلَّا أَنتَ",
    translation: "There is no deity except You.",
    reference: "Surah Al-Anbiya (21:87)",
    category: "Confused",
  },
  {
    arabic: "فَفِرُّوا إِلَى اللَّهِ",
    translation: "So flee to Allah.",
    reference: "Surah Az-Zariyat (51:50)",
    category: "Confused",
  },
  {
    arabic: "يُحْيِي وَيُمِيتُ",
    translation: "He gives life and causes death.",
    reference: "Surah Al-Imran (3:156)",
    category: "Confused",
  },
  {
    arabic: "وَإِنَّ رَبَّكَ لَمَحْرُومٌ",
    translation: "And indeed, your Lord is not forgetful.",
    reference: "Surah Maryam (19:64)",
    category: "Confused",
  },
  {
    arabic: "وَلَا تَحْزَنُوا وَأَنْتُمْ الْأَعْلَوْنَ",
    translation: "And do not grieve, for you will be superior.",
    reference: "Surah Al-Imran (3:139)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah Al-Baqarah (2:199)",
    category: "Confused",
  },
  {
    arabic: "قُلْ يَا أَيُّهَا الَّذِينَ آمَنُوا",
    translation: "Say, 'O you who have believed.'",
    reference: "Surah Al-Mujadila (58:11)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    translation: "Indeed, your Lord is vast in forgiveness.",
    reference: "Surah Al-Ghafir (40:3)",
    category: "Confused",
  },
  {
    arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَى",
    translation:
      "Your Lord has not taken leave of you, nor has He detested [you].",
    reference: "Surah Ad-Duha (93:3)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا",
    translation: "Indeed, Allah is with those who fear Him.",
    reference: "Surah An-Nahl (16:128)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ يَفْعَلُ مَا يُرِيدُ",
    translation: "Indeed, Allah does whatever He wills.",
    reference: "Surah Al-Baqarah (2:253)",
    category: "Confused",
  },
  {
    arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "Do not despair of Allah's mercy.",
    reference: "Surah Az-Zumar (39:53)",
    category: "Confused",
  },
  {
    arabic: "وَاللَّهُ خَيْرٌ وَأَبْقَى",
    translation: "And Allah is better and more lasting.",
    reference: "Surah Al-Qasas (28:60)",
    category: "Confused",
  },
  {
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    translation: "Say, 'I seek refuge in the Lord of mankind.'",
    reference: "Surah An-Nas (114:1)",
    category: "Confused",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ اللَّهَ سَيَجْعَلُ لَكُمْ مَخْرَجًا",
    translation: "Indeed, Allah will make for you a way out.",
    reference: "Surah At-Talaq (65:2)",
    category: "Confused",
  },
  {
    arabic: "فَإِنَّكُمْ فِي ضِلَالٍ مُّبِينٍ",
    translation: "Indeed, you are in clear error.",
    reference: "Surah Az-Zumar (39:38)",
    category: "Confused",
  },
  {
    arabic: "يُحْيِي وَيُمِيتُ",
    translation: "He gives life and causes death.",
    reference: "Surah Al-Imran (3:156)",
    category: "Confused",
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    translation: "And my success is not but through Allah.",
    reference: "Surah Hud (11:88)",
    category: "Confused",
  },
  {
    arabic: "لَا إِلٰهَ إِلَّا أَنتَ",
    translation: "There is no deity except You.",
    reference: "Surah Al-Anbiya (21:87)",
    category: "Confused",
  },
  {
    arabic: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ",
    translation:
      "Indeed, your Lord is Allah, who created the heavens and the earth.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Confused",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "And your Lord says, 'Call upon Me; I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Comfort",
  },
  {
    arabic: "وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "And do not despair of Allah's mercy.",
    reference: "Surah Az-Zumar (39:53)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: "Surely, in the remembrance of Allah do hearts find comfort.",
    reference: "Surah Ar-Ra'd (13:28)",
    category: "Comfort",
  },
  {
    arabic:
      "إِنَّ اللَّـهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl (16:128)",
    category: "Comfort",
  },
  {
    arabic:
      "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدَرٍ",
    translation:
      "And We caused the earth to gush forth with springs, so the waters met for a matter already predestined.",
    reference: "Surah Al-Qamar (54:12)",
    category: "Comfort",
  },
  {
    arabic: "رَبُّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
    translation:
      "Our Lord, do not let our hearts deviate after You have guided us.",
    reference: "Surah Al-Imran (3:8)",
    category: "Comfort",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّـهَ يَجْعَلْ لَهُ مَخْرَجًا",
    translation:
      "And whoever fears Allah - He will make a way for him to get out [from every difficulty].",
    reference: "Surah At-Talaq (65:2)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكُمُ اللَّـهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ",
    translation:
      "Indeed, your Lord is Allah, who created the heavens and the earth.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Comfort",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "وَصَابِرِينَ عَلَىٰ مَا أَصَابَهُمْ",
    translation: "And those who are patient in what has afflicted them.",
    reference: "Surah Al-Imran (3:146)",
    category: "Comfort",
  },
  {
    arabic: "وَكَانَ رَبُّكَ قَدِيرًا",
    translation: "And your Lord is capable [of all things].",
    reference: "Surah Al-Buruj (85:20)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah An-Nisa (4:96)",
    category: "Comfort",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation:
      "And your Lord says, 'Call upon Me, and I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqara (2:153)",
    category: "Comfort",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic:
      "وَمَا أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ بِالَّتِي تُقَرِّبُكُمْ عِندِي زُلْفَىٰ",
    translation:
      "And your wealth and your children are not the things that bring you near to Me in position.",
    reference: "Surah Sad (38:39)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation:
      "And your Lord says, 'Call upon Me, and I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Comfort",
  },
  {
    arabic: "يُدَبِّرُ الْأَمْرَ",
    translation: "He is the One who arranges the affairs.",
    reference: "Surah Ar-Rum (30:5)",
    category: "Comfort",
  },
  {
    arabic: "قُلْ لَا تَحْزَنُوا إِنَّ اللَّـهَ مَعَنَا",
    translation: "Say, 'Do not grieve; indeed, Allah is with us.'",
    reference: "Surah At-Tawba (9:40)",
    category: "Comfort",
  },
  {
    arabic: "وَتَوَكَّلْ عَلَىٰ اللَّـهِ وَرَحْمَتُهُ وَمِنْهُ وَفَضْلٍ",
    translation: "And rely upon Allah and upon His mercy and grace.",
    reference: "Surah Al-Imran (3:159)",
    category: "Comfort",
  },
  {
    arabic:
      "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدَرٍ",
    translation:
      "And We caused the earth to gush forth with springs, so the waters met for a matter already predestined.",
    reference: "Surah Al-Qamar (54:12)",
    category: "Comfort",
  },
  {
    arabic: "وَأَنَّ اللَّـهَ سَمِيعٌ عَلِيمٌ",
    translation: "And indeed, Allah is Hearing and Knowing.",
    reference: "Surah Al-Mujadila (58:1)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ",
    translation: "Indeed, your Lord is vast in forgiveness.",
    reference: "Surah An-Najm (53:32)",
    category: "Comfort",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "لَا تَحْزَنُوٓا إِنَّ اللَّـهَ مَعَنَا",
    translation: "Do not grieve; indeed, Allah is with us.",
    reference: "Surah At-Tawba (9:40)",
    category: "Comfort",
  },
  {
    arabic: "يُحْيِي وَيُمِيتُ",
    translation: "He gives life and causes death.",
    reference: "Surah Al-Imran (3:156)",
    category: "Comfort",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكُمْ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ",
    translation:
      "Indeed, your Lord is Allah, who created the heavens and the earth.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah An-Nisa (4:96)",
    category: "Comfort",
  },
  {
    arabic:
      "إِنَّ اللَّـهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ",
    translation:
      "Indeed, Allah is with those who fear Him and those who are doers of good.",
    reference: "Surah An-Nahl (16:128)",
    category: "Comfort",
  },
  {
    arabic:
      "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدَرٍ",
    translation:
      "And We caused the earth to gush forth with springs, so the waters met for a matter already predestined.",
    reference: "Surah Al-Qamar (54:12)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ سَمِيعٌ عَلِيمٌ",
    translation: "Indeed, Allah is Hearing and Knowing.",
    reference: "Surah Al-Mujadila (58:1)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, Allah is Forgiving and Merciful.",
    reference: "Surah An-Nisa (4:96)",
    category: "Comfort",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "لَا تَحْزَنُوٓا إِنَّ اللَّـهَ مَعَنَا",
    translation: "Do not grieve; indeed, Allah is with us.",
    reference: "Surah At-Tawba (9:40)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكُمُ اللَّـهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ",
    translation:
      "Indeed, your Lord is Allah, who created the heavens and the earth.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Surah Ash-Sharh (94:6)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ اللَّـهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqara (2:153)",
    category: "Comfort",
  },
  {
    arabic: "وَجَزَاءً بِمَا كَانُوا يَعْمَلُونَ",
    translation: "And reward them for what they used to do.",
    reference: "Surah At-Tawba (9:88)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكُمْ وَاسِعُ الْمَغْفِرَةِ",
    translation: "Indeed, your Lord is vast in forgiveness.",
    reference: "Surah An-Najm (53:32)",
    category: "Comfort",
  },
  {
    arabic:
      "وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدَرٍ",
    translation:
      "And We caused the earth to gush forth with springs, so the waters met for a matter already predestined.",
    reference: "Surah Al-Qamar (54:12)",
    category: "Comfort",
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation:
      "And your Lord says, 'Call upon Me, and I will respond to you.'",
    reference: "Surah Ghafir (40:60)",
    category: "Comfort",
  },
  {
    arabic: "إِنَّ رَبَّكُمُ اللَّـهُ",
    translation: "Indeed, your Lord is Allah.",
    reference: "Surah Al-A'raf (7:54)",
    category: "Comfort",
  },
];

export default verses;