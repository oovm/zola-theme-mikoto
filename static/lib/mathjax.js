window.MathJax = {
    options: {
        skipHtmlTags: [
            'script', 'noscript', 'style', 'textarea', 'pre',
            'code', 'annotation', 'annotation-xml'
        ],
        includeHtmlTags: {
            br: ''
        },
    },
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [["$$", "$$"]],
        tags: 'ams',
        macros: {
            '|->': '\\mapsto',
            '<->': '\\leftrightarrow',
            '<=>': '\\Leftrightarrow',
            '==>': '\\Longrightarrow',
            '->': '\\rightarrow',
            '=>': '\\Rightarrow',
            // Dots
            '...': '\\cdots',
            // Arithmatic
            '+-': '\\pm',
            '-+': '\\mp',
            '==': '\\equiv',
            '!=': '\\ne',
            '>=': '\\geqslant',
            '<=': '\\leqslant',
            '<<': '\\ll',
            '>>': '\\gg',
            // Functions
            arccot: '\\operatorname{arccot}',
            arcsec: '\\operatorname{arcsec}',
            arccsc: '\\operatorname{arccsc}',
        },
    },
    svg: { fontCache: 'global' }
}
