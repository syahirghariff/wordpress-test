/**
 * Salient colorpicker init.
 *
 * @package Salient
 * @author ThemeNectar
 */
 /* global jQuery */
 
jQuery(document).ready(function ($) {
  "use strict";
  $('[id*="nectar-metabox-"] input.popup-colorpicker:not(.sc-gen), .nectar-term-colorpicker').wpColorPicker({
    palettes: ['#27CCC0', '#f6653c', '#2ac4ea', '#ae81f9', '#FF4629', '#78cd6e']
  });
});
