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
 * All 25 Positive Test Cases
 */
export const positiveTestCases: TestCase[] = [
  {
    tcId: "Pos_Fun_0001",
    testCaseName: "Sinhala output updates automatically in real-time",
    inputLengthType: "S",
    input: "Mama nidhaaganna yanavaa",
    expectedOutput: "මම නිදාගන්න යනවා",
    actualOutput: "මම නිදාගන්න යනවා",
    status: "Pass",
    accuracyJustification:
      "• Sentence meaning is preserved\n• Sinhala spelling and punctuation are correct.\n• Sinhala output appears in real-time conversion",
    whatIsCovered:
      "• Daily language usage\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0002",
    testCaseName:
      "Long mixed-language input with slang + typo causes incorrect conversion",
    inputLengthType: "M",
    input:
      "Mama school gihin aevilla, eeka passe oyaata call ekak aragena hariyata kiyannam, eeka avashYA dheyak nam mama eeka balalaa hondhatama kiyala dhennan haridha?",
    expectedOutput:
      "මම school ගිහින් ඇවිල්ල, ඒක පස්සෙ ඔයාට call එකක් අරගෙන හරියට කියන්නම්, ඒක අවශ්ය දෙයක් නම් මම ඒක බලලා හොන්දටම කියල දෙන්නන් හරිද?",
    actualOutput:
      "මම school ගිහින් ඇවිල්ල, ඒක පස්සෙ ඔයාට call එකක් අරගෙන හරියට කියන්නම්, ඒක අවශ්ය දෙයක් නම් මම ඒක බලලා හොන්දටම කියල දෙන්නන් හරිද?",
    status: "Pass",
    accuracyJustification:
      "• The compound sentence meaning is correctly preserved in the Sinhala output.\n• Both joined ideas (going to school and informing later by calling) are clearly and accurately converted.\n• Key functional words such as \"school\", \"call\", and \"hariyata\" are handled correctly.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Compound structure\n• M (31–299 characters)\n• Robustness validation",
  },
  {
    tcId: "Pos_Fun_0003",
    testCaseName: "Convert complex sentence with cause and effect",
    inputLengthType: "M",
    input: "mata thuvaala vune maava accident vuna nisaa.",
    expectedOutput: "මට තුවාල වුනෙ මාව accident වුන නිසා.",
    actualOutput: "මට තුවාල වුනෙ මාව accident වුන නිසා.",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the Singlish input into meaningful Sinhala output.\n• The complex sentence structure is maintained without breaking the meaning.\n• The cause-and-effect relationship (“accident vuna nisaa”) is accurately preserved.",
    whatIsCovered:
      "• Daily language usage\n• Complex sentence\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0004",
    testCaseName: "Convert interrogative sentence with additional request",
    inputLengthType: "S",
    input: "oyaa edhdhi eekath aragena enavadha?",
    expectedOutput: "ඔයා එද්දි ඒකත් අරගෙන එනවද?",
    actualOutput: "ඔයා එද්දි ඒකත් අරගෙන එනවද?",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the interrogative Singlish sentence into Sinhala.\n• The question intent is clearly preserved with the correct use of a question mark.\n• The additional request element (“eekath aragena”) is accurately translated without losing meaning.",
    whatIsCovered:
      "• Daily language usage\n• Interrogative (question)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0005",
    testCaseName: "Convert imperative command sentence",
    inputLengthType: "S",
    input: "dhaen meeka karanna",
    expectedOutput: "දැන් මේක කරන්න",
    actualOutput: "දැන් මේක කරන්න",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the Singlish imperative command into Sinhala.\n• The command intent (“do this now”) is clearly preserved in the output.\n• Sinhala grammar and word order remain natural and understandable.",
    whatIsCovered:
      "• Daily language usage\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0006",
    testCaseName: "Convert positive future intent sentence",
    inputLengthType: "S",
    input: "mama eeka haridha balannam",
    expectedOutput: "මම ඒක හරිද බලන්නම්",
    actualOutput: "මම ඒක හරිද බලන්නම්",
    status: "Pass",
    accuracyJustification:
      "• The future intent expressed by “balannam” is accurately preserved in the output.\n• The positive sentence form is maintained without introducing negation or ambiguity.\n• Sinhala grammar, tense usage, and word order remain natural and clear.",
    whatIsCovered:
      "• Daily language usage\n• Future tense (positive form)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0007",
    testCaseName: "Convert negative past tense sentence",
    inputLengthType: "S",
    input: "mata eeka balanna baeri vunaa",
    expectedOutput: "මට ඒක බලන්න බැරි වුනා",
    actualOutput: "මට ඒක බලන්න බැරි වුනා",
    status: "Pass",
    accuracyJustification:
      "• The negation expressed by “baeri vunaa” (unable to do) is accurately preserved.\n• The past tense form is correctly maintained without changing the meaning.\n• The system correctly converts the negative Singlish sentence into Sinhala.",
    whatIsCovered:
      "• Daily language usage\n• Negation (negative form)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0008",
    testCaseName: "Convert greeting with exclamatory wish",
    inputLengthType: "S",
    input: "suba guru dhinayak veevaa!",
    expectedOutput: "සුබ ගුරු දිනයක් වේවා!",
    actualOutput: "සුබ ගුරු දිනයක් වේවා!",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the Singlish greeting into Sinhala.\n• The exclamatory tone is maintained with the correct use of the exclamation mark.\n• The positive wish and greeting intent are accurately preserved in the output.",
    whatIsCovered:
      "• Greeting / request / response\n• Simple sentence (exclamatory greeting)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0009",
    testCaseName: "Convert mixed-language polite request sentence",
    inputLengthType: "S",
    input: "mata oya cake eka balanna puluvandha?",
    expectedOutput: "මට ඔය cake එක බලන්න පුලුවන්ද?",
    actualOutput: "මට ඔය cake එක බලන්න පුලුවන්ද?",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the mixed Sinhala–English Singlish sentence into Sinhala.\n• The polite request intent expressed by “puluvandha?” is clearly preserved.\n• The English word “cake” is retained appropriately without affecting the sentence meaning.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Interrogative (request)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Pos_Fun_0010",
    testCaseName: "Convert compound informal response with future intent",
    inputLengthType: "S",
    input: "inna, mama pennannam",
    expectedOutput: "ඉන්න, මම පෙන්නන්නම්",
    actualOutput: "ඉන්න, මම පෙන්නන්නම්",
    status: "Pass",
    accuracyJustification:
      "• The comma-separated compound structure is preserved in the output.\n• Punctuation is handled correctly without affecting the sentence meaning.\n• The system correctly converts the informal Singlish response into Sinhala.",
    whatIsCovered:
      "• Daily language usage\n• Compound sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0011",
    testCaseName: "Convert politely phrased interrogative request",
    inputLengthType: "S",
    input: "karuNaakara athana meesayen vaadivenna puluvandha?",
    expectedOutput: "කරුණාකර අතන මේසයෙන් වාඩිවෙන්න පුලුවන්ද?",
    actualOutput: "කරුණාකර අතන මේසයෙන් වාඩිවෙන්න පුලුවන්ද?",
    status: "Pass",
    accuracyJustification:
      "• The politeness marker “karuNaakara” is accurately preserved in the output.\n• The system correctly converts the politely phrased Singlish request into Sinhala.\n• The request intent expressed in an interrogative form is clearly maintained.",
    whatIsCovered:
      "• Greeting / request / response\n• Interrogative (polite request)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0012",
    testCaseName: "Convert informal slang request with colloquial phrasing",
    inputLengthType: "S",
    input: "machan ooka mata dhiyan",
    expectedOutput: "මචන් ඕක මට දියන්",
    actualOutput: "මචන් ඕක මට දියන්",
    status: "Pass",
    accuracyJustification:
      "• The informal request meaning is correctly preserved\n• Sinhala spelling is accurate\n• Colloquial tone (\"machan\") is appropriately maintained",
    whatIsCovered:
      "• Slang / informal language\n• Imperative (command)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Pos_Fun_0013",
    testCaseName: "Convert a common day-to-day expression of extreme hunger",
    inputLengthType: "S",
    input: "mata maara badaginiyi",
    expectedOutput: "මට මාර බඩගිනියි",
    actualOutput: "මට මාර බඩගිනියි",
    status: "Pass",
    accuracyJustification:
      "• The expression meaning is accurately preserved.\n• The emphatic/exaggerated tone (\"maara\" - very/extremely) is maintained\n• Common conversational phrasing is correctly converted",
    whatIsCovered:
      "• Daily language usage\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0014",
    testCaseName:
      "Convert a multi-word expression combining motion and eating",
    inputLengthType: "S",
    input: "gihinma kanavaa",
    expectedOutput: "ගිහින්ම කනවා",
    actualOutput: "ගිහින්ම කනවා",
    status: "Pass",
    accuracyJustification:
      "• The multi-word expression meaning is accurately preserved\n• The combined action phrase (going and eating) is correctly converted\n• Sinhala spelling and grammar are correct.",
    whatIsCovered:
      "• Word combination / phrase pattern\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0015",
    testCaseName:
      "Convert a medium-length sentence with proper spacing and mixed English",
    inputLengthType: "M",
    input: "api heta shopping karanna kandy yanavaa",
    expectedOutput: "අපි හෙට shopping කරන්න kandy යනවා",
    actualOutput: "අපි හෙට shopping කරන්න kandy යනවා",
    status: "Pass",
    accuracyJustification:
      "• The sentence meaning is accurately preserved.\n• English terms (\"shopping\", \"Kandy\") are appropriately retained\n• Proper spacing maintains readability and correct conversion",
    whatIsCovered:
      "• Mixed Singlish + English\n• Future tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0016",
    testCaseName: "Convert repeated word expression for emphasis",
    inputLengthType: "S",
    input: "yan yan",
    expectedOutput: "යන් යන්",
    actualOutput: "යන් යන්",
    status: "Pass",
    accuracyJustification:
      "• The repeated word pattern is accurately preserved.\n• The emphatic repetition structure is maintained.\n• Both instances of the word are correctly converted",
    whatIsCovered:
      "• Word combination / phrase pattern\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0017",
    testCaseName: "Convert a past tense sentence with time reference",
    inputLengthType: "M",
    input: "api pereedhaa aachchiva balanna giyaa",
    expectedOutput: "අපි පෙරේදා ආච්චිව බලන්න ගියා",
    actualOutput: "අපි පෙරේදා ආච්චිව බලන්න ගියා",
    status: "Pass",
    accuracyJustification:
      "• The past tense meaning is accurately preserved\n• Time reference (\"pereedhaa\" - last year) is correctly converted.\n• The past action (\"giya\" - went) is appropriately maintained",
    whatIsCovered:
      "• Daily language usage\n• Past tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0018",
    testCaseName:
      "Convert multi-sentence input with multiple embedded English technical and brand terms",
    inputLengthType: "M",
    input:
      "mama email ekak dhaemma. oyaa eeka haridha vaeradhidha kiyala adha raeta kalin mata kiyanna haridha? eeka balalaa mama heta boss ta whatsapp karannam.",
    expectedOutput:
      "මම email එකක් දැම්ම. ඔයා ඒක හරිද වැරදිද කියල අද රැට කලින් මට කියන්න හරිද? ඒක බලලා මම හෙට boss ට whatsapp කරන්නම්.",
    actualOutput:
      "මම email එකක් දැම්ම. ඔයා ඒක හරිද වැරදිද කියල අද රැට කලින් මට කියන්න හරිද? ඒක බලලා මම හෙට boss ට whatsapp කරන්නම්.",
    status: "Pass",
    accuracyJustification:
      "• English technical/brand terms (\"email\", \"WhatsApp\", \"boss\") are appropriately retained\n• Sentence structure and punctuation are correctly maintained\n• The request form and conditional phrasing are accurately converted",
    whatIsCovered:
      "• Mixed Singlish + English\n• Interrogative (question)\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0019",
    testCaseName: "Convert command sentence with English abbreviation",
    inputLengthType: "S",
    input: "ATM card eka tap karanna",
    expectedOutput: "ATM card එක tap කරන්න",
    actualOutput: "ATM card එක tap කරන්න",
    status: "Pass",
    accuracyJustification:
      "• The English abbreviation “ATM” remains unchanged in the output as expected.\n• The English word “card” is preserved without unnecessary translation.\n• The system correctly converts the Singlish command into Sinhala.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0020",
    testCaseName: "Convert a sentence containing currency format",
    inputLengthType: "S",
    input: "mee sapaththu dheka Rs. 5000",
    expectedOutput: "මේ සපත්තු දෙක Rs. 5000",
    actualOutput: "මේ සපත්තු දෙක Rs. 5000",
    status: "Pass",
    accuracyJustification:
      "• The sentence meaning is accurately preserved\n• Currency format (\"Rs. 5000\") is appropriately retained unchanged.\n• Both instances of the word are correctly converted",
    whatIsCovered:
      "• Punctuation / numbers\n• Simple sentence\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0021",
    testCaseName:
      "Convert a sentence with time format and English abbreviations",
    inputLengthType: "S",
    input: "mata heta 6.00 P.M DS lecturers thiyenavaa",
    expectedOutput: "මට හෙට 6.00 P.M DS lecturers තියෙනවා",
    actualOutput: "මට හෙට 6.00 P.M DS lecturers තියෙනවා",
    status: "Pass",
    accuracyJustification:
      "• The sentence meaning is accurately preserved\n• Time format (\"6.00 P.M\") is appropriately retained\n• English abbreviations (\"P.M\", \"DS\") are correctly maintained",
    whatIsCovered:
      "• Punctuation / numbers\n• Future tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0022",
    testCaseName: "Convert a past tense sentence with ISO date format",
    inputLengthType: "M",
    input: "2026-01-10 mama kaaryYAalayen nivaadu gaththaa.",
    expectedOutput: "2026-01-10 මම කාර්ය්යාලයෙන් නිවාඩු ගත්තා.",
    actualOutput: "2026-01-10 මම කාර්ය්යාලයෙන් නිවාඩු ගත්තා.",
    status: "Pass",
    accuracyJustification:
      "• The past tense meaning is accurately preserved\n• ISO date format (\"2026-01-10\") is appropriately retained unchanged\n• The past action is correctly converted",
    whatIsCovered:
      "• Punctuation / numbers\n• Past tense\n• M (31–299 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_Fun_0023",
    testCaseName: "Convert an informal question with English slang term",
    inputLengthType: "S",
    input: "bro oyaa mokadha karanne?",
    expectedOutput: "bro ඔයා මොකද කරන්නේ?",
    actualOutput: "bro ඔයා මොකද කරන්නේ?",
    status: "Pass",
    accuracyJustification:
      "• The informal question meaning is accurately preserved\n• English slang term (\"bro\") is appropriately retained\n• Question mark is maintained",
    whatIsCovered:
      "• Slang / informal language\n• Interrogative (question)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Pos_Fun_0024",
    testCaseName:
      "Convert a long sports-related paragraph with multiple sentences",
    inputLengthType: "L",
    input:
      "engalantha kandaayama samaga paevaethvena thunveni ekdhina krikat tharagayeedhi siya mangala shathakaya vaartha kiriimata pavan rathnaayaka samath vunaa. ee anuva ohu eya pandhu 104 kadhi labagaththeeya.",
    expectedOutput:
      "එන්ගලන්ත කන්ඩායම සමග පැවැත්වෙන තුන්වෙනි එක්දින ක්රිකට් තරගයේදි සිය මන්ගල ශතකය වාර්ත කිරීමට පවන් රත්නායක සමත් වුනා. ඒ අනුව ඔහු එය පන්දු 104 කදි ලබගත්තේය.",
    actualOutput:
      "එන්ගලන්ත කන්ඩායම සමග පැවැත්වෙන තුන්වෙනි එක්දින ක්රිකට් තරගයේදි සිය මන්ගල ශතකය වාර්ත කිරීමට පවන් රත්නායක සමත් වුනා. ඒ අනුව ඔහු එය පන්දු 104 කදි ලබගත්තේය.",
    status: "Pass",
    accuracyJustification:
      "• Complex sentence structure with proper names is maintained\n• The paragraph meaning is accurately preserved across both sentences\n• Past tense narrative is accurately handled",
    whatIsCovered:
      "• Daily language usage\n• Past tense\n• L (≥300 characters)\n• Accuracy validation",
  },
  {
    tcId: "Pos_UI_0001",
    testCaseName: "Convert imperative command sentence",
    inputLengthType: "S",
    input: "dhaen meeka karanna",
    expectedOutput: "දැන් මේක කරන්න",
    actualOutput: "දැන් මේක කරන්න",
    status: "Pass",
    accuracyJustification:
      "• The system correctly converts the Singlish imperative command into Sinhala.\n• The command intent (“do this now”) is clearly preserved in the output.\n• Sinhala grammar and word order remain natural and understandable.",
    whatIsCovered:
      "• Daily language usage\n• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation",
  },
];

/**
 * All 10 Negative Test Cases
 */
export const negativeTestCases: TestCase[] = [
  {
    tcId: "Neg_Fun_0001",
    testCaseName: "Convert joined words without spaces to test robustness",
    inputLengthType: "S",
    input: "apiraeetakannapaangenaavaa",
    expectedOutput: "අපි රෑට කන්න පාන් ගෙනාවා",
    actualOutput: "අපිරෑටකන්නපාන්ගෙනාවා",
    status: "Fail",
    accuracyJustification:
      "• The system fails to segment the joined words correctly\n• Without spaces, the transliteration engine cannot identify word boundaries\n• The lack of spacing causes incorrect or incomplete conversion",
    whatIsCovered:
      "• Formatting (spaces / line breaks / paragraph)\n• Past tense\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0002",
    testCaseName: "Mixed-Language Slang with English Command",
    inputLengthType: "S",
    input: "supiri kellanee, let’s go shopping",
    expectedOutput: "සුපිරි කෙල්ලනේ, let’s go shopping",
    actualOutput: "සුපිරි කෙල්ලනේ, let’ස් go shopping",
    status: "Fail",
    accuracyJustification:
      "• \"supiri kellanee\" is informal Sinhala slang meaning \"cool, let's go\"\n• \"let’s go shopping\" is a complete English phrase\n• The abrupt language switch mid-sentence can confuse language detection algorithms.",
    whatIsCovered:
      "• Mixed Singlish + English\n• Compound structure\n• M (31–299 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0003",
    testCaseName: "Handle misspelled Singlish input",
    inputLengthType: "S",
    input: "mam heta mehen pitath vela gedhara yanava.",
    expectedOutput: "මම හෙට මෙහෙන් පිටත් වෙලා ගෙදර යනවා",
    actualOutput: "mam හෙට මෙහෙන් පිටත් වෙල ගෙදර යනව.",
    status: "Fail",
    accuracyJustification:
      "• The system fails to accurately convert misspelled Singlish words.\n• Incorrect spelling leads to improper Sinhala transliteration..\n• Sentence meaning is partially lost due to typographical errors.",
    whatIsCovered:
      "• Typographical error handling\n• Simple sentence\n• M (31–299 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0004",
    testCaseName: "Handle unsupported chat-style slang",
    inputLengthType: "S",
    input: "thx machan aavata",
    expectedOutput: "තෑන්ක්ස් මචන් ආවට",
    actualOutput: "තx මචන් ආවට",
    status: "Fail",
    accuracyJustification:
      "• The system does not correctly process chat-style abbreviations..\n• Informal slang is not supported by the transliteration rules..\n• Output does not fully reflect the intended meaning.",
    whatIsCovered:
      "• Slang / informal language\n• imple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0005",
    testCaseName: "Repetitive Emphasis with Slang Exclamation",
    inputLengthType: "S",
    input: "haiyooo eyaa eka kaalaa",
    expectedOutput: "හයියෝ එයා ඒක කාලා",
    actualOutput: "හෛයෝඔ එයා එක කාලා",
    status: "Fail",
    accuracyJustification:
      "• \"haiyooo\" is an exclamatory slang interjection (similar to \"oh no!\"/\"wow!\") that may not be in formal dictionaries.\n• \"eyaa eka kaalaa\" uses repetition (\"eyaa\" = that, \"eka\" = one, \"kaalaa\" = time) for emphasis, which might confuse word-sense disambiguation\n• Informal exclamations are often context-dependent and may not translate directly.",
    whatIsCovered:
      "• Slang / informal language\n• Simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0006",
    testCaseName: "Polite Request with Duplicate Punctuation",
    inputLengthType: "S",
    input: "KARUNAkarala heta enavada??",
    expectedOutput: "කරුනාකරලා හෙට එනවද??",
    actualOutput: "ඛRඋණකරල හෙට එනවඩ??",
    status: "Fail",
    accuracyJustification:
      "• The system might incorrectly interpret the tense:Treat it as purely future (\"Will you come later?\").\n• KARUNAkarala\" uses inconsistent capitalization (uppercase start, lowercase middle\n• \"heta enavada??\" ends with two question marks, which is non-standard punctuation",
    whatIsCovered:
      "• Typographical error handling / Punctuation\n• Interrogative (question)\n• S (≤30 characters)\n• Accuracy validation",
  },
  {
    tcId: "Neg_Fun_0007",
    testCaseName: "Mixed Language with Nonsense Words and Symbols",
    inputLengthType: "S",
    input: "blorch g@rble 123% mama",
    expectedOutput: "බ්ලෝර්ච් ග@ර්බ්ල් 123% මම",
    actualOutput: "බ්ලොර්ච් g@ර්බ්ලෙ 123% මම",
    status: "Fail",
    accuracyJustification:
      "• \"blorch g@rble 123% mama\" begins with nonsense English-like words\n• Contains special symbols @ and % not used in Singlish\n• This input has no coherent meaning and should not translate meaningfully.",
    whatIsCovered:
      "• Typographical error handling / Mixed language\n• Simple sentence\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0008",
    testCaseName: "Extreme Abbreviation and Missing Context",
    inputLengthType: "S",
    input: "koomada? yko. giiye?",
    expectedOutput: "කූමද? yko. ගියේ?",
    actualOutput: "කෝමඩ? ය්කො. ගීයෙ?",
    status: "Fail",
    accuracyJustification:
      "• These abbreviations are non-standard, overly shortened even for informal Singlish.\n• Missing spaces and extreme compression remove linguistic cues needed for translation\n• Expected failure modes:\nInability to recognize abbreviations\nOutput that is garbled or incomplete",
    whatIsCovered:
      "• Slang / informal language / Typographical error handling\n• Interrogative (question)\n• S (≤30 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0009",
    testCaseName: "Overly Long Word Concatenation with Numerals",
    inputLengthType: "M",
    input:
      "mamageedharagiyaa2023december25eethhethapassebalannaavashyayakkarala",
    expectedOutput: "මමගීධරගියා2023දෙසැම්බර්25ඊතේහතපස්බලන්නඅවශ්යයක්කරල",
    actualOutput: "මමගේදරගියා2023december25ඒත්හෙතපස්සෙබලන්නාවශ්යයක්කරල",
    status: "Fail",
    accuracyJustification:
      "• \"mamageedharagiyaa2023december25eethhethapassebalannaavashyayakkarala\" is an artificially long single \"word\" with:\nNo spaces between words\nEmbedded date \"2023december25\"\nMultiple thoughts concatenated.\n• The input length (≈60 chars) as one token exceeds normal word boundary detection\n• Embedded numerals and English month name disrupt Singlish parsing",
    whatIsCovered:
      "• Typographical error handling / Mixed language\n• Simple sentence (though unrecognizable)\n• M (31–299 characters)\n• Robustness validation",
  },
  {
    tcId: "Neg_Fun_0010",
    testCaseName:
      "Extremely Long Paragraph with Mixed Scripts, Symbols, and Inconsistent Spacing",
    inputLengthType: "L",
    input:
      "mama gedhara yanavaa 2025-12-01 @Colombo api kathaa karamu but sometimes mata email karanna kiyala kiyavala example@gmail.com 2+2=4 zoom.lk WiFi naa connection 😅 ahh ehema hariyata karanna baee oyaa enava dha? lamai school giya dha dha naa mama dhaen vahina naa api passe balamu karanna baee mata udhav karanna puLuvan dha? $$$ Rs.5000 only urgent!!! heta enava dha???",
    expectedOutput:
      "මම ගෙදර යනවා 2025-12-01 @Colombo අපි කතා කරමු but sometimes මට email කරන්න කියල කියවල example@gmail.com 2+2=4 zoom.ල්ක් WiFi නැ connection 😅 අහ්හ් එහෙම හරියට කරන්න බෑ ඔයා එනව ද? ලමයි school ගිය ද ද නා මම දැන් වහින නැ අපි ද???එ බලමු කරන්න බෑ මට උදව් කරන්න පුළුවන් ද? $$$ Rs.5000 only urgent!!! හෙට එනව ද???",
    actualOutput:
      "මම ගෙදර යනවා 2025-12-01 @Colombo අපි කතා කරමු but sometimes මට email කරන්න කියල කියවල example@gmail.com 2+2=4 zoom.ල්ක් WiFi නා connection 😅 අහ්හ් එහෙම හරියට කරන්න බෑ ඔයා එනව ද? ලමෛ school ගිය ද ද නා මම දැන් වහින නා අපි පස්සෙ බලමු කරන්න බෑ මට උදව් කරන්න පුළුවන් ද? $$$ Rs.5000 only urgent!!! හෙට එනව ද???",
    status: "Fail",
    accuracyJustification:
      "• Contains mixed scripts (Sinhala, English, numerals, symbols).\n• Includes non-linguistic elements (URLs, email, math expressions, emoji-like symbols)\n• Has inconsistent spacing (double spaces, no spaces, tabs)",
    whatIsCovered:
      "• Mixed Singlish + English / Punctuation / Formatting\n• Compound sentence\n• L (≥ 300 characters)\n• Robustness validation",
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
