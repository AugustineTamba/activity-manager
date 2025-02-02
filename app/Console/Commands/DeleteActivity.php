<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DeleteActivity extends Command
{

    protected $signature = 'activity:delete {id}';
    protected $description = 'Delete an activity';

    public function handle()
    {
        $activity = \App\Models\Activity::find($this->argument('id'));
        if ($activity) {
            $activity->delete();
            $this->info('Activity deleted successfully!');
        } else {
            $this->error('Activity not found!');
        }
    }

}
