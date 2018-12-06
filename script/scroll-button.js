;(function () {
    $(document).ready(function () {
       class ScrollBtn {
           constructor(element) {
               this._element = element;
               this._element.click(function () {
                    $("html, body").animate({scrollTop: 1045}, 500);
               });
           }
       }

        const SCROLL_BUTTON = new ScrollBtn($('.scroll_block'));
    });
})();