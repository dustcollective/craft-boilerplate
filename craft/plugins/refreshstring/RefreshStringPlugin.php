<?php
namespace Craft;

class RefreshStringPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Refresh String');
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
	    Craft::import('plugins.refreshstring.twigextensions.RefreshStringTwigExtension');

	    return new RefreshStringTwigExtension();
	}
}
