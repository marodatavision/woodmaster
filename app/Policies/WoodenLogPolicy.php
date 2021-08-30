<?php

namespace App\Policies;

use App\Models\User;
use App\Models\WoodenLog;
use Illuminate\Auth\Access\HandlesAuthorization;

class WoodenLogPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, WoodenLog $woodenLog)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->hasRole('editor') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, WoodenLog $woodenLog)
    {
        return $user->hasRole('editor') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, WoodenLog $woodenLog)
    {
        return $user->hasRole('editor') || $user->hasRole('admin');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, WoodenLog $woodenLog)
    {
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, WoodenLog $woodenLog)
    {
        return $user->hasRole('admin');
    }
}
