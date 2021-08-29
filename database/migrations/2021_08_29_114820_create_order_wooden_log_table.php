<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderWoodenLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_wooden_log', function (Blueprint $table) {
            $table->foreignId('order_id');
            $table->foreignId('wooden_log_id');
            $table->integer('count')->default(1);
            $table->primary(['order_id', 'wooden_log_id']);
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
        Schema::dropIfExists('order_wooden_log');
    }
}
