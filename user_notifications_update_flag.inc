<?php

/**
 * Query - Update timestamp of flag.
 * @param $time
 */
function update_user_flag($time) {
  global $user;
  $current_time = time();
  if ($current_time >= $time) {
    db_update('flagging')
      ->fields(array(
        'timestamp' => $time,
      ))
      ->condition('uid', $user->uid, '=')
      ->condition('entity_type', 'user', '=')
      ->condition('fid', 1, '=')
      ->condition('timestamp', $time, '<')
      ->execute();

    // Reset cookie server_time to new time value.
    setcookie('server_time', $current_time, time()+86400, '/');
  }
}