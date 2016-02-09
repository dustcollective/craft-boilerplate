<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'dateFormat' => 'jS F Y',
        'defaultFilePermissions' => 0664,
        'defaultFolderPermissions' => 0775,
        'addTrailingSlashesToUrls' => true,
        'limitAutoSlugsToAscii' => true,
        'useEmailAsUsername' => true,
        'convertFilenamesToAscii' => true,
        'defaultImageQuality' => 100,
        'maxUploadFileSize' => 40000000,
        'omitScriptNameInUrls' => true,
        'defaultCookieDomain' => '.example.com',
        'defaultWeekStartDay' => 1,
        'preserveImageColorProfiles' => true,
        'gaCode' => false
    ),

    // Settings when developing locally.
    'example.dev' => array(
        'devMode' => true,
        'siteUrl' => array(
            // 'en' => 'http://example.dev/',
        ),
        'trackUsers' => false,
        'omitScriptNameInUrls' => false,
        'defaultCookieDomain' => ''
    ),

    // Settings when on the live site.
    'example.com' => array(
        'siteUrl' => array(
            // 'en' => 'http://example.com/',
        ),
        'trackUsers' => true
    ),

    // Settings when on the staging site.
    'staging.example.com' => array(
        'siteUrl' => array(
            // 'en' => 'http://staging.example.com/',
        ),
        'trackUsers' => false
    )
);
