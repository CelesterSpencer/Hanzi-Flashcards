export default `
	Chunks = chunk:Chunk+ {
        return chunk;
    }

    Chunk = chunk:(Divider / Word) (WS)? {
        return chunk;
    }

    Word = word:[^ ,\\.!?/0-9]+ tone:[1-5]? {
        let result = '';
        for (var i = 0; i < word.length; i++) {
            result += word[i];
        }
        if(tone) result += tone;
        return {
            content: result,
            type: 'word'
        };
    }

    Divider = divider:SYMS+ {
        let result = '';
        for (var i = 0; i < divider.length; i++) {
            result += divider[i];
        }
        return {
            content: result,
            type: 'divider'
        };
    }

    SYMS = [,\\.!?/]

    WS = [ \\t\\n\\r]*
`