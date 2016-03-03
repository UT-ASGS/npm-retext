import * as retext from "retext";
var cliches = require("retext-cliches");
var sentiment = require('retext-sentiment');

// Using pieces of the examples to see if everything is working for the definitions

let s = [
    'You can use cliches until the until the cows come home.',
    'Sorry to burst your bubble',
    'but you will sound like a broken record.',
].join('\n');

retext().use(cliches).process(s, (err: Error, file: retext.unified.VFile) => console.log(file.messages.map(q => q.message)));

let p: retext.unified.Processor = retext();
p.use(sentiment)
    .use(() => (cst) => console.log(cst.children[0].children.map(w => ((w.data || {})["polarity"] || "unknown"))))
    .process(['I hate forgetting to bring a book somewhere I ', 'definitely should have brought a book to. ', 'This product is not bad at all. ', 'Hai sexy! \ud83d\ude0f'].join('\n'));
