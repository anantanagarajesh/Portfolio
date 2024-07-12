// translations.js

const translations = {
    en: {
      about: {
        heading: "About Me",
        paragraph: "Hi there! I'm a passionate web designer and front-end developer with a keen eye for aesthetics and a love for clean, modern designs. I enjoy crafting user-friendly interfaces that not only look great but also deliver a seamless user experience. When I'm not coding, you can find me exploring the world of digital art and finding inspiration in everyday life.",
        resume: "Resume"
      },
      projects: {
        heading: "Projects",
        blockchain: "Blockchain project",
        webDev: "Web development project",
        portfolio: "Portfolio website",
        blood: "Bllod Donation App"
      },
      certificates: {
        heading: "Certificates"
      }
    },
    hi: {
      about: {
        heading: "मेरे बारे में",
        paragraph: "नमस्ते! मैं एक भावुक वेब डिजाइनर और फ्रंट-एंड डेवलपर हूं, जो सौंदर्यशास्त्र के प्रति उत्सुक हूं और साफ-सुथरे, आधुनिक डिजाइनों से प्यार करता हूं। मैं उपयोगकर्ता-मित्रवत इंटरफेस बनाना पसंद करता हूं जो न केवल अच्छे दिखते हैं बल्कि एक सहज उपयोगकर्ता अनुभव भी प्रदान करते हैं। जब मैं कोडिंग नहीं कर रहा होता हूं, तो आप मुझे डिजिटल कला की दुनिया का अन्वेषण करते हुए और रोजमर्रा की जिंदगी में प्रेरणा खोजते हुए पा सकते हैं।",
        resume: "रिज़्यूमे"
      },
      projects: {
        heading: "प्रोजेक्ट्स",
        blockchain: "ब्लॉकचेन प्रोजेक्ट",
        webDev: "वेब विकास प्रोजेक्ट",
        portfolio: "पोर्टफोलियो वेबसाइट",
        blood:"रक्तदान ऐप"
      },
      certificates: {
        heading: "प्रमाणपत्र"
      },
      contact: {
        heading:"Contact Me"
      }
    },
    kn: {
      about: {
        heading: "ನನ್ನ ಬಗ್ಗೆ",
        paragraph: "ಹಲೋ ಅಲ್ಲಿ! ನಾನು ಒಬ್ಬ ಉತ್ಸಾಹಿತ ವೆಬ್ ಡಿಜೈನರ್ ಮತ್ತು ಮುಖ್ಯ ಮುಂದುವರಿದ ಅಭಿವೃದ್ಧಿಗಾರ ಆಗಿದ್ದೇನೆ. ಸೌಂದರ್ಯಾನುಭವದ ದೃಷ್ಟಿಯಿಂದ ನನಗೆ ಹಿತವಾದ ಮತ್ತು ಸ್ವಚ್ಛ ಆಧುನಿಕ ಡಿಜೈನ್‌ಗಳನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ. ನಾನು ಯಾವಾಗಲೂ ಶ್ರಮಿಸಿದಾಗ, ನನ್ನ ಅಭಿವೃದ್ಧಿಗೆ ಸೌಂದರ್ಯಕರ ಅನುಭವವನ್ನು ನೀಡುವ ಬಳಿಕ ನಾನು ಬಾಂಬಾಡುವ ಸ್ಥಳಗಳನ್ನು ಪ್ರವೇಶಿಸುತ್ತೇನೆ. ಕೋಡಿಂಗ್ ಮಾಡುವಾಗ ನಾನು ಅರ್ಧ ನಾಲ್ಕು ದಿನಗಳಲ್ಲಿಯೂ ಡಿಜಿಟಲ್ ಕಲೆಯ ಜಗತ್ತನ್ನು ಅನ್ವಯಿಸುವವರು ಮತ್ತು ದಿನಚರಿಯ ಜೀವನದ ಪ್ರೇರಣೆಯನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ.",
        resume: "ಪರಿಚಯ ಪತ್ರ"
      },
      projects: {
        heading: "ಪ್ರಾಜೆಕ್ಟ್ಗಳು",
        blockchain: "ಬ್ಲಾಕ್‌ಚೈನ್ ಪ್ರಾಜೆಕ್ಟ್",
        webDev: "ವೆಬ್ ಡೆವಲಪ್‌ಮೆಂಟ್ ಪ್ರಾಜೆಕ್ಟ್",
        portfolio: "ಪೋರ್ಟ್ಫೋಲಿಯೊ ವೆಬ್‌ಸೈಟ್",
        blood:"ರಕ್ತ ದಾನ ಅಪ್ಲಿಕೇಶನ್"
      },
      certificates: {
        heading: "ಪ್ರಮಾಣಪತ್ರಗಳು"
      },
      contact:{
        heading:"ನನಗೆ ಸಂಪರ್ಕಿಸಿ"
      }
    }
  };
  
  document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    document.getElementById('about-heading').textContent = translations[selectedLanguage].about.heading;
    document.getElementById('about-paragraph').textContent = translations[selectedLanguage].about.paragraph;
    document.getElementById('resume-link').textContent = translations[selectedLanguage].about.resume;
    document.getElementById('projects-heading').textContent = translations[selectedLanguage].projects.heading;
    document.getElementById('blockchain-heading').textContent = translations[selectedLanguage].projects.blockchain;
    document.getElementById('webDev-heading').textContent = translations[selectedLanguage].projects.webDev;
    document.getElementById('portfolio-heading').textContent = translations[selectedLanguage].projects.portfolio;
    document.getElementById('blood-heading').textContent = translations[selectedLanguage].projects.blood;
    document.getElementById('certificates-heading').textContent = translations[selectedLanguage].certificates.heading;
    document.getElementById('contact-heading').textContent = translations[selectedLanguage].contact.heading;
  });
  