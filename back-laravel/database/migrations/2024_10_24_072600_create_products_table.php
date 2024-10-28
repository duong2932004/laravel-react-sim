<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('start_number_id');
            $table->foreign('start_number_id')->references('id')->on('start_numbers')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('mobile_networks_id');
            $table->foreign('mobile_networks_id')->references('id')->on('mobile_networks')->onUpdate('cascade')->onDelete('cascade');
            $table->string('number')->unique();
            $table->bigInteger('price');
            $table->integer('quantity');
            $table->string('describe');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
