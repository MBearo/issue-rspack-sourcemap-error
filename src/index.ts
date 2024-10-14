export const languageIdBlackList = ['markdown', 'plaintext'];
export const fileNameBlackList = ['makefile', 'dockerfile'];

function foo() { }

export function go() {
    foo()
}

export interface Foo {
    name: string
}

export type TFoo = string;
var a=1

function functionByClass() {
    console.log(111)
}
function matchCodeSnippets(source: string, target: string) {
    if (!target || !source) {
        return false;
    }
    const sourceTrim = source.replace(/\s/g, '');
    const targetTrim = target?.replace(/\s/g, '');
    return sourceTrim === targetTrim;
}


class Code {
    constructor() {
        functionByClass()
        console.log(111)
    }
    async isPasteEvent(e: any) {
        if (matchCodeSnippets("contentText", "clipboardText")) {
            return;
        }
    }
}
console.log(1)
var code = new Code()
function bbbb() {
    console.log(2)
}

bbbb()