<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Person;
use App\Models\SawnTimber;
use App\Models\Storage;
use App\Models\WoodenLog;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        
        $people = Person::factory(20)->create();
        $stocks = Storage::factory(3)->create();
        $wood = WoodenLog::factory(200)->create();
        $timbers = SawnTimber::factory(400)->create();
        $orders = Order::factory(50)->create()->each(function($o) use ($faker, $people){
            // person <-> order relation
            $person = $faker->randomElement($people);
            $person->orders()->save($o);
        });
        // order <-> wood relation
        $this->setRelation($orders, $wood, 'woodenLogs', 30);
        // wood <-> timber relation
        $this->setRelation($timbers, $wood, 'woodenLogs', 300);
        // timber <-> stock relation
        $this->setRelation($stocks, $timbers, 'sawnTimbers', 300);
    }

    /**
     * Helper function to set Many-To-Many-Relations
     *
     * @param  Collection $firstCollection
     * @param  Collection $secondCollection
     * @param  string $relationName
     * @param  int $loopCount
     * @return void
     */
    protected function setRelation(Collection $firstCollection, Collection $secondCollection, string $relationName, int $loopCount)
    {
        $faker = Factory::create();
        for ($i=0; $i < $loopCount; $i++)
        {
            $randFirst = $faker->randomElement($firstCollection);
            $randSecond = $faker->randomElement($secondCollection);
            try {
                $randFirst->$relationName()->attach($randSecond->id, ['count' => $faker->numberBetween(1, 100)]);
            }
            catch (Exception $e) {

            }
        }
    }
}
