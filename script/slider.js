;(function () {
    $(document).ready(function () {

        const options = {
            sliderContainer: ".slider",
            sliderList: ".slider__list",
            sliderItems: ".slider__item",
            sliderNav: ".slider__nav",
            sliderBullitList: ".bullits__list",
            sliderBullits: ".bullit",
            sliderNavTxtBlock: ".slider__nav_text_block",
            sliderNavTxt: ".slider__nav_text",
            speed: 4
        };

        class Slider {
            constructor(container) {
                this._container = container;
                this._slideList = $(this._container).children(options.sliderList);
                this._slideItems = this._slideList.children(options.sliderItems);
                this._sliderNav = $(this._container).children(options.sliderNav);
                this._sliderBullitsList = this._sliderNav.children(options.sliderBullitList);
                this._sliderBullits = this._sliderBullitsList.children(options.sliderBullits);
                this._sliderNavTxtBlock = this._sliderNav.children(options.sliderNavTxtBlock);
                this._sliderNavTxt = this._sliderNavTxtBlock.children(options.sliderNavTxt);
                this.slideNumber = 0;

                this.slide = () => {
                    this.slideNumber++;
                    if (this.slideNumber > this._slideItems.length - 1) {
                        this.slideNumber = 0;
                    }
                    this._slideItems.fadeOut();
                    this._sliderNavTxt.text(`0${this.slideNumber + 1}`);
                    this._sliderBullits.removeClass('active');
                    this._sliderBullits.eq(this.slideNumber).addClass('active');
                    this._slideItems.eq(this.slideNumber).fadeIn();
                    return this;
                };

                this.bullitClick = () => {
                    const self = this;
                    return function() {
                        let index = $(this).index();
                        self._sliderBullits.removeClass('active');
                        self._slideItems.fadeOut();
                        self._slideItems.eq(index).fadeIn();
                        self._sliderNavTxt.text(`0${index + 1}`);
                        $(this).addClass('active');
                    }
                };

                this._sliderBullits.click(this.bullitClick());
            }

            start() {
                setInterval(this.slide, options.speed * 1000);
            }
        }


        const SLIDER = new Slider($(options.sliderContainer));
        SLIDER.start();
    });
})();