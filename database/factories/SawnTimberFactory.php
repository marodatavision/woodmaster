<?php

namespace Database\Factories;

use App\Models\SawnTimber;
use Illuminate\Database\Eloquent\Factories\Factory;

class SawnTimberFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SawnTimber::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $quality_number = $this->faker->numberBetween(1, 5);
        return [
            'length' => $this->faker->randomFloat(2, 10, 800),
            'width' => $this->faker->randomFloat(2, 2, 80),
            'height' => $this->faker->randomFloat(2, 2, 80),
            'humidity'  => $this->faker->randomFloat(2, 0, 1),
            'quality'  => "Stufe $quality_number",
            'price' => $this->faker->randomFloat(2, 10, 1000),
        ];
    }
}
