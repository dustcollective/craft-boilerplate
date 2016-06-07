<?php
namespace Craft;
class CacheyPlugin extends BasePlugin {


    function rrmdir($dir) { 
        if (is_dir($dir)) { 
             $objects = scandir($dir); 
             //print_r($objects);
             foreach ($objects as $object) { 
               if ($object != "." && $object != "..") { 
                 if (is_dir($dir."/".$object))
                   $this->rrmdir($dir."/".$object);
                 else
                   unlink($dir."/".$object); 
               } 
            }
            rmdir($dir); 
        } 
    }

    function init() {
        craft()->entries->onSaveEntry = function(Event $event) {
            $path = realpath(CRAFT_BASE_PATH . DIRECTORY_SEPARATOR . '../../cache'); 

            $files = glob($path . '/*'); // get all file names

            //print_r($files);

            foreach($files as $file) { // iterate files
                if (is_dir($file)) {
                    $this->rrmdir($file);
                } else if (is_file($file)) {
                    unlink($file); 
                }
            }
        };
    }

    function getName()
    {
         return Craft::t('Cachey');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Dan Womersley';
    }

    function getDeveloperUrl()
    {
        return 'http://du.st';
    }
}