+++
title = "Coding Testing"
date = 2019-07-07
[taxonomies]
categories = ["Odd"]
tags = ["placeholder posts", "prime-number posts"]
+++

<div class="fancycode code">
    <div class="controls">
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle green"></div>
        <div class="title">main.rs</div>
    </div>
    <div class="content">
        <pre style="background-color:#272822;"><span style="font-style:italic;color:#66d9ef;">fn </span><span style="color:#a6e22e;">main</span><span style="color:#f8f8f2;">() {
    </span><span style="font-style:italic;color:#66d9ef;">let</span><span style="color:#f8f8f2;"> greetings </span><span style="color:#f92672;">= </span><span style="color:#f8f8f2;">[
        </span><span style="color:#e6db74;">"Hello"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Hola"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Bonjour"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Ciao"</span><span style="color:#f8f8f2;">,
        </span><span style="color:#e6db74;">"こんにちは"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"안녕하세요"</span><span style="color:#f8f8f2;">,
        </span><span style="color:#e6db74;">"Cześć"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Olá"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Здравствуйте"</span><span style="color:#f8f8f2;">,
        </span><span style="color:#e6db74;">"Chào bạn"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"您好"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Hallo"</span><span style="color:#f8f8f2;">,
        </span><span style="color:#e6db74;">"Hej"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"Ahoj"</span><span style="color:#f8f8f2;">, </span><span style="color:#e6db74;">"سلام"
    </span><span style="color:#f8f8f2;">];
    </span><span style="color:#f92672;">for </span><span style="color:#f8f8f2;">(num, greeting) </span><span style="color:#f92672;">in</span><span style="color:#f8f8f2;"> greetings.</span><span style="color:#66d9ef;">iter</span><span style="color:#f8f8f2;">().</span><span style="color:#66d9ef;">enumerate</span><span style="color:#f8f8f2;">() {
        print!(</span><span style="color:#e6db74;">"</span><span style="color:#ae81ff;">{}</span><span style="color:#e6db74;"> : "</span><span style="color:#f8f8f2;">, greeting);
        </span><span style="color:#f92672;">match</span><span style="color:#f8f8f2;"> num {
            </span><span style="color:#ae81ff;">0 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"This code is editable and runnable!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">1 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"¡Este código es editable y ejecutable!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">2 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Ce code est modifiable et exécutable !"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">3 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Questo codice è modificabile ed eseguibile!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">4 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"このコードは編集して実行出来ます！"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">5 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"여기에서 코드를 수정하고 실행할 수 있습니다!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">6 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Ten kod można edytować oraz uruchomić!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">7 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Este código é editável e executável!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">8 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Этот код можно отредактировать и запустить!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">9 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Bạn có thể edit và run code trực tiếp!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">10 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"这段代码是可以编辑并且能够运行的！"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">11 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Dieser Code kann bearbeitet und ausgeführt werden!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">12 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Den här koden kan redigeras och köras!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">13 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"Tento kód můžete upravit a spustit"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#ae81ff;">14 </span><span style="color:#f92672;">=&gt; </span><span style="color:#f8f8f2;">println!(</span><span style="color:#e6db74;">"این کد قابلیت ویرایش و اجرا دارد!"</span><span style="color:#f8f8f2;">),
            </span><span style="color:#f92672;">_ =&gt; </span><span style="color:#f8f8f2;">{}
        }
    }
}
</span></pre>
    </div>
</div>

<!-- more -->


```rs
fn main() {
    let greetings = [
        "Hello", "Hola", "Bonjour", "Ciao",
        "こんにちは", "안녕하세요",
        "Cześć", "Olá", "Здравствуйте",
        "Chào bạn", "您好", "Hallo",
        "Hej", "Ahoj", "سلام"
    ];
    for (num, greeting) in greetings.iter().enumerate() {
        print!("{} : ", greeting);
        match num {
            0 => println!("This code is editable and runnable!"),
            1 => println!("¡Este código es editable y ejecutable!"),
            2 => println!("Ce code est modifiable et exécutable !"),
            3 => println!("Questo codice è modificabile ed eseguibile!"),
            4 => println!("このコードは編集して実行出来ます！"),
            5 => println!("여기에서 코드를 수정하고 실행할 수 있습니다!"),
            6 => println!("Ten kod można edytować oraz uruchomić!"),
            7 => println!("Este código é editável e executável!"),
            8 => println!("Этот код можно отредактировать и запустить!"),
            9 => println!("Bạn có thể edit và run code trực tiếp!"),
            10 => println!("这段代码是可以编辑并且能够运行的！"),
            11 => println!("Dieser Code kann bearbeitet und ausgeführt werden!"),
            12 => println!("Den här koden kan redigeras och köras!"),
            13 => println!("Tento kód můžete upravit a spustit"),
            14 => println!("این کد قابلیت ویرایش و اجرا دارد!"),
            _ => {}
        }
    }
}
```

```wolfram
dead[0]=a
live[0]=b
dead[n_]:=dead[n-1]+c*dead[n-1]-d*live[n-1]
live[n_]:=live[n-1]-c*dead[n-1]
```

```arc
% https://github.com/GalAster/vscode-arc/blob/master/package.json
name = 'vscode-arc'
displayName = 'Arc Language Support'
description = 'Highlight and formatter for Arc Readable Configiration'
publisher = 'aster'
version = '0.1.2'
icon = 'logo.png'
engines/vscode = '^1.8.0'


[categories]
> 'Programming Languages'
> 'Formatters'


{repository}
type = 'git'
url = 'https =//github.com/GalAster/vscode-arc.git'


{scripts}
postinstall = 'node ./node_modules/vscode/bin/install && tsc'
build = 'yarn lint && ts-node syntax/build.ts'
pack = 'yarn build && vsce package'
lint = 'tslint **/*.ts --fix'
|
|
|

{dependencies}
vscode = "^1.1.33"


{devDependencies}
'@types/node' = '^11.13.6'


{contributes}
[^languages]
* id = 'arc'
  aliases = ['ARC'],
  extensions = ['.arc']
  filenames = [ ]
  mimetypes = ['text/x-arc']
  configuration = './syntax/arc.configuration.json'
[:grammars]
* language = 'arc'
  scopeName = 'source.arc'
  path = './syntax/arc.tmLanguage.json'
* scopeName = 'markdown.arc.codeblock'
  path = './syntax/arc.markdown.json'
  injectTo = ['text.html.markdown']
  embeddedLanguages = {'meta.embedded.block.arc' = 'arc'}


{__metadata}
id = '6267dad2-7d52-462a-a1ef-7e3da7378a7d'
publisherDisplayName = 'Aster'
publisherId = '3406b78c-f287-4619-8d82-7c97998693e3'
```


`````arc
% This is a Arc example document.
% Using `%` starts line comment
%%%
*here is a markdown note*
**let's set some meta info**
*`$` means Unique*
- $version = 1.0
*`@` means Changeable*
- @align-comment = true
- @empty-line = 2
%%%


{literal.integer}
int1 =+99
int2 = 42
int3 = 0
int4 =-17
int5 = 1_000
int6 = 1_2_3_4_5

{literal.decimal}
flt1 = 0.
flt2 =-0.0_2
flt3 =+5_0.
flt4 = 3.1415
flt5 =-0.01
flt6 = 224_617.445_991_228
% infinity
sf1 = infinity % positive infinity
sf2 =+Infinity % positive infinity
sf3 =-INFINITY % negative infinity
% not a number
sf4 = nan % actual sNaN/qNaN encoding is implementation specific
sf5 =+NaN % same as `nan`
sf6 =-NAN % valid, actual encoding is implementation specific


{string}
char = `2`
singleline = "This is a string."
multiline = """
\b     - backspace       (U+0008)
\t     - tab             (U+0009)
\n     - linefeed        (U+000A)
\f     - form feed       (U+000C)
\r     - carriage return (U+000D)
\"     - quote           (U+0022)
\/     - slash           (U+002F)
\\     - backslash       (U+005C)
\u1234 - unicode         (U+1234)
"""

literal = '''
\b     - backspace       (U+0008)
\t     - tab             (U+0009)
\n     - linefeed        (U+000A)
\f     - form feed       (U+000C)
\r     - carriage return (U+000D)
\"     - quote           (U+0022)
\/     - slash           (U+002F)
\\     - backslash       (U+005C)
\u1234 - unicode         (U+1234)
'''


{list.inline}
arr1 = [1, 2, 3]
arr2 = ["red", "yellow", "green"]
arr3 = [[1, 2], [3, 4, 5]]
arr4 = ["all", 'strings', """are the same""", '''type''']
arr5 = [
    [1, 2]
    ["a", "b", "c"]
]
arr6 = [1, 2.0]
inline = [
    { x = 1, y = 2, z = 3 },
    { x = 7, y = 5, z = 9 },
    { x = 2, y = 4, z = 8 },
]

%===========================================================================================

[list.scope.insert]
> 42
> 'string'
> [true, false, null]

[list.scope.string]
- Apple
- Banana
- Cherry

[list.scope.dict]
* name = "Apple"
  color = "red"
* name = "Banana"
  color = "yellow"
* name = "apple"
  color = "red"

% expand above syntax
{list.scope.expand}
insert = [42, 'string', [true, false, null]]
string = ['Apple', 'Banana', 'Cherry']
dict = [
    {name = 'Apple', color = 'red'},
    {name = 'Banana', color = 'yellow'},
    {name = 'apple', color = 'red'}
]

%===========================================================================================

{dict.server}
{^meta}
ip = [
    $dict.server.alpha.ip
    $dict.server.beta.ip
]
{:alpha}  % child node
id = 10000
pw = "力微任重久神疲"
{:beta}   % child node at same level
id = 10001
pw = "再竭衰庸定不支"

% expand above syntax
{dict.server.expand}

%===========================================================================================


{version}
alias = 'v|version'
eg1.input = v|1.0.0
eg1.expand = {
    major = 1u64
    mino = 0u64
    patch = 0u64
}


{DateTime}
ld1  = dt'1979-05-27'           % Local Date
lt1  = dt'07:32:00'             % Local Time
ldt1 = dt'1979-05-27T07:32:00'  % Local Date-Time
odt1 = dt'1979-05-27T07:32:00Z' % Offset Date-Time
odt2 = dt'1979-05-27T07:32:00X'


{Regex}
ipv4 = re|(\^)?\s*([A-Za-z_-][\\/@A-Za-z0-9_-]*|".+"|'.+'|[0-9]+)\s*(@[A-Za-z]+)\s*(=|:)\s*
ipv6 = re|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$



{Embed}
table = csv```
a,1
```


`````
