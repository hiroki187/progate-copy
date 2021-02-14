$(function () {
    $('.p-top-language-text-wrap').hide();
    $('.p-top-language-select').on('click', function () {
            $('.p-top-language-text-wrap').toggle();
        return false;
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).closest('.p-top-language-text-wrap').length) {
            console.log('外側がクリックされました。');
            $('.p-top-language-text-wrap').hide();
        } else {
        }
    });
});