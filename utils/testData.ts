/**
 * Test Case Interface
 */
export interface TestCase {
  tcId: string;
  testCaseName: string;
  inputLengthType: "S" | "M" | "L";
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  status?: "Pass" | "Fail";
  accuracyJustification: string;
  whatIsCovered: string;
}

/**
 * All 24 Positive Test Cases
 */
export const positiveTestCases: TestCase[] = [
  {
    tcId: "Pos_Fun_0001",
    testCaseName: "Simple present tense statement",
    inputLengthType: "S",
    input: "mama iskoolee yanavaa",
    expectedOutput: "මම ඉස්කෝලේ යනවා",
    accuracyJustification: "Meaning and tense preserved",
    whatIsCovered: "• Daily usage\n• Present tense\n• S (≤30 characters)",
  },
  {
    tcId: "Neg_Fun_0002",
    testCaseName: "Simple greeting",
    inputLengthType: "S",
    input: "oyaata hari lassanayi",
    expectedOutput: "ඔයාට හරි ලස්සනයි",
    accuracyJustification:
      "• The system correctly converts the Singlish content into Sinhala.",
    whatIsCovered:
      "• Greeting / response\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0003",
    testCaseName: "Polite request",
    inputLengthType: "S",
    input: "mata uyanna help ekak karanna puluvandha?",
    expectedOutput: "මට උයන්න help එකක් කරන්න පුලුවන්ද?",
    accuracyJustification: "• The request meaning is correctly preserved.",
    whatIsCovered:
      "• Request\n• Interrogative (question)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0004",
    testCaseName: "Medium length Sentence",
    inputLengthType: "M",
    input:
      "iskole giyata passe mata paadam karanna yanna oonii, inpasu amathara panthi sadhahaa yaa yuthuya.",
    expectedOutput:
      "ඉස්කොලෙ ගියට පස්සෙ මට පාඩම් කරන්න යන්න ඕනී, ඉන්පසු අමතර පන්ති සදහා යා යුතුය.",
    accuracyJustification: "• The request meaning is correctly preserved.",
    whatIsCovered: "• Daily usage\n• Simple sentence\n• M (31-299 characters)",
  },
  {
    tcId: "Pos_Fun_0005",
    testCaseName:
      "Long mixed-language input with slang + typo causes incorrect conversion",
    inputLengthType: "M",
    input:
      "Mama school gihin aevilla, eeka passe oyaata call ekak aragena hariyata kiyannam, eeka avashYA dheyak nam mama eeka balalaa hondhatama kiyala dhennan haridha?",
    expectedOutput:
      "මම school ගිහින් ඇවිල්ල, ඒක පස්සෙ ඔයාට call එකක් අරගෙන හරියට කියන්නම්, ඒක අවශ්",
    accuracyJustification:
      "• The compound sentence meaning is correctly preserved in the Sinhala output.",
    whatIsCovered:
      "• Daily language usage\n• Compound structure\n• M(31-299 characters)",
  },
  {
    tcId: "Pos_Fun_0006",
    testCaseName: "Convert positive future intent sentence",
    inputLengthType: "S",
    input: "mama eeka haridha balannam",
    expectedOutput: "මම ඒක හරිද බලන්නම්",
    accuracyJustification:
      '• The future intent expressed by "balannam" is accurately preserved in the output.',
    whatIsCovered:
      "• Daily language usage\n• Future tense (positive form)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0007",
    testCaseName: "Convert complex sentence with cause and effect",
    inputLengthType: "M",
    input: "mata thuvaala vune maava accident vuna nisaa.",
    expectedOutput: "මට තුවාල වුනෙ මාව accident වුන නිසා.",
    accuracyJustification:
      "• The system correctly converts the Singlish input into meaningful Sinhala output.",
    whatIsCovered:
      "• Daily language usage\n• M(31-299 characters)\n• Complex sentences\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0008",
    testCaseName: "Convert a multi-word expression combining motion and eating",
    inputLengthType: "S",
    input: "gihinma kanavaa",
    expectedOutput: "ගිහින්ම කනවා",
    accuracyJustification:
      "• The multi-word expression meaning is accurately preserved",
    whatIsCovered:
      "• Word combination / phrase pattern\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0009",
    testCaseName:
      "Convert a medium-length sentence with proper spacing and mixed English",
    inputLengthType: "M",
    input: "api heta shopping karanna kandy yanavaa",
    expectedOutput: "අපි හෙට shopping කරන්න kandy යනවා",
    accuracyJustification: "• The sentence meaning is accurately preserved.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Future tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0010",
    testCaseName: "Convert repeated word expression for emphasis",
    inputLengthType: "S",
    input: "yan yan",
    expectedOutput: "යන් යන්",
    accuracyJustification:
      "• The repeated word pattern is accurately preserved.",
    whatIsCovered:
      "• Word combination / phrase pattern\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0011",
    testCaseName: "Convert politely phrased interrogative request",
    inputLengthType: "S",
    input: "karuNaakara athana meesayen vaadivenna puluvandha?",
    expectedOutput: "කරුණාකර අතන මේසයෙන් වාඩිවෙන්න පුලුවන්ද?",
    accuracyJustification:
      '• The politeness marker "karuNaakara" is accurately preserved in the output.',
    whatIsCovered:
      "• Greeting / request / response\n• Interrogative (polite request)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0012",
    testCaseName: "Convert a common day-to-day expression of extreme hunger",
    inputLengthType: "S",
    input: "mata badaginiyi",
    expectedOutput: "මට බඩගිනියි?",
    accuracyJustification: "• The expression meaning is accurately preserved.",
    whatIsCovered:
      "• Daily language usage\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0013",
    testCaseName:
      "Convert multi-sentence input with multiple embedded English technical and brand terms",
    inputLengthType: "M",
    input:
      "mama email ekak dhaemma. oyaa eeka haridha vaeradhidha kiyala adha raeta kalin mata kiyanna haridha?",
    expectedOutput:
      "මම email එකක් දැම්ම. ඔයා ඒක හරිද වැරදිද කියල අද රැට කලින් මට කියන්න හරිද?",
    accuracyJustification:
      '• English technical/brand terms ("email") are appropriately retained',
    whatIsCovered:
      "• Mixed Singlish + English\n• Interrogative (question)\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0014",
    testCaseName: "Convert a sentence containing currency format",
    inputLengthType: "S",
    input: "mee sapaththu dheka Rs. 5000",
    expectedOutput: "මේ සපත්තු දෙක Rs. 5000",
    accuracyJustification: "• The sentence meaning is accurately preserved",
    whatIsCovered:
      "• Punctuation / numbers\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0015",
    testCaseName: "Convert a past tense sentence with ISO date format",
    inputLengthType: "M",
    input: "2026-01-10 mama kaaryYAalayen nivaadu gaththaa.",
    expectedOutput: "2026-01-10 මම කාර්ය්",
    accuracyJustification: "• The past tense meaning is accurately preserved",
    whatIsCovered:
      "• Punctuation / numbers\n• Past tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0016",
    testCaseName:
      "Convert a long sports-related paragraph with multiple sentences",
    inputLengthType: "L",
    input:
      "engalantha kandaayama samaga paevaethvena thunveni ekdhina krikat tharagayeedhi siya mangala shathakaya vaartha kiriimata pavan rathnaayaka samath vunaa. ee anuva ohu eya pandhu 104 kadhi labagaththeeya.",
    expectedOutput: "එන්ගලන්ත කන්ඩායම සමග පැවැත්වෙන තුන්වෙනි එක්දින ක්",
    accuracyJustification:
      "• Complex sentence structure with proper names is maintained",
    whatIsCovered:
      "• Daily language usage\n• Past tense\n• L (≥300 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0017",
    testCaseName:
      "Convert a sentence with time format and English abbreviations",
    inputLengthType: "S",
    input: "mata heta 6.00 P.M DS lecturers thiyenavaa",
    expectedOutput: "මට හෙට 6.00 P.M DS lecturers තියෙනවා",
    accuracyJustification: "• The sentence meaning is accurately preserved",
    whatIsCovered:
      "• Punctuation / numbers\n• Future tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0018",
    testCaseName: "Convert command sentence with English abbreviation",
    inputLengthType: "S",
    input: "ATM card eka tap karanna",
    expectedOutput: "ATM card එක tap කරන්න",
    accuracyJustification:
      '• The English abbreviation "ATM" remains unchanged in the output as expected.',
    whatIsCovered:
      "• Mixed Singlish + English\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0019",
    testCaseName: "Sinhala output updates automatically in real-time",
    inputLengthType: "S",
    input: "Mama nidhaaganna yanavaa",
    expectedOutput: "මම නිදාගන්න යනවා",
    accuracyJustification: "• Sentence meaning is preserved",
    whatIsCovered:
      "• Daily language usage\n• Simple sentence\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0020",
    testCaseName: "Complex sentence",
    inputLengthType: "S",
    input: "oya innavaa nam mama gedhara enavaa",
    expectedOutput: "ඔය ඉන්නවා නම් මම ගෙදර එනවා",
    accuracyJustification: "Conditional structure preserved",
    whatIsCovered:
      "• Complex sentence\n• Conditional\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0021",
    testCaseName: "Technical term",
    inputLengthType: "M",
    input: "mama laptop eka restart kalaa",
    expectedOutput: "මම laptop එක restart කලා",
    accuracyJustification: "Technical terms preserved",
    whatIsCovered:
      "• Technical terms\n• Mixed language\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0022",
    testCaseName: "Question with punctuation",
    inputLengthType: "S",
    input: "oya hari dha?",
    expectedOutput: "ඔය හරි ද?",
    accuracyJustification: "Question mark preserved",
    whatIsCovered:
      "• Punctuation\n• Interrogative\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0023",
    testCaseName: "Convert mixed-language polite request sentence",
    inputLengthType: "S",
    input: "mata oya cake eka balanna puluvandha?",
    expectedOutput: "මට ඔය cake එක බලන්න පුලුවන්ද?",
    accuracyJustification:
      "• The system correctly converts the mixed Sinhala–English Singlish sentence into Sinhala.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Interrogative (request)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Pos_Fun_0024",
    testCaseName: "Convert a past tense sentence with time reference",
    inputLengthType: "M",
    input: "api pereedhaa aachchiva balanna giyaa",
    expectedOutput: "අපි පෙරේදා ආච්චිව බලන්න ගියා",
    accuracyJustification: "• The past tense meaning is accurately preserved",
    whatIsCovered:
      "• Daily language usage\n• Past tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_UI_0001",
    testCaseName: "Convert imperative command sentence",
    inputLengthType: "S",
    input: "dhaen meeka karanna",
    expectedOutput: "දැන් මේක කරන්න",
    accuracyJustification:
      "• The system correctly converts the Singlish imperative command into Sinhala.",
    whatIsCovered:
      "• Daily language usage\n• Imperative (command)\n• M (31–299 characters)\n• Accuracy validation",
  },
];

/**
 * All 10 Negative Test Cases
 */
export const negativeTestCases: TestCase[] = [
  {
    tcId: "Neg_Fun_0001",
    testCaseName: "Handle unsupported chat-style slang",
    inputLengthType: "S",
    input: "thx machan aavata",
    expectedOutput: "තෑන්ක්ස් මචන් ආවට",
    accuracyJustification:
      "• The system does not correctly process chat-style abbreviations.",
    whatIsCovered:
      "• Slang / informal language\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0002",
    testCaseName: "Numeric Suffix Handling",
    inputLengthType: "S",
    input: "mama 1990di upanne",
    expectedOutput: "මම 1990දී උපන්නේ",
    accuracyJustification:
      "• The system fails to accurately convert misspelled Singlish words",
    whatIsCovered:
      "• Typographical error handling\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0003",
    testCaseName: "Case Sensitivity (Retroflex Letters)",
    inputLengthType: "S",
    input: "mata pata penne na",
    expectedOutput: "මාට පාට පෙන්නේ නෑ",
    accuracyJustification:
      "• The system fails to accurately convert misspelled Singlish words.",
    whatIsCovered:
      "• Typographical error handling\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0004",
    testCaseName: "Repetitive Emphasis with Slang Exclamation",
    inputLengthType: "S",
    input: "haiyooo eyaa eka kaalaa",
    expectedOutput: "හයියෝ එයා ඒක කාලා",
    accuracyJustification:
      '• "haiyooo" is an exclamatory slang interjection (similar to "oh no!"/"wow!") that may not be in formal dictionaries.',
    whatIsCovered:
      "• Slang / informal language\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0005",
    testCaseName: "Mixed Language with Nonsense Words and Symbols",
    inputLengthType: "S",
    input: "blorch g@rble 123% mama",
    expectedOutput: "බ්ලෝර්ච් ග@ර්බ්ල් 123% මම",
    accuracyJustification:
      '• "blorch g@rble 123% mama" begins with nonsense English-like words',
    whatIsCovered:
      "• Typographical error handling / Mixed language\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0006",
    testCaseName: "Yansaya (Combined Letters)",
    inputLengthType: "S",
    input: "vidya",
    expectedOutput: "විද්යා",
    accuracyJustification:
      '• "dya" resulted in separate characters (ඩ් + යා) instead of the combined form ද්යා.',
    whatIsCovered:
      "• Typographical error handling / Mixed language\n• simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0007",
    testCaseName: "Extreme Abbreviation and Missing Context",
    inputLengthType: "S",
    input: "koomada? yko. giiye?",
    expectedOutput: "කූමද? yko. ගියේ?",
    accuracyJustification:
      "• These abbreviations are non-standard, overly shortened even for informal Singlish.",
    whatIsCovered:
      "• Slang / informal language / Typographical error handling\n• Interrogative (question)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0008",
    testCaseName: "English Quote Handling",
    inputLengthType: "M",
    input: 'eya mata kiwwa "I will never give up" kiyala.',
    expectedOutput: 'එයා මට කිව්වා "I will never give up" කියලා.',
    accuracyJustification:
      "• The English quote within quotation marks was phonetically converted",
    whatIsCovered:
      "• Mixed Language\n• simple sentence\n• M (31–299)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0009",
    testCaseName: "Formal Letter Block",
    inputLengthType: "L",
    input:
      "Garu mahathmaya,Mata labana sathiye niwaduwak ganna puluwanda? Gedara podi hadissiyak wela thiyenawa. E nisa mata dawas 3k niwadu oni.Sthuthi,Saman.",
    expectedOutput:
      "ගරු මහත්මයා,මට ලබන සතියේ නිවාඩුවක් ගන්න පුළුවන්ද? ගෙදර පොඩි හදිස්සියක් වෙලා තියෙනවා. ඒ නිසා මට දවස් 3ක් නිවාඩු ඕනි.ස්තූතියි,සමන්.",
    accuracyJustification:
      "• The system fails to accurately convert misspelled and noisy Singlish words.",
    whatIsCovered:
      "• Typographical error handling\n• Complex / formal sentence\n• L (>300 Characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0010",
    testCaseName: "Overly Long Word Concatenation with Numerals",
    inputLengthType: "M",
    input:
      "mamageedharagiyaa2023december25eethhethapassebalannaavashyayakkarala",
    expectedOutput: "මමගීධරගියා2023දෙසැම්බර්25ඊතේහතපස්බලන්නඅවශ්යයක්කරල",
    accuracyJustification:
      '• "mamageedharagiyaa2023december25eethhethapassebalannaavashyayakkarala" is an artificially long single "word"',
    whatIsCovered:
      "• Simple sentence (though unrecognizable)\n• M (31–299 characters)\n• Robustness validation",
  },
];

/**
 * Get all test cases
 */
export function getAllTestCases(): TestCase[] {
  return [...positiveTestCases, ...negativeTestCases];
}

/**
 * Get test case by ID
 */
export function getTestCaseById(tcId: string): TestCase | undefined {
  return getAllTestCases().find((tc) => tc.tcId === tcId);
}

/**
 * Get positive test cases only
 */
export function getPositiveTestCases(): TestCase[] {
  return positiveTestCases;
}

/**
 * Get negative test cases only
 */
export function getNegativeTestCases(): TestCase[] {
  return negativeTestCases;
}
