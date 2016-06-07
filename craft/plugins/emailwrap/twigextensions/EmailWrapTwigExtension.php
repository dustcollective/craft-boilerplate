<?php
namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class EmailWrapTwigExtension extends \Twig_Extension
{

	public function getName()
    {
        return 'Email Wrap';
    }

	public function getFilters()
	{
	    return array(
	        'emailwrap' => new Twig_Filter_Method($this, 'emailwrap'),
	    );
	}

	public function emailwrap($string) {

		$string = str_replace('@', '@<wbr>', $string);
		$string = str_replace('.', '.<wbr>', $string);
		$string = str_replace('-', '-<wbr>', $string);

		return $string;

	}

	public function strToAnchor($string) {

		$string = preg_replace("#[[:punct:]]#", "", $string);;
		$string = preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $string);
		$string = str_replace(' ', '-', $string);
		$string = strtolower($string);

		return $string;

	}

}
