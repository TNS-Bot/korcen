export function foreign(text: string | any): boolean {
    if (!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()


    text = newtext.replace(/[^a-z]/gi, '')
    const foreign = ['2 girls 1 cup', '2g1c', '4r5e', '5h1t', '5hit', 'a$$hole', 'a_s_s', 'a55hole', 'acrotomophilia', 'ahole', 'alabama hot pocket'
        , 'alaskan pipeline', 'anal', 'anal impaler', 'anal leakage', 'analprobe', 'anilingus', 'apeshit', 'ar5e', 'arrse', 'arse', 'arsehole', 'ass fuck'
        , 'ass hole', 'assbag', 'assbandit', 'assbang', 'assbanged', 'assbanger', 'assbangs', 'assbite', 'assclown', 'asscock', 'asscracker', 'asses'
        , 'assface', 'assfaces', 'assfuck', 'assfucker', 'ass-fucker', 'assfukka', 'assgoblin', 'assh0le', 'asshat', 'ass-hat', 'asshead', 'assho1e'
        , 'asshole', 'assholes', 'asshopper', 'ass-jabber', 'assjacker', 'asslick', 'asslicker', 'assmaster', 'assmonkey', 'assmucus', 'assmucus'
        , 'assmunch', 'assmuncher', 'assnigger', 'asspirate', 'ass-pirate', 'assshit', 'assshole', 'asssucker', 'asswad', 'asswhole', 'asswipe'
        , 'asswipes', 'auto erotic', 'autoerotic', 'axwound', 'azazel', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'baby batter', 'baby juice', 'ball gag'
        , 'ball gravy', 'ball licking', 'ball sack', 'ball sucking', 'ballbag', 'ballsack', 'bampot', "bang (one's) box", 'bangbros', 'barely legal'
        , 'barenaked', 'barf', 'bastard', 'bastardo', 'bastards', 'bastinado', 'batty boy', 'bdsm', 'beaner', 'beaners', 'beardedclam', 'beastial'
        , 'beastiality', 'beatch', 'beaver cleaver', 'beaver lips', 'beef curtain', 'beef curtains', 'beeyotch', 'bellend', 'beotch', 'bescumber'
        , 'bestial', 'bestiality', 'bi+ch', 'biatch', 'big knockers', 'big tits', 'bigtits', 'bimbo', 'bimbos', 'bint', 'birdlock', 'bitch', 'bitch tit'
        , 'bitchass', 'bitched', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bitchtits', 'bitchy', 'black cock', 'bloodclaat', 'blow job'
        , 'blow me', 'blow mud', 'blow your load', 'blowjob', 'blowjobs', 'blue waffle', 'blue waffle', 'blumpkin', 'boiolas', 'bollock', 'bollocks'
        , 'bollok', 'bollox', 'bondage', 'boned', 'boner', 'boners', 'bong', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'boong', 'booobs', 'boooobs'
        , 'booooobs', 'booooooobs', 'bootee', 'bootie', 'booty call', 'booze', 'boozer', 'boozy', 'bosom', 'bosomy', 'breasts', 'brotherfucker'
        , 'brown showers', 'buceta', 'bugger', 'bull shit', 'bulldyke', 'bullet vibe', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bumblefuck'
        , 'bumclat', 'bummer', 'bung', 'bung hole', 'bunghole', 'bunny fucker', 'bust a load', 'busty', 'butt fuck', 'butt plug', 'buttcheeks', 'buttfuck'
        , 'buttfucka', 'buttfucker', 'buttmuch', 'buttmunch', 'butt-pirate', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'c0cksucker'
        , 'camel toe', 'cameltoe', 'camgirl', 'camslut', 'camwhore', 'carpet muncher', 'carpetmuncher', 'cawk', 'chesticle', 'chi-chi man'
        , 'chick with a dick', 'child-fucker', 'chinc', 'chincs', 'chink', 'chinky', 'choad', 'choade', 'choade', 'choc ice', 'chocolate rosebuds'
        , 'chode', 'chodes', 'chota bags', 'chota bags', 'cipa', 'circlejerk', 'cl1t', 'cleveland steamer', 'clit', 'clit licker', 'clitface', 'clitfuck'
        , 'clitorus', 'clits', 'clitty', 'clitty litter', 'clover clamps', 'clunge', 'clusterfuck', 'cnut', 'c-o-c-k', 'cock pocket', 'cock snot'
        , 'cock sucker', 'cockass', 'cockbite', 'cockblock', 'cockburger', 'cockeye', 'cockface', 'cockfucker', 'cockhead', 'cockholster', 'cockjockey'
        , 'cockknocker', 'cockknoker', 'cocklump', 'cockmaster', 'cockmongler', 'cockmongruel', 'cockmonkey', 'cockmunch', 'cockmuncher', 'cocknose'
        , 'cocknugget', 'cockshit', 'cocksmith', 'cocksmoke', 'cocksmoker', 'cocksniffer', 'cocksuck', 'cocksuck', 'cocksucked', 'cocksucked', 'cocksucker'
        , 'cock-sucker', 'cocksuckers', 'cocksucking', 'cocksucks', 'cocksucks', 'cocksuka', 'cocksukka', 'cockwaffle', 'coital', 'cokmuncher', 'coksucka'
        , 'commie', 'coochie', 'coochy', 'coon', 'coonnass', 'coons', 'cooter', 'cop some wood', 'coprolagnia', 'coprophilia', 'corksucker', 'cornhole'
        , 'cornhole', 'corp whore', 'corp whore', 'crackwhore', 'crap', 'crappy', 'cretin', 'crikey', 'cripple', 'crotte', 'cum chugger', 'cum chugger'
        , 'cum dumpster', 'cum dumpster', 'cum freak', 'cum freak', 'cum guzzler', 'cum guzzler', 'cumbubble', 'cumdump', 'cumdump', 'cumdumpster'
        , 'cumguzzler', 'cumjockey', 'cummer', 'cummin', 'cumming', 'cums', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cumtart', 'cunilingus'
        , 'cunillingus', 'cunnie', 'cunnilingus', 'cunny', 'cunt', 'c-u-n-t', 'cunt hair', 'cunt hair', 'cuntass', 'cuntbag', 'cuntbag', 'cuntface'
        , 'cunthole', 'cunthunter', 'cuntlick', 'cuntlick', 'cuntlicker', 'cuntlicker', 'cuntlicking', 'cuntlicking', 'cuntrag', 'cunts', 'cuntsicle'
        , 'cuntsicle', 'cuntslut', 'cunt-struck', 'cunt-struck', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfuck', 'cyberfucked', 'cyberfucked'
        , 'cyberfucker', 'cyberfuckers', 'cyberfucking', 'cyberfucking', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ld0', 'd1ldo', 'dammit', 'date rape'
        , 'daterape', 'dawgie-style', 'deep throat', 'deepthroat', 'dendrophilia', 'dick', 'dick head', 'dick hole', 'dick hole', 'dick shy', 'dick shy'
        , 'dickbag', 'dickbeaters', 'dickdipper', 'dickface', 'dickflipper', 'dickfuck', 'dickfucker', 'dickhead', 'dickheads', 'dickhole', 'dickish'
        , 'dick-ish', 'dickjuice', 'dickmilk', 'dickmonger', 'dickripper', 'dicks', 'dicksipper', 'dickslap', 'dick-sneeze', 'dicksucker', 'dicksucking'
        , 'dicktickler', 'dickwad', 'dickweasel', 'dickweed', 'dickwhipper', 'dickwod', 'dickzipper', 'dildo', 'dildos', 'diligaf', 'dingleberries'
        , 'dingleberry', 'dipship', 'dipshit', 'dirty pillows', 'dirty sanchez', 'dlck', 'dog style', 'dog-fucker', 'doggie style', 'doggiestyle'
        , 'doggie-style', 'doggin', 'dogging', 'doggy style', 'doggystyle', 'doggy-style', 'dolcett', 'dominatrix', 'dommes', 'donkey punch', 'donkeypunch'
        , 'donkeyribber', 'doochbag', 'doofus', 'dookie', 'doosh', 'dopey', 'double dong', 'double penetration', 'douch3', 'douche', 'douchebag'
        , 'douchebags', 'douche-fag', 'douchewaffle', 'douchey', 'dp action', 'dry hump', 'dumass', 'dumb ass', 'dumbass', 'dumbasses', 'dumbcunt'
        , 'dumbfuck', 'dumbshit', 'dumshit', 'eat a dick', 'eat a dick', 'eat hair pie', 'eat hair pie', 'eat my ass', 'ejaculate', 'ejaculated'
        , 'ejaculates', 'ejaculates', 'ejaculating', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'erect', 'erection', 'erotic', 'erotism'
        , 'escort', 'essohbee', 'extacy', 'extasy', 'f u c k', 'f u c k e r', 'f.u.c.k', 'f_u_c_k', 'f4nny', 'fack', 'fagbag', 'fagfucker', 'fagg'
        , 'fagged', 'fagging', 'faggit', 'faggitt', 'faggot', 'faggotcock', 'faggots', 'faggs', 'fagot', 'fagots', 'fags', 'fagtard', 'faig', 'faigt'
        , 'fannybandit', 'fannyflaps', 'fannyfucker', 'fanyy', 'fartknocker', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'fecal', 'felch', 'felcher'
        , 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'female squirting', 'femdom', 'fenian', 'fingerbang', 'fingerfuck', 'fingerfuck'
        , 'fingerfucked', 'fingerfucked', 'fingerfucker', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucking', 'fingerfucks'
        , 'fingerfucks', 'fist fuck', 'fist fuck', 'fisted', 'fistfuck', 'fistfucked', 'fistfucked', 'fistfucker', 'fistfucker', 'fistfuckers'
        , 'fistfuckers', 'fistfucking', 'fistfucking', 'fistfuckings', 'fistfuckings', 'fistfucks', 'fistfucks', 'fisting', 'fisty', 'fleshflute'
        , 'flog the log', 'floozy', 'foad', 'fondle', 'fooker', 'foot fetish', 'footjob', 'foreskin', 'frotting', 'fubar', 'fuck', 'fuck', 'f-u-c-k'
        , 'fuck buttons', 'fuck hole', 'fuck hole', 'fuck off', 'fuck puppet', 'fuck puppet', 'fuck trophy', 'fuck trophy', 'fuck yo mama'
        , 'fuck yo mama', 'fuck you', 'fucka', 'fuckass', 'fuck-ass', 'fuck-ass', 'fuckbag', 'fuck-bitch', 'fuck-bitch', 'fuckboy', 'fuckbrain'
        , 'fuckbutt', 'fuckbutter', 'fucked', 'fuckedup', 'fucker', 'fuckers', 'fuckersucker', 'fuckface', 'fuckhead', 'fuckheads', 'fuckhole'
        , 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fuckme', 'fuckmeat', 'fuckmeat', 'fucknugget', 'fucknut', 'fucknutt'
        , 'fuckoff', 'fucks', 'fuckstick', 'fucktard', 'fuck-tard', 'fucktards', 'fucktart', 'fucktoy', 'fucktoy', 'fucktwat', 'fuckup', 'fuckwad'
        , 'fuckwhit', 'fuckwit', 'fuckwitt', 'fudge packer', 'fudgepacker', 'fudge-packer', 'fuker', 'fukker', 'fukkers', 'fukkin', 'fuks', 'fukwhit'
        , 'fukwit', 'futanari', 'fux0r', 'fvck', 'fxck', 'gang bang', 'gangbang', 'gang-bang', 'gang-bang', 'gangbanged', 'gangbangs', 'gassy ass'
        , 'gassy ass', 'gay sex', 'gayass', 'gaybob', 'gaydo', 'gayfuck', 'gayfuckist', 'gaysex', 'gaytard', 'gaywad', 'gender bender', 'giant cock'
        , 'gigolo', 'gippo', 'glans', 'goatcx', 'goatse', 'goddamn', 'goddamned', 'god-damned', 'goddamnit', 'godsdamn', 'gokkun', 'golden shower'
        , 'goldenshower', 'goo girl', 'goodpoop', 'gooks', 'goregasm', 'group sex', 'gspot', 'g-spot', 'gtfo', 'h0m0', 'h0mo', 'hand job', 'handjob'
        , 'hardcoresex', 'hentai', 'heroin', 'herpes', 'hobag', 'hoer', 'hom0', 'homodumbshit', 'homoerotic', 'homoey', 'honkey', 'honky', 'hooker'
        , 'hore', 'horniest', 'horny', 'hot carl', 'hot chick', 'hotsex', 'how to murdep', 'how to murder', 'humped', 'humping', 'iberian slap'
        , 'inbred', 'incest', 'intercourse', 'jack off', 'jackass', 'jackasses', 'jackhole', 'jackoff', 'jack-off', 'jail bait', 'jailbait', 'japs'
        , 'jerk', 'jerk off', 'jerk0ff', 'jerkass', 'jerked', 'jerkoff', 'jerk-off', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jism', 'jizm', 'jizm', 'jizz'
        , 'jizzed', 'jock', 'juggs', 'jungle bunny', 'junglebunny', 'kafir', 'kike', 'kikes', 'kinbaku', 'kinkster', 'knobead', 'knobed', 'knobend'
        , 'knobhead', 'knobjocky', 'knobjokey', 'kooch', 'kooches', 'kootch', 'kunilingus', 'kunt', 'kwif', 'kyke', 'l3i+ch', 'l3itch', 'labia', 'lameass'
        , 'lardass', 'leather restraint', 'leather straight jacket', 'lemon party', 'leper', 'lezza', 'lezzie', 'lolita', 'lovemaking', 'lube', 'm0f0'
        , 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'mafugly', 'mafugly', 'make me come', 'male squirting', 'masterb8', 'masterbat*', 'masterbat3'
        , 'masterbate', 'master-bate', 'master-bate', 'masterbating', 'masterbation', 'masterbations', 'masturbate', 'masturbating', 'masturbation', 'mcfagget'
        , 'menage a trois', 'meth', 'm-fucking', 'microphallus', 'milf', 'missionary position', 'mof0', 'mofo', 'mo-fo', 'molest', 'moolie', 'moron'
        , 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked', 'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking'
        , 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'mother fucker', 'motherfuck', 'motherfucka', 'motherfucked', 'motherfucker'
        , 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'mound of venus', 'muff diver', 'muff puff'
        , 'muff puff', 'muffdiver', 'muffdiving', 'murder', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nambla'
        , 'nawashi', 'need the dick', 'negro', 'nig nog', 'nigaboo', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers'
        , 'niglet', 'nig-nog', 'nimphomania', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'nonce', 'nsfw images', 'nude', 'nudity', 'numbnuts'
        , 'nut sack', 'nutsack', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 'one cup two girls', 'one guy one jar', 'opiate', 'opium', 'orgasim'
        , 'orgasims', 'orgasm', 'orgasmic', 'orgasms', 'orgies', 'orgy', 'p.u.s.s.y.', 'p0rn', 'paedophile', 'paki', 'peckerhead', 'pedobear', 'pedophile'
        , 'pedophilia', 'pedophiliac', 'peepee', 'pegging', 'penial', 'penile', 'penis', 'penisbanger', 'penisfucker', 'penispuffer', 'phallic'
        , 'phone sex', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'piece of shit', 'pigfucker', 'pillowbiter'
        , 'pimp', 'pimpis', 'piss pig', 'pissflaps', 'pisspig', 'pleasure chest', 'polack', 'pole smoker', 'polesmoker', 'pollock', 'ponyplay', 'poof'
        , 'poon', 'poonani', 'poonany', 'poontang', 'poop chute', 'poopchute', 'poopuncher', 'porch monkey', 'porchmonkey', 'porn', 'porno', 'pornography'
        , 'pornos', 'potty', 'prick', 'pricks', 'prickteaser', 'prig', 'prince albert piercing', 'pron', 'prostitute', 'pthc', 'pube', 'pubes', 'pubic'
        , 'pubis', 'punani', 'punanny', 'punany', 'puss', 'pusse', 'pussi', 'pussies', 'pussy', 'pussy fart', 'pussy fart', 'pussy palace', 'pussy palace'
        , 'pussylicking', 'pussypounder', 'pussys', 'queaf', 'queaf', 'queef', 'queerbait', 'queerhole', 'queero', 'quim', 'raghead', 'raging boner', 'rape'
        , 'raped', 'raper', 'rapey', 'raping', 'rapist', 'raunch', 'reetard', 'renob', 'retard', 'retarded', 'reverse cowgirl', 'rimjaw', 'rimjob', 'rimming'
        , 'ritard', 'rosy palm', 'rosy palm and her 5 sisters', 'rtard', 'r-tard', 'rusty trombone', 's hit', 's.h.i.t.', 's.o.b.', 's_h_i_t', 'sadism'
        , 'sadist', 'sand nigger', 'sandnigger', 'sausage queen', 'schizo', 'schlong', 'scissoring', 'scroat', 'scrog', 'scrot', 'scrote', 'scum', 'seks'
        , 'semen', 'sexo', 'sh!+', 'sh!t', 'sh1t', 's-h-1-t', 'shag', 'shagger', 'shaggin', 'shagging', 'shaved beaver', 'shaved pussy', 'shemale', 'shi+'
        , 'shibari', 'shit', 's-h-i-t', 'shit ass', 'shit fucker', 'shit fucker', 'shitass', 'shitbag', 'shitbagger', 'shitblimp', 'shitbrains', 'shitbreath'
        , 'shitcanned', 'shitcunt', 'shitdick', 'shite', 'shiteater', 'shited', 'shitey', 'shitface', 'shitfaced', 'shitfuck', 'shitfull', 'shithead'
        , 'shitheads', 'shithole', 'shithouse', 'shiting', 'shitings', 'shits', 'shitspitter', 'shitstain', 'shitt', 'shitted', 'shitter', 'shitters'
        , 'shitters', 'shittier', 'shittiest', 'shitting', 'shittings', 'shitty', 'shiz', 'shiznit', 'shota', 'skullfuck', 'slanteye', 'slave', 'slut'
        , 'slut bucket', 'slut bucket', 'slutbag', 'slutdumper', 'slutkiss', 'sluts', 'smut', 'smutty', 'snuff', 's-o-b', 'sod off', 'sodomize', 'sodomy'
        , 'son of a bitch', 'son of a motherless goat', 'son of a whore', 'son-of-a-bitch', 'splooge', 'splooge moose', 'spooge', 'spook', 'spread legs'
        , 'spunk', 'stfu', 'stiffy', 'stoned', 'strap on', 'strapon', 'strappado', 'strip club', 'style doggy', 'suckass', 'suicide girls', 'sultry women'
        , 'sumofabiatch', 't1tt1e5', 't1tties', 'taff', 'taig', 'taking the piss', 'tard', 'tea bagging', 'teabagging', 'teat', 'teets', 'teez', 'teste'
        , 'testee', 'testes', 'testical', 'testicle', 'testis', 'threesome', 'throating', 'thundercunt', 'tit wank', 'tit wank', 'titfuck', 'titi', 'tities'
        , 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'titty', 'tittyfuck', 'tittyfucker', 'tittywank', 'titwank', 'tosser', 'towelhead', 'tramp'
        , 'tranny', 'tribadism', 'tub girl', 'tubgirl', 'turd', 'tush', 'tushy', 'tw4t', 'twat', 'twathead', 'twatlips', 'twats', 'twatty', 'twatwaffle'
        , 'two fingers', 'two fingers with tongue', 'two girls one cup', 'twunt', 'twunter', 'unclefucker', 'undies', 'undressing', 'upskirt', 'urethra play'
        , 'urophilia', 'v14gra', 'v1gra', 'vagina', 'vajayjay', 'va-j-j', 'venus mound', 'veqtable', 'violet wand', 'vixen', 'vjayjay', 'vorarephilia'
        , 'vulva', 'wang', 'wank', 'wanker', 'wankjob', 'wanky', 'wazoo', 'wet dream', 'wetback', 'wh0re', 'wh0reface', 'whoar', 'whore', 'whorealicious'
        , 'whorebag', 'whored', 'whoreface', 'whorehopper', 'whorehouse', 'whores', 'whoring', 'wigger', 'window licker', 'wrinkled starfish', 'yaoi'
        , 'yeasty', 'yellow showers', 'yiffy', 'yobbo', 'zibbi', 'zoophilia', 'zubb']
    for (const i of foreign) {
        if (text.includes(i)) {
            return true;
        }
    }

    const foreign2 = ["肉便器", "糞野郎", "バカ野郎", "腐れ外道", "部落民", "中出し", "強姦", "特定アジア", "人非人", "鬼畜", "負け犬", "支那", "トルコ風呂", "淫売", "未開人"]
    for (const i of foreign2) {
        if (text.includes(i)) {
            return true;
        }
    }

    const foreign3 = ['G巴', 'Ｇ巴', 'G叭', 'Ｇ叭', 'G芭', 'Ｇ芭', 'G掰', 'Ｇ掰', 'g點', 'MM屄', 'mm美圖'
        , 'qvod成人', 'sex聊天室', 'SM後庭器具', 'SM援交', 'SM舔穴', 'sm調教', 'XIAAV論壇', 'ㄊㄇㄉ', '一本道電影', '一夜性網'
        , '一夜情論壇', '一夜情激情成人聊天室', '九九情色帝國', '九城情色', '二B', '二穴中出', '人人有色論壇', '人妻交換', '人妻色誘', '人妻做愛', '人妻榨乳'
        , '人性本色', '入穴一遊', '三唑侖', '三級激情片', '三陪', '上你幹妳', '上門按摩', '下賤', '口內爆射', '口交', '口含雞巴', '口活', '口射', '口淫', '口爆'
        , '大b', '大力抽送', '大奶美逼', '大奶騷女', '大母牛娛樂論壇', '大乳頭', '大波粉B', '大波騷婦', '大花逼', '大眾色情成人網', '大麻', '大雞巴', '大鶏巴'
        , '女尻', '女屄', '女馬ㄉ', '女馬白勺', '女馬的', '女幹', '小b', '小穴', '小姐上門全套', '小姐打飛機', '小姐裸聊', '小逼', '小嫩雞', '小騷BB', '阝月'
        , '中文搜性網', '互淫', '互舔淫穴', '內射', '公媳亂', '勾魂少婦', '午夜天堂成人', '天天干貼圖', '天天情色', '夫妻3p', '夫妻多p', '夫妻俱樂部', '夫妻亂交'
        , '少女小姐上門', '少女被插', '手淫', '日本鬼子', '日死你', '日你', '日屄', '日逼', '欠日', '欠幹', '毛鮑', '王八', '他ㄇㄉ', '他ㄇ的', '他嗎的', '他媽的'
        , '凸他', '凸她', '凸肉優', '凸你', '凸我', '凸妳', '出售冰毒', '出售曲馬多', '出售苯基丙酮', '出售海豹M9', '出售迷幻藥', '出售迷情藥', '出售氫化可的松'
        , '出售麥角醇', '出售麻古', '出售麻果配方', '出售麻黃素', '出售氯胺酮', '出售腎', '出售間苯三酚', '出售黃牙籤', '出售黃白牙籤', '出售黃麻素', '出售黃體酮'
        , '出售羥基環戊基', '出售槍支', '出售監聽王', '出售蒙汗藥', '出售鄰氯苯晴', '出售磚石冰毒', '出售鎂粉', '出售鹽酸曲馬多', '出售鹽酸曲馬多片', '出售鹽酸羥亞胺'
        , '出售鑽石冰毒', '包二奶', '去你媽的', '去氧麻黃堿製作方法', '可卡因', '叼你媽', '失身粉', '奴隷調教', '奶大屄肥', '尻', '左旋黃麻素', '巨騷', '幼交', '幼妓'
        , '幼逼', '扒穴', '扒屄', '打手槍', '打炮', '打飛機', '打野炮', '本土無碼', '母女雙飛', '母子交歡', '母子姦情', '母奸', '玉穴', '玉乳', '生小孩沒屁眼'
        , '生徒胸觸', '甲基苯丙', '甲基苯胺', '白虎小穴', '白虎少婦', '白虎美女貼圖', '白虎陰穴', '白虎嫩B', '白粉', '白液四濺', '白嫩騷婦', '白漿四濺', '穴海'
        , '穴淫', '穴爽', '穴圖', '交換夫妻', '先奸後殺', '全家死光光', '冰毒', '吃精', '吃雞巴', '合成氯胺酮', '合成鹽酸羥亞胺', '多人性愛', '多人輪', '奸幼'
        , '她馬的', '她媽的', '好色cc', '安非他命', '成人A片', '成人bt', '成人下載', '成人五月天', '成人午夜場', '成人百強', '成人自拍', '成人社區', '成人書庫'
        , '成人情色', '成人情色網站', '成人聊天室', '成人軟體', '成人黃色網站', '成人圖片', '成人圖片網站', '成人網站', '成人網站導航', '成人論壇', '成人導航'
        , '成人激情小說', '成人激情電影', '成人激情圖片', '成人激情網站', '死GM', '死全家', '江山如此多嬌txt下載', '江豬媳', '百性閣', '百鳳宮', '老少亂倫', '老師的小穴'
        , '肉穴', '肉具', '肉便器', '肉洞', '肉唇', '肉淫器吞精', '肉莖', '肉壺', '肉棍', '肉棍幹騷婦', '肉絲褲襪', '肉感炮友', '肉溝', '肉逼', '肉慾', '肉縫'
        , '肉簫', '自拍美穴', '自拍寫真', '自插小穴', '自慰摳穴', '舌頭穴', '色97愛', '色BB吧', '色色成人', '色狐狸網址', '色界論��', '色書庫', '色狼小說'
        , '色狼論壇', '色迷城', '色情工廠', '色情倚天屠龍記', '色情論壇', '色窩窩', '西班牙蒼蠅水', '你他馬的', '你他媽的', '你它馬的', '你它媽的', '你她馬的'
        , '你老母', '你娘卡好', '你麻痹', '你媽比', '你媽的', '你媽逼', '吞精', '吞精騷妹', '含屌', '吸精', '吸精少女', '吹蕭', '妓女', '妓女', '妖媚熟母', '完蛋操'
        , '屁眼', '快樂AV', '我日', '我奸', '我的性啟蒙老師', '我要官人', '我要性交', '我要性交網', '我草', '我做騷妻', '我就去色', '我幹', '我愛我色網址', '我操'
        , '我操你', '杜冷丁', '狂乳激揺', '狂插', '狂插男根膠囊', '狂插性器具', '男女交歡', '男女蒲典', '男女激情淫亂', '肛交', '肛交吹喇叭', '肛屄', '肛門拳交'
        , '肛門噴水', '走光偷拍', '足腳交', '迅雷三級影片', '那娘錯比', '那嗎B', '那嗎老比', '那嗎逼', '那嗎瘟比', '那嗎錯比', '乳尻', '乳交', '乳此絲襪', '乳射'
        , '乳爆', '乳霸', '亞洲有碼', '亞洲性交電影', '亞洲性虐', '亞洲情色網', '亞洲淫娃', '亞洲插穴圖', '供應化學冰', '供應天然咖啡因', '供應可哥精', '供應四氫吡喃酮'
        , '供應奶油冰', '供應甲基可哥堿', '供應甲基苯丙胺', '供應白冰', '供應冰糖', '供應咖啡鹼', '供應咖啡鹼', '供應青蒿素', '供應胡椒基甲基', '供應氫化可的松'
        , '供應麥角醇', '供應麻果丸子', '供應麻黃素', '供應麻穀', '供應植物冰', '供應氯胺酮', '供應無水咖啡因', '供應黃冰', '供應黃體酮', '供應罌粟殼', '供應鹽酸氯'
        , '供應鹽酸羥亞胺', '兩性淫亂地址', '制幻劑', '制服狩', '制服美婦', '制服誘惑', '叔嫂肉慾', '夜色王朝', '夜色貴族', '奇淫寶鑒', '妹妹陰毛', '妹妹騷圖', '屄'
        , '屄毛', '屄屄特寫', '性之站', '性奴', '性奴會', '性用品', '性交', '性交自拍', '性交吞精', '性交易', '性交無碼', '性交圖', '性交課', '性免費電影', '性兩'
        , '性具', '性服務', '性虎', '性虎色網', '性派對', '性虐', '性虐待', '性息', '性高潮', '性聊', '性無能', '性視頻', '性傭', '性愛', '性愛韋小寶之玩女大王'
        , '性愛淫圖', '性愛插穴', '性愛視頻下載', '性愛圖', '性愛擂臺', '性感肉絲', '性感妖嬈', '性感沙灘2', '性感乳娘', '性感誘惑', '性感騷女', '性遊戲', '性夢'
        , '性福', '性福源', '性戰擂臺', '性饑渴', '抽插', '拍肩迷藥', '拔屄', '拔屄自拍', '招妓', '招鶏', '放尿', '放蕩少婦', '放蕩少婦賓館', '放蕩熟女', '明星淫圖'
        , '明星裸體照', '東北xx網', '東京丸井買賣', '東洋屄', '松島楓迅雷下載', '波霸乳交器具', '狗b', '狗日', '狗卵子', '狗娘', '狗娘養的', '狗狼養的', '狗養'
        , '狗操', '玩穴', '玩逼', '肏', '肏屄', '肥逼', '花和尚導航', '花都逍遙鄉村春光', '花樣性交', '近親相奸', '近親相姦', '金毛穴', '金鱗豈是池中物全本', '亮穴'
        , '亮屄', '俏臀攝魄', '俗人島', '前凸後翹', '咪咪圖片', '咬著龜頭', '品穴', '品色堂', '品色堂網址', '品香堂', '哇嘎成人三級', '姦染', '姦情', '姦淫', '姦淫'
        , '姦淫電車', '姫辱', '屌人也', '屌女也', '屌他', '屌她', '屌你', '屌我', '屌妳', '帝國夜色', '挑情', '春光外瀉', '春藥', '柔陰術', '毒品出售', '毒龍舔腳'
        , '洗腸射尿', '流淫', '流蜜汁', '炮友之家', '相奸', '紅蜘蛛迷奸藥', '美女b毛圖', '美女成人', '美女吞精', '美女性交真圖', '美女面對面激情裸聊', '美女高潮'
        , '美女淫穴', '美女聊天室', '美女視頻聊天室', '美女祼聊', '美女激情視頻網', '美幼', '美穴', '美乳', '美乳美穴', '美乳鬥豔', '美臀夾陰', '美臀嫰穴', '美騷婦'
        , '美體豔姿', '胡瘟', '虐奴', '虐戀花園', '要色色', '訂購大冰磚', '訂購苯基丙酮', '訂購氯胺酮', '訂購鹽酸羥亞胺', '迫奸', '風騷欲女', '風��淫蕩', '風豔閣'
        , '食精', '香水型迷奸藥', '香煙迷藥催眠迷幻藥', '原味絲襪', '哭母', '哭爸', '唐僧和粉塵女子的性愛生活', '套弄花心', '射奶', '射爽', '射精', '射顏', '恥辱輪奸'
        , '拳交', '捏你鶏巴', '捏弄', '桃園蜜洞', '浪女', '浪叫', '浪穴', '浪婦', '浴尿', '浴室亂倫', '浴室幹騷女系列', '海洛因', '狼友', '神經病', '秘唇', '粉穴'
        , '粉屄', '粉紅穴', '胯下呻吟', '胸濤乳浪', '草你娘', '草你媽', '草你媽', '草擬媽', '迷幻藥', '迷失禦花園', '迷奸', '迷奸系列', '迷奸香水', '迷奸藥', '迷情水'
        , '迷情藥製作方法', '迷魂藥', '迷魂藥三唑侖', '迷藥', '迷藥迷情藥', '針孔偷拍', '馬白勺', '高效三唑侖', '高級逼', '高清性愛', '高潮白漿', '高潮集錦', '高麗棒子'
        , '鬼畜輪奸', '鬼輪姦', '假陽具插穴', '做愛', '做愛自拍', '做愛電影', '做愛圖片', '偷拍美穴', '偷窺圖片', '偷歡照片', '動漫色圖', '娼', '婊子', '婬亂軍團'
        , '寂寞自摸', '密穴', '密穴貼圖', '採花堂', '採花網', '梅花屄', '欲仙欲死', '欲仙欲浪', '欲海天龍傳', '殺你一家', '殺你全家', '淩辱', '淫B', '淫女', '淫水'
        , '淫叫', '淫奴', '淫母', '淫汁', '淫穴', '淫穴裡騷水', '淫穴騷水', '淫奸電影', '淫肉誘惑', '淫色', '淫色貼圖', '淫告白', '淫妞', '淫妹', '淫妻', '淫妻交換'
        , '淫姐', '淫店', '淫東方', '淫河', '淫娃', '淫流', '淫虐', '淫師蕩母', '淫書', '淫浪', '淫婦', '淫情', '淫液', '淫貨', '淫絲蕩襪', '淫腔', '淫亂工作'
        , '淫亂診所', '淫亂潮吹', '淫亂熟女', '淫逼', '淫圖', '淫網', '淫蜜', '淫慾', '淫樣', '淫漿', '淫賤', '淫戰群P', '淫蕩迷情藥', '淫蕩貴婦', '淫糜', '淫聲浪語'
        , '淫穢', '淫穢', '淫穢bt電影', '淫穢圖片', '淫獸學園', '淫癡', '淫魔', '淫驢屯', '爽穴', '猖妓', '猛插', '猛操狂射', '現代情色小說', '羞恥母', '聊色'
        , '處女開包', '被幹', '被操', '販賣king粉', '販賣搖頭丸', '逍遙遊論壇', '速效迷奸藥', '造愛', '野外性交', '陰戶', '陰毛', '陰水', '陰穴新玩法', '陰屄', '陰門'
        , '陰阜', '陰阜高聳', '陰莖插小穴', '陰道圖片', '雪腿玉胯', '麻古製作工藝', '婷婷激情聊天室', '媚藥少年', '就去日', '廁奴', '廁所偷拍', '廁所盜攝', '扉之陰'
        , '掰穴', '掰穴打洞', '掰穴皮卡丘', '提供K粉', '提供冰毒', '提供氯胺酮', '提供鹽酸羥亞胺', '插b', '插比', '插穴', '插穴手淫', '插穴止癢', '插穴圖', '插老師穴'
        , '插你媽', '插姐姐嫩穴', '插後庭', '插陰莖', '插進', '插逼', '插暴', '換妻', '朝天穴', '氯胺酮出貨', '氯胺酮技術轉讓', '氯胺酮到貨', '氯胺酮訂購', '氯胺酮電話'
        , '無毛穴', '無毛美少女', '無套自拍', '無碼長片', '無碼炮圖', '無碼做愛', '無碼淫女', '無碼淫漫', '無碼無套', '無碼精選', '無碼體驗', '發浪', '發騷'
        , '硝酸甘油炸藥製造', '童顏巨乳', '絲襪足交', '絲襪高跟', '絲襪淫婦', '腚', '菅野亞梨沙迅雷下載', '菊花洞', '街頭扒衣', '買胡椒基甲基酮', '買賣小冰磚'
        , '買賣四氫吡喃酮', '買賣黃麻素', '買賣鹽酸羥亞胺', '超毛大鮑', '酥穴', '酥胸誘惑', '酥癢', '開苞', '陽具', '陽痿', '集體性愛', '集體淫', '黃牙籤出售'
        , '黃色成人網站', '黃色妹妹a級大片', '黃色妹妹a級大片', '黑毛屄', '黑屄', '黑逼', '亂交', '亂倫', '亂輪', '傻比', '塞你公', '塞你母', '塞你老母', '塞你老師'
        , '塞你爸', '塞你娘', '媽B', '媽比', '媽白勺', '媽批', '媽的', '媽媽色', '媽逼', '嫐屄', '幹78', '幹７８', '幹GY', '幹ＧＹ', '幹一家', '幹七八', '幹人也'
        , '幹入', '幹女也', '幹他', '幹他媽', '幹它', '幹尼', '幹穴', '幹全家', '幹她', '幹她媽', '幹死', '幹死你', '幹汝', '幹你', '幹你老比', '幹你老母', '幹你良'
        , '幹你娘', '幹你媽', '幹你媽b', '幹你媽逼', '幹我', '幹牠', '幹妳', '幹妳老母', '幹妳娘', '幹妳馬', '幹妳媽', '幹拎娘', '幹林', '幹炮', '幹砲', '幹勒'
        , '幹啦', '幹您', '幹您娘', '幹逼', '幹機', '幹機掰', '幹雞', '幹爆', '微型袖珍手狗', '想上你', '惹火自拍', '愛幼閣', '愛色cc', '愛妻淫穴', '愛液', '愛液橫流'
        , '愛愛', '搖頭丸', '搖頭丸', '新金瓶梅', '極品奶妹', '極品白虎', '極品波神', '極品波霸', '極品金髮美女美穴圖', '歇逼', '經典炮圖', '群P', '群交', '群交亂舞'
        , '群奸', '群奸亂交', '群奸輪射', '群陰會', '群魔色舞', '聖泉學淫', '萬淫堂', '裙下風光', '裙內偷拍', '跨下呻吟', '農夫電影', '逼毛', '逼奸', '逼樣', '逼癢'
        , '嫖妓指南', '嫖娼', '嫩b', '嫩BB', '嫩女', '嫩奶', '嫩穴', '嫩屄', '嫩逼', '嫩鮑', '嫩鮑魚', '嫩縫', '對準桃源洞口', '摳穴', '摸你鶏巴', '摸陰蒂', '漏逼'
        , '瑪雅網', '瘋狂抽送', '瘋狗', '監禁陵辱', '碧香亭', '精液', '精液浴', '精液榨取', '緄', '緊穴', '緊縛淩辱', '舔B', '舔奶', '舔穴', '舔屁眼', '舔弄大陰唇'
        , '舔弄小雞雞', '舔屄', '舔腳', '舔逼', '舔雞巴', '蒙汗藥', '蜜穴', '蜜洞', '蜜桃成熟時', '裸聊網站', '裸陪', '裸照圖片', '裸露自拍', '裸體少婦', '裹本'
        , '製作氯胺酮', '製作鹽酸羥亞胺', '製造緬古合成', '製造緬古合成', '誘色uu', '誘姦', '誘惑視頻', '豪乳', '銀民吧', '劌', '噴精', '噴霧蒙汗藥', '墮淫', '嫵媚挑逗'
        , '慰春情', '撅起大白腚', '暴力虐待', '暴奸', '暴乳', '暴淫', '暴幹', '歐美大乳', '歐美無套', '潮噴', '熟女亂倫', '熟女顏射', '熟婦騷器', '窮逼', '線上激情電影'
        , '蓮花逼', '蝴蝶逼', '調教性奴', '調教虐待', '豬操', '賣手槍', '賣比', '賣海洛因', '賣淫', '賣騷', '賤', '賤B', '賤bi', '賤人', '賤比', '賤貨', '賤逼', '賤種'
        , '賫', '輪奸', '輪暴', '輪操', '銷售king粉', '銷售乙醚', '銷售天然咖啡因', '銷售水晶冰', '銷售北朝鮮冰', '銷售可哥精', '銷售左旋麻黃素', '銷售甲基苯丙'
        , '銷售冰古', '銷售苯基丙酮', '銷售純古', '銷售麻古果子', '銷售麻黃素', '銷售間苯三酚', '銷售黃綠牙籤', '銷售羥基環戊基', '銷售趙氏弓弩', '銷售鄰氯苯晴'
        , '銷售鹽酸氯胺酮', '銷售鹽酸羥亞胺', '銷魂洞', '鋝', '靠北', '靠母', '靠爸', '魅惑巨乳', '懆您娘', '懆您媽', '操b', '操B指南', '操人也', '操女也', '操比'
        , '操他', '操母狗', '操穴', '操穴噴水', '操她', '操死', '操你', '操你媽', '操我', '操妳', '操妻', '操屄', '操射', '操爽', '操蛋', '操腫', '操逼', '操機掰'
        , '操爛騷婦', '操爛騷貨', '機8', '機Y', '機Ｙ', '機八', '機巴', '機叭', '機芭', '機掰', '激凸走光', '激情打炮', '激情交友', '激情聊天', '激情圖片', '激情裸體'
        , '激情潮噴', '激插', '蕆', '蕩女', '蕩妹', '蕩婦', '閶', '龜公', '龜兒子', '龜孫子', '龜頭對準陰道', '濕穴', '濕身誘惑', '濫B', '濫比', '濫交', '濫貨', '濫逼'
        , '縱情兵團', '賽你老母', '賽妳阿母', '闃', '鴻圖記', '點色論壇', '翹臀嫩穴', '翹臀嫩逼', '豐唇豔姬', '雙管獵槍買賣', '雙龍入洞', '雜交', '雜種', '雞８', '雞Y'
        , '雞Ｙ', '雞八', '雞巴', '雞巴暴脹', '雞叭', '雞奸', '雞吧', '雞芭', '雞掰', '顏射', '顏射自拍', '顏騎', '懶叫', '懶教', '爆乳人妻', '爆乳娘', '爆操', '獸交'
        , '獸奸', '癟三', '癡乳', '鶏8', '鶏八', '鶏女', '鶏巴', '鶏奸', '鶏吧', '鶏院', '麗春苑', '罌粟', '騷B', '騷女', '騷女叫春', '騷水', '騷包', '騷母', '騷穴'
        , '騷卵', '騷乳', '騷妹', '騷妻', '騷姐姐', '騷屄', '騷姨媽', '騷洞', '騷浪', '騷浪美女', '騷婦掰B', '騷婦露逼', '騷貨', '騷棍', '騷棒', '騷逼', '騷逼噴水'
        , '騷鶏', '灌滿精液', '爛b', '爛比', '爛袋', '爛貨', '爛逼', '蘚鮑', '覽叫', '露B', '露穴', '露屄', '露陰照', '露逼', '鷄巴', '囅', '鹽酸氯胺酮', '鹽酸羥亞胺'
        , '豔母淫臀', '豔乳', '豔婦淫女', '豔情小說', '豔舞淫業']
    for (const i of foreign3) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes(("fuck"))) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("commin")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("knod")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("cunt")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("dotard")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("dyke")) {
        return true;
    }

    return false;
}
