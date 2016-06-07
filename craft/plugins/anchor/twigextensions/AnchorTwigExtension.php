<?php
namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class AnchorTwigExtension extends \Twig_Extension
{

	public function getName()
    {
        return 'Anchor';
    }

	public function getFilters()
	{
	    return array(
	        'anchor' => new Twig_Filter_Method($this, 'anchor'),
	    );
	}

	public function anchor($string) {

		return $this->strToAnchor($string);

	}

	public function strToAnchor($string) {

		$string = preg_replace("#[[:punct:]]#", "", $string);;
		$string = preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $string);
		$string = str_replace(' ', '-', $string);
		$string = strtolower($string);

		return $string;

	}

}
