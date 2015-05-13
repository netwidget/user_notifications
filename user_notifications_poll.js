(function($){

    /**
     * Add an extra function to the Drupal ajax object
     * which allows us to trigger an ajax response without
     * an element that triggers it.
     */
    Drupal.ajax.prototype.specifiedResponse = function() {
        var ajax = this;

        // Do not perform another ajax command if one is already in progress.
        if (ajax.ajaxing) {
            return false;
        }

        try {
            $.ajax(ajax.options);
        }
        catch (err) {
            alert('An error occurred while attempting to process ' + ajax.options.url);
            return false;
        }

        return false;
    };

    // Set timeout to Poll server for new comments.
            (function poll() {
                setTimeout(function() {
                    var serverTime = $.cookie("server_time");
                    var ajaxUrl = 'user_notifications/poll/' + serverTime;
                    $.getJSON(ajaxUrl, function(resp){console.log(resp)});
//                    $.ajax({
//                        url: ajaxUrl,
//                        type: 'GET',
//                        dataType: "json",
//                        success: function(data) {
//////                            var $unContent = $('.notify-icon', data);
//////                            var html = $unContent.html();
//                            console.log(data);
//                        },
//                        complete: poll
//                    });
                    console.log('end ajax method');
                }, 5000);
            })();

    /**
     * Define a custom ajax action not associated with an element.
     */
    var custom_settings = {};
    custom_settings.url = 'user_notifications/poll/' + serverTime + '/' + 'ajax';
    custom_settings.event = 'onload';
    custom_settings.keypress = false;
    custom_settings.prevent = false;
    Drupal.ajax['pollTimer'] = new Drupal.ajax(null, $(document.body), custom_settings);

    /**
     * Define a point to trigger our custom actions. e.g. on page load.
     */
    $(document).ready(function() {
        Drupal.ajax['pollTimer'].specifiedResponse();
    });

})(jQuery);