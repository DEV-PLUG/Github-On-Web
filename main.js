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
                    if(result.language == 'JavaScript') repository_language_color = '#f1e05a';
                    else if(result.language == 'TypeScript') repository_language_color = '#2b7489';
                    else if(result.language == 'CSS') repository_language_color = '#563d7c';
                    else repository_language_color = '#ECECEC';

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