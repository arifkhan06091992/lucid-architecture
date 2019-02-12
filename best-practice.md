# Laravel Best Practices

#####  Follow the Standards
You should follow the PSR-2 and PSR-4 coding standards.

#####  Artisan Command Line Interface
aravel has its own command line interface known as Artisan. It uses the Symfony Console component as its foundation. It provides various helpful commands to speed up the application development process. Here the best practice is to always use Artisan CLI as it increases the productivity of the development process.

Artisan commands are also helpful in task scheduling task and triggering action(s) on the occurrence of an event. For example, you can fire an Artisan command from an HTTP route by using Artisan facade:

Following are several helpful Artisan commands that speed up the Laravel application development process:

* php artisan config:cache
: This command cache the config of bootstrap loading phase.It helps in limiting IO request. It needs to be re-run every time you change or add anything in the config directory. This command is  usually helpful if you have a lot of config files or packages.

* php artisan route:cache
: This command does the same thing but for the routes. It helps reduce the time required for the computation of routes. This command needs to be rerun after you change any routes. Also, keep in mind that you cannot use this command if you have any closure based routes.

* php artisan optimize
: This command optimizes the autoloader and compiles all your views.

#####  Debugging
Laravel does comes with it’s own debugging component. However, it’s a good practice to use debugging packages like [Laravel Debugbar](https://laravel.io/forum/02-04-2014-package-laravel-debugbar) as they provide you tons of good information for optimizing your application by including a ServiceProvider to register the debugbar and attach it to the output .

![alt text](https://www.cloudways.com/blog/wp-content/uploads/Laravel-1.png "laravel-debugbar")

You can also use testing and debugging tool like [Laravel Dusk](https://www.cloudways.com/blog/laravel-dusk-testing-todo-app/), a browser automation testing tool perfect for browser testing applications and API. It uses ChromeDriver by default but you can use any Selenium compatible drivers.

#####  Eloquent ORM
The Eloquent ORM is a Laravel feature that provides elegant ActiveRecord implementation for working with your database. The best practice for working properly with the Eloquent ORM is to take care of the naming convention of your model.

In the Eloquent ORM, each database table has a model. These models are used to interact with the database and perform various operations. It works on a principle that, for a table named users, Laravel expects a model with the name User.  It is very important that you follow this convention to avoid Eloquent related problems.

#####  Storing Relationships in Variables
Try to reduce the relationship calls as much as possible.

Suppose that `$user->posts;` is called five times in the code. This will result in a massive number of unnecessary database calls, and consequently will slow down your application. The right way to deal with it is to store the result of this call in a variable such as `$posts = $user->posts;` and then use $posts in the code.

#####  Avoid N+1 queries
This is when you query for relations inside of a loop (something like the following):
```
@foreach($comments as $comment)
    {{ $comment->author->name }}
@endforeach
```

If you didn’t load the author relation when you queried for comments, you’ll end up making N queries for each comment’s author. You’d solve this by doing this first:
```
$comments = Comment::with('author')->get();
```

##### Take Care of Eloquent Relation Caching
Consider the following example:
```
class Comment extends Model
{
     public function author()
     {
          return $this->belongsTo(Author::class);
     }
}
```
If you were to do this (make several calls to the author relation in the same page request)
```
$comment->author;
$comment->author;
$comment->author;
$comment->author;
```
It will actually query the author once, rather than 4 times. Because once it queries the relation, it will stores it in the cache for that request and use it whenever it will be called.

However, if you do this:
```
{
     public function comments()
     {
          return $this->hasMany(Comment::class);
     }

     public function getTopComments($count = 5)
     {
          return $this->comments()
                           ->where('likes', '>', 10)
                           ->take($count)
                           ->get();
     }
}


$author->getTopComments();
$author->getTopComments();
$author->getTopComments();
$author->getTopComments();
```

Then there will be 4 separate queries, even though they were all called with the same argument. Every time you call comments() relation method like a function rather than a property, you’re generating a new query. This costs your application a whole lot of performance overheads.

#####  Use Of Autoload
In Laravel, you can use any class or even plain PHP code, as long as it could be autoloaded.This improves the performance of the scripts by preventing PHP from checking if the file is already been loaded or not. In addition, you don’t need to include the file every time you need it in your code. PHP will let you know if it is needed when it is needed.

#####  Use Of Migrations
Laravel Migrations is a wonderful feature which provides version controlling for your database. It allows your team to easily modify and share the application’s database schema. Migrations are typically paired with Laravel’s schema builder to easily build your application’s database schema.

Always use Laravel Migrations to create database(s) rather than doing it manually. This will reduce your workload considerably.

#####  Choose The Right Database ( Multiple Type Database )
Eloquent supports multiple databases, and thus there is no need to limit yourself to `MySQL` only. Use `MongoDB` for records that have highly variable attributes. Use `ElasticSearch` for high volume data search and indexing. Use `Neo4J` for applications that requires a complex relationships between models. Choosing the right database is a very important best practice that usually pays great dividends for your applications.

######  Configuration
* php artisan key:generate
: Always give your application a name. That is, instead of using the default app root namespace given by the Laravel install, set it to what the application is all about. This can be set via

* php artisan app:name YourAppName
: This makes your controllers/models etc resolve into YourAppName\Controllers and YourAppName\Models.


## For More Best Practice of Laravel checkout below links
* https://github.com/alexeymezenin/laravel-best-practices
* http://www.laravelbestpractices.com/



