<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Person::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $role = $this->faker->randomElement(['Kunde', 'Mitarbeiter', 'WoodMaster']);
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'address' => $this->faker->optional()->address,
            'phone' => $this->faker->optional()->phoneNumber,
            'company' => $this->faker->optional()->company,
            'role' => $role,
        ];
    }
}
