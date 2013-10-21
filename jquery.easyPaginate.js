/* 
 * easyPaginate | a jQuery plugin for easy pagination
 * @author Srihari Goud
 * @Link http://w3easystep.info
 */
(function($) {
    $.fn.easyPaginate = function(option) {
        option = $.extend({}, $.fn.easyPaginate.option, option); //extending defaults
        option.pages = option.pages ? option.pages : Math.ceil(option.items / option.itemsOnPage) ? Math.ceil(option.items / option.itemsOnPage) : 1;
        return this.each(function() {
            var self = this;
            var elem = $(this);
            init(option.currentPage);// initializing the pagination
            function init(page) {
                option.currentPage = page ? page : option.currentPage;
                var next = parseInt(option.currentPage) + parseInt(1),
                        prev = Math.abs(parseInt(option.currentPage) - parseInt(1));
                var p = [];
                p.push('<div class="g-ftr"><div class="g-m pagcewn">');
                p.push('<a ' + (option.currentPage > 1 ? '"  rel="1"  class="btn"' : 'class="btn disabled"') + '><i class="icon-step-backward"></i></a>');
                p.push('<a ' + (prev > 0 ? '"  rel="' + prev + '" class="btn"' : ' class="btn disabled"') + ' ><i class="icon-backward"></i></a>');

                var startLoopfrom = parseInt(option.currentPage) - parseInt(option.sides);
                var endLoopfrom = parseInt(option.currentPage) + parseInt(option.sides);
                var startPage = (startLoopfrom > 0) ? startLoopfrom : 1;
                var endPage = (endLoopfrom < parseInt(option.pages)) ? endLoopfrom : option.pages;
                if (startPage>1 && startPage-1 != '1') {
                        p.push('<a class="btn ' + (option.currentPage == 1 ? 'btn-primary disabled current' : "") + '" rel="' + 1 + '">' + 1 + '</a>');
                        //p.push(['<a class="p_btn"><span class="inner_btn"><span class="label '+className+'" onClick="_getData('+n+')" >'+n+'</span></span></a>'].join(""));
                    p.push('<a class="dots disabled">',option.ellipseText,'</a>');
                } else if (startPage-1 == '1') {
                        p.push('<a class="btn ' + (option.currentPage == 1 ? 'btn-primary disabled current' : "") + '" rel="' + 1 + '">' + 1 + '</a>');

                }
                for (var n = startPage; n <= endPage; n++) {
                    p.push('<a class="btn ' + (option.currentPage == n ? 'btn-primary disabled current' : "") + '" rel="' + n + '">' + n + '</a>');
                    //p.push(['<a class="p_btn"><span class="inner_btn"><span class="label '+className+'" onClick="_getData('+n+')" >'+n+'</span></span></a>'].join(""));
                }

                if (endPage < option.pages && option.pages - endPage != '1') {
                    p.push('<a class="dots disabled">',option.ellipseText,'</a>');
                    p.push('<a class="btn ' + (option.currentPage == option.pages ? 'btn-primary disabled current' : "") + '" rel="' + option.pages + '">' + option.pages + '</a>');
                    //p.push(['<a class="p_btn"><span class="inner_btn"><span class="label '+className+'" onClick="_getData('+n+')" >'+n+'</span></span></a>'].join(""));

//                    p.push('<a class="btn ' + (option.currentPage == option.pages ? 'btn-primary disabled current' : "") + '" rel="' + option.pages + '">' + option.pages + '</a>');
                } else if (option.pages - endPage == '1') {
                    p.push('<a class="btn ' + (option.currentPage == option.pages ? 'btn-primary disabled current' : "") + '" rel="' + option.pages + '">' + option.pages + '</a>');
                }

                p.push('<a ' + (next <= option.pages ? '"  rel="' + next + '" class="btn"' : ' class="btn disabled"') + ' ><i class="icon-forward"></a>');
                p.push('<a ' + (option.pages > option.currentPage ? '"  rel="' + option.pages + '"  class="btn"' : 'class="btn disabled"') + '><i class="icon-step-forward"></a>');

                p.push('</div></div>');
                elem.html(p);
                $('a.btn', elem).css({
                    'margin': '4px',
                    'text-decoration': 'none'
                });
                $('a:not(.disabled)', elem).click(function() {
                    var page = $(this).attr('rel'), ME = $(this);
                    init(page);
                    option.onClickcallback(page);
                });
            }
            function getPage(page) {
                return option.currentPage;
            }
            $('a.current', elem).trigger('click');
            option.onInit();

            return this;
        });

    };

    $.fn.easyPaginate.option = {
        items: 100,
        itemsOnPage: 10,
        pages: 0,
        edges: 2,
        sides: 2,
        ellipseText: '&hellip;',
        currentPage: 1,
        ellipseText: '&hellip;',
        onInit: function() {
        },
        gePage: function(page) {
        },
        onClickcallback: function(page) {
        }
    };
})(jQuery);

