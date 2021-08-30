<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class LoginController extends Controller
{

    // Controller for Login, Logout and Registration only

        
    /**
     * Handle a registration attempt
     *
     * @param \Illuminate\Http\Request  $request
     * @return void \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $credentials = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'email' => ['required', 'email', 'unique:users', 'max:255'],
            'password' => [
                'required', 
                'string', 
                'confirmed',
                Password::default()
            ],
        ]);

        User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        $loginCredentials = [
            'email' => $credentials['email'],
            'password' => $credentials['password']
        ];

        if (Auth::attempt($loginCredentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back();
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
    
    /**
     * Check if user session is still valid
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function checkAuth(Request $request)
    {
        if(Auth::check()) {
            return response()->json(true, 200);
        }
        return response()->json(false, 401);
    }
}
