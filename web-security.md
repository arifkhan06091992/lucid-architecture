## Laravel / PHP Security Pointers

##### 1. SQL injection

SQL injection is a kind of attack that malicious users enter SQL in form fields in a way that affects the execution of SQL statements.


* Laravel SQL injection Prevention
: Laravel’s Eloquent ORM uses PDO binding that protects from SQL injections. This feature ensures that no client could modify the intent of the SQL queries.


Developers, however still opt for raw SQL for various reasons.

If this is the case with you, you should always use well prepared SQL queries to prevent mishaps. Consider the following statement that looks ripe for SQL injection:

```
DB::raw("SELECT * FROM users WHERE name = ?", [$name]));
```

##### 2. XSS (Cross Site Scripting)

During XSS attacks, the attacker enters JavaScript (usually into a form’s text areas) into your website.
Now, whenever new visitors will access the affected page of form, the script will be executed with malicious impact.

* Laravel XSS Prevention
: In Laravel versions greater than 5.1, this is done by default when using double braces in the templates.
```
<div>{{ $task->names }}</div>
```
 it’s possible to tell Laravel not to escape the output:
```
<div>{!! $task->names !!}</div>
```



##### 3. Cross Site Request Forgeries (CSRF)


CSRF refers to a request for a page that looks like it was initated by a site's trusted users, but wasn't deliberately.

* Laravel CSRF Prevention
: Laravel typically uses CSRF tokens to make sure that external third parties couldn’t generate fake requests and should not breach the Laravel security vulnerabilities.
So We have to append a CSRF Token with every request of laravel.
```
<form name="test">
{!! csrf_field() !!}
<!-- Other inputs can come here-->
</form>
```

##### 4. Session Fixation
Session Fixation is an attack that permits an attacker to hijack a valid user session.
The attack explores a limitation in the way the web application manages the session ID, more specifically the vulnerable web application.
When authenticating a user, it doesn’t assign a new session ID, making it possible to use an existent session ID.
The attack consists of obtaining a valid session ID (e.g. by connecting to the application), inducing a user to authenticate himself with that session ID, and then hijacking the user-validated session by the knowledge of the used session ID.
The attacker has to provide a legitimate Web application session ID and try to make the victim's browser use it.

* Laravel Session Fixation Prevention
: When authenticating a user, assign a new session ID.
We have to call `Session::regenerate()` from the Auth login function easy enough probably.

*  Always user SSL


##### 5. Clickjacking
This attack type tries to make you click where you didn’t wanted. For example by placing invisible Facebook like button on top of other button.

Another example would be to open Facebook in `<iframe>` and position this iframe with JavaScript so whenever you click somewhere, you will always click on on share button on Facebook page.

##### 6. ZIP bomb
Some websites allow to upload files in .zip archive. After that they extract .zip archive and do something with those files. But there is a catch.

It is possible to make .zip archive that just takes 42 KB and when extracted it will take 4718592 GB of space. Think of this file as a nuclear bomb.


##### 7. `file_get_contents()`
It is an easy to use function to get content of a file:

`echo file_get_contents('https://some-website.com/friend-list.txt');`
But if you let attacker to enter what he wants, he can enter file name from your server, example:
```
echo file_get_contents('.env');
OR
echo file_get_contents('secret-code.php');
```
This function will read file from your server and will display it’s content to the attacker.

##### 8. Double form submission
User can double click on the form submit button and your PHP script will be executed twice. Sometimes this can rezult in nasty bugs.

##### 9. Secure Your HTML and javascript content.
* https://github.com/spatie/laravel-csp
    * https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    * https://www.laraning.com/videos/spatie-csp-content-security-policy