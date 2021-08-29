<?php

namespace Database\Factories;

use App\Models\WoodenLog;
use Illuminate\Database\Eloquent\Factories\Factory;

class WoodenLogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = WoodenLog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $forest_city = $this->faker->optional()->city;
        $quality_number = $this->faker->numberBetween(1, 5);
        $shape_number = $this->faker->numberBetween(1, 5);
        return [
            'vendor' => $this->faker->optional()->company,
            'forest' => $forest_city ? "$forest_city Forst" : null,
            'diameter' => $this->faker->randomFloat(2, 10, 90),
            'length' => $this->faker->randomFloat(2, 100, 800),
            'humidity' => $this->faker->randomFloat(2, 0, 1),
            'quality' => "Stufe $quality_number",
            'tree_type' => $this->faker->randomElement(['Buche', 'Eiche', 'Esche', 'Erle', 'Kiefer', 'Lärche', 'Fichte', 'Tanne', 'Nuss', 'Apfel', 'Kirsche', 'Birne']),
            'shape' => "Form $shape_number",
        ];
    }
}
