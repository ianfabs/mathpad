const NL = '\n';
const OPS = '+-*/^';

type Transformer<I,O = I> = (i: I) => O;

// Deduplicate newline seperators
export const sanitize: Transformer<string> = text => {
        let txt = '', lastChar;
        for (let char of text) {
                if (char == NL && lastChar == NL) continue;
                txt += char, lastChar = char;
        }
        return txt;
}

export const tokenize: Transformer<string, string[]> = txt => txt.split(NL).filter(line => line != '');

export const computeLine: Transformer<string> = line => {
        try {
                return `<div>${eval(line)}</div>`;
        } catch {
                return '<em>NaN</em>'
        }
}

export const compute: Transformer<string[]> = lines => lines.map(computeLine);

export const display: Transformer<string[], string> = computedLines => computedLines.join('<br/>');