## PHP_CodeSniffer
PHP_CodeSniffer is a set of two PHP scripts; the main phpcs script that tokenizes PHP, JavaScript and CSS files to detect violations of a defined coding standard, and a second phpcbf script to automatically correct coding standard violations. PHP_CodeSniffer is an essential development tool that ensures your code remains clean and consistent.

### Index
* [Requirements](#requirements)
* [Installation](#installation)
* [Integrate with VS Code](#integrate-with-vs-code)

### Requirements
* PHP_CodeSniffer requires PHP version 5.4.0 or greater.
* Composer

### Installation
* Run following command to install PHP_CodeSniffer
```
composer global require "squizlabs/php_codesniffer=*"
```
* Setup `phpcs` and `phpcbf` path environement variable
	* To check what it's currently set to, you can use
    ```
    echo $PATH
    ```
    * This can be overrides for your user on multiple places. Most common would be a few hidden files on your home directory.
    ```
    .profile ( Works for me )
	.bashrc
	.bash_profile
    ```
    * Check above files which file include export statement.
    * Add below lines in one of them with
    ```
    # set PATH so it includes user's private bin directories
	PATH="$HOME/.config/composer/vendor/bin:$PATH"
    ```
    * Restart system
    * run
    ```
    phpcs --version
    ```
    Output
    ```
    PHP_CodeSniffer version 3.4.0 (stable) by Squiz 				(http://www.squiz.net)
    ```

### Integrate with VS Code
* Open VS code
* Install `phpcs` extention of VS Code
* Change extention settigs. Go to `File->Preferences->Settings`
* Select **PHP CodeSniffer** from left bar
* Change **PHP CodeSniffer Configuration** from right section.
	* Check Auto Config Search
    * Set Composer JSON Path ( Type `which composer` in terminal to get composer path )
    ```
    "phpcs.composerJsonPath": "/usr/local/bin/composer",
    ```
    * Check Enable
    * Error Severity : The minimum severity an error must have to be displayed. Use Default.
    * Executable Path : The path to the phpcs executable.
    ```
    /home/arif/.config/composer/vendor/bin/phpcs
    ```
    OR In Settings Json
    ```
    "phpcs.executablePath": "/home/arif/.config/composer/vendor/bin/phpcs",
    ```
    * Ignore Patterns : An array of glob patterns to skip files and folders that match when linting your documents.
    ```
    "phpcs.ignorePatterns": [
        "./vendor/*"
    ]
    ```
    * Check Show Sources
    * Check Show Warnings
    * Standard : Optional. The name or path of the coding standard to use. Defaults to the one set in phpcs global config.
    ```
    "phpcs.standard": "PSR2",
    ```
