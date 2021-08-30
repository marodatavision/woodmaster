<?php

namespace App\Http\Controllers;

use App\Models\WoodenLog;
use Illuminate\Http\Request;

class WoodenLogController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(WoodenLog::class, 'wooden_log');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $woodenLogs = WoodenLog::orderBy('updated_at', 'desc')->pagiate(10);
        return response()->json($woodenLogs, 200);
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
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Http\Response
     */
    public function show(WoodenLog $woodenLog)
    {
        return response()->json($woodenLog, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WoodenLog $woodenLog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WoodenLog  $woodenLog
     * @return \Illuminate\Http\Response
     */
    public function destroy(WoodenLog $woodenLog)
    {
        //
    }
}
