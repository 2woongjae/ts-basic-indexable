// 값이 string 인 number indexable
interface StringArray {
  [index: number]: string;
}

const sa: StringArray = {}; // 옵셔널하다
sa[100] = '백';

// 값이 string 인 string indexable
interface StringDictionary {
  [index: string]: string;
}

const sd: StringDictionary = {}; // 옵셔널하다
sd.hundred = '백';

interface StringArrayDictionary {
  [index: number]: string;
  [index: string]: string;
}

const sad: StringArrayDictionary = {};
// 당연히 옵셔널하다.
sad[100] = '백';
sad.hundred = '백';
