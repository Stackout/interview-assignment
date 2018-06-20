<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /**
     * An address belongs to a person
     */
    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
