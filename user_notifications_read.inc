<?php

/**
 * Menu callback: Set flag - user_notification_read for current comment
 */
function user_notifications_read($cid) {
  global $user;
  watchdog('user_notifications', 'Start: user_notifications_read function call.');
  $current_time = time();
  $cid_int = intval($cid);
  db_insert('flagging')
    ->fields(array(
      'fid' => 2,
      'entity_type' => 'comment',
      'entity_id' => $cid_int,
      'uid' => $user->uid,
      'sid' => 0,
      'timestamp' => $current_time,
    ))->execute();
  watchdog('user_notifications', 'End: user_notifications_read function call.');
}