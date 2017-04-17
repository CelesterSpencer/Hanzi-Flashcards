export default `
    pinyin = chars:Chars tone:(Tone)? {
        return {
            chars: chars,
            tone: (tone) ? tone : 5
        };
    }

    Chars = char:Char+ {
        let result = '';
        for(var i = 0; i < char.length; i++) {
            result += char[i];
        }
        return result;
    }

    Char = [a-zA-Z]

    Tone = [1-5]
`