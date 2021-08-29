<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSawnTimbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sawn_timbers', function (Blueprint $table) {
            $table->id();
            $table->decimal('length');
            $table->decimal('width');
            $table->decimal('height');
            $table->decimal('humidity');
            $table->string('quality');
            $table->decimal('price')->nullable();
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
        Schema::dropIfExists('sawn_timbers');
    }
}
