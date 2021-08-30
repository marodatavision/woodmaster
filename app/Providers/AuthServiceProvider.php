<?php

namespace App\Providers;

use App\Models\Order;
use App\Models\Person;
use App\Models\SawnTimber;
use App\Models\WoodenLog;
use App\Policies\OrderPolicy;
use App\Policies\PersonPolicy;
use App\Policies\SawnTimberPolicy;
use App\Policies\StoragePolicy;
use App\Policies\WoodenLogPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rules\Password;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Order::class => OrderPolicy::class,
        Person::class => PersonPolicy::class,
        SawnTimber::class => SawnTimberPolicy::class,
        Storage::class => StoragePolicy::class,
        WoodenLog::class => WoodenLogPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Password::defaults(function () {
            $rule = Password::min(8);
    
            return $this->app->isProduction()
                        ? $rule->letters()
                        ->mixedCase()
                        ->numbers()
                        ->symbols()
                        ->uncompromised()
                        : $rule;
        });
    }
}
