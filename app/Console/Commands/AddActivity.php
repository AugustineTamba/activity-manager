<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AddActivity extends Command
{

    protected $signature = 'activity:add {name} {description?}';
    protected $description = 'Add a new activity';

    public function handle()
    {
        $activity = new \App\Models\Activity();
        $activity->name = $this->argument('name');
        $activity->description = $this->argument('description');
        $activity->save();

        $this->info('Activity added successfully!');
    }


}
