<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSawnTimberStorageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sawn_timber_storage', function (Blueprint $table) {
            $table->foreignId('storage_id');
            $table->foreignId('sawn_timber_id');
            $table->integer('count')->default(1);
            $table->primary(['storage_id', 'sawn_timber_id']);
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
        Schema::dropIfExists('sawn_timber_storage');
    }
}
