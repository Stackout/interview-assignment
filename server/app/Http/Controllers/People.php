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
}
