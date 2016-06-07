<?php
namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class RefreshStringTwigExtension extends \Twig_Extension
{

	public function getName()
    {
        return 'Refresh String';
    }

	public function getFilters()
	{
	    return array(
	        'refreshString' => new Twig_Filter_Method($this, 'refreshString'),
	    );
	}

	public function refreshString($filename) {

		if (file_exists($filename)) {
			return $filename . '?' . $this->getModDate($filename);
		} else {
			return $filename;
		}

	}

	public function getModDate($filename) {

		return filemtime('.' . $filename);

	}

}
