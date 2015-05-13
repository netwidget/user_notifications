<?php

function user_notifications_poll($server_time)  {
  global $user;

  // Check for new comments.
//  $result = db_query(
//    'SELECT
//      count(c.cid) AS cid
//     FROM {comment} c
//     WHERE c.status = 1
//      AND c.uid <> :uid
//      AND c.created > :server_time
//      AND c.changed > :server_time
//      AND c.nid IN(
//        SELECT cn.nid AS nid
//        FROM {comment} cn
//        WHERE cn.status = 1 AND cn.uid = :uid GROUP BY cn.nid)',
//      array(':uid' => $user->uid, ':server_time' => $server_time));
////  if ($result > 0) {
    $content = user_notifications_content();
//    $html = render($content);
//    watchdog('notifications-poll', 'before $html is declared.');
//    $html = array("Time" => $server_time);
    $json_text = drupal_json_output($content);
////    print($server_time);
    return $json_text;

//    $commands = array();
//    $commands[] = ajax_command_replace('.notify-icon', $content);
//    return (array('#type' => 'ajax', '#commands' => $commands));
//  }
}
