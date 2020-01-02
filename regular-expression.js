var regex = /hello/;
var str = 'hello world';
var resultTest = regex.test(str);
var resultExec = regex.exec(str);

console.log(resultTest);
console.log(resultExec);

// Em qualquer expressão regular, podemos usar os seguintes sinalizadores:
// g: corresponde ao padrão várias vezes
// i: torna o caso de regex insensitivo
// m: ativa o modo de várias linhas. Onde ^ e $ correspondem ao início e ao fim de toda a cadeia. Sem isso, as seqüências de várias linhas correspondem ao início e ao final de cada linha.
// u: ativa o suporte para unicode
// s: abreviação de linha única, causa o. para também corresponder caracteres de nova linha

// regex literals
console.log(`Regex literals - ${/hello/ig.test('HEllo')}`)
/// regex constructors
console.log(`Regex constructors - ${new RegExp('hello', 'ig').test('HEllo')}`);

// Character groups

// Character set [abc]
var regex = /[hc]ello/;
console.log(`Character set - ${regex.test('hello')}`);
console.log(`Character set - ${regex.test('cello')}`);
console.log(`Character set - ${regex.test('jello')}`);

// Negated character set [^abc] - It matches anything that is not enclosed in the brackets:
var regex = /[^hc]ello/;
console.log(`Negated character set - ${regex.test('hello')}`);
console.log(`Negated character set - ${regex.test('cello')}`);
console.log(`Negated character set - ${regex.test('jello')}`);

// Ranges [a-z]
var regex = /[a-z]ello/;
console.log(`Ranges [a-z] - ${regex.test('hello')}`);
console.log(`Ranges [a-z] - ${regex.test('cello')}`);
console.log(`Ranges [a-z] - ${regex.test('jello')}`);

// Se houver pelo menos um caractere no intervalo que testamos, ele retornará true:
console.log(/[a-z]/.test('a'))  // true
console.log(/[a-z]/.test('1'))  // false
console.log(/[a-z]/.test('A'))  // false (as our range is in lower case)
console.log(/[a-c]/.test('d'))  // false
console.log(/[a-c]/.test('cd')) // true (as 'c' is in the range)

// As faixas também podem ser combinadas usando -:
console.log(/[A-Z-0-9]/.test('a')) // false
console.log(/[A-Z-0-9]/.test('1')) // true
console.log(/[A-Z-0-9]/.test('A')) // true

// Multiple range item matches
// Podemos verificar se uma string contém um ou apenas um caractere em um intervalo. Inicie a regex com ^ e termine com $:
console.log(`Multiple range item matches - ${/^[A-Z]$/.test('A')}`)  // true
console.log(`Multiple range item matches - ${/^[A-Z]$/.test('AB')}`) // false
console.log(`Multiple range item matches - ${/^[A-Z]$/.test('Ab')}`) // false
console.log(`Multiple range item matches - ${/^[A-Z-0-9]$/.test('1')}`)  // true
console.log(`Multiple range item matches - ${/^[A-Z-0-9]$/.test('A1')}`) // false

// Meta-characters
// Meta-caracteres são caracteres com um significado especial. Vamos dar uma olhada em alguns destes aqui:
// \ d: corresponde a qualquer dígito, sendo [0-9]
// \ D: corresponde a qualquer caractere que não seja um dígito, efetivamente [^ 0-9]
// \ w: corresponde a qualquer caractere alfanumérico (mais underscore), equivalente a [A-Za-z_0-9]
// \ W: corresponde a qualquer caractere não alfanumérico; portanto, qualquer coisa, exceto [^ A-Za-z_0-9]
// \ s: corresponde a qualquer caractere de espaço em branco: espaços, guias, novas linhas e espaços Unicode
// \ S: corresponde a qualquer caractere que não seja um espaço em branco
// \ 0: corresponde a nulo
// \ n: corresponde a um caractere de nova linha
// \ t: corresponde a um caractere de tabulação
// \ uXXXX: corresponde a um caractere unicode com o código XXXX (requer o sinalizador u)
// .: corresponde a qualquer caractere que não seja um caractere de nova linha (por exemplo, \ n) (a menos que você use o sinalizador s, explicado posteriormente)
// [^]: corresponde a qualquer caractere, incluindo caracteres de nova linha. É muito útil em strings de várias linhas

console.log(`Meta-characters \ d - ${/\d/.test("AAA123456789")}`);
console.log(`Meta-characters \D - ${/\D/.test("123")}`);
console.log(`Meta-characters \w - ${/\w/.test("ABCDEFG_12345")}`);
console.log(`Meta-characters \W - ${/\W/.test("+++++")}`);
console.log(`Meta-characters \s - ${/\s/.test("caractere de espaço em branco")}`);
console.log(`Meta-characters \S - ${/\S/.test(" ")}`);
console.log(`Meta-characters \0 - ${/\0/.test("")}`);