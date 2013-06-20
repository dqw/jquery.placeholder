/*
 * 为低版本IE添加placeholder效果
 *
 */

;(function($) {
    $.fn.placeholder = function() {
        var isPlaceholder = 'placeholder' in document.createElement('input');
        return this.each(function() {
            if(!isPlaceholder) {
                var $element = $(this);
                var $clone = $(this).clone();
                $clone.attr('id', '');
                $clone.attr('name', '');
                if($element.val() === '') {
                    $clone.val($element.attr('placeholder'));
                    $clone.attr('data-placeholder', 'true');
                    $element.after($clone);
                    $element.hide();
                }
                $clone.focus(function() {
                    if($clone.attr('placeholder') === $clone.val() && $clone.attr('data-placeholder') === 'true') {
                        $clone.val('');
                        $clone.attr('data-placeholder', 'false');
                    }
                }).blur(function() {
                    if($clone.val() === '' || $clone.attr('data-placeholder') === 'true') {
                        $clone.val($clone.attr('placeholder'));
                        $clone.attr('data-placeholder', 'true');
                        $element.val('');
                    } else {
                        $element.val($clone.val());
                    }
                }).blur();
            }
        });
    };
})(jQuery);

