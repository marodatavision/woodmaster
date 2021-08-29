<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->realText,
            'comments' => $this->faker->optional()->text(300),
            'deadline' => $this->faker->optional()->date,
            'state' => $this->faker->randomFloat(2, 0, 1),
        ];
    }
}
