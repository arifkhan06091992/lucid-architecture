1. Install JWT-Auth

    `composer require tymon/jwt-auth:dev-develop --prefer-source`
2. Publish the config file for JWT

    `php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"`

    OutPut
    `Copied File [/vendor/tymon/jwt-auth/config/config.php] To [/config/jwt.php]
     Publishing complete.`

3. Set the jwt-auth secret in .env file

    `php artisan jwt:secret`

4. Set Lucid path in environment

    `export PATH="./vendor/bin:$PATH"`

5. Create Authentication service

    `lucid make:service authentication`

    * Register `Authentication` service
        * Open `src/Foundation/Providers/ServiceProvider`
        * Add `use App\Services\Authentication\Providers\AuthenticationServiceProvider`
        * In the register method add `$this->app->register(AuthenticationServiceProvider::class)`


6. Create a `users` table migration.

    `lucid make:migration create_user_table Authentication`

7. Create a `User` model.

    `lucid make:model User`

8. Change User Model According to JWT

    ```
    <?php

    namespace App;

    use Illuminate\Notifications\Notifiable;
    use Illuminate\Contracts\Auth\MustVerifyEmail;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Tymon\JWTAuth\Contracts\JWTSubject;

    class User extends Authenticatable implements JWTSubject
    {
        use Notifiable;

        /**
         * The attributes that are mass assignable.
         *
         * @var array
         */
        protected $fillable = [
            'name', 'email', 'password',
        ];

        /**
         * The attributes that should be hidden for arrays.
         *
         * @var array
         */
        protected $hidden = [
            'password', 'remember_token',
        ];

        /**
         * Get the identifier that will be stored in the subject claim of the JWT.
         *
         * @return mixed
         */
        public function getJWTIdentifier()
        {
            return $this->getKey();
        }

        /**
         * Return a key value array, containing any custom claims to be added to the JWT.
         *
         * @return array
         */
        public function getJWTCustomClaims()
        {
            return [];
        }
    }
    ```

9. Run Migration from default migration folder

10. Add Users using factory

    ```
    $users = factory(\App\Data\User::class, 3)->create();
    return $users;
    ```

11. Set `guard` in `config/auth.php`

    ```
     'guards' => [
            'web' => [
                'driver' => 'session',
                'provider' => 'users',
            ],

            'api' => [
                'driver' => 'jwt',
                'provider' => 'users',
            ],
        ],
    ```

12. Create a middleware

    `php artisan make:middleware ApiAuthMiddleware`

    ```
    public function handle($request, Closure $next, $guard = null)
        {
            // Check if request Web
            if (!$request->ajax() && !$request->wantsJson())
            {
                $request->headers->set('Authorization', 'Bearer ' . session('jwt_token'));
            }

            if (Auth::guard($guard)->guest())
            {
                if ($request->ajax() || $request->wantsJson())
                {
                    return response(['errorCode'=>'UnAuthorize'], 401);
                }
                else
                {
                    return redirect()->guest('/');
                }
            }
            return $next($request);
        }
    ```

13. Add Middleware in `App\Http\Kernel` `$routemiddleware` group.

    `'auth.api' => \Framework\Http\Middleware\ApiAuthMiddleware::class`

14. Use in routes
