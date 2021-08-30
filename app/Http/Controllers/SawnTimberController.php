<?php

namespace App\Http\Controllers;

use App\Models\SawnTimber;
use Illuminate\Http\Request;

class SawnTimberController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(SawnTimber::class, 'sawn_timber');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SawnTimber  $sawnTimber
     * @return \Illuminate\Http\Response
     */
    public function show(SawnTimber $sawnTimber)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SawnTimber  $sawnTimber
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SawnTimber $sawnTimber)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SawnTimber  $sawnTimber
     * @return \Illuminate\Http\Response
     */
    public function destroy(SawnTimber $sawnTimber)
    {
        //
    }
}
