;(function () {
    $(document).ready(function () {
        class DropdownPare {
            constructor(dropdownBtn, dropDownMenu) {
                this._button = dropdownBtn;
                this._menu = dropDownMenu;
                this.isHidden = true;
                this._button.click(this.click(this));
            }

            click(self) {
                return function() {
                    if (self.isHidden) {
                        let height = self._menu.get($(this).index()).scrollHeight;
                        self._menu.height(height);
                    } else {
                        self._menu.height(0);
                    }

                    self.isHidden = !self.isHidden;
                };
            }
        }

        const DROPDOWN = new DropdownPare($('#header__hamb-btn'), $('#header__dropdown-menu'));
    });
})();