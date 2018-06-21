<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use App\Person;

class People extends Controller
{
    /**
     * List people
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        // Get all People
        $people = Person::all();

        return view('people.index')->with('people', $people);
    }

    /**
     * Show person
     *
     * @param Request $request
     * @param string  $id
     * @return mixed
     */
    public function show(Request $request, $id)
    {
        // Show one person
        $person = Person::findOrFail($id);
        return view('people.show')->with('person', $person);
    }

    /**
     * List People
     * 
     * @param Request $request
     * @return Json
     */
    public function all(Request $request){

        // Being laravel 5.4, we are unable to use the new functionality in laravel for 'json resources'
        // So we are forced to generate the Json objects the old way.
        $people = Person::all();

        $data = [];
        foreach($people as $person){
            $data[] = [
                'id' => (string)$person->id,
                'firstName' => $person->first_name,
                'lastName' => $person->last_name,
                'email' => $person->email,
                'gravatarUrl' => $person->gravatarUrl(), // Generate Gravatar URL
            ];
        }
        return response()->json($data, 200);
    }

    /**
     * List People
     * 
     * @param Request $request
     * @param string $id
     * @return JsonResponse
     */
    public function getSingle(Request $request, $id){

        // Being laravel 5.4, we are unable to use the new functionality in laravel for 'json resources'
        // So we are forced to generate the Json objects in a different manner
        $person = Person::find($id);

        $cIds = [];
        // List out Colleague Ids in an Array
        if(count($person->colleagues) > 0){
            foreach($person->colleagues as $coll)
                $cIds[] = (string)$coll->id;
        }
        
        // Structure the API Data
        $data[] = [
            'id' => (string)$person->id,
            'firstName' => $person->first_name,
            'lastName' => $person->last_name,
            'email' => $person->email,
            'gravatarUrl' => $person->gravatarUrl(), // Generate Gravatar URL
            'address' => ($person->address) ? ([
                'id' => (string)$person->address->id,
                'street' => $person->address->street,
                'city' => $person->address->city,
                'state' => $person->address->state,
                'postalCode' => $person->address->postal_code,
            ]) : null,
            'colleagueIds' => $cIds
        ];

        return response()->json($data, 200);
    }

}
