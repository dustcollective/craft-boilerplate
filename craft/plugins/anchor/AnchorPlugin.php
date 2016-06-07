<?php
namespace Craft;

class AnchorPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Anchor');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Michael Westwood';
    }

    function getDeveloperUrl()
    {
        return 'https://twitter.com/mijewe/';
    }

	function getSourceLanguage()
	{
	    return 'en_gb';
	}

	public function addTwigExtension()
	{
	    Craft::import('plugins.anchor.twigextensions.AnchorTwigExtension');

	    return new AnchorTwigExtension();
	}
}
