<?php

namespace Database\Factories;

use App\Models\Storage;
use Illuminate\Database\Eloquent\Factories\Factory;

class StorageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Storage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $rack_number = $this->faker->optional()->numberBetween(1, 3);
        $shelf_number = $rack_number ? $this->faker->optional()->numberBetween(1, 5) : null;
        return [
            'location' => $this->faker->randomElement(['Heuboden', 'Dieselraum', 'Scheune', 'Holzplatz']),
            'rack' => $rack_number ? "Regal $rack_number" : null,
            'shelf_position' => $shelf_number ? "Position $shelf_number" : null
        ];
    }
}
