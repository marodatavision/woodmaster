<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWoodenLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wooden_logs', function (Blueprint $table) {
            $table->id();
            $table->string('vendor')->nullable();
            $table->string('forest')->nullable();
            $table->decimal('diameter');
            $table->decimal('length');
            $table->decimal('humidity');
            $table->string('quality');
            $table->string('tree_type');
            $table->string('shape');
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
        Schema::dropIfExists('wooden_logs');
    }
}
