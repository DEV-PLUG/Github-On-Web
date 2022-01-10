$(document).ready(function () {

    var cssId = 'GithubOnWeb'; // CSS 불러오기
    if (!document.getElementById(cssId)) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://dev-plug.github.io/Github-On-Web/main.css';
        link.media = 'all';
        head.appendChild(link);
    }

    function load_repository(property) {
        $.ajax({
            url: `https://api.github.com/repos/${$(property).attr('id')}`,
            method: "GET",
            success: function(result) {
                $(property).empty();

                if (result) {
                    let repository_name, repository_description, repository_language_color, repository_language_name, repository_stars_count;

                    // repo 이름 설정
                    if(result.owner.type == 'User') {
                        repository_name = result.full_name.split('/')[1];
                    } else {
                        repository_name = result.full_name;
                    }

                    // repo 설명 설정
                    function getByte(str) {
                        var byte = 0;
                        
                        for (var i=0; i<str.length; ++i) {
                            // 기본 한글 2바이트 처리
                            (str.charCodeAt(i) > 127) ? byte += 2 : byte++ ;
                        }
                        return byte;
                    }

                    if(getByte(result.description.length) > 28) {
                        repository_description = result.description.substr(0, 27) + '..';
                    } else {
                        repository_description = result.description;
                    }

                    // repo 언어 색 설정
                    if (result.language == 'JavaScript') repository_language_color = '#f1e05a';
else if (result.language == '1C Enterprise') repository_language_color = '#814CCC';
else if (result.language == '4D') repository_language_color = '#004289';
else if (result.language == 'ABAP') repository_language_color = '#E8274B';
else if (result.language == 'ABAP CDS') repository_language_color = '#555e25';
else if (result.language == 'ActionScript') repository_language_color = '#882B0F';
else if (result.language == 'Ada') repository_language_color = '#02f88c';
else if (result.language == 'Adobe Font Metrics') repository_language_color = '#fa0f00';
else if (result.language == 'Agda') repository_language_color = '#315665';
else if (result.language == 'AGS Script') repository_language_color = '#B9D9FF';
else if (result.language == 'AIDL') repository_language_color = '#34EB6B';
else if (result.language == 'AL') repository_language_color = '#3AA2B5';
else if (result.language == 'Alloy') repository_language_color = '#64C800';
else if (result.language == 'Alpine Abuild') repository_language_color = '#0D597F';
else if (result.language == 'Altium Designer') repository_language_color = '#A89663';
else if (result.language == 'AMPL') repository_language_color = '#E6EFBB';
else if (result.language == 'AngelScript') repository_language_color = '#C7D7DC';
else if (result.language == 'Ant Build System') repository_language_color = '#A9157E';
else if (result.language == 'ANTLR') repository_language_color = '#9DC3FF';
else if (result.language == 'ApacheConf') repository_language_color = '#d12127';
else if (result.language == 'Apex') repository_language_color = '#1797c0';
else if (result.language == 'API Blueprint') repository_language_color = '#2ACCA8';
else if (result.language == 'APL') repository_language_color = '#5A8164';
else if (result.language == 'Apollo Guidance Computer') repository_language_color = '#0B3D91';
else if (result.language == 'AppleScript') repository_language_color = '#101F1F';
else if (result.language == 'Arc') repository_language_color = '#aa2afe';
else if (result.language == 'AsciiDoc') repository_language_color = '#73a0c5';
else if (result.language == 'ASL') repository_language_color = '#cccccc';
else if (result.language == 'ASP.NET') repository_language_color = '#9400ff';
else if (result.language == 'AspectJ') repository_language_color = '#a957b0';
else if (result.language == 'Assembly') repository_language_color = '#6E4C13';
else if (result.language == 'Astro') repository_language_color = '#ff5a03';
else if (result.language == 'Asymptote') repository_language_color = '#ff0000';
else if (result.language == 'ATS') repository_language_color = '#1ac620';
else if (result.language == 'Augeas') repository_language_color = '#9CC134';
else if (result.language == 'AutoHotkey') repository_language_color = '#6594b9';
else if (result.language == 'AutoIt') repository_language_color = '#1C3552';
else if (result.language == 'Avro IDL') repository_language_color = '#0040FF';
else if (result.language == 'Awk') repository_language_color = '#c30e9b';
else if (result.language == 'Ballerina') repository_language_color = '#FF5000';
else if (result.language == 'BASIC') repository_language_color = '#ff0000';
else if (result.language == 'Batchfile') repository_language_color = '#C1F12E';
else if (result.language == 'Beef') repository_language_color = '#a52f4e';
else if (result.language == 'Befunge') repository_language_color = '#cccccc';
else if (result.language == 'BibTeX') repository_language_color = '#778899';
else if (result.language == 'Bicep') repository_language_color = '#519aba';
else if (result.language == 'Bison') repository_language_color = '#6A463F';
else if (result.language == 'BitBake') repository_language_color = '#00bce4';
else if (result.language == 'Blade') repository_language_color = '#f7523f';
else if (result.language == 'BlitzBasic') repository_language_color = '#00FFAE';
else if (result.language == 'BlitzMax') repository_language_color = '#cd6400';
else if (result.language == 'Bluespec') repository_language_color = '#12223c';
else if (result.language == 'Boo') repository_language_color = '#d4bec1';
else if (result.language == 'Boogie') repository_language_color = '#c80fa0';
else if (result.language == 'Brainfuck') repository_language_color = '#2F2530';
else if (result.language == 'Brightscript') repository_language_color = '#662D91';
else if (result.language == 'Browserslist') repository_language_color = '#ffd539';
else if (result.language == 'C') repository_language_color = '#555555';
else if (result.language == 'C#') repository_language_color = '#178600';
else if (result.language == 'C++') repository_language_color = '#f34b7d';
else if (result.language == 'C2hs Haskell') repository_language_color = '#cccccc';
else if (result.language == 'Cabal Config') repository_language_color = '#483465';
else if (result.language == 'Cap\'n Proto') repository_language_color = '#c42727';
else if (result.language == 'CartoCSS') repository_language_color = '#cccccc';
else if (result.language == 'Ceylon') repository_language_color = '#dfa535';
else if (result.language == 'Chapel') repository_language_color = '#8dc63f';
else if (result.language == 'Charity') repository_language_color = '#cccccc';
else if (result.language == 'ChucK') repository_language_color = '#3f8000';
else if (result.language == 'Cirru') repository_language_color = '#ccccff';
else if (result.language == 'Clarion') repository_language_color = '#db901e';
else if (result.language == 'Classic ASP') repository_language_color = '#6a40fd';
else if (result.language == 'Clean') repository_language_color = '#3F85AF';
else if (result.language == 'Click') repository_language_color = '#E4E6F3';
else if (result.language == 'CLIPS') repository_language_color = '#00A300';
else if (result.language == 'Clojure') repository_language_color = '#db5855';
else if (result.language == 'Closure Templates') repository_language_color = '#0d948f';
else if (result.language == 'Cloud Firestore Security Rules') repository_language_color = '#FFA000';
else if (result.language == 'CMake') repository_language_color = '#DA3434';
else if (result.language == 'COBOL') repository_language_color = '#cccccc';
else if (result.language == 'CodeQL') repository_language_color = '#140f46';
else if (result.language == 'CoffeeScript') repository_language_color = '#244776';
else if (result.language == 'ColdFusion') repository_language_color = '#ed2cd6';
else if (result.language == 'ColdFusion CFC') repository_language_color = '#ed2cd6';
else if (result.language == 'COLLADA') repository_language_color = '#F1A42B';
else if (result.language == 'Common Lisp') repository_language_color = '#3fb68b';
else if (result.language == 'Common Workflow Language') repository_language_color = '#B5314C';
else if (result.language == 'Component Pascal') repository_language_color = '#B0CE4E';
else if (result.language == 'Cool') repository_language_color = '#cccccc';
else if (result.language == 'Coq') repository_language_color = '#d0b68c';
else if (result.language == 'Crystal') repository_language_color = '#000100';
else if (result.language == 'CSON') repository_language_color = '#244776';
else if (result.language == 'Csound') repository_language_color = '#1a1a1a';
else if (result.language == 'Csound Document') repository_language_color = '#1a1a1a';
else if (result.language == 'Csound Score') repository_language_color = '#1a1a1a';
else if (result.language == 'CSS') repository_language_color = '#563d7c';
else if (result.language == 'CSV') repository_language_color = '#237346';
else if (result.language == 'Cuda') repository_language_color = '#3A4E3A';
else if (result.language == 'CUE') repository_language_color = '#5886E1';
else if (result.language == 'CWeb') repository_language_color = '#00007a';
else if (result.language == 'Cycript') repository_language_color = '#cccccc';
else if (result.language == 'Cython') repository_language_color = '#fedf5b';
else if (result.language == 'D') repository_language_color = '#ba595e';
else if (result.language == 'Dafny') repository_language_color = '#FFEC25';
else if (result.language == 'Darcs Patch') repository_language_color = '#8eff23';
else if (result.language == 'Dart') repository_language_color = '#00B4AB';
else if (result.language == 'DataWeave') repository_language_color = '#003a52';
else if (result.language == 'Dhall') repository_language_color = '#dfafff';
else if (result.language == 'DIGITAL Command Language') repository_language_color = '#cccccc';
else if (result.language == 'DirectX 3D File') repository_language_color = '#aace60';
else if (result.language == 'DM') repository_language_color = '#447265';
else if (result.language == 'Dockerfile') repository_language_color = '#384d54';
else if (result.language == 'Dogescript') repository_language_color = '#cca760';
else if (result.language == 'DTrace') repository_language_color = '#cccccc';
else if (result.language == 'Dylan') repository_language_color = '#6c616e';
else if (result.language == 'E') repository_language_color = '#ccce35';
else if (result.language == 'Earthly') repository_language_color = '#2af0ff';
else if (result.language == 'Easybuild') repository_language_color = '#069406';
else if (result.language == 'eC') repository_language_color = '#913960';
else if (result.language == 'Ecere Projects') repository_language_color = '#913960';
else if (result.language == 'ECL') repository_language_color = '#8a1267';
else if (result.language == 'ECLiPSe') repository_language_color = '#001d9d';
else if (result.language == 'EditorConfig') repository_language_color = '#fff1f2';
else if (result.language == 'Eiffel') repository_language_color = '#4d6977';
else if (result.language == 'EJS') repository_language_color = '#a91e50';
else if (result.language == 'Elixir') repository_language_color = '#6e4a7e';
else if (result.language == 'Elm') repository_language_color = '#60B5CC';
else if (result.language == 'Emacs Lisp') repository_language_color = '#c065db';
else if (result.language == 'EmberScript') repository_language_color = '#FFF4F3';
else if (result.language == 'EQ') repository_language_color = '#a78649';
else if (result.language == 'Erlang') repository_language_color = '#B83998';
else if (result.language == 'F#') repository_language_color = '#b845fc';
else if (result.language == 'F*') repository_language_color = '#572e30';
else if (result.language == 'Factor') repository_language_color = '#636746';
else if (result.language == 'Fancy') repository_language_color = '#7b9db4';
else if (result.language == 'Fantom') repository_language_color = '#14253c';
else if (result.language == 'Faust') repository_language_color = '#c37240';
else if (result.language == 'Fennel') repository_language_color = '#fff3d7';
else if (result.language == 'FIGlet Font') repository_language_color = '#FFDDBB';
else if (result.language == 'Filebench WML') repository_language_color = '#F6B900';
else if (result.language == 'Filterscript') repository_language_color = '#cccccc';
else if (result.language == 'fish') repository_language_color = '#4aae47';
else if (result.language == 'Fluent') repository_language_color = '#ffcc33';
else if (result.language == 'FLUX') repository_language_color = '#88ccff';
else if (result.language == 'Forth') repository_language_color = '#341708';
else if (result.language == 'Fortran') repository_language_color = '#4d41b1';
else if (result.language == 'Fortran Free Form') repository_language_color = '#4d41b1';
else if (result.language == 'FreeBasic') repository_language_color = '#867db1';
else if (result.language == 'FreeMarker') repository_language_color = '#0050b2';
else if (result.language == 'Frege') repository_language_color = '#00cafe';
else if (result.language == 'Futhark') repository_language_color = '#5f021f';
else if (result.language == 'G-code') repository_language_color = '#D08CF2';
else if (result.language == 'Game Maker Language') repository_language_color = '#71b417';
else if (result.language == 'GAML') repository_language_color = '#FFC766';
else if (result.language == 'GAMS') repository_language_color = '#f49a22';
else if (result.language == 'GAP') repository_language_color = '#0000cc';
else if (result.language == 'GCC Machine Description') repository_language_color = '#FFCFAB';
else if (result.language == 'GDB') repository_language_color = '#cccccc';
else if (result.language == 'GDScript') repository_language_color = '#355570';
else if (result.language == 'GEDCOM') repository_language_color = '#003058';
else if (result.language == 'Gemfile.lock') repository_language_color = '#701516';
else if (result.language == 'Genie') repository_language_color = '#fb855d';
else if (result.language == 'Genshi') repository_language_color = '#951531';
else if (result.language == 'Gentoo Ebuild') repository_language_color = '#9400ff';
else if (result.language == 'Gentoo Eclass') repository_language_color = '#9400ff';
else if (result.language == 'Gerber Image') repository_language_color = '#d20b00';
else if (result.language == 'Gherkin') repository_language_color = '#5B2063';
else if (result.language == 'Git Attributes') repository_language_color = '#F44D27';
else if (result.language == 'Git Config') repository_language_color = '#F44D27';
else if (result.language == 'GLSL') repository_language_color = '#5686a5';
else if (result.language == 'Glyph') repository_language_color = '#c1ac7f';
else if (result.language == 'Gnuplot') repository_language_color = '#f0a9f0';
else if (result.language == 'Go') repository_language_color = '#00ADD8';
else if (result.language == 'Go Checksums') repository_language_color = '#00ADD8';
else if (result.language == 'Go Module') repository_language_color = '#00ADD8';
else if (result.language == 'Golo') repository_language_color = '#88562A';
else if (result.language == 'Gosu') repository_language_color = '#82937f';
else if (result.language == 'Grace') repository_language_color = '#615f8b';
else if (result.language == 'Gradle') repository_language_color = '#02303a';
else if (result.language == 'Grammatical Framework') repository_language_color = '#ff0000';
else if (result.language == 'GraphQL') repository_language_color = '#e10098';
else if (result.language == 'Graphviz (DOT)') repository_language_color = '#2596be';
else if (result.language == 'Groovy') repository_language_color = '#4298b8';
else if (result.language == 'Groovy Server Pages') repository_language_color = '#4298b8';
else if (result.language == 'Hack') repository_language_color = '#878787';
else if (result.language == 'Haml') repository_language_color = '#ece2a9';
else if (result.language == 'Handlebars') repository_language_color = '#f7931e';
else if (result.language == 'HAProxy') repository_language_color = '#106da9';
else if (result.language == 'Harbour') repository_language_color = '#0e60e3';
else if (result.language == 'Haskell') repository_language_color = '#5e5086';
else if (result.language == 'Haxe') repository_language_color = '#df7900';
else if (result.language == 'HCL') repository_language_color = '#cccccc';
else if (result.language == 'HiveQL') repository_language_color = '#dce200';
else if (result.language == 'HLSL') repository_language_color = '#aace60';
else if (result.language == 'HolyC') repository_language_color = '#ffefaf';
else if (result.language == 'HTML') repository_language_color = '#e34c26';
else if (result.language == 'HTML+ECR') repository_language_color = '#2e1052';
else if (result.language == 'HTML+EEX') repository_language_color = '#6e4a7e';
else if (result.language == 'HTML+ERB') repository_language_color = '#701516';
else if (result.language == 'HTML+PHP') repository_language_color = '#4f5d95';
else if (result.language == 'HTML+Razor') repository_language_color = '#512be4';
else if (result.language == 'HTTP') repository_language_color = '#005C9C';
else if (result.language == 'HXML') repository_language_color = '#f68712';
else if (result.language == 'Hy') repository_language_color = '#7790B2';
else if (result.language == 'HyPhy') repository_language_color = '#cccccc';
else if (result.language == 'IDL') repository_language_color = '#a3522f';
else if (result.language == 'Idris') repository_language_color = '#b30000';
else if (result.language == 'Ignore List') repository_language_color = '#000000';
else if (result.language == 'IGOR Pro') repository_language_color = '#0000cc';
else if (result.language == 'ImageJ Macro') repository_language_color = '#99AAFF';
else if (result.language == 'Inform 7') repository_language_color = '#cccccc';
else if (result.language == 'INI') repository_language_color = '#d1dbe0';
else if (result.language == 'Inno Setup') repository_language_color = '#264b99';
else if (result.language == 'Io') repository_language_color = '#a9188d';
else if (result.language == 'Ioke') repository_language_color = '#078193';
else if (result.language == 'Isabelle') repository_language_color = '#FEFE00';
else if (result.language == 'Isabelle ROOT') repository_language_color = '#FEFE00';
else if (result.language == 'J') repository_language_color = '#9EEDFF';
else if (result.language == 'JAR Manifest') repository_language_color = '#b07219';
else if (result.language == 'Jasmin') repository_language_color = '#d03600';
else if (result.language == 'Java') repository_language_color = '#b07219';
else if (result.language == 'Java Properties') repository_language_color = '#2A6277';
else if (result.language == 'Java Server Pages') repository_language_color = '#2A6277';
else if (result.language == 'JavaScript+ERB') repository_language_color = '#f1e05a';
else if (result.language == 'Jest Snapshot') repository_language_color = '#15c213';
else if (result.language == 'JFlex') repository_language_color = '#DBCA00';
else if (result.language == 'Jinja') repository_language_color = '#a52a22';
else if (result.language == 'Jison') repository_language_color = '#56b3cb';
else if (result.language == 'Jison Lex') repository_language_color = '#56b3cb';
else if (result.language == 'Jolie') repository_language_color = '#843179';
else if (result.language == 'jq') repository_language_color = '#c7254e';
else if (result.language == 'JSON') repository_language_color = '#292929';
else if (result.language == 'JSON with Comments') repository_language_color = '#292929';
else if (result.language == 'JSON5') repository_language_color = '#267CB9';
else if (result.language == 'JSONiq') repository_language_color = '#40d47e';
else if (result.language == 'JSONLD') repository_language_color = '#0c479c';
else if (result.language == 'Jsonnet') repository_language_color = '#0064bd';
else if (result.language == 'Julia') repository_language_color = '#a270ba';
else if (result.language == 'Jupyter Notebook') repository_language_color = '#DA5B0B';
else if (result.language == 'Kaitai Struct') repository_language_color = '#773b37';
else if (result.language == 'KakouneScript') repository_language_color = '#6f8042';
else if (result.language == 'KiCad Layout') repository_language_color = '#2f4aab';
else if (result.language == 'KiCad Legacy Layout') repository_language_color = '#2f4aab';
else if (result.language == 'KiCad Schematic') repository_language_color = '#2f4aab';
else if (result.language == 'Kotlin') repository_language_color = '#A97BFF';
else if (result.language == 'KRL') repository_language_color = '#28430A';
else if (result.language == 'LabVIEW') repository_language_color = '#fede06';
else if (result.language == 'Lark') repository_language_color = '#2980B9';
else if (result.language == 'Lasso') repository_language_color = '#999999';
else if (result.language == 'Latte') repository_language_color = '#f2a542';
else if (result.language == 'Lean') repository_language_color = '#cccccc';
else if (result.language == 'Less') repository_language_color = '#1d365d';
else if (result.language == 'Lex') repository_language_color = '#DBCA00';
else if (result.language == 'LFE') repository_language_color = '#4C3023';
else if (result.language == 'LilyPond') repository_language_color = '#9ccc7c';
else if (result.language == 'Limbo') repository_language_color = '#cccccc';
else if (result.language == 'Liquid') repository_language_color = '#67b8de';
else if (result.language == 'Literate Agda') repository_language_color = '#315665';
else if (result.language == 'Literate CoffeeScript') repository_language_color = '#244776';
else if (result.language == 'Literate Haskell') repository_language_color = '#5e5086';
else if (result.language == 'LiveScript') repository_language_color = '#499886';
else if (result.language == 'LLVM') repository_language_color = '#185619';
else if (result.language == 'Logos') repository_language_color = '#cccccc';
else if (result.language == 'Logtalk') repository_language_color = '#295b9a';
else if (result.language == 'LOLCODE') repository_language_color = '#cc9900';
else if (result.language == 'LookML') repository_language_color = '#652B81';
else if (result.language == 'LoomScript') repository_language_color = '#cccccc';
else if (result.language == 'LSL') repository_language_color = '#3d9970';
else if (result.language == 'Lua') repository_language_color = '#000080';
else if (result.language == 'M') repository_language_color = '#cccccc';
else if (result.language == 'M4') repository_language_color = '#cccccc';
else if (result.language == 'M4Sugar') repository_language_color = '#cccccc';
else if (result.language == 'Macaulay2') repository_language_color = '#d8ffff';
else if (result.language == 'Makefile') repository_language_color = '#427819';
else if (result.language == 'Mako') repository_language_color = '#7e858d';
else if (result.language == 'Markdown') repository_language_color = '#083fa1';
else if (result.language == 'Marko') repository_language_color = '#42bff2';
else if (result.language == 'Mask') repository_language_color = '#f97732';
else if (result.language == 'Mathematica') repository_language_color = '#dd1100';
else if (result.language == 'MATLAB') repository_language_color = '#e16737';
else if (result.language == 'Max') repository_language_color = '#c4a79c';
else if (result.language == 'MAXScript') repository_language_color = '#00a6a6';
else if (result.language == 'mcfunction') repository_language_color = '#E22837';
else if (result.language == 'Mercury') repository_language_color = '#ff2b2b';
else if (result.language == 'Meson') repository_language_color = '#007800';
else if (result.language == 'Metal') repository_language_color = '#8f14e9';
else if (result.language == 'MiniD') repository_language_color = '#cccccc';
else if (result.language == 'Mirah') repository_language_color = '#c7a938';
else if (result.language == 'mIRC Script') repository_language_color = '#3d57c3';
else if (result.language == 'MLIR') repository_language_color = '#5EC8DB';
else if (result.language == 'Modelica') repository_language_color = '#de1d31';
else if (result.language == 'Modula-2') repository_language_color = '#10253f';
else if (result.language == 'Modula-3') repository_language_color = '#223388';
else if (result.language == 'Module Management System') repository_language_color = '#cccccc';
else if (result.language == 'Monkey') repository_language_color = '#cccccc';
else if (result.language == 'Moocode') repository_language_color = '#cccccc';
else if (result.language == 'MoonScript') repository_language_color = '#ff4585';
else if (result.language == 'Motoko') repository_language_color = '#fbb03b';
else if (result.language == 'Motorola 68K Assembly') repository_language_color = '#005daa';
else if (result.language == 'MQL4') repository_language_color = '#62A8D6';
else if (result.language == 'MQL5') repository_language_color = '#4A76B8';
else if (result.language == 'MTML') repository_language_color = '#b7e1f4';
else if (result.language == 'MUF') repository_language_color = '#cccccc';
else if (result.language == 'mupad') repository_language_color = '#244963';
else if (result.language == 'Mustache') repository_language_color = '#724b3b';
else if (result.language == 'Myghty') repository_language_color = '#cccccc';
else if (result.language == 'nanorc') repository_language_color = '#2d004d';
else if (result.language == 'NASL') repository_language_color = '#cccccc';
else if (result.language == 'NCL') repository_language_color = '#28431f';
else if (result.language == 'Nearley') repository_language_color = '#990000';
else if (result.language == 'Nemerle') repository_language_color = '#3d3c6e';
else if (result.language == 'nesC') repository_language_color = '#94B0C7';
else if (result.language == 'NetLinx') repository_language_color = '#0aa0ff';
else if (result.language == 'NetLinx+ERB') repository_language_color = '#747faa';
else if (result.language == 'NetLogo') repository_language_color = '#ff6375';
else if (result.language == 'NewLisp') repository_language_color = '#87AED7';
else if (result.language == 'Nextflow') repository_language_color = '#3ac486';
else if (result.language == 'Nginx') repository_language_color = '#009639';
else if (result.language == 'Nim') repository_language_color = '#ffc200';
else if (result.language == 'Nit') repository_language_color = '#009917';
else if (result.language == 'Nix') repository_language_color = '#7e7eff';
else if (result.language == 'NPM Config') repository_language_color = '#cb3837';
else if (result.language == 'NSIS') repository_language_color = '#cccccc';
else if (result.language == 'Nu') repository_language_color = '#c9df40';
else if (result.language == 'NumPy') repository_language_color = '#9C8AF9';
else if (result.language == 'Nunjucks') repository_language_color = '#3d8137';
else if (result.language == 'NWScript') repository_language_color = '#111522';
else if (result.language == 'Objective-C') repository_language_color = '#438eff';
else if (result.language == 'Objective-C++') repository_language_color = '#6866fb';
else if (result.language == 'Objective-J') repository_language_color = '#ff0c5a';
else if (result.language == 'ObjectScript') repository_language_color = '#424893';
else if (result.language == 'OCaml') repository_language_color = '#3be133';
else if (result.language == 'Odin') repository_language_color = '#60AFFE';
else if (result.language == 'Omgrofl') repository_language_color = '#cabbff';
else if (result.language == 'ooc') repository_language_color = '#b0b77e';
else if (result.language == 'Opa') repository_language_color = '#cccccc';
else if (result.language == 'Opal') repository_language_color = '#f7ede0';
else if (result.language == 'Open Policy Agent') repository_language_color = '#7d9199';
else if (result.language == 'OpenCL') repository_language_color = '#ed2e2d';
else if (result.language == 'OpenEdge ABL') repository_language_color = '#5ce600';
else if (result.language == 'OpenQASM') repository_language_color = '#AA70FF';
else if (result.language == 'OpenRC runscript') repository_language_color = '#cccccc';
else if (result.language == 'OpenSCAD') repository_language_color = '#e5cd45';
else if (result.language == 'Org') repository_language_color = '#77aa99';
else if (result.language == 'Ox') repository_language_color = '#cccccc';
else if (result.language == 'Oxygene') repository_language_color = '#cdd0e3';
else if (result.language == 'Oz') repository_language_color = '#fab738';
else if (result.language == 'P4') repository_language_color = '#7055b5';
else if (result.language == 'Pan') repository_language_color = '#cc0000';
else if (result.language == 'Papyrus') repository_language_color = '#6600cc';
else if (result.language == 'Parrot') repository_language_color = '#f3ca0a';
else if (result.language == 'Parrot Assembly') repository_language_color = '#cccccc';
else if (result.language == 'Parrot Internal Representation') repository_language_color = '#cccccc';
else if (result.language == 'Pascal') repository_language_color = '#E3F171';
else if (result.language == 'Pawn') repository_language_color = '#dbb284';
else if (result.language == 'PEG.js') repository_language_color = '#234d6b';
else if (result.language == 'Pep8') repository_language_color = '#C76F5B';
else if (result.language == 'Perl') repository_language_color = '#0298c3';
else if (result.language == 'PHP') repository_language_color = '#4F5D95';
else if (result.language == 'PicoLisp') repository_language_color = '#6067af';
else if (result.language == 'PigLatin') repository_language_color = '#fcd7de';
else if (result.language == 'Pike') repository_language_color = '#005390';
else if (result.language == 'PLpgSQL') repository_language_color = '#336790';
else if (result.language == 'PLSQL') repository_language_color = '#dad8d8';
else if (result.language == 'PogoScript') repository_language_color = '#d80074';
else if (result.language == 'Pony') repository_language_color = '#cccccc';
else if (result.language == 'PostCSS') repository_language_color = '#dc3a0c';
else if (result.language == 'PostScript') repository_language_color = '#da291c';
else if (result.language == 'POV-Ray SDL') repository_language_color = '#6bac65';
else if (result.language == 'PowerBuilder') repository_language_color = '#8f0f8d';
else if (result.language == 'PowerShell') repository_language_color = '#012456';
else if (result.language == 'Prisma') repository_language_color = '#0c344b';
else if (result.language == 'Processing') repository_language_color = '#0096D8';
else if (result.language == 'Prolog') repository_language_color = '#74283c';
else if (result.language == 'Promela') repository_language_color = '#de0000';
else if (result.language == 'Propeller Spin') repository_language_color = '#7fa2a7';
else if (result.language == 'Pug') repository_language_color = '#a86454';
else if (result.language == 'Puppet') repository_language_color = '#302B6D';
else if (result.language == 'PureBasic') repository_language_color = '#5a6986';
else if (result.language == 'PureScript') repository_language_color = '#1D222D';
else if (result.language == 'Python') repository_language_color = '#3572A5';
else if (result.language == 'Python console') repository_language_color = '#3572A5';
else if (result.language == 'Python traceback') repository_language_color = '#3572A5';
else if (result.language == 'q') repository_language_color = '#0040cd';
else if (result.language == 'Q#') repository_language_color = '#fed659';
else if (result.language == 'QMake') repository_language_color = '#cccccc';
else if (result.language == 'QML') repository_language_color = '#44a51c';
else if (result.language == 'Qt Script') repository_language_color = '#00b841';
else if (result.language == 'Quake') repository_language_color = '#882233';
else if (result.language == 'R') repository_language_color = '#198CE7';
else if (result.language == 'Racket') repository_language_color = '#3c5caa';
else if (result.language == 'Ragel') repository_language_color = '#9d5200';
else if (result.language == 'Raku') repository_language_color = '#0000fb';
else if (result.language == 'RAML') repository_language_color = '#77d9fb';
else if (result.language == 'Rascal') repository_language_color = '#fffaa0';
else if (result.language == 'RDoc') repository_language_color = '#701516';
else if (result.language == 'REALbasic') repository_language_color = '#cccccc';
else if (result.language == 'Reason') repository_language_color = '#ff5847';
else if (result.language == 'Rebol') repository_language_color = '#358a5b';
else if (result.language == 'Record Jar') repository_language_color = '#0673ba';
else if (result.language == 'Red') repository_language_color = '#f50000';
else if (result.language == 'Redcode') repository_language_color = '#cccccc';
else if (result.language == 'Regular Expression') repository_language_color = '#009a00';
else if (result.language == 'Ren\'Py') repository_language_color = '#ff7f7f';
else if (result.language == 'RenderScript') repository_language_color = '#cccccc';
else if (result.language == 'ReScript') repository_language_color = '#ed5051';
else if (result.language == 'reStructuredText') repository_language_color = '#141414';
else if (result.language == 'REXX') repository_language_color = '#d90e09';
else if (result.language == 'Ring') repository_language_color = '#2D54CB';
else if (result.language == 'Riot') repository_language_color = '#A71E49';
else if (result.language == 'RMarkdown') repository_language_color = '#198ce7';
else if (result.language == 'RobotFramework') repository_language_color = '#00c0b5';
else if (result.language == 'Roff') repository_language_color = '#ecdebe';
else if (result.language == 'Roff Manpage') repository_language_color = '#ecdebe';
else if (result.language == 'Rouge') repository_language_color = '#cc0088';
else if (result.language == 'RPC') repository_language_color = '#cccccc';
else if (result.language == 'Ruby') repository_language_color = '#701516';
else if (result.language == 'RUNOFF') repository_language_color = '#665a4e';
else if (result.language == 'Rust') repository_language_color = '#dea584';
else if (result.language == 'Sage') repository_language_color = '#cccccc';
else if (result.language == 'SaltStack') repository_language_color = '#646464';
else if (result.language == 'SAS') repository_language_color = '#B34936';
else if (result.language == 'Sass') repository_language_color = '#a53b70';
else if (result.language == 'Scala') repository_language_color = '#c22d40';
else if (result.language == 'Scaml') repository_language_color = '#bd181a';
else if (result.language == 'Scheme') repository_language_color = '#1e4aec';
else if (result.language == 'Scilab') repository_language_color = '#ca0f21';
else if (result.language == 'SCSS') repository_language_color = '#c6538c';
else if (result.language == 'sed') repository_language_color = '#64b970';
else if (result.language == 'Self') repository_language_color = '#0579aa';
else if (result.language == 'ShaderLab') repository_language_color = '#222c37';
else if (result.language == 'Shell') repository_language_color = '#89e051';
else if (result.language == 'ShellCheck Config') repository_language_color = '#cecfcb';
else if (result.language == 'ShellSession') repository_language_color = '#cccccc';
else if (result.language == 'Shen') repository_language_color = '#120F14';
else if (result.language == 'Sieve') repository_language_color = '#cccccc';
else if (result.language == 'Singularity') repository_language_color = '#64E6AD';
else if (result.language == 'Slash') repository_language_color = '#007eff';
else if (result.language == 'Slice') repository_language_color = '#003fa2';
else if (result.language == 'Slim') repository_language_color = '#2b2b2b';
else if (result.language == 'Smali') repository_language_color = '#cccccc';
else if (result.language == 'Smalltalk') repository_language_color = '#596706';
else if (result.language == 'Smarty') repository_language_color = '#f0c040';
else if (result.language == 'SmPL') repository_language_color = '#c94949';
else if (result.language == 'SMT') repository_language_color = '#cccccc';
else if (result.language == 'Solidity') repository_language_color = '#AA6746';
else if (result.language == 'SourcePawn') repository_language_color = '#f69e1d';
else if (result.language == 'SPARQL') repository_language_color = '#0C4597';
else if (result.language == 'SQF') repository_language_color = '#3F3F3F';
else if (result.language == 'SQL') repository_language_color = '#e38c00';
else if (result.language == 'SQLPL') repository_language_color = '#e38c00';
else if (result.language == 'Squirrel') repository_language_color = '#800000';
else if (result.language == 'SRecode Template') repository_language_color = '#348a34';
else if (result.language == 'Stan') repository_language_color = '#b2011d';
else if (result.language == 'Standard ML') repository_language_color = '#dc566d';
else if (result.language == 'Starlark') repository_language_color = '#76d275';
else if (result.language == 'Stata') repository_language_color = '#1a5f91';
else if (result.language == 'StringTemplate') repository_language_color = '#3fb34f';
else if (result.language == 'Stylus') repository_language_color = '#ff6347';
else if (result.language == 'SubRip Text') repository_language_color = '#9e0101';
else if (result.language == 'SugarSS') repository_language_color = '#2fcc9f';
else if (result.language == 'SuperCollider') repository_language_color = '#46390b';
else if (result.language == 'Svelte') repository_language_color = '#ff3e00';
else if (result.language == 'SVG') repository_language_color = '#ff9900';
else if (result.language == 'Swift') repository_language_color = '#F05138';
else if (result.language == 'SWIG') repository_language_color = '#cccccc';
else if (result.language == 'SystemVerilog') repository_language_color = '#DAE1C2';
else if (result.language == 'Tcl') repository_language_color = '#e4cc98';
else if (result.language == 'Tcsh') repository_language_color = '#cccccc';
else if (result.language == 'Terra') repository_language_color = '#00004c';
else if (result.language == 'TeX') repository_language_color = '#3D6117';
else if (result.language == 'Textile') repository_language_color = '#ffe7ac';
else if (result.language == 'TextMate Properties') repository_language_color = '#df66e4';
else if (result.language == 'Thrift') repository_language_color = '#D12127';
else if (result.language == 'TI Program') repository_language_color = '#A0AA87';
else if (result.language == 'TLA') repository_language_color = '#4b0079';
else if (result.language == 'TOML') repository_language_color = '#9c4221';
else if (result.language == 'TSQL') repository_language_color = '#e38c00';
else if (result.language == 'TSV') repository_language_color = '#237346';
else if (result.language == 'TSX') repository_language_color = '#2b7489';
else if (result.language == 'Turing') repository_language_color = '#cf142b';
else if (result.language == 'Twig') repository_language_color = '#c1d026';
else if (result.language == 'TXL') repository_language_color = '#0178b8';
else if (result.language == 'TypeScript') repository_language_color = '#2b7489';
else if (result.language == 'Unified Parallel C') repository_language_color = '#4e3617';
else if (result.language == 'Unity3D Asset') repository_language_color = '#222c37';
else if (result.language == 'Unix Assembly') repository_language_color = '#cccccc';
else if (result.language == 'Uno') repository_language_color = '#9933cc';
else if (result.language == 'UnrealScript') repository_language_color = '#a54c4d';
else if (result.language == 'UrWeb') repository_language_color = '#ccccee';
else if (result.language == 'V') repository_language_color = '#4f87c4';
else if (result.language == 'Vala') repository_language_color = '#fbe5cd';
else if (result.language == 'Valve Data Format') repository_language_color = '#f26025';
else if (result.language == 'VBA') repository_language_color = '#867db1';
else if (result.language == 'VBScript') repository_language_color = '#15dcdc';
else if (result.language == 'VCL') repository_language_color = '#148AA8';
else if (result.language == 'Verilog') repository_language_color = '#b2b7f8';
else if (result.language == 'VHDL') repository_language_color = '#adb2cb';
else if (result.language == 'Vim Help File') repository_language_color = '#199f4b';
else if (result.language == 'Vim Script') repository_language_color = '#199f4b';
else if (result.language == 'Vim Snippet') repository_language_color = '#199f4b';
else if (result.language == 'Visual Basic .NET') repository_language_color = '#945db7';
else if (result.language == 'Volt') repository_language_color = '#1F1F1F';
else if (result.language == 'Vue') repository_language_color = '#41b883';
else if (result.language == 'wdl') repository_language_color = '#42f1f4';
else if (result.language == 'Web Ontology Language') repository_language_color = '#5b70bd';
else if (result.language == 'WebAssembly') repository_language_color = '#04133b';
else if (result.language == 'WebIDL') repository_language_color = '#cccccc';
else if (result.language == 'Wikitext') repository_language_color = '#fc5757';
else if (result.language == 'Windows Registry Entries') repository_language_color = '#52d5ff';
else if (result.language == 'wisp') repository_language_color = '#7582D1';
else if (result.language == 'Wollok') repository_language_color = '#a23738';
else if (result.language == 'World of Warcraft Addon Data') repository_language_color = '#f7e43f';
else if (result.language == 'X10') repository_language_color = '#4B6BEF';
else if (result.language == 'xBase') repository_language_color = '#403a40';
else if (result.language == 'XC') repository_language_color = '#99DA07';
else if (result.language == 'XML') repository_language_color = '#0060ac';
else if (result.language == 'XML Property List') repository_language_color = '#0060ac';
else if (result.language == 'Xojo') repository_language_color = '#81bd41';
else if (result.language == 'Xonsh') repository_language_color = '#285EEF';
else if (result.language == 'XProc') repository_language_color = '#cccccc';
else if (result.language == 'XQuery') repository_language_color = '#5232e7';
else if (result.language == 'XS') repository_language_color = '#cccccc';
else if (result.language == 'XSLT') repository_language_color = '#EB8CEB';
else if (result.language == 'Xtend') repository_language_color = '#24255d';
else if (result.language == 'Yacc') repository_language_color = '#4B6C4B';
else if (result.language == 'YAML') repository_language_color = '#cb171e';
else if (result.language == 'YARA') repository_language_color = '#220000';
else if (result.language == 'YASnippet') repository_language_color = '#32AB90';
else if (result.language == 'ZAP') repository_language_color = '#0d665e';
else if (result.language == 'Zeek') repository_language_color = '#cccccc';
else if (result.language == 'ZenScript') repository_language_color = '#00BCD1';
else if (result.language == 'Zephir') repository_language_color = '#118f9e';
else if (result.language == 'Zig') repository_language_color = '#ec915c';
else if (result.language == 'ZIL') repository_language_color = '#dc75e5';
else if (result.language == 'Zimpl') repository_language_color = '#d67711';
else repository_language_color = '#ECECEC';

switch (result.language) {
    case 'ActionScript':
        repository_language_color = '#E34F26';
        break;
    case 'Ada':
        repository_language_color = '#02f88c';
        break;
    case 'Agda':
        repository_language_color = '#315665';
        break;
    case 'Agda':
        repository_language_color = '#315665';
        break;
    case 'Alloy':
        repository_language_color = '#64C800';
        break;
    case 'Alpine Abuild':
        repository_language_color = '#cccccc';
        break;
    case 'AMPL':
        repository_language_color = '#E6EFBB';
        break;
    case 'AngelScript':
        repository_language_color = '#C7D7DC';
        break;
    case 'Ant Build System':
        repository_language_color = '#cccccc';
        break;
    case 'ANTLR':
        repository_language_color = '#9DC3FF';
        break;
    case 'ApacheConf':
        repository_language_color = '#efa91a';
        break;
    case 'Apex':
        repository_language_color = '#cccccc';
        break;
    case 'APL':
        repository_language_color = '#5A8164';
        break;
    case 'AppleScript':
        repository_language_color = '#101F1F';
        break;
    case 'Arc':
        repository_language_color = '#aa2afe';
        break;
    case 'Arduino':
        repository_language_color = '#bd79d1';
        break;
    case 'AsciiDoc':
        repository_language_color = '#9dcbfa';
        break
    case 'AspectJ':
        repository_language_color = '#a957b0';
        break;
    case 'Assembly':
        repository_language_color = '#6E4C13';
        break;
    case 'ATS':
        repository_language_color = '#1ac620';
        break;
    case 'Augeas':
        repository_language_color = '#cccccc';
        break;
    case 'AutoHotkey':
        repository_language_color = '#6594b9';
        break;
    case 'AutoIt':
        repository_language_color = '#1C3552';
        break;
    case 'Awk':
        repository_language_color = '#cccccc';
        break;
    case 'Batchfile':
        repository_language_color = '#C1F12E';
        break;
    case 'Befunge':
        repository_language_color = '#000000';
        break;
    case 'Bison':
        repository_language_color = '#6A3A4C';
        break;
    case 'BitBake':
        repository_language_color = '#cccccc';
        break;
    case 'BlitzBasic':
        repository_language_color = '#000000';
        break;
    case 'BlitzMax':
        repository_language_color = '#cd6400';
        break;
    case 'Bluespec':
        repository_language_color = '#cccccc';
        break;
    case 'Boo':
        repository_language_color = '#d4bec1';
        break;
    case 'Brainfuck':
        repository_language_color = '#2F2530';
        break;
    case 'Brightscript':
        repository_language_color = '#cccccc';
        break;
    case 'Bro':
        repository_language_color = '#5A6986';
        break;
    case 'C':
        repository_language_color = '#555555';
        break;
    case 'C#':
        repository_language_color = '#178600';
        break;
    case 'C++':
        repository_language_color = '#f34b7d';
        break;
    case 'C++11':
        repository_language_color = '#f34b7d';
        break;
    case 'C++14':
        repository_language_color = '#f34b7d';
        break;
    case 'C++17':
        repository_language_color = '#f34b7d';
        break;
    case 'C++20':
        repository_language_color = '#f34b7d';
        break;
    case 'Ceylon':
        repository_language_color = '#dfa535';
        break;
    case 'Chapel':
        repository_language_color = '#8dc63f';
        break;
    case 'Charity':
        repository_language_color = '#cccccc';
        break;
    case 'ChucK':
        repository_language_color = '#6600cc';
        break;
    case 'Cirru':
        repository_language_color = '#cccccc';
        break;
    case 'Clarion':
        repository_language_color = '#db901e';
        break;
    case 'Clean':
        repository_language_color = '#3F85AF';
        break;
    case 'Clojure':
        repository_language_color = '#db5855';
        break;
    case 'CMake':
        repository_language_color = '#ffff00';
        break;
    case 'COBOL':
        repository_language_color = '#EAC117';
        break;
    case 'CoffeeScript':
        repository_language_color = '#244776';
        break;
    case 'ColdFusion':
        repository_language_color = '#ed2cd6';
        break;
    case 'ColdFusion CFC':
        repository_language_color = '#ed2cd6';
        break;
    case 'Common Lisp':
        repository_language_color = '#3fb68b';
        break;
    case 'Common Workflow Language':
        repository_language_color = '#B5314C';
        break;
    case 'Component Pascal':
        repository_language_color = '#B0CE4E';
        break;
    case 'Cool':
        repository_language_color = '#cccccc';
        break;
    case 'Coq':
        repository_language_color = '#cccccc';
        break;
    case 'Crystal':
        repository_language_color = '#000100';
        break;
    case 'Csound':
        repository_language_color = '#ffad19';
        break;
    case 'Csound Document':
        repository_language_color = '#ffad19';
        break;
    case 'Csound Score':
        repository_language_color = '#ffad19';
        break;
    case 'CSS':
        repository_language_color = '#563d7c';
        break;
    case 'CSV':
        repository_language_color = '#ffad19';
        break;
    case 'Cuda':
        repository_language_color = '#3A4E3A';
        break;
    case 'CWeb':
        repository_language_color = '#cccccc';
        break;
    case 'Cycript':
        repository_language_color = '#cccccc';
        break;
    case 'Cython':
        repository_language_color = '#000000';
        break;
    case 'D':
        repository_language_color = '#ba595e';
        break;
    case 'Darcs Patch':
        repository_language_color = '#cccccc';
        break;
    case 'Dart':
        repository_language_color = '#00B4AB';
        break;
    case 'DataWeave':
        repository_language_color = '#cccccc';
        break;
    case 'Dhall':
        repository_language_color = '#cccccc';
        break;
    case 'Diff':
        repository_language_color = '#cccccc';
        break;
    case 'DIGITAL Command Language':
        repository_language_color = '#cccccc';
        break;
    case 'DM':
        repository_language_color = '#447265';
        break;
    case 'Dogescript':
        repository_language_color = '#cca760';
        break;
    case 'DTrace':
        repository_language_color = '#cccccc';
        break;
    case 'Dylan':
        repository_language_color = '#3E6EAD';
        break;
    case 'E':
        repository_language_color = '#cccccc';
        break;
    case 'Eagle':
        repository_language_color = '#814C05';
        break;
    case 'Ecere Projects':
        repository_language_color = '#cccccc';
        break;
    case 'ECL':
        repository_language_color = '#8a1267';
        break;
    case 'Eiffel':
        repository_language_color = '#946d57';
        break;
    case 'Elixir':
        repository_language_color = '#6e4a7e';
        break;
    case 'Elm':
        repository_language_color = '#60B5CC';
        break;
    case 'Emacs Lisp':
        repository_language_color = '#c065db';
        break;
    case 'EmberScript':
        repository_language_color = '#FFF4F3';
        break;
    case 'EQ':
        repository_language_color = '#a78649';
        break;
    case 'Erlang':
        repository_language_color = '#B83998';
        break;
    case 'F#':
        repository_language_color = '#b845fc';
        break;
    case 'Factor':
        repository_language_color = '#636746';
        break;
    case 'Fancy':
        repository_language_color = '#7b9db4';
        break;
    case 'Fantom':
        repository_language_color = '#cccccc';
        break;
    case 'Filebench WML':
        repository_language_color = '#cccccc';
        break;
    case 'Filterscript':
        repository_language_color = '#cccccc';
        break;
    case 'fish':
        repository_language_color = '#cccccc';
        break;
    case 'FLUX':
        repository_language_color = '#cccccc';
        break;
    case 'Formatted':
        repository_language_color = '#cccccc';
        break;
    case 'Forth':
        repository_language_color = '#341708';
        break;
    case 'Fortran':
        repository_language_color = '#4d41b1';
        break;
    case 'FreeMarker':
        repository_language_color = '#0050b2';
        break;
    case 'Frege':
        repository_language_color = '#cccccc';
        break;
    case 'G-code':
        repository_language_color = '#D08CF2';
        break;
    case 'GAMS':
        repository_language_color = '#cccccc';
        break;
    case 'GAP':
        repository_language_color = '#4A76B8';
        break;
    case 'GCC Machine Description':
        repository_language_color = '#cccccc';
        break;
    case 'GDB':
        repository_language_color = '#cccccc';
        break;
    case 'GDScript':
        repository_language_color = '#cccccc';
        break;
    case 'Genshi':
        repository_language_color = '#cccccc';
        break;
    case 'Gentoo Ebuild':
        repository_language_color = '#cccccc';
        break;
    case 'Gentoo Eclass':
        repository_language_color = '#cccccc';
        break;
    case 'Gerber Image':
        repository_language_color = '#cccccc';
        break;
    case 'Gettext Catalog':
        repository_language_color = '#000000';
        break;
    case 'Gherkin':
        repository_language_color = '#5B2063';
        break;
    case 'GLSL':
        repository_language_color = '#cccccc';
        break;
    case 'Glyph':
        repository_language_color = '#e4cc98';
        break;
    case 'Gnuplot':
        repository_language_color = '#f0a9f0';
        break;
    case 'Go':
        repository_language_color = '#00ADD8';
        break;
    case 'Golo':
        repository_language_color = '#88562A';
        break;
    case 'Gosu':
        repository_language_color = '#82937f';
        break;
    case 'Grace':
        repository_language_color = '#8fdea2';
        break;
    case 'Gradle':
        repository_language_color = '#cccccc';
        break;
    case 'Grammatical Framework':
        repository_language_color = '#cccccc';
        break;
    case 'Graph Modeling Language':
        repository_language_color = '#000000';
        break;
    case 'GraphQL':
        repository_language_color = '#000000';
        break;
    case 'Graphviz (DOT)':
        repository_language_color = '#cccccc';
        break;
    case 'Groovy':
        repository_language_color = '#e69f56';
        break;
    case 'Groovy Server Pages':
        repository_language_color = '#e69f56';
        break;
    case 'HCL':
        repository_language_color = '#cccccc';
        break;
    case 'HLSL':
        repository_language_color = '#cccccc';
        break;
    case 'HTML':
        repository_language_color = '#e34c26';
        break;
    case 'HTML+Django':
        repository_language_color = '#cccccc';
        break;
    case 'HTML+ECR':
        repository_language_color = '#cccccc';
        break;
    case 'HTML+EEX':
        repository_language_color = '#cccccc';
        break;
    case 'HTML+ERB':
        repository_language_color = '#cccccc';
        break;
    case 'HTML+PHP':
        repository_language_color = '#cccccc';
        break;
    case 'HTTP':
        repository_language_color = '#cccccc';
        break;
    case 'Hack':
        repository_language_color = '#878787';
        break;
    case 'Haml':
        repository_language_color = '#cccccc';
        break;
    case 'Handlebars':
        repository_language_color = '#01a9d6';
        break;
    case 'Harbour':
        repository_language_color = '#0e60e3';
        break;
    case 'Haskell':
        repository_language_color = '#5e5086';
        break;
}

                    

                    // repo 언어 이름 설정
                    repository_language_name = result.language;

                    // repo 스타 개수 설정
                    repository_stars_count = result.stargazers_count;

                    // repo 링크 설정
                    repository_link = `https://github.com/${result.full_name}`;

                    $(property).append(`<a href="${repository_link}" target="_blank" class="repository-name">${repository_name}</a><div class="repository-des">${repository_description}</div><div class="repository-footer"><div class="repository-footer-box"><div class="repository-language-color" style="background-color: ${repository_language_color};"></div><div class="repository-language-name">${repository_language_name}</div></div><div class="repository-footer-box"><span class="material-icons">star_outline</span><div class="repository-starts-count">${repository_stars_count}</div></div></div>`);
                }
            },
            error: function(request, status, error) {
                $(property).empty();

                if(request.status == 404) {
                    $(property).append(`<a href="https://github.com/${$(property).attr('id')}" target="_blank" class="repository-name">표시 할 수 없는 레포지토리.</a><div class="repository-des">비공개 또는 존재하지 않는 레포지토리입니다.</div>`);
                }
                else if(request.status == 403) {
                    $(property).append(`<a href="https://github.com/${$(property).attr('id')}" target="_blank" class="repository-name">너무 많은 요청.</a><div class="repository-des">너무 많이 요청하신 것 같습니다.</div>`);
                }
                else if(request.status == 301) {
                    $(property).append(`<a href="https://github.com/${$(property).attr('id')}" target="_blank" class="repository-name">이동됨.</a><div class="repository-des">영구적으로 이동된 레포지토리입니다.</div>`);
                }
                else {
                    $(property).append(`<a href="https://github.com/${$(property).attr('id')}" target="_blank" class="repository-name">알 수 없는 오류.</a><div class="repository-des">알 수 없는 오류가 발생했습니다.</div>`);
                }
            }
        });
    }

    for(var i = 0; i < document.querySelectorAll('.github-repository').length; i++) {
        $(document.querySelectorAll('.github-repository')[i]).empty();
        $(document.querySelectorAll('.github-repository')[i]).append('<div class="loading-box"><div class="loading-circle"></div></div>');
        
        load_repository(document.querySelectorAll('.github-repository')[i]);
    }
});
