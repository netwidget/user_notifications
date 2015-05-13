<?php
/**
 * @file
 * HTML for an item in the user notification block listing.
 *
 * Available variables:
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - user-notifications-block-item:  the current template type, i.e., "theming hook".
 *   - $author: A renderable array that displays the full name of the comment
 *   author along with a link to the authors profile.
 *   - $author_avatar: A renderable array that provides a thumbnail and a link
 *   the comment authors profile information.
 *   - $date: Formatted creation date. Preprocess funcitons can reformat it
 *   by calling format_date() with the desired parameters on the $created varaible.
 *   - $name: Themed username of the comment author output from theme_username().
 *   - $node_title: A renderable array that provides a title and link to the node
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * Other Variables:
 * The following variables are provided for contextual information.
 * - $created: Time the comment was created and published fomratted in Unix timestap.
 * - $node_title: Title of the node the on which the comment was created.
 * - $user: The user object of the comment author.
 *
 * @see template_preprocess_user_notifications_block_item()
 */


/**
* Example form the Drupal module dev.
*
* <div class="<?php print $classes; ?>">
*   <div class="date"><?php print $date; ?>:</div>
*   <h4 <?php print $title_attributes; ?>>
*     <?php print render($title); ?></h4>
*   <div class="name">
*     <?php print t('by !username', array('!username' => $name)); ?>
*   </div>
* </div>
*/
?>
<div class="notify-container <?php print render($read_status); ?>">
  <?php print render($avatar); ?>
  <p>
  <?php print render($comment_author) . ' '; ?>commented on:<br />
  <?php print render($title); ?><br />
  <?php print render($teaser); ?> ...<br />
  <?php print render($date); ?><br />
  </p>
</div>