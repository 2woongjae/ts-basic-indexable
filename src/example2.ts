interface NameAndOptional {
  [index: string]: string;
  name: string;
}

const optional: NameAndOptional = {
  name: '이름' // 필수
};

optional.any = 'any'; // 어떤 프로퍼티도 가능

interface Optional {
  [index: string]: string;
  // name: number; // (X) 인덱서블 타입이 string 값을 가지기 때문에 number 를 필수로 끌어오면 에러
}
