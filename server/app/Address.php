<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = "address";

    /**
     * An address belongs to a person
     */
    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
