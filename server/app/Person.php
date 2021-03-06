<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Person extends Model
{
    
    /**
     * All people have many colleague connections.
     */
    public function colleagues(){

        return $this->belongsToMany(Person::class, 'work_connection', 'person_id', 'colleague_id');

    }

    /**
     * All People have an address
     */
    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    /**
     * Generate Gravatar Url
     */
    public function gravatarUrl()
    {
        return 'http://www.gravatar.com/avatar/'.md5($this->email);
    }
}
