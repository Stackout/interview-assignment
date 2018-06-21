<?php

use Illuminate\Database\Seeder;

class WorkConnectionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate 50 Colleague Connections
        for($i = 0; $i < 50; $i++){
            $user_id = rand(1, 15);
            $colleague_id = rand(1, 15);

            // If ID's are not equal, assign the colleague
            if($user_id != $colleague_id){
                DB::table('work_connection')->insert([
                    'colleague_id' => rand(1,15),
                    'person_id' => rand(1,15),
                ]);
            }



        }

    }
}
