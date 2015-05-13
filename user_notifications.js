(function ($) {
    Drupal.behaviors.user_notifications = {
        attach: function (context, settings) {
            // Flag click event listener.
            $('.notify-icon').click(function(e) {
                $('.notify-list').toggle();

                // Send AJAX request only when .notify-count is visible.
                if ($('.notify-count').is(':visible')) {
                    $('.notify-count').remove();
                    var serverTime = $.cookie("server_time");
                    $.ajax({
                        url: 'user_notifications/notify/' + serverTime,
                        type: 'PUT'
                    });
                }

                // Put targeted object in variable.
                var $this = $(this);
                if ($('.notify-count').length || $('.notify-list').is(':visible')) {
                    $this.children().first().attr("src", "sites/all/modules/user_notifications/images/flag-light.png");
                } else {
                    $this.children().first().attr("src", "sites/all/modules/user_notifications/images/flag-dark.png");
                }
                e.stopPropagation();
            });

            // Set timeout to Poll server for new comments.
            (function poll() {
                setTimeout(function() {
                    var serverTime = $.cookie("server_time");
                    var ajaxUrl = 'user_notifications/poll/' + serverTime;
                    $.ajax({
                        url: ajaxUrl,
                        type: 'GET',
                        dataType: "json",
                        success: function(data) {
                            $('.notify-icon li').replaceWith(data);
                            console.log(data);
                        },
//                        error: function(e, text, errorThrown) {
//                            console.log(text, errorThrown);
//                        },
                        complete: poll
                    });
                    console.log('end ajax method');
                }, 5000);
            })();

            // Notification clickable area - event listener.
            $('div.notify-container').on('click', function(e) {
                if ( $(this).hasClass('notify-unread')) {
                    var commentId = $(this).children('p').children('a').attr('comment_id');
                    $(this).removeClass('notify-unread');
                    var commentUrl = 'comment/' + commentId + '/read';
                    $.ajax({
                        url: commentUrl,
                        type: 'PUT'
                    });
                }
                var commentLink = $(this).children('p').children('a').attr('href');
                e.stopPropagation();
                window.location.href = commentLink;
            });
        }
    };
}(jQuery));
