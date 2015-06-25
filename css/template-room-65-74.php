<?php
/*
Template Name: 1 комнатная квартира (43,35м2)
*/

get_header(); ?>

<?php 
$query1 = new WP_Query('page_id=166');
while($query1->have_posts()) $query1->the_post(); ;?>
<?php the_content(); ?>
<?php wp_reset_query(); ?>

<!-- center -->
<div class="center">
	<?php if(get_locale() == 'ru_RU') { ?>
	
	<?php } else { ?>
	
	<?php } ?>
</div>

<?php get_footer(); ?>
