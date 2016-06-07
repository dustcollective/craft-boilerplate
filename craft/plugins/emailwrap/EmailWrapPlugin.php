<?php
namespace Craft;

class EmailWrapPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Email Wrap');
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
	    Craft::import('plugins.emailwrap.twigextensions.EmailWrapTwigExtension');

	    return new EmailWrapTwigExtension();
	}
}
