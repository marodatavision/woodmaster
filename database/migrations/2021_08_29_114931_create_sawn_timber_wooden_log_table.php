<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSawnTimberWoodenLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sawn_timber_wooden_log', function (Blueprint $table) {
            $table->foreignId('sawn_timber_id');
            $table->foreignId('wooden_log_id');
            $table->integer('count')->default(1);
            $table->primary(['sawn_timber_id', 'wooden_log_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sawn_timber_wooden_log');
    }
}
